
import React from 'react';
import Featured from './Featured';
import Matches from './Matches/index';
import MeetPlayers from './MeetPlayers/index';
import Promotion from './Promotion/index';


const Home = () => {
    return (
        <div className="bck_blue">
            <Featured
            />
            <Matches />
            <MeetPlayers />
            <Promotion />
        </div>
    );
};

export default Home;