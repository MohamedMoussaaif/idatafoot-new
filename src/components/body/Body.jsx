import React from 'react';
import Leagues from './leagues/Leagues';
import Livescore from './livescore/Livescore';
import posterImage from './poster3.jpg';
import { Link } from 'react-router-dom';
import News from './news/News';


export default function Body(props) {

  // Function to scroll to the livescore section
  const scrollToLiveScore = () => {
    const livescoreSection = document.getElementById('livescore');
    if (livescoreSection) {
      livescoreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='mt-[-55px] lg:mt-[-15px]'>
      <div className={`lg:hidden min-h-[50vh] text-left ${!(props.navClick) && 'hidden'} flex px-3 my-10`} style={{backgroundAttachment:'fixed',backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4c1bfd6-740f-4577-a3d0-0cb5b71fb2df/dgegfmb-0fd44017-6a3b-4550-b1b4-8664a6bd00fb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0YzFiZmQ2LTc0MGYtNDU3Ny1hM2QwLTBjYjViNzFmYjJkZlwvZGdlZ2ZtYi0wZmQ0NDAxNy02YTNiLTQ1NTAtYjFiNC04NjY0YTZiZDAwZmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0B89MtvpJhiKRISZj8tM2zssVWURGA960iF3In4GMGA)', backgroundPosition: 'left top'}}>
        <div className="hero-content text-white">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">IDATA<span className='text-[#0097B2]'>FOOT</span></h1>
            <p className="mb-5">Your go-to destination for live soccer scores, leagues, teams, and players info. Stay updated with the latest action in the world of football, all in one place.</p>
            {/* Call scrollToLiveScore function on button click */}
            <button className="btn hover:bg-white hover:text-[#0097B2] bg-[#0097B2] text-white" onClick={scrollToLiveScore}>Get Started</button>
          </div>
        </div>
      </div>
      <div className={`hero hidden lg:flex min-h-screen text-left ${!(props.navClick) && 'hidden'} flex px-3 mb-10`} style={{backgroundAttachment:'fixed',backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4c1bfd6-740f-4577-a3d0-0cb5b71fb2df/dgegfmb-0fd44017-6a3b-4550-b1b4-8664a6bd00fb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0YzFiZmQ2LTc0MGYtNDU3Ny1hM2QwLTBjYjViNzFmYjJkZlwvZGdlZ2ZtYi0wZmQ0NDAxNy02YTNiLTQ1NTAtYjFiNC04NjY0YTZiZDAwZmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0B89MtvpJhiKRISZj8tM2zssVWURGA960iF3In4GMGA)', backgroundPosition: 'top'}}>
        
        <div className="hero-content text-white mx-20">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">IDATA<span className='text-[#0097B2]'>FOOT</span></h1>
            <p className="mb-5">Your go-to destination for live soccer scores, leagues, teams, and players info. Stay updated with the latest action in the world of football, all in one place.</p>
            {/* Call scrollToLiveScore function on button click */}
            <button className="btn hover:bg-white hover:text-[#0097B2] bg-[#0097B2] text-white" onClick={scrollToLiveScore}>Get Started</button>
          </div>
        </div>
      </div>
      <div id='livescore' className='flex flex-row lg:space-x-8 lg:px-20 justify-center'>
        <div className={`${props.navClick && 'hidden'} w-full lg:w-2/5 lg:flex`}>
          <Leagues/>
        </div>
        
        <div className={`${!(props.navClick) && 'hidden'} w-full px-3 md:px-28 lg:px-0 lg:w-3/4 lg:grid`}>
          <Livescore/>
        </div>
        
        <div className='hidden lg:w-2/5 lg:flex'>
          <News />
        </div>
      </div>
    </div>
  );
}
