import React from 'react';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {SiHashnode} from 'react-icons/si';
import {FiSend} from 'react-icons/fi';
import './footer.css';


function Footer({load}) {

  return (
    <>
      <footer className="footer">
        <div className="footer-icons">
          <a
            href="https://github.com/Mayur-Arde"
            target="_blank"
            rel="noreferrer"
            alt="Github"
          >
            <FaGithub className="" />
          </a>
          <a
            href="https://www.linkedin.com/in/mayur-arde/"
            target="_blank"
            rel="noreferrer"
            alt="linkedin"
          >
            <FaLinkedin className="" />
          </a>
          <a
            href="https://www.instagram.com/mayur.arde_/"
            target="_blank"
            rel="noreferrer"
            alt="Instagram"
          >
            <FaInstagram className="" />
          </a>
          <a
            href="https://hashnode.com/@devmayur"
            target="_blank"
            rel="noreferrer"
            alt="Hashnode"
          >
            <SiHashnode className="" />
          </a>
          <a
            href="mailto: mayurarde8@gmail.com"
            target="_blank"
            rel="noreferrer"
            alt="Mail"
          >
            <FiSend className="" />
          </a>
        </div>
        <hr width="100%" />
        <p>Made with ❤️ by Mayur Arde 🧑‍💻</p>
        <p className="copyright">©MayurArde</p>
      </footer>
    </>
  );
}

export default Footer;
