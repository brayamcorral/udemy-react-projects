// 6:20
import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src= {logo} alt="logo"/>
        <button className="nav-toggle">
          <FaBars />
        </button>
      </div>
      <div className="links-container show-container">
        {links.map((link) => {
          const {id, url, text} = link;
          return (<li key={id}>
            <a href = {url}>{text}</a>
          </li>
          );
        })}
      </div>
      <ul className = 'social-icons'>
        <li>
          <a href = "https;//www.twitter.com/">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href = "https;//www.twitter.com/">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href = "https;//www.twitter.com/">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
