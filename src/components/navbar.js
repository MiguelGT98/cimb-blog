import React from 'react'

import 'bulma/css/bulma.css'

import './navbar.css';

function navbar() {
    return (
        <nav className="navbar">
            <div class="navbar-brand">
                <a class="navbar-item" href="./index.html"><img id="logo-cimb" src="http://cimb.com.mx/img/logos/logo-cimb.png" /></a>
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
                    <a class="navbar-item" href="http://cimb.com.mx/">
                        Inicio
                    </a>
                    <a class="navbar-item" href="http://cimb.com.mx/proyectos/index.html">
                        Proyectos
                    </a>
                    <a class="navbar-item" href="http://cimb.com.mx/videos/index.html">
                        Videos
                    </a>
                    <a class="navbar-item" href="http://cimb.com.mx/divulgacion/index.html">
                        Divulgación
                    </a>
                    <a class="navbar-item" href="http://cimb.com.mx/equipo/index.html">
                        Equipo de Investigación
                    </a>
                    <a class="navbar-item" href="http://cimb.com.mx/contacto/index.html">
                        Contacto
                    </a>
                    <a class="navbar-item" href="http://cimb.com.mx/index-eng.html">
                        Eng/Esp</a>
                </div>
            </div>
        </nav>

    )
}

export default navbar
