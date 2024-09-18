import React from 'react';

//Components...
import ContactSection from '../components/ContactSection';

//React icons
import { FaTruckMoving } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";

//React obserber...
import { useInView } from 'react-intersection-observer';

//Styles...
import '../styles/ContactPage.scss'

const Contact = () => {


    const { ref: ref2, inView: inView2 } = useInView({threshold: 0.1, triggerOnce: true});
    const { ref: ref3, inView: inView3 } = useInView({threshold: 0.1, triggerOnce: true});


    const serviceCardsData = [
        {
            symbol: FaTruckMoving,
            title: 'Same-Day Delivery',
            description: 'Packing, loading, transporting, and unloading'
        },
        {
            symbol: MdDesignServices,
            title: 'Full-Service Moving',
            description: 'For rentals, pods, and ABF trailers'
        },
        {
            symbol: IoMdPricetags,
            title: 'Flexible Pricing',
            description: 'Hourly or flat rates to suit your needs'
        },
        {
            symbol: FaPerson,
            title: 'Labor-Only Services',
            description: 'Yard work, painting, cleaning, junk removal, and more'
        }
    ];


    return (
        <div className='contact-page'>
            <section className='service-section'>
                <h2>Service Highlights</h2>
                <div className='service-cards-wrap'>
                    {serviceCardsData.map(({ symbol: Icon, title, description }, index) => {
                        const { ref, inView } = useInView({
                            threshold: 0.1,
                            triggerOnce: true,
                        });
                        return (
                            <div key={index} ref={ref} className={`service-card ${inView ? 'fadeIn' : ''}`}>
                                <Icon />
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </section>
            <section className="locations">
                <h2 ref={ref2} className={`${inView2 ? 'fadeIn' : ''}`}>Locations We Serve</h2>
                <div ref={ref3} className={`location-wrap ${inView3 ? 'fadeIn' : ''}`}>
                    <ul>
                        <li>Buda, TX</li>
                        <li>Kyle, TX</li>
                        <li>Bee Cave, TX</li>
                        <li>Cedar Park, TX</li>
                    </ul>
                    <ul>
                        <li>Georgetown, TX</li>
                        <li>Horseshoe Bay, TX</li>
                        <li>Hutto, TX</li>
                        <li>Lago Vista, TX</li>
                    </ul>
                    <ul>
                        <li>Lake Travis, TX</li>
                        <li>Lakeway, TX</li>
                        <li>Round Rock, TX</li>
                        <li>San Marcos, TX</li>
                    </ul>
                    <ul>
                        <li>Leander, TX</li>
                        <li>Liberty Hill, TX</li>
                        <li>Manchaca, TX</li>
                        <li>Marble Falls, TX</li>
                    </ul>
                    <ul>
                        <li>North Austin, TX</li>
                        <li>Pflugerville, TX</li>
                        <li>Sunset Valley, TX</li>
                        <li>West Lake Hills, TX</li>
                    </ul>

                </div>
            </section>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440900.25079231826!2d-98.08539811942042!3d30.307347728714074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1726509878220!5m2!1sen!2sus" 
                height="500" 
                style={{ border: 0, width: "100vw" }}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
            <ContactSection/>
        </div>
    );
};

export default Contact;