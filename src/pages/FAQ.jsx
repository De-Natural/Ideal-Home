import { useState } from "react";
import SocialFollow from "../component/SocialFollow";
import { useTranslation } from "react-i18next";

export default function FAQ() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(0);

    const faqData = [
        {
            question: "How do I book a stay?",
            answer: "Search for a location, select your dates and number of guests, then choose a listing you like. Review the details and tap Reserve to complete your booking."
        },
        {
            question: "Can I cancel my booking?",
            answer: "Yes, you can cancel your booking according to the cancellation policy specified in your reservation. Please review the cancellation terms before booking."
        },
        {
            question: "How do I save a listing?",
            answer: "To save a listing, click the heart icon on any property card. You can view all your saved listings in your account under 'Saved Listings'."
        },
        {
            question: "How do hosts get paid?",
            answer: "Hosts receive payment directly to their registered bank account or payment method within 24 hours after a guest checks in. We ensure secure and timely transactions."
        },
        {
            question: "What should I do if I have an issue with a stay?",
            answer: "Contact our 24/7 support team immediately through the app or website. We'll work with you and the host to resolve any issues promptly."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <>
            <div className="w-full flex flex-col items-center py-12 px-6 mb-4">
                <div className="max-w-4xl w-full">
                    <h1 className="text-center font-[inter] text-2xl md:text-4xl not-italic font-bold leading-tight text-gray-900 mb-4">
                        {t('faq.title')}
                    </h1>
                    <p className="text-center text-sm md:text-lg not-italic font-normal leading-6 text-[#777] mb-12">
                        {t('faq.subtitle')}
                    </p>

                    <div className="flex flex-col gap-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-2xl bg-white transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <h3 className="font-[inter] text-base md:text-xl font-semibold text-gray-900">
                                        {faq.question}
                                    </h3>
                                    <svg
                                        className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {openIndex === index && (
                                    <div className="px-6 pb-6">
                                        <p className="font-[inter] text-sm md:text-base font-normal leading-6 text-[#777]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <SocialFollow />
        </>
    );
}
