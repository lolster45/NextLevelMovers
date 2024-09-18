// src/components/FAQ.js
import React, { useState } from 'react';
//import { faqData } from '../data/faqData';


//Styles...
import '../styles/faqPage.scss'

const FAQ = () => {

    // src/data/faqData.js
    const faqData = [
        {
            question: "What services do professional movers provide?",
            answer: "Professional movers offer a range of services including packing, loading, transporting, unloading, and unpacking your belongings. They also provide storage solutions and specialized services like handling fragile items."
        },
        {
            question: "How do I prepare for a move with professional movers?",
            answer: "To prepare for a move, start by decluttering and organizing your belongings. Create an inventory list, pack your items in boxes, and label them accordingly. Notify your movers of any special requirements or fragile items."
        },
        {
            question: "What factors affect the cost of moving services?",
            answer: "The cost of moving services is affected by factors such as the distance of the move, the size of your home, the number of items, the type of services required (e.g., packing, storage), and the time of year."
        },
        {
            question: "Do professional movers offer insurance?",
            answer: "Yes, professional movers typically offer insurance options to protect your belongings during the move. It's important to discuss coverage options with your moving company and choose the insurance that best meets your needs."
        },
        {
            question: "How far in advance should I book my move?",
            answer: "It's recommended to book your move at least 4-6 weeks in advance, especially if you're moving during peak seasons. This ensures availability and allows time to plan and coordinate the details of your move."
        }
    ];




    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div
                            className="faq-question"
                            onClick={() => handleToggle(index)}
                        >
                            <h2>{item.question}</h2>
                            <span>{activeIndex === index ? '−' : '+'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
