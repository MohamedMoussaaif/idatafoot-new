import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { xml2json } from 'xml-js';
import { Link } from 'react-router-dom';

export default function NewsPage() {
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


  const newSliced = news && news.slice(1,news.length)

  return (
    <div className='flex flex-col justify-center items-center space-y-5 p-5 bg-zinc-900 w-full mx-auto mt-[-15px]'>
      {newSliced.length > 0 ? (
        newSliced.map((item, index) => (
          <div key={index} className="flex flex-col justify-start lg:flex-row">
            <img className='h-2/5 lg:w-2/5' src={item.enclosure && item.enclosure._attributes && item.enclosure._attributes.url} style={{borderRadius:'8px'}} />
            <div className="py-5 lg:items-center lg:px-5 space-y-3">
              <h1 className="card-title text-2xl text-[#0097B2]">{item.title && item.title._cdata}</h1>
              <p className='text-white lg:w-1/2'>
                {item.description && item.description._cdata}
              </p>
              <p className='text-[#0097B2]'>{item.pubDate && item.pubDate._text}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
}
