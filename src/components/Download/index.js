import React from 'react';

function Download(props) {
    return (
        <div className='download'>
            <h1 className='text-white'>Download the app now</h1>
            <h2 className='slogan-one'>
                Most calendars are
                designed for teams.
            </h2>
            <h2 className='slogan-two'>
                Available on your favorite store. Start your premium experience now
            </h2>
            <div data-aos='zoom-in'
                data-aos-duration="1000"  className='btn-download'>
                <button>Buy now</button>
                <button>Try for free</button>
            </div>
        </div>
    );
}

export default Download;