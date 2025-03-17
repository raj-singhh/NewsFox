import React from "react";
import preview from './preview-not-available.png'


const NewsItem =(props)=> {
  
    let {title , description , imageUrl , newsUrl ,author , date  , source} = props;
    return (
      <div className="my-3">
        <div className="card" style={{ height: '33rem'}}>
        <div className="position-absolute " style={{ display: 'flex', justifyContent:'flex-end' , right : 0}}>
          <span className=" badge rounded-pill bg-info" >{source}</span>
        </div>
          <img height='220px' src={!imageUrl ? preview : imageUrl} className="card-img-top" alt="Preview Not Available" />

          <div className="card-body">
            <h5 className="card-title">{title}{title.length>=70 ? '...' : '' }</h5>
            <p className="card-text"> {description}{description ?(description.length>=140 ? '...' : '') :'' } </p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}  </small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank"className="btn btn-sm btn-dark">  Read more </a>
          </div>

        </div>
      </div>
    );
  
}

export default NewsItem;
