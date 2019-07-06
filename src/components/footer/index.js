import React from 'react'

import {Link} from 'gatsby'

import 'bulma/css/bulma.css'

import './index.css';

function index() {
    return (
        <div>
            <footer>
                <div class="footer-left">
                    <a href="https://tec.mx/es" target="_blank"><img src="http://cimb.com.mx/img/logos/logo-tec-largo.png" /></a>
                    <Link to="/index.html"><img src="http://cimb.com.mx/img/logos/logo-cimb.png" /></Link>
                </div>
                <div class="footer-center">
                    <h3>Mapa del sitio</h3>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/proyectos/">Proyectos</Link></li>
                        <li><Link to="/videos/">Videos</Link></li>
                        <li><Link to="/divulgacion/">Divulgación</Link></li>
                        <li><Link to="/equipo/">Equipo de investigación</Link></li>
                        <li><Link to="/contacto/">Contacto</Link></li>
                        <li><Link to="/blog/">Blog</Link></li>
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
