import React, { useEffect,useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./style.css"
import { connect } from 'react-redux';
import { getArticle } from '../content/thunks';
import Nav from "./Nav"
import Footer from "./Footer"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'



function Home({ articles, getArticle }) {



const [loading,setLoading] = useState(true)
    useEffect(() => {
        getArticle();
    }, [getArticle]);

    useEffect(() => {
        if (articles) {
            setLoading(false);
        }
    }, [articles]);

             //full article function
     const navigate = useNavigate();
     const handleFullArticle = (article) => {
        navigate(`/FullArticle/${article.articleId}`, { state: { article } });
      };
       



const today = new Date().toISOString().slice(0, 10);

// Filter articles for today
let filteredArticles = articles.filter(article => {
    const articleDate = article.date_created ? new Date(article.date_created).toISOString().slice(0, 10) : null;
    return articleDate === today;
});

// Sort filtered articles to prioritize new ones based on timestamp
filteredArticles.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));

// If no new articles for today, fallback to the most recent articles
if (filteredArticles.length < 7) {
    // Sort all articles by timestamp to get the most recent ones
    articles.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
    // Take the first 7 articles or however many are available
    const additionalArticles = articles.filter(article => {
        const articleDate = article.date_created ? new Date(article.date_created).toISOString().slice(0, 10) : null;
        return articleDate !== today && !filteredArticles.includes(article);
    }).slice(0, 7 - filteredArticles.length);

    filteredArticles = [...filteredArticles, ...additionalArticles]; 

}


// Assuming articles is an array of objects with headlines property
const healinesArticles = filteredArticles.filter(article => article.headlings === "Headlings");
// filteredArticles will contain only the articles with headlines:Headlines

//slider
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides"
  };



  




      //filter articles based on newstype
        const filterArticlesByNewsType = (filteredArticles, newstype) => {
            return filteredArticles.filter(article => article.newstype === newstype);
        };

        
        const localNewsArticles = filterArticlesByNewsType(filteredArticles, 'local news');
        const techNewsArticles = filterArticlesByNewsType(filteredArticles, 'Tech news');
        const spaceNewsArticles = filterArticlesByNewsType(filteredArticles, 'space news');
        const businessNewsArticles = filterArticlesByNewsType(filteredArticles, 'business news');
        const politicalNewsArticles = filterArticlesByNewsType(filteredArticles, 'political news');
        const entertainmentNewsArticles = filterArticlesByNewsType(filteredArticles, 'International news');
        const sportNewsArticles = filterArticlesByNewsType(filteredArticles, 'sport news');

//article upload time        
      




	return(
        <>
     
       <Nav/>

      
        {loading ? (
          <Skeleton count={1} height={300} width={"100%"} />
        ) : (
          
                <Slider {...settings}>
                {healinesArticles.map(article => {
                
                    return (

                        <div key={article.articleId} className="showcase"
                             style={{
                                 backgroundImage: `url(${article.Img_url})`,
                                 backgroundSize: 'cover',
                             }}
                        >
                            <div className="container">
                                <div className="text-content">
                                    <p className="sports-category">{article.newstype}</p>
                                    <h1>In {article.newstype}</h1>
                                    <p>{article.summary_text}</p>
                                    <a className="card" onClick={() => handleFullArticle(article)}>Read More</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>

        )}
     



        <section className="skeleton">
          
               <div className="container">
                <h1 className="editor-h1">Editor Picks</h1>
                 <div  className="articles">

                      
                    {localNewsArticles.map(article => (
                        
                          <a className="card" onClick={() => handleFullArticle(article)}>  

                            <img src={article.Img_url || <Skeleton />} alt="" />
                            <article>
                                <p className="entertainment-category">{article.newstype || <Skeleton />}</p>
                                
                                <p>
                                   {article.summary_text || <Skeleton />}
                                </p>
                                <span>{article.date_created || <Skeleton />}</span>
                            </article>
                           </a>
                      
                    ))

                    }
                   {businessNewsArticles.map(article => (
                    <a onClick={() => handleFullArticle(article)} className="card">
                        <article>
                            <p className="sports-category">{article.newstype || <Skeleton />}</p>
                           
                            <p>
                                {article.summary_text || <Skeleton />}
                            </p>
                        </article>
                    </a>
                    ))

                    }
                    {politicalNewsArticles.map(article => (
                    <a onClick={() => handleFullArticle(article)} className="card">
                        <img src={article.Img_url || <Skeleton />} alt="" />
                        <article>
                            <p className="technology-category">{article.newstype || <Skeleton />}</p>
                            
                            <p>
                               {article.summary_text || <Skeleton />}
                            </p>
                        </article>
                    </a>
                     ))

                    }

                   
                   {sportNewsArticles.map(article => (
                    <a onClick={() => handleFullArticle(article)} className="card">
                        <article>
                            <p className="sports-category">{article.newstype || <Skeleton />}</p>
                            
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
                        <img src={article.Img_url || <Skeleton />} alt="" />
                        <article>
                            <p className="technology-category">{article.newstype || <Skeleton />}</p>
                            
                            <p>
                                {article.summary_text || <Skeleton />}
                            </p>
                        </article>
                    </a>
                     ))

                    }
                    
                    {entertainmentNewsArticles.map(article => (
                    <a onClick={() => handleFullArticle(article)} className="card">
                        <article>
                            <p className="sports-category">{article.newstype || <Skeleton />}</p>
                            
                            <p>
                                {article.summary_text || <Skeleton />}
                            </p>
                        </article>
                    </a>
                     ))

                    }
                    
                   {spaceNewsArticles.map(article => (
                    <a onClick={() => handleFullArticle(article)} className="card">
                        <article>
                            <p className="entertainment-category">{article.newstype || <Skeleton />}</p>
                            
                            <p>
                           {article.summary_text || <Skeleton />}
                            </p>
                        </article>
                        <img src={article.Img_url || <Skeleton />} alt="" />
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

export default connect(mapStateToProps, { getArticle })(Home);