import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/20 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-semibold">InventoryPro</h2>
          <p className="text-gray-300 mt-2">Efficient Inventory Management, Simplified.</p>
          <p className="text-sm text-gray-400 mt-4">© {new Date().getFullYear()} InventoryPro. All rights reserved.</p>
        </div>

     
        <div>
          <h3 className="text-lg font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><button type="button" className="text-gray-300 hover:text-white">Dashboard</button></li>
            <li><button type="button" className="text-gray-300 hover:text-white">Products</button></li>
            <li><button type="button" className="text-gray-300 hover:text-white">Reports</button></li>
            <li><button type="button" className="text-gray-300 hover:text-white">Settings</button></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-medium mb-3">Contact Us</h3>
          <p className="text-gray-300">Email: support@inventorypro.com</p>
          <p className="text-gray-300">Phone: 022-338-983-902</p>
          <p className="text-gray-300">Address: 123 Inventory St, Tech City</p>

   
          <div className="flex space-x-4 mt-4">
            <button type="button" aria-label="Facebook" className="text-gray-300 hover:text-white text-xl"><FaFacebook /></button>
            <button type="button" aria-label="Twitter" className="text-gray-300 hover:text-white text-xl"><FaTwitter /></button>
            <button type="button" aria-label="LinkedIn" className="text-gray-300 hover:text-white text-xl"><FaLinkedin /></button>
            <button type="button" aria-label="Instagram" className="text-gray-300 hover:text-white text-xl"><FaInstagram /></button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
