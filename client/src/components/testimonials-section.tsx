import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Frontend Developer at Google",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      testimonial: "After 3 Premium sessions, I went from getting 1 callback in 20 applications to landing 5 interviews in a week. The personalized feedback was game-changing!",
      domain: "Frontend Domain",
      plan: "Premium Plan",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      domainColor: "text-blue-600",
    },
    {
      id: 2, 
      name: "Sarah Kim",
      role: "Senior Backend Engineer at Stripe", 
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      testimonial: "The expert matched my exact tech stack and gave me insights I couldn't find anywhere else. Got referred to my dream job through their partner network!",
      domain: "Backend Domain", 
      plan: "Premium Plan",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      domainColor: "text-green-600",
    },
    {
      id: 3,
      name: "Mike Rodriguez", 
      role: "Full-Stack Dev at Netflix",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      testimonial: "Intermediate plan was perfect for understanding my weak points. The detailed feedback helped me improve systematically over 3 sessions.",
      domain: "Full-Stack Domain",
      plan: "Intermediate Plan", 
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100",
      domainColor: "text-purple-600",
    },
  ];

  const stats = [
    { number: "2,500+", label: "Mock Interviews" },
    { number: "85%", label: "Success Rate" },
    { number: "150+", label: "Expert Interviewers" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-gradient-primary">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real career transformations from our community of successful candidates.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`bg-gradient-to-br ${testimonial.bgColor} rounded-2xl p-8 border ${testimonial.borderColor}`}
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar}
                  alt={`${testimonial.name} profile`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.testimonial}"
              </blockquote>
              <div className={`border-t ${testimonial.borderColor.replace('border-', 'border-t-')} pt-4`}>
                <div className="flex justify-between text-sm">
                  <span className={`${testimonial.domainColor} font-medium`}>{testimonial.domain}</span>
                  <span className="text-gray-500">{testimonial.plan}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Row */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} data-testid={`stat-${index}`}>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
