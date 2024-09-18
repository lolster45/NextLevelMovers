import React from 'react';

//Components...
import ContactSection from '../components/ContactSection';

//React observer...
import { useInView } from 'react-intersection-observer';


//Styles...
import '../styles/OurTeam.scss'

const OurTeam = () => {


    const { ref, inView } = useInView({threshold: 0.8, triggerOnce: true});

    const teamMembers = [
        {
            image: "https://cdn.prod.website-files.com/5fd2ba952bcd68835f2c8254/654553fedbede7976b97eaf5_Professional-5.remini-enhanced.webp",
            name: "Jacob L.",
            role: "Team Lead",
            description: "some random stuff here"
        },
        {
            image: "https://www.fusionphotopro.com/wp-content/uploads/2016/06/heasdshot-contemporary-mature-man-blues-705x524.jpg",
            name: "Mathew M.",
            role: "Their role in the team",
            description: "some random stuff here"
        },
        {
            image: "https://t3.ftcdn.net/jpg/06/50/24/56/360_F_650245616_WUPkDzObkPLVyegasDCeNhQXvFVVJoKn.jpg",
            name: "Lily F.",
            role: "Their role in the team",
            description: "some random stuff here"
        },
        {
            image: "https://t4.ftcdn.net/jpg/08/47/06/15/360_F_847061556_Eugvw1qMoqPpS73ukN3sFeYBKa10BhQs.jpg",
            name: "Gabriel S.",
            role: "Their role in the team",
            description: "some random stuff here"
        }
    ];
    



    return (
        <div className='ourTeam-page'>


            <div className='team-members-wrap'>
                <h2>Professional In their field</h2>
                <div>
                    {teamMembers.map(person => {

                        const { ref, inView } = useInView({
                            threshold: 0.1,
                            triggerOnce: true,
                        });

                        return (
                            <div ref={ref} className={`${inView ? 'fadeIn' : ''}`}>
                                <img src={person.image} alt="professinal picture of team members" />
                                <div>
                                    <h2>{person.name}</h2>
                                    <div>{person.role}</div>
                                    <p>{person.description}</p>
                                </div>
                            </div>

                        )
                    })

                    }
                </div>
            </div>

            <ContactSection/>

        </div>
    );
};

export default OurTeam;