import React, {useEffect,useState} from "react"
import Entertainment from "../images/ent1.jpg"
import { Link,useLocation } from 'react-router-dom';
import { FaVolumeUp } from "react-icons/fa";
import Nav from "./Nav"
import Footer from "./Footer"
import Swal from 'sweetalert2';


function FullArticle() {
   
  const [loading,setLoading] = useState(false)      
  const { state } = useLocation();
  const articles = state && state.article;

  if (!articles) {
    return <p>No articles information available.</p>;
  }

 

// Component to handle TTS request

 

const handleVoice = async () => {
  

    setLoading(true)
    try {
        const response = await fetch('http://localhost:8000/synthesize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: articles.text }), 
        });
        const responseData = await response.json(); // assuming response is JSON

        // Create an AudioPlayer element
        const audioElement = new Audio(responseData.audioDataURI);
        audioElement.play();
    } catch (error) {
        console.error('Error during TTS request:', error);
    }finally{
        setLoading(false)
    }
};


   

  
  
	return(
      <>
    
    <Nav/>

    <div class="container">
        <section class="article-page">
            <article>
                <img src={articles.Img_url} alt="" />
               
                <div >

                    <p>
                        <i class="fas fa-user fa-1x"></i> {articles.date}
                    </p>
                   <div className="audio">
                    <p className="entertainment-category">{articles.newstype}</p>
                    <button
                        className="audio-btn"
                        onClick={handleVoice}
                    >
                        <FaVolumeUp className="speaker" />
                        Audio
                    </button>
                   </div>

                </div>
              <div className="full-loader">
                   <p >
                   {articles.text}
                  </p>
                    {loading && (
                    <span class="loader-full"></span>
                     )}
              </div>
               
         
            </article>

            <article>
                <h3>CATEGORIES</h3>
                <ul>
                    <li>Sports</li>
                    <li>Entertainment</li>
                    <li>Technology</li>
                    <li>Fashion</li>
                    <li>Shopping</li>
                </ul>
            </article>

            <article>
                <h3>CONVERT TO AUDIO</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, id?
                </p>
                <a href="#">Join Now</a>
            </article>
        </section>
       

    </div>

   <Footer/>

      </>

	)
}

export default FullArticle