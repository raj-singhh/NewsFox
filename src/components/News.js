import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News =(props)=> {
  const [articles , setArticles] = useState([])
  const [page , setPage] = useState(1)
  const [loading , setLoading] = useState(true)
  const [totalResults , setTotalResults] = useState(0)
  
  
  
  const updateNews=async()=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    setLoading(true);
    let data =await fetch(url)
    let parsedData=await data.json()
    props.setProgress(50);
    console.log(parsedData)
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(() => {
  document.title=`NewsFox -  ${props.category.charAt(0).toUpperCase()+props.category.slice(1)}`;

    updateNews();
    //eslint-disable-next-line
  },[]);
  


 

  const fetchMoreData = async() => {
    

    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;

    setPage(page=>page+1);
    
    let data =await fetch(url)
    let parsedData=await data.json()
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
  };

    return (
      <>
        <h1 className='text-center ' style={{margin : '90px 0px 35px 0px' }}>NewsFox - Top Headlines from {props.category.charAt(0).toUpperCase()+props.category.slice(1)} </h1>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <= totalResults && articles.length > 0}
          loader={<Spinner/> }
        >


        <div className="container">
        
        <div className="row">
        {!loading && articles.map((element , index)=>{ 
           return <div key={index} className="col-md-4">
                <NewsItem  title = {element.title ? element.title.slice(0,111)  : "..." }   description = { element.description ? element.description.slice(0,180) : '...' } imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source ={element.source.name}/>
            </div>
        })}    
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    )
  
}

News.defaultProps={
  country : 'us',
  pageSize : 5,
  category : 'general'
}
News.propTypes={
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string,
}

export default News
