//React...
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

//React obserber...
import { useInView } from 'react-intersection-observer';

//Styles...
import '../styles/Services.scss'

const Services = () => {

    const location = useLocation()

    const path = location.pathname.split("/")[1];
    const { ref, inView } = useInView({threshold: 0.8, triggerOnce: true});

    const serviceCards = [
        {
            title: "Local Moving",
            description: "We specialize in hassle-free local moves, ensuring a smooth transition to your new home or office. Our team handles everything with care, from packing to transport, within your city or nearby areas.",
            image: "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/08/moving-company-stories-feature.jpg"
        },
        {
            title: "Long Distance Moving",
            description: "Moving across the state or country? Our long-distance moving services offer reliable, safe transportation for your belongings, with tracking and support every step of the way.",
            image: "https://elementmoving.com/wp-content/uploads/2022/10/2-scaled.jpeg"
        },
        {
            title: "Packing & Unpacking",
            description: "Leave the packing to us! Our team carefully packs your items, ensuring they arrive in perfect condition. We also offer unpacking services to help you settle in quickly.",
            image: "https://www.nativevanlines.com/wp-content/uploads/2021/03/Native-Van-Lines-Packing-Services.jpg"
        },
        {
            title: "Same-Day Service",
            description: "In a rush? Our same-day moving service is designed for last-minute relocations, providing fast and efficient assistance to get you where you need to be, even on short notice.",
            image: "https://media.angi.com/s3fs-public/_man-unloading-cardboard-box-van-1422164284-.jpg?impolicy=leadImage"
        }
    ];

    
    return (
        <section className="services">
                <h2 ref={ref} className={`${inView ? 'fadeIn' : ''}`}>Our Services</h2>
                <div className='service-card-wrap'>
                    {serviceCards.map(card => {

                        const { ref, inView } = useInView({
                            threshold: 0.1,
                            triggerOnce: true,
                        });

                        return (
                            <div key={card.title} ref={ref} className={`card ${inView ? 'fadeIn' : ""}`}>
                                <img src={card.image} alt="" />
                                <div>
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                    {!path &&
                                        <button>
                                            <Link to={'/services'}>
                                                Read More
                                            </Link>
                                        </button>
                                    }
                                </div>
                            </div>
                        )
                    })}    
                </div>
        </section>
    );
};

export default Services;