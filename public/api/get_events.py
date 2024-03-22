import json
from boto3 import *
from boto3.dynamodb.conditions import Key, Attr
from boto3.dynamodb.types import TypeDeserializer

def lambda_handler(event, context):
    query = event.get('queryStringParameters')
    if query is None:
        query = {}
    data, code = get_events(query)
    
    # Only return the sent data in the body if creation was successful
    if (code == 200):
        body = json.dumps(data)
    else:
        body = None
    print(body)
    response = {
     "statusCode": code,
     "headers": {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : "true",
        "Content-Type": "application/json"
        },
        "body": body
    }
 
    return response

def get_events(query):
    # Table specific info. Be sure to update region and table name if necessary
    dynamodb = resource('dynamodb', region_name = 'us-east-1')
    table = dynamodb.Table('events')
    filter = query.get('filter')
    if filter is not None:
        filter = Attr('description').contains(filter)
    id = query.get('id')
    if id is not None:
        id = Key('id').eq(id)
        try:
            response = table.get_item(
                Key={"id": {'N': id}}
            )
            data = response['Item']
            data = from_dynamodb_to_json(data)
     
            code = response['ResponseMetadata']['HTTPStatusCode']
        except KeyError as e:
            print("Invalid parameters")
            print(e)
            return None, 400
        except Exception as e:
            print(e)
            return None, 500
    else:
        try:
            if(filter is not None):
                response = table.scan(FilterExpression=filter)
            else:
                response = table.scan()
            data = response['Items']
    
            while response.get('LastEvaluatedKey'):
                if query is None:
                    response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
                else:
                    if filter is not None:
                        response = table.scan(FilterExpression=filter, ExclusiveStartKey=response['LastEvaluatedKey'])
                    else:
                        response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
                data.extend(response['Items'])
            print(data)
            data = {"Items": [from_dynamodb_to_json(i) for i in data]}
     
            code = response['ResponseMetadata']['HTTPStatusCode']
        except KeyError as e:
            print("Invalid parameters")
            print(e)
            return None, 400
        except Exception as e:
            print(e)
            return None, 500
 
   # Return codes for the front end
    if (code == 200):
        print("Product successfully created")
        return data, 200
    else:
        print("Error creating product")
        return None, 500
       
def from_dynamodb_to_json(item):
    d = TypeDeserializer()
    return {k: d.deserialize(value=v) for k, v in item.items()}
