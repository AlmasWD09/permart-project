import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs = [
        { question: "What is Pet & beyond app, and how does it work?", answer: "Pet & Beyond is a marketplace where pet owners can buy and sell essential pet products, including food, accessories, grooming items, and more. Users can browse listings, connect with sellers, and make purchases with ease." },
        { question: "Is my personal data safe with Pet & Beyond?", answer: "Click on the Sign Up button and fill in your details to create an account." },
        { question: "How do I buy products on Pet & Beyond?", answer: "We offer both free and paid courses. Check the course details for pricing." },
        { question: "Can I sell my pet products on Pet & Beyond?", answer: "Yes, we offer a refund within 7 days of purchase. Terms apply." },
        { question: "Does Pet & Beyond offer delivery services?", answer: "We accept credit/debit cards, PayPal, and other online payment options." },
        { question: "What should I do if I experience technical issues with the app?", answer: "We accept credit/debit cards, PayPal, and other online payment options." },
    ];

    return (
        <div className="pt-[48px] pb-6 lg:pb-[133px]">
            <h1 className="text-[20px] text-wrap md:text-[36px] text-[#000000]  font-Poppins text-center">Frequently asked questions (FAQs)</h1>

            <div className="max-w-4xl mx-auto mt-10 bg-[#FFFFFF] p-8 rounded-xl">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b pb-2">
                            <button
                                className="flex justify-between items-center w-full md:p-4  md:text-[20px] font-Poppins text-[#172B4D] font-medium rounded-lg  transition duration-200"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <FaChevronDown className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                            </button>
                            {openIndex === index && (
                                <p className="mt-2 p-4 text-[16px] font-Poppins text-[3E4F6B] rounded-md">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq