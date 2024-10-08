import React from "react";
import { Github, Linkedin, Mail, Menu, X, Code, Layout, Zap } from 'lucide-react'
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
            // padding: '10px',
          }}
        >
      <footer className="bg-black bg-opacity-50 mt-16 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; 2024 Your Name. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
        // <div
        //   style={{
        //     position: 'fixed',
        //     bottom: 0,
        //     width: '100%',
        //     color: '#fff',        
        //     textAlign: 'center',
        //     padding: '10px',
        //   }}
        // >
            
        //   <p variant="body2" component="p" class="bottom-0 text-xl font-bold p-4">
        //   Made with ❤ by Maleeha Kaikaus
        //   </p>
        // </div>
      );
}

export default Footer;


