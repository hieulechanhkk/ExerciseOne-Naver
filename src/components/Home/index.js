import React from 'react';
import phone_one from '../../smartphone1.png'
import phone_two from '../../smartphone2.png'
function Home(props) {
    return (
        <div id='home' className='home'>
            <div className='store-container'>
                <h3 data-aos="zoom-in" data-aos-duration="900">Food app</h3>
                <h1 data-aos="zoom-in" data-aos-duration="1000">Why stay hungry
                    when you can order
                    form Bella Onojie
                </h1>
                <h2>Download the bella onoje’s
                    food app now on
                </h2>
                <div data-aos="fade-up" data-aos-duration="700" className='btn-store'>
                    <button>Playstore</button>
                    <button>App store</button>
                </div>
            </div>

            <div className='img-sps'>
                <img src={phone_one}></img>
                <img src={phone_two}></img>
            </div>
            <div className='underline-desktop'></div>
            <div className='home-footer'>How the app works</div>
        </div>
    );
}

export default Home;