import { CalendarPlus, UserCheck, Video, ChartLine, Briefcase, TestTube, Link, Code, Users, Map, BookOpen, Monitor, MessageSquare, TrendingUp, Headphones } from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      number: 1,
      title: "1-on-1 Mentorship",
      description: "Get matched with an expert mentor in your chosen field",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      number: 2,
      title: "Roadmap", 
      description: "Receive personalized learning path and career guidance",
      icon: Map,
      color: "from-green-500 to-green-600", 
      bgColor: "bg-green-500",
    },
    {
      number: 3,
      title: "Resources",
      description: "Access curated materials, tools, and learning content",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
    },
    {
      number: 4,
      title: "Live Monitor",
      description: "Real-time progress tracking with mentor oversight", 
      icon: Monitor,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500",
    },
    {
      number: 5,
      title: "Mock Interviews",
      description: "Practice sessions with industry-standard scenarios",
      icon: Video,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500",
    },
    {
      number: 6,
      title: "Feedback Review",
      description: "Detailed analysis and actionable improvement suggestions",
      icon: MessageSquare,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-500",
    },
    {
      number: 7,
      title: "Personal Growth",
      description: "Develop soft skills and professional confidence",
      icon: TrendingUp,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500",
    },
    {
      number: 8,
      title: "Job Assistance",
      description: "Career placement support and industry connections",
      icon: Briefcase,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500",
    },
  ];

  const processDetails = [
    {
      title: "Expert Matching",
      description: "AI-powered system matches you with the perfect mentor based on your goals and experience level",
      icon: UserCheck,
    },
    {
      title: "Progress Tracking", 
      description: "Real-time dashboard monitors your learning journey and milestone achievements",
      icon: ChartLine,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance and guidance throughout your mentorship experience",
      icon: Headphones,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
Complete mentorship journey from expert matching to career success - every step designed for your growth.
          </p>
        </div>
        
        {/* Interactive Workflow */}
        <div className="relative">
          {/* Connecting lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6 sm:gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={step.number} className="text-center group" data-testid={`step-${step.number}`}>
                  <div className="relative mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-white border-2 border-${step.bgColor} rounded-full flex items-center justify-center text-xs font-bold text-gray-700`}>
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Detailed Process Cards */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {processDetails.map((detail, index) => {
            const Icon = detail.icon;
            
            return (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg" data-testid={`detail-${index}`}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">{detail.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{detail.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
