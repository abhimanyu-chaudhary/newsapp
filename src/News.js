import newslogo from './newslogo.png'

function News(props){
    return(
        <div className="card">
            <div className="card-img">
                {
                    props.article.urlToImage!==null?
                    <img src={props.article.urlToImage}/>
                    :
                    <img src={newslogo}/>

                }
            </div>
            <p className="matter-head">{props.article.title}</p>
            <p className="matter">{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target="_blank">read more</a></p>    
            <div className="footer">
                <p className="footer-matter">{props.article.author?.substring(0,12)}</p>
                <p className="footer-matter">{props.article.source.name?.substring(0,18)}</p>
            </div>  
        </div>
    )
}
export default News;