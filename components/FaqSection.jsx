'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "What types of properties are available?",
    answer: "We offer a wide range of properties including urban apartments, countryside homes, and vacation rentals.",
  },
  {
    question: "How do I schedule a property tour?",
    answer: "You can schedule a tour by contacting us through our website or directly via phone or WhatsApp.",
  },
  // Add more FAQ items here...
  {
    question: "What is the rental process?",
    answer: "The rental process is simple. Find a property you like, schedule a visit, and complete the application online.",
  },
  {
    question: "Are pets allowed in the rental properties?",
    answer: "Pet policies vary by property. Please check individual property listings for more information.",
  },
  {
    question: "Do you offer short-term leases?",
    answer: "Yes, we offer flexible lease options including short-term and vacation rentals.",
  },
  {
    question: "What is included in the rent?",
    answer: "Rent typically includes property maintenance and access to amenities. Utilities may vary by property.",
  },
  {
    question: "How do I pay my rent?",
    answer: "You can pay your rent online through our secure payment portal.",
  },
  {
    question: "What is the security deposit?",
    answer: "Security deposits vary by property but typically equal one month’s rent.",
  },
  {
    question: "Do you offer furnished properties?",
    answer: "Yes, we offer both furnished and unfurnished properties depending on your needs.",
  },
  {
    question: "How can I list my property for rent?",
    answer: "To list your property, simply contact us, and we’ll guide you through the listing process.",
  },
  {
    question: "Can I rent a vacation property for a weekend?",
    answer: "Yes, we offer vacation properties with flexible booking options including weekends and longer stays.",
  },
  {
    question: "What if I have a maintenance issue?",
    answer: "Our maintenance team is available 24/7 to address any issues. You can report them via our website.",
  },
  {
    question: "Is there a fee for breaking a lease early?",
    answer: "Early termination fees depend on the terms of your lease agreement. Please review your lease or contact us.",
  },
  {
    question: "Are there any move-in specials?",
    answer: "We frequently offer move-in specials and discounts. Check our listings for current offers.",
  },
  {
    question: "What types of amenities are available?",
    answer: "Amenities vary by property but often include pools, fitness centers, and community spaces.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-12 px-6 lg:px-24 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border-b-2 border-gray-300">
            <motion.h3
              onClick={() => toggleAccordion(index)}
              className="cursor-pointer py-4 text-xl font-semibold text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {item.question}
            </motion.h3>
            {activeIndex === index && (
              <motion.p
                className="pt-2 pb-4 text-gray-600"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
