
import { useNavigate } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import useFootballBody from "../../hooks/useFootballBody";
import type { MatcheModel } from "../../models/MatcheModel"



const Lastmatches = () => {
  const {matches} = useFootballBody()
  const navigate = useNavigate();
  return (
    <div className="lastMatches">
      <div className="section-hedear">
         <h2>UCL Match results</h2>
         <button>See More</button>
      </div>
     
       <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
            breakpoints={{
               1440: {
          slidesPerView:4
          },
          1024:{
             slidesPerView:4
          },
          768 :{
             slidesPerView:3
          },
          480:{
            slidesPerView:2
          },
          320:{
            slidesPerView:1
          }
            }}
      >
         {matches.slice(0, 3).map((match:MatcheModel) => (
        <SwiperSlide
          
          key={match.id?.fixtureId}
          
        >
          <div className="match-card" onClick={() => navigate(`/fixtures/${match.id.fixtureId}`)}>
          <h2>full time</h2>
          <div className="team">
            <img
              src={match.teams.home.logo}
              alt={match.teams.home.name}
              loading="lazy"
            />

            <h2>{match.teams.home.name}</h2>
            
            <div className="result">
              <h2>{match.allgoals?.fulltime?.home}</h2>
            </div>
          </div>

          

          <div className="team">
            <img
              src={match.teams.away.logo}
              alt={match.teams.away.name}
              loading="lazy"
            />

            <h2>{match.teams.away.name}</h2>

            <div className="result">
              <h2>{match.allgoals?.fulltime?.away}</h2>
            </div>
          </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Lastmatches;