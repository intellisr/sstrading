import { Link } from "gatsby";
import React from "react";
import plogo from "../images/main_logo.png";

const Footer = () => {
  return (
    <footer className="bg-red text-gray-200 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <img className="h-20 mb-4 backdrop-blur-sm bg-white/80 rounded-xl p-2" src={plogo} alt="Company Logo" />
          <p className="text-center md:text-left">
            Fruit & Veggie Export Company<br />
            Sri Lanka to U.A.E<br />
            <a href="tel:+971526950454" className="text-yellow-400 hover:underline">
              +971526950454
            </a>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-yellow-400">
                Our Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          {/* Social Media Icons */}
          <div className="flex mt-5 space-x-4 bg-white/80 rounded-xl p-2">
                <a
                  href="https://www.facebook.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube"
                    className="w-20 h-10"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
                    alt="TikTok"
                    className="w-20 h-10"
                  />
                </a>
              </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Fruit & Veggie Export Company. All Rights Reserved.
          </p>
          <p className="text-sm">
            Powered by{" "}
            <a href="#" className="text-yellow-400 hover:underline">
              INTELLISR & TECHCD STUDIOS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;