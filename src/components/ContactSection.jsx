//React...
import React, { useState } from 'react';

//React observer...
import { useInView } from 'react-intersection-observer';

//Styles...
import '../styles/ContactSection.scss'

const ContactSection = ({contactSectionRef}) => {

    const [formSuccess, setFormSuccess] = useState("");
    const [contactForm, setContactForm] = useState({
        firstName: '',
        lastName: '',
        fromZip: '',
        toZip: '',
        email: ''
    })

    const { ref, inView } = useInView({threshold: 0.1, triggerOnce: true});
    const { ref: ref2, inView: inView2 } = useInView({threshold: 0.1, triggerOnce: true});


    //Regular expression for email from user...
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleFormChange = (e) => {
        const {name, value} = e.target;

        setContactForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if(contactForm.firstName && contactForm.lastName && contactForm.fromZip && contactForm.toZip && contactForm.email){
      
              if(!emailPattern.test(contactForm.email)) {
                return;
              }              
    
              sendEmail(e);
              setFormSuccess('Thank You For Your Submission!');
              setContactForm({
                   firstName: '',
                   lastName: '',
                   fromZip: '',
                   toZip: '',
                   email: ''
              });
            }
            
        } 
        catch (error) {
            setFormSuccess("Error submitting...");
            setContactForm({
                firstName: '',
                lastName: '',
                fromZip: '',
                toZip: '',
                email: ''
           });
            console.log("Error submitting...", error);
        }

    };

    const sendEmail = async (e) => {
        try {
          await emailjs.sendForm('service_hx0jbdk', 'template_9tzs7jg', e.target, "erPViWxQ1qZOo9WGO");
        } 
        catch (error) {
          console.error('Error sending email:', error);
        }
    };


    return (
        <section ref={contactSectionRef} className="contact-section">
                <div ref={ref} className={`left-contact ${inView ? 'fadeIn' : ''}`}>
                    <h1>Get Your Free Quote</h1>
                    <p>Im a paragraph, you can put things here</p>
                </div>
                <form ref={ref2} className={`form-wrap ${inView2 ? 'fadeIn' : ''}`} onSubmit={handleSubmit}>
                    <div className='zip-location-wrap'>
                        <label>
                            Moving From Zip Code*
                            <input 
                                type="text" 
                                className='input-design'
                                onChange={handleFormChange}
                                name='fromZip'
                                pattern="\d{5}" 
                                maxlength="5"
                                value={contactForm.fromZip} 
                                required
                            />
                        </label>
                        <label>
                            Moving To Zip Code*
                            <input 
                                type="text" 
                                className='input-design' 
                                name='toZip'
                                pattern="\d{5}" 
                                maxlength="5"
                                value={contactForm.toZip}
                                onChange={handleFormChange}
                                required 
                            />
                        </label>
                    </div>
                    <div className='first-last-name-wrap'>
                        <label>
                            First Name*
                            <input 
                                type="text" 
                                className='input-design'
                                name='firstName'
                                value={contactForm.firstName} 
                                onChange={handleFormChange}
                            />   
                        </label>
                        <label>
                            Last Name*
                            <input 
                                type="text" 
                                className='input-design'
                                name='lastName'
                                value={contactForm.lastName}
                                onChange={handleFormChange}
                            />
                        </label>
                    </div>
                    <label className='phone-label'>
                        Email
                        <input 
                            type="email" 
                            className='input-design phone'
                            name='email'
                            value={contactForm.email}
                            onChange={handleFormChange}
                        />
                        {formSuccess &&
                            <span>{formSuccess}</span>
                        }
                    </label>
                    <button>Submit</button>
                </form>
        </section>
    );
};

export default ContactSection;