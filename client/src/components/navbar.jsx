import React from 'react'
import ubox from '../assets/ubox.jpg'
import lppm from '../assets/LPPM.png'
import {
    Link,
} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar is-success" role="navigation" aria-label="main navigation" style={{ position: 'sticky', top: 0 }}>
            <div className="navbar-item">
                <figure className="image is-32x32">
                    <img src={ubox} className="image is-32x32" alt="ubox"/>
                </figure>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item"><p>Home</p></Link>
                    <Link to="/news" className="navbar-item"><p>Berita</p></Link>
                    <Link to="/materi" className="navbar-item"><p>Materi</p></Link>
                    <Link to="/legalitas" className="navbar-item"><p>Legalitas</p></Link>
                    <Link to="/about" className="navbar-item"><p>Tentang Kami</p></Link>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <figure width="150">
                        <img src={lppm} alt="LPPM"/>
                    </figure>
                </div>
            </div>
        </nav>
    )
}
