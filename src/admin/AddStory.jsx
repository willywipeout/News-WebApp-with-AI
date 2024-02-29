import React,{useState} from "react"
import Nav from "../articles/Nav"
import "./admin.css"
import { LuCopy } from "react-icons/lu";
import Footer from "../articles/Footer"
import Swal from 'sweetalert2';


function AddStory(){
  //automatic 
   const [scrapeUrl,setScrapeUrl] = useState("")
   const [newsType,setNewsType] = useState("")
   const [headlings,setHealings] = useState("")
   const [loading,setLoading] = useState("")
   const [author,setAuthor] = useState("")
   const [img, setImg] = useState("")

   const handleScrapeUrl = (event) => {
   	setScrapeUrl(event.target.value)
   }

    const handleHeadlings = (event) => {
   	setHealings(event.target.value)
   }

    const handleNewsType = (event) => {
   	setNewsType(event.target.value)
   }

    const handleAuthor = (event) => {
     setAuthor(event.target.value)
   }

    const handleImg = (event) => {
    	setImg(event.target.value)
    }


   const handleSubmit = async (event) => {
   	event.preventDefault()
     setLoading(true)

     const formData = {
     	news_url:scrapeUrl,
     	newstype:newsType,
     	headlings:headlings,
     	Img_url: img,
     	author:author
     };
     

     try {
     	const response = await fetch('http://localhost:8000/create', {
     		method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify(formData),
     	})
     	const data = await response.json();

     	if (response.ok) {
     		console.log('story created:', data)

     		  Swal.fire({
		        icon: 'success',
		        title: 'Success!',
		        text: 'Story created successfully',
		      });

     	}else {
               console.log('error creating story:', data.error);

                Swal.fire({
		        icon: 'error',
		        title: 'Error!',
		        text: `Error Creating Story: ${response.statusText}`,
		      });

     	}
     } catch (error) {
     	console.error('error during creation:', error)

     	 Swal.fire({
		      icon: 'error',
		      title: 'Error!',
		      text: `Error Creating Story: ${error.message}`,
		    });
     }finally{
     	setLoading(false)
     }
   }


//generally scraping

  const [url,setUrl] = useState("")
  const [class_name,setClassName] = useState("")
  const [scrapedData, setScrapedData] = useState(null);
  const [general,setGenral] = useState(false)


  const handleUrl = (event) => {
  	setUrl(event.target.value)
  }

  const handleDiv = (event) => {
  	setClassName(event.target.value)
  }

const handleScrape = async (event) => {
    event.preventDefault();
    setGenral(true);

    try {
        const response = await fetch('http://localhost:5000/scrape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url, class_name }), 
        });
        const data = await response.json();

        console.log('Response:', response);  // Log the entire response object
        console.log('Data:', data);

        if (response.ok) {
        	setScrapedData(data);
            console.log('Data retrieved:', data);

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Data retrieved successfully',
            });
        } else {
            console.log('Error retrieving data:', data.error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Error retrieving data: ${response.statusText}`,
            });
        }
    } catch (error) {
        console.error('Error during data retrieval:', error);

        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `Error during data retrieval: ${error.message}`,
        });
    } finally {
        setGenral(false);
    }
};

//copy text 
  const handleCopyClick = () => {
    if (scrapedData) {
        navigator.clipboard.writeText(scrapedData.content)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Text Copied!',
                    text: 'The text has been copied to the clipboard',
                });
            })
            .catch((error) => {
                console.error('Unable to copy text: ', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to copy text to clipboard',
                });
            });
    }
};

//manuary uploading news articles

const [newsCategory,setNewsCategory] = useState("")
const [isHeadlines,setIsHealines] = useState("")
const [textSummary,setTextSummary] = useState("")
const [fullArticle,setFullArticle] = useState("")
const [imageUrl,setImageUrl] = useState("")
const [writer,setWriter]= useState("")
const [row,setRow] = useState(false)

const handleCategory = (event) => {
	setNewsCategory(event.target.value)
}

const handleHeadlines = (event) => {
	setIsHealines(event.target.value)
}

const handleSummary = (event) => {
	setTextSummary(event.target.value)
}

const handleFullText = (event) => {
	setFullArticle(event.target.value)
}

const handleImage = (event) => {
	setImageUrl(event.target.value)
}

const handleEditor = (event) => {
	setWriter(event.target.value)
}

const handleCreate = async (event) => {
   	event.preventDefault()
     setRow(true)

     const formData = {
     	newstype:newsCategory,
     	summary_text:textSummary,
     	headlings:isHeadlines,
     	Img_url: imageUrl,
     	author:writer,
     	text:fullArticle
     };
     

     try {
     	const response = await fetch('http://localhost:8000/editor', {
     		method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify(formData),
     	})
     	const data = await response.json();

     	if (response.ok) {
     		console.log('story created:', data)

     		  Swal.fire({
		        icon: 'success',
		        title: 'Success!',
		        text: 'Story created successfully',
		      });

     	}else {
               console.log('error creating story:', data.error);

                Swal.fire({
		        icon: 'error',
		        title: 'Error!',
		        text: `Error Creating Story: ${response.statusText}`,
		      });

     	}
     } catch (error) {
     	console.error('error during creation:', error)

     	 Swal.fire({
		      icon: 'error',
		      title: 'Error!',
		      text: `Error Creating Story: ${error.message}`,
		    });
     }finally{
     	setRow(false)
     }
   }

   
  
//coditionally rander 

const userDataString = localStorage.getItem('userData');
const userData = JSON.parse(userDataString);

 

	return(
       <section className="story-container">
       <Nav/>


       {userData && userData.user.email === "mumenosimon@gmail.com" ? (
	      <>
	      	<div className="story-div">
       	    
       		<form className="story-form" onSubmit={handleSubmit}>
       		<h1>automatic article genaration</h1>
       		  <select
		          className="story-type"
		          defaultValue=""
		          value={newsType}
		          onChange={handleNewsType}
		          required
		          >
		           <option value="" disabled hidden>
		              which story are you telling 
		            </option>
		            <option value="select">Select</option>
		            <option value="local news">Local</option>
		            <option value="political news">Politics</option>
		            <option value="space news">space</option>
		            <option value="Tech news">Tech</option>
		            <option value="business news">business</option>
		            <option value="sport news">sport</option>
		            <option value="International news">International</option>
            
               </select>

                 <select
		          className="story-type"
		          defaultValue=""
		          value={headlings}
		          onChange={handleHeadlings}
		          required
		          >
		           <option value="" disabled hidden>
		              Is it headlines, Yes or No
		            </option>
		            <option value="select">Select</option>
		            <option value="Headlings">Yes</option>
		            <option value="Regular">No</option>
            
               </select>

				    <div className="url">
				    	<input 
				    	  type="text" 
				    	  placeholder="Scraping url "
				    	  value={scrapeUrl}
				    	  onChange={handleScrapeUrl}
				    	 />
				    	  
				    </div>


				     <div className="url">
				    	<input 
				    	  type="text" 
				    	  placeholder="image url "
                           value={img}
				    	  onChange={handleImg}
				    	/>
				    </div>

				    <div className="url">
				    	<input 
				    	  type="text" 
				    	  placeholder="Author"
                           value={author}
				    	  onChange={handleAuthor}
				    	/>
				    </div>
                     <button type="submit">Create Story 🤪</button>
       		</form>
               {loading && (
                  <span class="loader"></span>
               )}

       	</div>

       	<div className="story-div">
       	        
       			<form className="story-form" onSubmit={handleScrape}>
       			<h1>scrape news articles</h1>
       		

				    <div className="url">
				    	<input 
				    	  type="text" 
				    	  placeholder="website url "
				    	  value={url}
				    	  onChange={handleUrl}
				    	 />
				    	  
				    </div>


				     <div className="url">
				    	<input 
				    	  type="text" 
				    	  placeholder="Scraping Div "
                           value={class_name}
				    	  onChange={handleDiv}
				    	/>
				    </div>
                   {scrapedData && (
				    <div className="data">
				    	<p>{scrapedData.content}</p>
				    	<i><LuCopy onClick={handleCopyClick} className="copy" /></i>
				    </div>
                    )}
				  
                     <button type="submit">Create Story 😶‍🌫</button>
       		</form>
               {general && (
                  <span class="loader"></span>
               )}
       	</div>
	      </>
	    ) : (
	      <p>You are not authorized to use AI article genaration, to use them EMAIL ADMIN.</p>
	    )}

       	<div className="story-div">

       			<form className="story-form" onSubmit={handleCreate}>
       			<h1>manually article genaration</h1>
       		  <select
		          className="story-type"
		          defaultValue=""
		          value={newsCategory}
		          onChange={handleCategory}
		          required
		          >
		           <option value="" disabled hidden>
		              which story are you telling 
		            </option>
		            <option value="select">Select</option>
		            <option value="local news">Local</option>
		            <option value="political news">Politics</option>
		            <option value="space news">space</option>
		            <option value="Tech news">Tech</option>
		            <option value="business news">business</option>
		            <option value="sport news">sport</option>
		            <option value="International news">International</option>
            
               </select>

                 <select
		          className="story-type"
		          defaultValue=""
		          value={isHeadlines}
		          onChange={handleHeadlines}
		          required
		          >
		           <option value="" disabled hidden>
		              Is it Headlines, Yes or No
		            </option>
		            <option value="select">Select</option>
		            <option value="Headlings">Yes</option>
		            <option value="Regular">No</option>
            
               </select>

				    <div className="url">
				    	<textarea 
				    	  type="text" 
				    	  placeholder="Summary Article "
				    	  value={textSummary}
				    	  onChange={handleSummary}
				    	 />
				    	  
				    </div>


				     <div className="url">
				    	<textarea
				    	  type="text" 
				    	  placeholder="Full article "
                           value={fullArticle}
				    	  onChange={handleFullText}
				    	/>
				    </div>

				    <div className="url">
				    	<input 
				    	  type="text" 
				    	  placeholder="Img url"
                           value={imageUrl}
				    	  onChange={handleImage}
				    	/>
				    </div>
				    <div className="url">
				    	<input 
				    	  type="text" 
				    	  placeholder="Author"
                           value={writer}
				    	  onChange={handleEditor}
				    	/>
				    </div>
                     <button type="submit">Create Story 🤪</button>
       		</form>
               {row && (
                  <span class="loader"></span>
               )}
       	</div>
           <Footer/>
       </section>
	)
}

export default AddStory