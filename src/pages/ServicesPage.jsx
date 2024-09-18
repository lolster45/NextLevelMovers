import React from 'react';
import Services from '../components/Services';

//Styles...
import '../styles/ServicesPage.scss'
import ContactSection from '../components/ContactSection';

const ServicesPage = () => {
    return (
        <div className='services-page'>
            <h1>Hour </h1>

            <Services/>
            <ContactSection/>
        </div>
    );
};

export default ServicesPage;