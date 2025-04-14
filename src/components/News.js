import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
// import IntroSection from './IntroSection';


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [nextPage, setNextPage] = useState(null); // for pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [activeSearch, setActiveSearch] = useState('');
  


  // Function to update news based on search term or category
  const updateNews = async () => {
    props.setProgress(10);
    
    let url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&language=${props.language}&country=${props.country}`;
  
    // Only add category if NOT searching
    if (!searchTerm.trim()) {
      url += `&category=${props.category}`;
    }
  
    // Add search term if any
    if (searchTerm.trim() !== '') {
      url += `&q=${encodeURIComponent(searchTerm)}`;
    }
    setActiveSearch(searchTerm);
  
    props.setProgress(30);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.results || []);
    setTotalResults(parsedData.results.length || 0);
    setNextPage(parsedData.nextPage);
    setLoading(false);
    props.setProgress(100);
  };
  

  // Clear search results and reset on category or language change
  useEffect(() => {
    setSearchTerm('');
    setArticles([]); // Clear previous articles
    setActiveSearch('');
    updateNews();
    document.title = `NewsFox - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
    // eslint-disable-next-line
  }, [props.category, props.language, props.country]);

  // Fetch more articles on scroll
  const fetchMoreData = async () => {
    if (!nextPage) return;

    let url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&language=${props.language}&country=${props.country}&category=${props.category}&page=${nextPage}`;
    if (searchTerm.trim() !== '') {
      url += `&q=${encodeURIComponent(searchTerm)}`;
    }

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles((prevArticles) => prevArticles.concat(parsedData.results || []));
    setNextPage(parsedData.nextPage); // update for the next call
  };

  return (
    <>
      {/* Search Bar */}
      {/* Top Row with Headline + Expandable Search */}
      <div className="container sticky-top top-heading-blur" style={{ top: '56px', zIndex: 1020 }}>
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center py-3 gap-2 gap-md-0">

          {/* Headline */}
          <h2 className="m-0 fw-bold text-primary-emphasis">
            NewsFox - {activeSearch ? `"${activeSearch}" Results` : `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines`}
          </h2>

          {/* Search icon + bar */}
          <div className="position-relative ">
            {!searchBarVisible ? (
              <button
                className="btn btn-outline-secondary rounded-circle"
                onClick={() => setSearchBarVisible(true)}
              >
                <i className="bi bi-search"></i>
              </button>
            ) : (
              <div className="d-flex align-items-center search-expand transition">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search news..."
                  value={searchTerm}
                  autoFocus
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      updateNews(); // Trigger search on Enter
                      setSearchBarVisible(false);
                    }
                  }}
                  style={{ maxWidth: '250px' }}
                />
                <button
                  className="btn btn-info me-2"
                  onClick={() => {
                    updateNews(); // Trigger search on button click
                    setSearchBarVisible(false);
                  }}
                >
                  Search
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => setSearchBarVisible(false)}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Introsection */}
      {/* <IntroSection/> */}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={!!nextPage}
        loader={<Spinner />}
      >
        <div className="container" style={{ paddingTop: '80px' }}>
          <div className="row">
            {!loading &&
              articles.map((element, index) => {
                return (
                  <div key={index} className="col-md-4 mb-4 d-flex">
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.image_url}
                      newsUrl={element.link}
                      author={element.creator ? element.creator[0] : 'Unknown'}
                      date={element.pubDate}
                      source={element.source_id}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>

      {/* Show "No results" if nothing found */}
      {!loading && articles.length === 0 && (
        <div className="text-center my-5">
          <h4 className="text-muted">No news found for your search 🔍</h4>
          <p>Try searching for something else.</p>
        </div>
      )}
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'top',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
