import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="flex bg-transparent align-middle justify-between items-center  opacity-90 sticky top-0 z-50">
          <a href="/">
            <h1 className="text-3xl font-bold text-white">Manav Joshi</h1>
          </a>
          <div className="flex align-middle justify-end p-4 ml-auto space-x-10 text-lg font-semibold text-white">
            <a href="#About" className="hover:text-red-400">
              About Us
            </a>
            <a href="/" className="hover:text-red-400">
              Work
            </a>
            <a href="/" className="hover:text-red-400">
              Brands
            </a>
            <a href="/" className="hover:text-red-400">
              Gallery
            </a>
            <a href="http://wa.me/+919925978977" className="text-red-500">
              Let's Connect
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
