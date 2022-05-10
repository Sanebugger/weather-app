import React from 'react'
import './Navbar.css'
import { IoExpandOutline } from "react-icons/io5";
import { FcViewDetails } from "react-icons/fc";
import {IoMdCloudyNight} from "react-icons/io";

import { Link } from 'react-router-dom';
import {FaAutoprefixer} from "react-icons/fa";

export default function
  () {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container ">
    <Link class="navbar-brand " to="/"><IoMdCloudyNight size={'2em'} color={'#0d6efd'} /> WEATHER  APP</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/more">More</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
