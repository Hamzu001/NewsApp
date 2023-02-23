import React, { useState, useEffect } from 'react'
import Loadimg from './Loadimg.js';
import NewsItems from './NewsItems.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

 const News = (props)=> {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0); 
  
    const updateNews = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);

    }

      useEffect(() => {
        document.title = props.category;
        updateNews();
        // eslint-disable-next-line
      },[]) 

  const fetchMoreData = async() => {
    console.log("fetchmoredata");
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

return (
        <>
        <h1 className='text-center' style={{margin:'30px 0px',marginTop: '90px'}}><b>{props.title}</b></h1>    
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.lenght!==totalResults}
          loader={loading && <Loadimg/>} 
        >
          <div className='container my-3'>
          <div className='row my-3'>
          {articles.map((element, index)=>{
            return <div className='col-md-4' key={index}>
                <NewsItems title={element.title} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage} publishedAt={element.publishedAt}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      
      </>
    );
        }
   News.defaultProps = {
    country: 'us',
    category: 'general',
    title: 'NewsInfo - Top Headlines',
    // pageSize: 5
  }
   News.propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string

  }

export default News