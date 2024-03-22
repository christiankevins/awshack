import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../../components";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white p-4">
      <div className="flex flex-row gap-4">
        <Heading size="xl" as="h2" className="!text-white-A700">
          <Link to="/">Home</Link>
        </Heading>
        <Heading size="xl" as="h2" className="!text-white-A700">
          <Link to="/Events">Event</Link>
        </Heading>
        <Heading size="xl" as="h2" className="!text-white-A700">
          <Link to="/Settings">Profile</Link>
        </Heading>
      </div>
      <div>
        {/* Add any additional navbar elements such as user profile, settings, etc. */}
      </div>
    </nav>
  );
};

export default Navbar;
  