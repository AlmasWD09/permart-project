import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs = [
        { question: "How Paws&Buy Works?", answer: "Sign up and set up your profile.Upload product details, set a price, and describe the condition.Search for items, filter by category, and purchase securely.Transactions are handled safely via Stripe.Sellers can use prepaid shipping labels or arrange their own.A small fee ensures buyers can request refunds if needed.If an item isn’t as described, buyers can open a dispute." },


        { question: "Is my personal information secure on Paws&Buy?", answer: "Specialized for pet lovers – Unlike general marketplaces, it focuses only on pet products Easy & secure transactions – Buyers and sellers have protection through verified payments.Eco-friendly – Encourages recycling and reusing pet items instead of discarding them." },


        { question: "How do I buy a product on Paws&Buy?", answer: "Browse categories or search for specific items.Read reviews before purchasing.Click Buy Now and complete the transaction via Stripe.Sellers receive a prepaid label, and buyers can track orders.Once received, confirm in the app or open a dispute if needed." },


        { question: "Can I sell second-hand pet products on Paws&Buy?", answer: "Sign up or log in to get started.Upload photos, write a description, and set a price.Chat with buyers and finalize the sale.Use our integrated shipping for a smooth transaction.Once confirmed by the buyer, you get paid securely." },


        { question: "Does Paws&Buy offer delivery services?", answer: "Choose from available courier options. Prepaid labels make shipping easy.Drop off the item or schedule a pickup. Both sellers and buyers can monitor shipments in real-time." },


        { question: "What should I do if I have technical issues with the Paws&Buy app?", answer: "Close and reopen it to check if the issue resolves.Ensure stable Wi-Fi or mobile data.Download the latest version from the App Store or Google Play.On Android, go to settings and clear the app cacheLog in from another device to test functionality. If problems persist, email info@pawsandbuy.com with error details and screenshots." },
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