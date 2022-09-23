import React from 'react';
import smartphone_regis from '../../smartphone_regis.png'
import smartphone_explore from '../../smartphone_explore.png'
import smartphone_checkout from '../../smartphone_checkout.png'
function Content(props) {
    const list = [
        {
            title: "Create an account",
            bigTitle: "Create/login to an existing account to get started",
            desc: "An account is created with your email and a desired password",
            imgSrc: smartphone_regis
        },
        {
            title: "Explore while shopping",
            bigTitle: "Shop for your favorites meal as e dey hot.",
            desc: "Shop for your favorite meals or drinks and enjoy while doing it.",
            imgSrc: smartphone_explore
        },
        {
            title: "Checkout",
            bigTitle: "When you done check out and get it delivered.",
            desc: "When you done check out and get it delivered with ease.",
            imgSrc: smartphone_checkout
        }
    ]


    const print = list.map((e, index) => {
        return <div className={`content-item ${index % 2 == 0 ? 'flex-direction--row--reverse' : ''}`}>
            <div className='content-info'>
                <h2 className='orange-title'>{e.title}</h2>
                <h1>{e.bigTitle}</h1>
                <h2>{e.desc}</h2>
            </div>
            <img data-aos='fade-up'
                data-aos-duration="1000" src={e.imgSrc}></img>
        </div>
    })
    return (
        <div className='content'>
            {print}
        </div>
    );
}

export default Content;