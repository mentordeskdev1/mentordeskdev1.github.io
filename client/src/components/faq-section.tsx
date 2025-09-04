import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How are experts matched to candidates?",
      answer: "Our admin team manually assigns experts based on your chosen domain, specific tech stack preferences, and experience level. Each expert specializes in the technologies and frameworks you'll be working with, ensuring relevant and targeted interview practice.",
    },
    {
      id: 2,
      question: "What happens if I have technical issues during the interview?",
      answer: "We provide backup links (Zoom/Meet) that are always visible during your interview. If our in-app room has issues, you can instantly switch to the backup link. We also include a pre-interview device test to catch potential problems early.",
    },
    {
      id: 3,
      question: "How does the job opportunity pathway work?",
      answer: "Premium users who rank high on our leaderboard get access to partner company referrals. Our admin team exports top performers' profiles to hiring partners who are actively looking for candidates with specific skills and experience levels.",
    },
    {
      id: 4,
      question: "Can I reschedule or cancel my interview?",
      answer: "Yes, you can reschedule up to 24 hours before your interview without penalty. Cancellations within 24 hours will use one of your plan's attempts, but we offer flexible rescheduling to accommodate your needs.",
    },
    {
      id: 5,
      question: "What's included in the personalized improvement plan?",
      answer: "Premium users receive a detailed human-created plan targeting your specific weaknesses. This includes recommended study materials, practice problems, areas to focus on, and a timeline for improvement based on your target role and experience level.",
    },
    {
      id: 6,
      question: "Do you use any AI in the interview process?",
      answer: "No, we deliberately avoid AI throughout our entire process. All interviews are conducted by real industry experts, all feedback is human-written, and all expert assignments are done manually by our admin team. This ensures personalized, nuanced insights that only human experience can provide.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about MockInterview Pro
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              data-testid={`faq-${faq.id}`}
            >
              <button 
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(faq.id)}
                data-testid={`faq-toggle-${faq.id}`}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown 
                  className={`text-gray-400 transition-transform w-5 h-5 ${
                    openFAQ === faq.id ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {openFAQ === faq.id && (
                <div 
                  className="mt-4 text-gray-600"
                  data-testid={`faq-answer-${faq.id}`}
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
