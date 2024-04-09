import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { xml2json } from 'xml-js';
import { Link } from 'react-router-dom';

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.espn.com/espn/rss/soccer/news')
      .then((res) => {
        // Convert XML data to JSON
        const newsData = xml2json(res.data, { compact: true, spaces: 4 });
        // Parse JSON string to JavaScript object
        const newsJson = JSON.parse(newsData);
        // Set news state
        setNews(newsJson.rss.channel.item);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Set news state to an empty array if there's an error
        setNews([]);
      });
  }, []);

  const newSliced = news && news.slice(1,4)

  return (
    <div className='w-full space-y-5 py-16'>
      {newSliced.length > 0 ? (
        newSliced.map((item, index) => (
          <div key={index} className="w-full bg-[#1f2937] shadow-xl" style={{borderRadius:'8px'}}>
            <Link to={'/news'}>
            <img src={item.enclosure && item.enclosure._attributes && item.enclosure._attributes.url} style={{borderTopRightRadius:'8px',borderTopLeftRadius:'8px'}} />
            <div className="p-2 space-y-4">
              <h1 className=" text-[#0097B2]">{item.title && item.title._cdata}</h1>
              <p className='text-xs text-white'>
                {item.description && item.description._cdata}
              </p>
              <p className='text-xs text-[#0097B2]'>{item.pubDate && item.pubDate._text}</p>
              <div className="justify-start">
                  <p className=" text-[10px] hover:text-[#0097B2] text-white">Learn more...</p>
              </div>
            </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
}
