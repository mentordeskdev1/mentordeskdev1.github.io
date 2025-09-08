import { Button } from "@/components/ui/button";
import {
  Check,
  Shield,
  Calendar,
  Headphones,
  MessageCircle,
  Users,
  Award,
  Target,
  Crown,
  Zap,
  Star,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function PlanSection() {
  // Comprehensive feature list for all plans
  const allFeatures = [
    {
      id: "mentoring",
      text: "Expert Mentoring Sessions for immediate clarity",
    },
    {
      id: "doubt_clearance",
      text: "Real-time Doubt Clearance and guidance",
    },
    { id: "roadmap", text: "Personalized Career Roadmap Planning" },
    { id: "domain_mocks", text: "Technical Mock Interviews" },
    { id: "final_mock", text: "Comprehensive Final Assessment" },
    {
      id: "feedback_score",
      text: "Instant Performance Feedback & Scoring",
    },
    { id: "communication", text: "Advanced Communication & Soft Skills" },
    { id: "resume_linkedin", text: "Complete Resume & LinkedIn Profile Makeover" },
    { id: "salary_negotiation", text: "Strategic Salary Negotiation Training" },
    { id: "work_life_balance", text: "Work-Life Balance & Productivity Tips" },
    {
      id: "milestone_feedback",
      text: "Progress Tracking with Milestone Reviews",
    },
    { id: "personal_branding", text: "Personal Brand Development Strategy" },
    {
      id: "priority_support",
      text: "24/7 Priority Mentor Support",
    },
    { id: "certification", text: "Industry-Recognized Completion Certificate" },
    {
      id: "leaderboard",
      text: "Performance Leaderboard & Competition",
    },
    {
      id: "dream_role_roadmap",
      text: "Dream Role Achievement Roadmap",
    },
    {
      id: "comprehensive_feedback",
      text: "Deep Analysis & Continuous Improvement Feedback",
    },
    {
      id: "expert_certification",
      text: "Expert-Endorsed Professional Certification",
    },
    {
      id: "leaderboard_recognition",
      text: "Top Performer Recognition & Job Referrals",
    },
    {
      id: "job_referrals",
      text: "Direct Job Referrals & Opportunity Access",
    },
    {
      id: "progress_tracking",
      text: "Detailed Progress Tracking & Analytics",
    },
    {
      id: "extension_option",
      text: "Growth-Based Program Extension Options",
    },
    {
      id: "group_sessions",
      text: "Collaborative Group Development Sessions",
    },
    {
      id: "leadership_training",
      text: "Leadership & Management Skills Training",
    },
  ];

  const plans = [
    {
      id: "starter",
      name: "Starter",
      subtitle: "Clarity Call",
      duration: "30 Minutes",
      validity: "Same Day",
      type: "1-on-1 Session",
      sessions: 1,
      dcSessions: 1,
      mocks: 0,
      overallMocks: 0,
      bestFor: "Professionals needing immediate clarity on specific career challenges and quick solutions",
      icon: Target,
      // Features available in this plan
      availableFeatures: [
        "mentoring",
        "feedback_score",
      ],
      color: "green",
      gradient: "from-green-50 to-emerald-100",
      border: "border-green-300",
      text: "text-green-800",
      bg: "bg-green-100",
    },
    {
      id: "pro",
      name: "Pro",
      subtitle: "Growth Sprint",
      duration: "2 Weeks (Extendable)",
      validity: "1 Month",
      type: "1-on-1 Session",
      sessions: 8,
      dcSessions: 12,
      mocks: 2,
      overallMocks: 1,
      bestFor:
        "Professionals seeking deep analysis of their exact problems with tracking, soft skills development, resume building, and job referrals",
      icon: Zap,
      // Features available in this plan
      availableFeatures: [
        "mentoring",
        "doubt_clearance",
        "roadmap",
        "domain_mocks",
        "final_mock",
        "feedback_score",
        "communication",
        "resume_linkedin",
        "salary_negotiation",
        "milestone_feedback",
        "personal_branding",
        "priority_support",
        "certification",
        "comprehensive_feedback",
        "progress_tracking",
        "job_referrals",
      ],
      color: "blue",
      gradient: "from-blue-50 to-indigo-100",
      border: "border-blue-300",
      text: "text-blue-800",
      bg: "bg-blue-100",
      isPopular: true,
    },
    {
      id: "elite",
      name: "Elite",
      subtitle: "Career Mastery",
      duration: "1 Month (Growth-Based Extension)",
      validity: "3 Months",
      type: "1-on-1 and Group Session",
      sessions: 16,
      dcSessions: 24,
      mocks: 4,
      overallMocks: 2,
      bestFor:
        "All Pro plan features + Self-development focus, leadership skills, and long-term growth with extension possibilities based on progress",
      icon: Crown,
      // Features available in this plan (all features)
      availableFeatures: [
        "mentoring",
        "doubt_clearance",
        "roadmap",
        "domain_mocks",
        "final_mock",
        "feedback_score",
        "communication",
        "resume_linkedin",
        "salary_negotiation",
        "work_life_balance",
        "milestone_feedback",
        "personal_branding",
        "priority_support",
        "certification",
        "leaderboard",
        "dream_role_roadmap",
        "comprehensive_feedback",
        "expert_certification",
        "leaderboard_recognition",
        "job_referrals",
        "progress_tracking",
        "extension_option",
        "group_sessions",
        "leadership_training",
      ],
      color: "purple",
      gradient: "from-purple-50 to-violet-100",
      border: "border-purple-300",
      text: "text-purple-800",
      bg: "bg-purple-100",
      isPremium: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-blue-50/20 via-purple-50/20 to-pink-50/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 via-red-100 to-pink-100 rounded-full px-6 py-3 mb-6 animate-pulse shadow-lg">
            <Star className="w-4 h-4 text-orange-600 mr-2" />
            <span className="text-orange-600 text-sm font-bold tracking-wide">
              🔥 UPDATED PLAN STRUCTURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your career with industry experts, daily support, live
            mentoring sessions, and personalized guidance
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl group backdrop-blur-sm ${
                  plan.isPopular
                    ? "bg-gradient-to-br from-blue-50 to-indigo-100 border-3 border-blue-400 shadow-2xl scale-105 ring-4 ring-blue-200 ring-opacity-50"
                    : plan.isPremium
                      ? "bg-gradient-to-br from-purple-50 to-violet-100 border-3 border-purple-400 shadow-xl ring-4 ring-purple-200 ring-opacity-50"
                      : "bg-gradient-to-br from-green-50 to-emerald-100 border-3 border-green-400 shadow-lg"
                }`}
                data-testid={`card-plan-${plan.name.toLowerCase()}`}
              >
                {/* Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full text-sm font-black shadow-2xl border-3 border-white animate-bounce text-nowrap">
                      🔥 MOST POPULAR
                    </div>
                  </div>
                )}

                {plan.isPremium && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-3 rounded-full text-sm font-black shadow-2xl border-3 border-white text-nowrap">
                      ⭐ PREMIUM CHOICE
                    </div>
                  </div>
                )}

                {!plan.isPopular && !plan.isPremium && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full text-sm font-black shadow-2xl border-3 border-white text-nowrap">
                      🚀 PERFECT START
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8 pt-6">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className={`w-10 h-10 ${plan.text}`} />
                  </div>

                  <h3 className="text-3xl font-black text-gray-900 mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Plan Type */}
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-bold text-sm">
                      {plan.type}
                    </span>
                  </div>

                  {/* Sessions Info */}
                  <div className="bg-white rounded-2xl p-6 shadow-inner mb-6 border-2 border-gray-100">
                    <div className="text-4xl font-black  mb-2 text-blue-800">
                      {plan.sessions}
                    </div>
                    <div className="text-lg font-bold mb-3 text-blue-600">
                      Mentoring Sessions
                    </div>

                    <div className="text-4xl font-black  mb-2 text-green-800">
                      {plan.dcSessions}
                    </div>
                    <div className="text-lg font-bold mb-3 text-green-600">
                      Assistance Sessions
                    </div>

                    {/* <div className="text-4xl font-black mb-2 text-purple-800">
                      {plan.mocks} + {plan.overallMocks}
                    </div>
                    <div className="text-lg font-bold mb-3 text-purple-600">
                      Normal Mock + Overall Mock
                    </div> */}
                  </div>

                  {/* Best For */}
                  <div
                    className={`p-4 rounded-xl mb-6 ${plan.bg} border-2 ${plan.border}`}
                  >
                    <p
                      className={`text-sm font-black ${plan.text} leading-relaxed`}
                    >
                      💡 Best for: {plan.bestFor}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-white rounded-2xl p-6 shadow-inner mb-8 border-2 border-gray-100">
                  <h4 className="text-lg font-black text-gray-800 mb-4 text-center border-b-2 border-gray-200 pb-3">
                    ✨ What's Included:
                  </h4>
                  <ul className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                    {allFeatures.map((feature, featureIndex) => {
                      const isAvailable = plan.availableFeatures.includes(
                        feature.id,
                      );
                      return (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3 text-sm"
                        >
                          <div
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              isAvailable
                                ? plan.color === "blue"
                                  ? "text-blue-500"
                                  : plan.color === "purple"
                                    ? "text-purple-500"
                                    : "text-green-500"
                                : "text-gray-300"
                            }`}
                          >
                            {isAvailable ? (
                              <Check className="w-5 h-5" />
                            ) : (
                              <span className="text-xl">✗</span>
                            )}
                          </div>
                          <span
                            className={`leading-relaxed font-medium ${
                              isAvailable
                                ? "text-gray-800"
                                : "text-gray-400 line-through"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Duration Details */}
                {/* <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 border-2 border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-black text-blue-800 mb-1">
                        {plan.duration}
                      </div>
                      <div className="text-xs font-bold text-blue-600">
                        Program Duration
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-black text-green-800 mb-1">
                        {plan.validity}
                      </div>
                      <div className="text-xs font-bold text-green-600">
                        Access Validity
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* WhatsApp Button */}
                <Button
                  className="w-full py-6 font-bold text-lg bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl group border-2 border-white/20 backdrop-blur-sm rounded-2xl"
                  onClick={() => {
                    window.open(
                      "https://wa.me/6369997653?text=Hi, I would like to know more about the mentorship program.",
                      "_blank",
                    );
                  }}
                  data-testid={`button-whatsapp-${plan.name.toLowerCase()}`}
                >
                  <div className="flex items-center justify-center">
                    <FaWhatsapp className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                    <span className="tracking-wide">WhatsApp Now</span>
                  </div>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Guarantees */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white w-8 h-8" />
              </div>
              <span className="text-lg font-bold text-gray-800">
                5-Day Money-Back Guarantee
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-white w-8 h-8" />
              </div>
              <span className="text-lg font-bold text-gray-800">
                Flexible Rescheduling
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4">
                <Headphones className="text-white w-8 h-8" />
              </div>
              <span className="text-lg font-bold text-gray-800">
                24/7 Support Included
              </span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto shadow-2xl border-2 border-blue-200">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                Ready to Accelerate Your Career Growth? 🚀
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Whether you need instant clarity, deep analysis, or long-term growth mastery - 
                our expert mentors are ready to guide you to success. Choose your path and start your transformation today!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white px-12 py-6 text-xl font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 rounded-2xl"
                onClick={() => {
                  const message = `Hi! I want to know more about your career transformation plans and get started with my journey. 

🎯 I'm looking for:
• Expert mentorship and guidance
• Mock interview preparation  
• Career roadmap planning
• Job readiness training

Can you help me choose the right plan and get started?`;

                  window.open(
                    `https://wa.me/6369997653?text=${encodeURIComponent(message)}`,
                    "_blank",
                  );
                }}
                data-testid="button-whatsapp-main"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat with Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
