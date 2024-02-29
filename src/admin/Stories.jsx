import React, { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { ImBin } from "react-icons/im";
import Nav from "../articles/Nav"
import Footer from "../articles/Footer"
import { connect } from 'react-redux';
import { getArticle } from '../content/thunks';
import Swal from 'sweetalert2';


function Stories({ articles, getArticle }) {

     useEffect(() => {
        getArticle();
      }, [getArticle]);

    console.log("all articles",articles)
     //full article function
     const navigate = useNavigate();
     const handleFullArticle = (article) => {
        navigate(`/FullArticle/${article.articleId}`, { state: { article } });
      };


      //filter articles based on newstype
        const filterArticlesByNewsType = (articles, newstype) => {
            return articles.filter(article => article.newstype === newstype);
        };

        // Usage example:
        const localNewsArticles = filterArticlesByNewsType(articles, 'local news');
        const techNewsArticles = filterArticlesByNewsType(articles, 'Tech news');
        const spaceNewsArticles = filterArticlesByNewsType(articles, 'space news');
        const businessNewsArticles = filterArticlesByNewsType(articles, 'business news');
        const politicalNewsArticles = filterArticlesByNewsType(articles, 'political news');
        const entertainmentNewsArticles = filterArticlesByNewsType(articles, 'entertainment news');
        const sportNewsArticles = filterArticlesByNewsType(articles, 'sport news');
        
        console.log("seeing...",localNewsArticles)

//delete story

    
const handleDelete = async (id) => {
  console.log('Deleting product with ID:', id);
  try {
    

    const response = await fetch(`http://localhost:8000/remove-article/${id}/action`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'delete' }),
    });

    if (response.ok) {
      // Handle successful deletion
      console.log('product deleted successfully');
      // You might want to update your local state or UI accordingly
    } else {
      // Handle unsuccessful deletion
      console.error('Error deleting product:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting product:', error);
  } 
};

const handleConfirm = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      // Call handleDelete with the provided ID
      handleDelete(id);

      // Optionally, show another Swal.fire for success
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
};



    return(
        <>
       <Nav/>
   

  

    <section>
        <div className="container">

           <div className="heading">
                <h1 className="editor-h1">Stories</h1>
             <div class="search">
               <label>
                  <input
                    type="text"
                    placeholder="Search.."
                    
                  />
                  <ion-icon name="search-outline"></ion-icon>
                </label>
             </div>
           </div>
            

            <div  className="articles">

                  
                {localNewsArticles.map(article => (
                    
                      <a className="card" onClick={() => handleFullArticle(article)}>  
                        <img src={article.Img_url} alt="" />
                        <article>
                            <p className="entertainment-category">{article.newstype}</p>
                            
                            <p>
                               {article.summary_text}
                            </p>

                        </article>
                        <ImBin
                          color="red"
                          size={20}
                          className="delete"
                          onClick={() => handleConfirm(article.articleId)}
                        />

                       </a>
                  
                ))

                }
               {businessNewsArticles.map(article => (
                <a onClick={() => handleFullArticle(article)} className="card">
                    <article>
                        <p className="sports-category">{article.newstype}</p>
                       
                        <p>
                            {article.summary_text}
                        </p>
                    </article>
                      <ImBin
                          color="red"
                          size={20}
                          className="delete"
                          onClick={() => handleConfirm(article.articleId)}
                        />
                </a>
                ))

                }
                {politicalNewsArticles.map(article => (
                <a onClick={() => handleFullArticle(article)} className="card">
                    <img src={article.Img_url} alt="" />
                    <article>
                        <p className="technology-category">{article.newstype}</p>
                        
                        <p>
                           {article.summary_text}
                        </p>
                    </article>
                     <ImBin
                          color="red"
                          size={20}
                          className="delete"
                          onClick={() => handleConfirm(article.articleId)}
                        />
                </a>
                 ))

                }

               
               {sportNewsArticles.map(article => (
                <a onClick={() => handleFullArticle(article)} className="card">
                    <article>
                        <p className="sports-category">{article.newstype}</p>
                        
                        <p>
                            {article.summary_text}
                        </p>
                    </article>
                    <img src={article.Img_url} alt="" />
                     <ImBin
                          color="red"
                          size={20}
                          className="delete"
                          onClick={() => handleConfirm(article.articleId)}
                        />
                </a>

                ))

                }
               {techNewsArticles.map(article => (
                <a onClick={() => handleFullArticle(article)} className="card">
                    <img src={article.Img_url} alt="" />
                    <article>
                        <p className="technology-category">{article.newstype}</p>
                        
                        <p>
                            {article.summary_text}
                        </p>
                    </article>
                     <ImBin
                          color="red"
                          size={20}
                          className="delete"
                          onClick={() => handleConfirm(article.articleId)}
                        />
                </a>
                 ))

                }
                
                {entertainmentNewsArticles.map(article => (
                <a onClick={() => handleFullArticle(article)} className="card">
                    <article>
                        <p className="sports-category">{article.newstype}</p>
                        
                        <p>
                            {article.summary_text}
                        </p>
                    </article>
                     <ImBin
                          color="red"
                          size={20}
                          className="delete"
                          onClick={() => handleConfirm(article.articleId)}
                        />
                </a>
                 ))

                }
                
               {spaceNewsArticles.map(article => (
                <a onClick={() => handleFullArticle(article)} className="card">
                    <article>
                        <p className="entertainment-category">{article.newstype}</p>
                        
                        <p>
                       {article.summary_text}
                        </p>
                    </article>
                    <img src={article.Img_url} alt="" />
                     <ImBin
                          color="red"
                          size={20}
                          className="delete"
                          onClick={() => handleConfirm(article.articleId)}
                        />
                </a>
                ))}
            </div>
            
        </div>
    </section>

   <Footer/>
        </>
    );
}

const mapStateToProps = state => ({
  articles: state.articles 
});

export default connect(mapStateToProps, { getArticle })(Stories);