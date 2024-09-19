//React...
import React from 'react';

//Components...
import Services from '../components/Services';
import ContactSection from '../components/ContactSection';

//Styles...
import '../styles/ServicesPage.scss'

const ServicesPage = ({contactSectionRef}) => {
    return (
        <div className='services-page'>
            <h1>Hour </h1>
            <Services/>
            <ContactSection contactSectionRef={contactSectionRef}/>
        </div>
    );
};

export default ServicesPage;