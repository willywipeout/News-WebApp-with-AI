import React from "react"
import {Link} from "react-router-dom"

function Nav({editor}) {

    const userRole = localStorage.getItem('userRole');
	return(
       <nav>
        <div className="container">
            <div className="logo">
                <i className="fas fa-globe fa-3x"></i>
                <h1>News<span>Grid</span></h1>
            </div>

            <div className="social">
                <a href="https://web.facebook.com/" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube fa-2x"></i></a>
            </div>

            <div className="options">
                <Link to="/" className="current">Home</Link>
                 <Link to="./Archives">Archives</Link>
                <Link to="./AboutUs">About</Link>
                {userRole === 'editor' && (
                   <>
                     <Link to="./Stories">Stories</Link>
                     <Link to="./AddStory">Add Story</Link>
                   </>
                )}
            </div>
        </div>
    </nav>
	)
}

export default Nav 