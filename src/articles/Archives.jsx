import React, { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import Nav from "./Nav"
import Footer from "./Footer"
import { connect } from 'react-redux';
import { getArticle } from '../content/thunks';


function Archives({ articles, getArticle }) {

     useEffect(() => {
        getArticle();
      }, [getArticle]);

    console.log("all articles",articles)
     //full article function
     const navigate = useNavigate();
     const handleFullArticle = (article) => {
        navigate(`/FullArticle/${article.articleId}`, { state: { article } });
      };

    const [searchTerm, setSearchTerm] = useState('');  


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
        
        

    return(
        <>
       <Nav/>
   

  

    <section>
        <div className="container">

           <div className="heading">
                <h1 className="editor-h1">Archives</h1>
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

export default connect(mapStateToProps, { getArticle })(Archives);