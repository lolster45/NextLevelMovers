import React, {useEffect} from 'react';

//Components...
import Services from '../components/Services';
import NumberCounter from '../components/NumberCounter';
import ContactSection from '../components/ContactSection';

//React observer...
import { useInView } from 'react-intersection-observer';


//Carousel...
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//Styles...
import '../styles/Home.scss'



const Home = () => {


    const { ref, inView } = useInView({threshold: 0.1, triggerOnce: true});
    const { ref: ref2, inView: inView2 } = useInView({threshold: 0.1, triggerOnce: true});
    const { ref: ref3, inView: inView3 } = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: ref4, inView: inView4 } = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: ref5, inView: inView5 } = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: ref6, inView: inView6 } = useInView({threshold: 0.3, triggerOnce: true});


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };


    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const video = document.querySelector('.video-background');
          if (video) {
            video.style.transform = `translateY(${scrollPosition * 0.15}px)`;  // Adjust the multiplier for desired effect
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    useEffect(() => {
        //console.log("changed")
    }, inView)


    if(inView3) {

        console.log('inView3 changed')
    }



    return (
        <div className='home-page'>
            <section className='background-video'>
                <video autoPlay loop muted className='video-background'>
                    <source src='/background.mp4' type="video/mp4" />

                    Video tag not supported on your browswer
                </video>
                <div className='black-overlay'>
                    
                    <div ref={ref} className={`overlay-text ${inView ? 'fadeIn' : ""}`}>
                        <h1>Making Your Move Quick And Easy</h1>
                        <div className='main-contact'>
                            <div className='contact left'>
                                <div>Call Us</div>
                                <div>512-731-3636</div>
                            </div>
                            <div className='contact right'>
                                <div>Start Online</div>
                                <div>Get a free moving quote in seconds</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section> 
            <Services/>

            <section className="reviews-container">
                <h2 ref={ref2} className={`${inView2 ? 'fadeIn' : ''}`}>Our Happy Custumors</h2>
                <Slider {...settings}>
                    <div>
                        <p>Fantastic Service! The movers were on time, professional, and worked efficiently. They took great care of all my items, wrapping and packing everything perfectly.</p>
                        <h3>John M.</h3>
                    </div>
                    <div>
                        <p>Next Level Movers are the best! They made my move so easy and stress-free. The team was friendly, professinal, and handled all my items with care. Highly recommend.</p>
                        <h3>Sophia K.</h3>
                    </div>
                    <div>
                        <p>Couldnt be happier with the service! The moves were friendly, efficient and took great care of all my items. They made a potentially stressful day so much easier. Highly recommend.</p>
                        <h3>Linda H</h3>
                    </div>
                    <div>
                        <p>Really good poeple who know what they are doing. They completed everything so fast even i was suprised. Thank you again!</p>
                        <h3>Andrew S.</h3>
                    </div>
                </Slider>
            </section>

            
            <section className="info">
                <div className='info-left'>
                    <div ref={ref3}>
                        {inView3 && 
                            <NumberCounter targetNumber={21} duration={800} number='number'/>
                        }
                        <p>Places We Serve</p>
                    </div>
                    <div ref={ref4}>
                        {inView4 &&
                            <NumberCounter targetNumber={22} duration={1000} number='number'/>
                        }
                        <p>Years Of Experience</p>
                    </div>
                    <div ref={ref5}>
                        {inView5 &&
                            <NumberCounter targetNumber={3} duration={300} number='number'/>
                        }
                        <p>Offices WorldWide</p>
                    </div>
                    <div ref={ref6}>
                        {inView6 &&
                            <NumberCounter targetNumber={5} duration={400} number='number'/>
                        }
                        <p>HardWorkig People</p>
                    </div>
                </div>
                <img src="https://www.usnews.com/dims4/USNEWS/be2ed29/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F97%2Fa9%2F30d751a044c29bb00bead735dee8%2F211005-moving-company-stock-stock.jpg" alt="picture of company moving boxes" />
            </section>




            <ContactSection/> 
        </div>
    );
};

export default Home;