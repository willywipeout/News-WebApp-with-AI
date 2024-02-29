import React,{useEffect} from "react"
import { Link } from 'react-router-dom';
import Nav from "./Nav"
import Footer from "./Footer"

function AboutUs() {
   
   

	return(
       <>
     

   <Nav/>

    <div class="container">
        <section class="about">
            <article>
                <h2>ABOUT OUR ORGANIZATION</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                    debitis beatae ad doloremque voluptate, blanditiis suscipit error
                    quam fugit sapiente, aliquid quia libero incidunt recusandae enim
                    voluptas nulla sequi similique? Temporibus ad est minima magni
                    molestias obcaecati consequatur cumque exercitationem deleniti eos,
                    animi facere recusandae, pariatur eveniet neque? Voluptatem,
                    molestias.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                    dignissimos dolorum ipsam corporis similique! Quis, esse minus?
                    Ducimus tempore provident sunt officia? Velit temporibus harum
                    voluptate, ipsum quisquam rerum doloremque consectetur quos incidunt
                    deleniti dicta excepturi ratione, fugiat ad fuga in nam dolorum aut
                    minus esse voluptatum suscipit et quae. Repellendus minus, ratione
                    aperiam commodi voluptas iusto aliquam sapiente. Aut obcaecati,
                    corporis praesentium porro nostrum excepturi animi repellendus
                    incidunt non quis nisi assumenda voluptas possimus molestiae
                    laboriosam iure sed architecto in perferendis magnam blanditiis
                    voluptatum placeat labore odio? Unde id dolore aliquam, quas sit
                    harum, saepe maiores facilis aliquid molestiae qui. Praesentium
                    rerum, minima fugit laudantium quaerat voluptatem pariatur sequi
                    saepe blanditiis nobis natus possimus quo, assumenda numquam sit,
                    eaque accusamus incidunt exercitationem quis deleniti quisquam
                    corrupti vel? Ut quisquam consequatur, doloribus voluptatibus iusto
                    quaerat, sint non magnam reiciendis amet quos sapiente excepturi
                    omnis laboriosam nobis, expedita delectus odio provident?
                </p>
            </article>

            <article>
                <h3>JOIN OUR CLUB</h3>
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

export default AboutUs