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
            color: '#fff',        
            textAlign: 'center',
            padding: '10px',
          }}
        >
            
          <p variant="body2" component="p" class="bottom-0 text-xl font-bold p-4">
          Made with ❤ by Maleeha Kaikaus
          </p>
        </div>
      );
}

export default Footer;


