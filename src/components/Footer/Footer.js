import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button"
// import Socials from "../Socials"

function Footer() {
    return (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: '#000', // Black
            color: '#fff',           // White
            textAlign: 'center',
            padding: '10px',
          }}
        >
            <div class="w-full text-5xl font-bold">
                <h1 class="w-full md:w-2/3">How can we help you. get
                    in touch</h1>
            </div>
            <div class="flex mt-8 flex-col md:flex-row md:justify-between">
                {/* <p class="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p> */}
                <div class="w-44 pt-6 md:pt-0">
                    <a class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
                </div>
            </div>
          <p variant="body2" component="p">
            © 2024 Maleeha Kaikaus. All rights reserved.
          </p>
        </div>
      );
}

export default Footer;


