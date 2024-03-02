import { useEffect, useState } from "react"
import News from "./News";
import sitelogo from './newslogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


function NewsDisplay(){

    let [articles,setArticles] = useState([]);
    let [category,setCategory] = useState('India');

    const handleSubmit = (event)=>{
        event.preventDefault();

        fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-02-28&apiKey=e0242cf49d88409eb5fb1bb3d9fb39f4`)
        .then((response)=>response.json())
        .then((result)=>{
            setArticles(result.articles);
        });
    };
    
    useEffect(() => {
        handleSubmit({ preventDefault: () => {} });
    }, []);

    return(
        <div className="card-flex">
            <div className="header">
                <img className='logo' src={sitelogo} alt=""></img>
                <div className="header-section">
                    <div className='header-section-search'>
                        <form onSubmit={handleSubmit}>
                        <input onChange={(event)=>{
                            if(event.target.value !==""){
                                setCategory(event.target.value);
                            }else{
                                setCategory("Web Development");
                            }
                            }} className='search' type="text" placeholder="Search"></input>
                        <button type="submit" className='search-btn'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                        </form>   
                    </div>
                    <p className='topic'>#trendingNews  #crytoCurrency  #election2024  #paytmStockPrice</p>
                </div>
                <div className='write'>
                    <FontAwesomeIcon icon={faPenNib}/>
                    <p>Write</p>
                </div>
            </div>
                {   
                    articles.length !== null?
            
                    articles.map((article)=>{
                        return(
                            <News article = {article}/>
                        )
                    })
                    :
                    <h2 className="no-news" >No NEWS found. Kindly search something else.</h2>
                }
        </div>
    )
}
export default NewsDisplay;