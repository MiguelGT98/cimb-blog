import React from 'react'

import 'bulma/css/bulma.css'

import './index.css';

function index() {
    return (
        <div>
            <footer>
                <div class="footer-left">
                    <a href="https://tec.mx/es" target="_blank"><img src="http://cimb.com.mx/img/logos/logo-tec-largo.png" /></a>
                    <a href="../index.html"><img src="http://cimb.com.mx/img/logos/logo-cimb.png" /></a>
                </div>
                <div class="footer-center">
                    <h3>Mapa del sitio</h3>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/proyectos/">Proyectos</a></li>
                        <li><a href="/videos/">Videos</a></li>
                        <li><a href="/divulgacion/">Divulgación</a></li>
                        <li><a href="/equipo/">Equipo de investigación</a></li>
                        <li><a href="/contacto/">Contacto</a></li>
                        <li><a href="/blog/">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-right">
                    <h3>Contacto</h3>
                    <ul>
                        <li>Calle del Puente #222 Col. Ejidos de Huipulco, Tlalpan C.P. 14380, México D.F.</li>
                        <li><a>Dr. Martín Rogelio Bustamante Bello</a></li>
                        <li><a>Cel: 553075 1447</a></li>
                        <li><a>Correo: rbustama@itesm.mx</a></li>
                        <li class="contact-socials">
                            <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-square"></i></a>
                            <a href="https://www.researchgate.net/profile/Rogelio_Bustamante-Bello" target="_blank"><i class="fab fa-researchgate"></i></a>
                        </li>
                    </ul>
                </div>
            </footer>
            <p class="trademark">Instituto Tecnológico y de Estudios Superiores de Monterrey. México 2018.</p>
        </div>
    )
}

export default index
