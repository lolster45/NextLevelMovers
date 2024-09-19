//React...
import React from 'react';

//Components...
import ContactSection from '../components/ContactSection';

//Styles...
import '../styles/AboutUs.scss'

const AboutUs = ({contactSectionRef}) => {
    return (
        <div className='aboutUs-page'>
            <section className='who-whe-are'>
                <h2>Who We Are</h2>
                <div>
                    <div>
                        <h3>Serving the area for over 40 years</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nemo hic fugit eius expedita quasi nulla ipsum dolorem eaque laborum earum, consequuntur exercitationem esse</p>
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                    </div>
                    <img src="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b" alt="" />
                </div>    
            </section>
            <ContactSection contactSectionRef={contactSectionRef}/>
        </div>
    );
};

export default AboutUs;