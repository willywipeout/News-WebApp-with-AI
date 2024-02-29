import React,{useEffect,useState} from "react"
import {Link} from "react-router-dom"
import "./style.css"

function Footer(){
	return(
       <footer>
        <div className="container">
            <div className="footer">
                <article>
                    <div className="logo">
                        <i className="fas fa-globe fa-2x"></i>
                        <h2>News<span>Grid</span></h2>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                        deserunt assumenda enim non? Ratione ipsum voluptates fuga eos
                        earum vitae.
                    </p>
                </article>

                <article>
                    <h4>EMAIL NEWSLETTER</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <input type="email" placeholder="Enter Email..." />
                    <a href="#"> Subscribe</a>
                </article>

                <article>
                    <Link to="./Login"><h4>Add article</h4></Link>
                    <p>Help & Support</p>
                    <p>Privacy Policy</p>
                    <p>About Us</p>
                    <p>Contact</p>
                </article>

                <article>
                    <h4>JOIN OUR CLUB</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati, maiores!
                    </p>
                    <a href="#">Join Now</a>
                </article>
            </div>

            <div className="copyright">
                <p>Copyright &copy; 2021, All Rights Reserved</p>
            </div>
        </div>
    </footer>
	)
}

export default Footer