import React from 'react'

import 'bulma/css/bulma.css'
import './navbar.css';

import $ from 'jquery';

import {Link} from 'gatsby'

class navbar extends React.Component {

  componentDidMount(){
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render(){
    return (
        <nav className="navbar">
            <div class="navbar-brand">
            <Link class="navbar-item" to="/index.html"><img id="logo-cimb" src="http://cimb.com.mx/img/logos/logo-cimb.png" /></Link>
                <div class="navbar-burger burger" data-target="mainNav">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="mainNav" class="navbar-menu">
                <div class="navbar-start">

                </div>
                <div class="navbar-end">
                    <Link class="navbar-item" to="/">
                        Inicio
                    </Link>
                    <Link class="navbar-item" to="/proyectos/">
                        Proyectos
                    </Link>
                    <Link class="navbar-item" to="/videos/">
                        Videos
                    </Link>
                    <Link class="navbar-item" to="/divulgacion/">
                        Divulgación
                    </Link>
                    <Link class="navbar-item" to="/equipo/">
                        Equipo de Investigación
                    </Link>
                    <Link class="navbar-item" to="/contacto/">
                        Contacto
                    </Link>
                    <Link class="navbar-item" to="/blog/">
                        Blog
                    </Link>
                    <Link class="navbar-item" to="/index-eng.html">
                        Eng/Esp</Link>
                </div>
            </div>
        </nav>

    )
  }
}

export default navbar
