import newsImg from '../assets/news.jpg';

const NewsItem = ({title, description, url, src}) => {
  return (
    <div className="card bg-dark text-light mb-1 d-inline-block my-1 mx-1 px-2 py-2" style={{maxWidth: '345px'}}>
      <img src={src?src:newsImg} style={{height: "200px", width: "325px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 47)}...</h5>
        <p className="card-text">{description?description.slice(0, 90):"A news article"}</p>
        <a href={url} className="btn btn-primary" target="_blank">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem;