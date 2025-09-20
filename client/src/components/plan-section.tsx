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
  CheckCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function PlanSection() {
  // Comprehensive feature list for all plans
  // Comprehensive feature list for all plans
  const allFeatures = [
    // 🌟 Instant Clarity (Day Plan)
    {
      id: "p1",
      key: "p1_mentor_session",
      text: "1-on-1 mentor session",
    },
    {
      id: "p1",
      key: "p1_career_query_analysis",
      text: "Detailed analysis of your career enquiries",
    },
    {
      id: "p1",
      key: "p1_mentor_insights",
      text: "Insights from mentors to guide your next steps",
    },
    {
      id: "p1",
      key: "p1_decision_support",
      text: "Effective decision-making support",
    },
    {
      id: "p1",
      key: "p1_clarity_boost",
      text: "Get unstuck and move forward with clarity",
    },
    {
      id: "p1",
      key: "p1_plan_extension",
      text: "Option to extend or upgrade plan",
    },

    // 🌟 Growth Sprint (Pro Plan)
    {
      id: "p2",
      key: "p2_mentor_sessions",
      text: "Multiple 1-on-1 mentor sessions",
    },
    {
      id: "p2",
      key: "p2_career_challenge_review",
      text: "Complete evaluation of your career challenge",
    },
    {
      id: "p2",
      key: "p2_actionable_guidance",
      text: "Actionable advice and practical solutions",
    },
    { id: "p2", key: "p2_structured_report", text: "Structured career growth report to overcome challenge" }, // split
    {
      id: "p2",
      key: "p2_career_roadmap",
      text: "Step-by-step career roadmap to overcome challenge",
    },
    {
      id: "p2",
      key: "p2_progress_tracking",
      text: "Ongoing progress tracking and support",
    },
    {
      id: "p2",
      key: "p2_mentor_feedback",
      text: "Mentor feedback and check-ins",
    },
    {
      id: "p2",
      key: "p2_career_resolution",
      text: "Resolve your career challenge and move forward",
    },
    {
      id: "p2",
      key: "p2_plan_extension",
      text: "Option to extend or upgrade plan",
    },

    // 🌟 Career Mastery (Elite Plan)
    {
      id: "p3",
      key: "p3_mentor_sessions",
      text: "Multiple personalized 1-on-1 mentor sessions",
    },
    {
      id: "p3",
      key: "p3_development_coach",
      text: "Access to personal development coach",
    },
    {
      id: "p3",
      key: "p3_career_evaluation",
      text: "In-depth evaluation of all your career challenges",
    },
    {
      id: "p3",
      key: "p3_career_report",
      text: "Structured career growth report to overcome challenges",
    },
    { id: "p3", key: "p3_career_roadmap", text: "Step-by-step career roadmap to overcome challenges" },
    {
      id: "p3",
      key: "p3_tracking_assistance",
      text: "Continuous tracking & assistance",
    },
    {
      id: "p3",
      key: "p3_advanced_feedback",
      text: "Advanced mentor feedback & check-ins",
    },
    {
      id: "p3",
      key: "p3_exclusive_masterclass",
      text: "Exclusive masterclass sessions",
    },
    {
      id: "p3",
      key: "p3_placement_support",
      text: "Placement preparation support",
    },
    { id: "p3", key: "p3_resume_support", text: "Resume building support" },
    { id: "p3", key: "p3_cv_guidance", text: "CV building guidance" },
    {
      id: "p3",
      key: "p3_communication_skills",
      text: "Master communication skills",
    },
    {
      id: "p3",
      key: "p3_confidence_productivity",
      text: "Boost confidence & productivity",
    },
    {
      id: "p3",
      key: "p3_career_transformation",
      text: "Transform your career, achieve success, and move forward",
    },
    { id: "p3", key: "p3_plan_extension", text: "Option to extend plan" },
  ];

  const plans = [
    {
      id: "p1",
      name: "Instant Clarity",
      description:
        "Get quick solutions and mentor insights to make decisive moves",
      question: "Unsure about your next step?",
      solution:
        "Get quick solutions and mentor insights to make decisive moves",
      duration: "1 Day",
      validity: "Same Day",
      type: "1-on-1 Connect",
      sessions: 1,
      dcSessions: 1,
      mocks: 0,
      overallMocks: 0,
      bestFor: [
        "Unsure which career path or domain to pursue",
        "Conflicted between multiple job offers and opportunities",
        "Unclear about how to switch industries or roles",
        "Struggling to make confident career decisions",
        "Overwhelmed by growth options and next steps etc...",
      ],
      icon: Target,
      // Features available in this plan
      availableFeatures: [
        "p1_mentor_session",
        "p1_career_query_analysis",
        "p1_mentor_insights",
        "p1_decision_support",
        "p1_clarity_boost",
        "p1_plan_extension",
      ],
      excludeFeatures: ["gs_extension"],
      color: "green",
      gradient: "from-green-50 to-emerald-100",
      border: "border-green-300",
      text: "text-green-800",
      bg: "bg-green-100",
      primaryBg: "bg-gradient-to-r from-green-500 to-emerald-600",
    },
    {
      id: "p2",
      name: "Growth Sprint",
      description: "Crack your toughest career challenge with expert guidance",
      question: "Facing a career challenge?",
      solution:
        "Get full analysis and actionable mentorship to overcome specific career challenges and achieve short-term measurable growth",
      duration: "1 Month",
      validity: "1 Month",
      type: "1-on-1 Connect",
      sessions: 12,
      dcSessions: 12,
      mocks: 2,
      overallMocks: 1,
      icon: Zap,
      bestFor: [
        "Struggling to crack interviews effectively",
        "Applying to jobs but rarely receiving interview calls",
        "Resume not standing out, failing to get recruiter attention",
        "Struggling to gain confidence in decision-making during transitions",
        "Finding it hard to negotiate offers or evaluate opportunities etc...",
      ],
      // Features available in this plan
      availableFeatures: [
        "p2_mentor_sessions",
        "p2_career_challenge_review",
        "p2_actionable_guidance",
        "p2_structured_report",
        "p2_career_roadmap",
        "p2_progress_tracking",
        "p2_mentor_feedback",
        "p2_career_resolution",
        "p2_plan_extension",
      ],
      excludeFeatures: ["gs_extension"],
      gradient: "from-purple-50 to-violet-100",
      border: "border-purple-300",
      text: "text-purple-800",
      bg: "bg-purple-100",
      primaryBg: "bg-gradient-to-r from-purple-500 to-violet-600",
      isPremium: true,
    },
    {
      id: "p3",
      name: "Career Mastery",
      description:
        "Personalized 360° mentorship to overcome all your challenges and transform your career",
      question: "Ready for career transformation?",
      solution:
        "Get in-depth analysis across all challenges, actionable solutions, and completion milestones for long-term growth",
      duration: "2 Months",
      validity: "3 Months",
      type: "1-on-1 & Group Connect",
      sessions: 24,
      dcSessions: 24,
      mocks: 4,
      overallMocks: 2,
      icon: Crown,
      // Features available in this plan
      bestFor: [
        "Struggling to overcome multiple career challenges strategically",
        "Difficulty communicating effectively in professional settings",
        "Balancing work, personal life, and career growth effectively",
        "Preparing for major transitions like promotions or leadership roles",
        "Facing challenges in confidence, decision-making, and goal achievement etc...",
      ],
      availableFeatures: [
        "p3_mentor_sessions",
        "p3_development_coach",
        "p3_career_evaluation",
        "p3_career_report",
        "p3_career_roadmap",
        "p3_tracking_assistance",
        "p3_advanced_feedback",
        "p3_exclusive_masterclass",
        "p3_placement_support",
        "p3_resume_support",
        "p3_cv_guidance",
        "p3_communication_skills",
        "p3_confidence_productivity",
        "p3_career_transformation",
        "p3_plan_extension",
      ],
      color: "purple",
      gradient: "from-blue-50 to-indigo-100",
      border: "border-blue-300",
      text: "text-blue-800",
      bg: "bg-blue-100",
      primaryBg: "bg-gradient-to-r from-blue-500 to-indigo-600",
      isPopular: true,
    },
  ];

  return (
    <section
      id="plan"
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
            <span className="text-orange-600 text-sm font-bold tracking-wide">
              🔥 Big Savings Start Here – Join Today Before It’s Gone
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Career Plans
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {/* Achieve faster results with personalized guidance, live mentoring,
            career support, interview tips, personal development, and progress
            tracking.
            <br /> Choose your plan today.{" "} */}
            Every great journey starts with a choice
          </p>{" "}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 mb-20">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-4 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl group backdrop-blur-sm ${
                  plan.isPopular
                    ? "bg-gradient-to-br from-blue-50 to-indigo-100 border-3 border-blue-400 shadow-2xl ring-4 ring-blue-200 ring-opacity-50"
                    : plan.isPremium
                    ? "bg-gradient-to-br from-purple-50 to-violet-100 border-3 border-purple-400 shadow-xl ring-4 ring-purple-200 ring-opacity-50"
                    : "bg-gradient-to-br from-green-50 to-emerald-100 border-3 border-green-400 shadow-lg ring-4 ring-green-200 ring-opacity-50 "
                }`}
                data-testid={`card-plan-${plan.name.toLowerCase()}`}
              >
                {/* Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600  text-white px-8 py-3 rounded-full text-sm font-black shadow-2xl border-3 border-white animate-bounce text-nowrap">
                      🔥 ELITE
                    </div>
                  </div>
                )}

                {plan.isPremium && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-violet-600  text-white px-8 py-3 rounded-full text-sm font-black shadow-2xl border-3 border-white text-nowrap">
                      ⭐ PRO
                    </div>
                  </div>
                )}

                {!plan.isPopular && !plan.isPremium && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full text-sm font-black shadow-2xl border-3 border-white text-nowrap">
                      💡 STARTER
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8 pt-6">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className={`w-10 h-10 ${plan.text}`} />
                  </div>

                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-3">
                    {plan.name}
                  </h3>
                  <p className={`text-lg font-bold ${plan.text} mb-6`}>
                    {plan.description}
                  </p>
                  {/* <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {plan.question}
                  </p> */}
                  {/* <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed px-2 mb-6">
                    {plan.solution}
                  </p> */}

                  {/* Plan Type */}
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <Users
                      className={`w-5 h-5 text-purple-60 ${
                        plan.id === "p1"
                          ? "text-green-500"
                          : plan.id === "p2"
                          ? "text-purple-500"
                          : "text-blue-500"
                      }`}
                    />
                    <span
                      className={`${
                        plan.id === "p1"
                          ? "bg-green-100 shadow-md ring-2 ring-green-300"
                          : plan.id === "p2"
                          ? "bg-purple-100 shadow-md ring-2 ring-purple-300"
                          : "bg-blue-100 shadow-md ring-2 ring-blue-300"
                      } ${
                        plan.id === "p1"
                          ? "text-green-500"
                          : plan.id === "p2"
                          ? "text-purple-500"
                          : "text-blue-500"
                      } px-4 py-2 rounded-full font-bold text-sm`}
                    >
                      {plan.type}
                    </span>
                  </div>

                  {/* Sessions Info */}
                  <div className="bg-white rounded-2xl p-6 shadow-inner mb-6 border-2 border-gray-100 ">
                    <div className="text-center">
                      <div className="text-center mb-5">
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 rounded-full ${plan.primaryBg} flex items-center justify-center`}
                        >
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div
                          className={`text-2xl sm:text-4xl font-black ${plan.text}`}
                        >
                          {plan.sessions}
                        </div>
                        <div
                          className={`text-xs sm:text-sm font-bold ${plan.text}`}
                        >
                          Session{plan.sessions > 1 && "s"}
                        </div>
                      </div>

                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 rounded-full ${plan.primaryBg} flex items-center justify-center`}
                      >
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div
                        className={`text-2xl sm:text-4xl font-black ${plan.text}`}
                      >
                        {plan.duration}
                      </div>
                      <div
                        className={`text-xs sm:text-sm font-bold ${plan.text}`}
                      >
                        Duration
                      </div>
                    </div>

                    {/* <div className="text-4xl font-black mb-2 text-purple-800">
                      {plan.mocks} + {plan.overallMocks}
                    </div>
                    <div className="text-lg font-bold mb-3 text-purple-600">
                      Normal Mock + Overall Mock
                    </div> */}
                  </div>
                </div>

                {/* Best For */}
                <div className="bg-white rounded-2xl p-6 shadow-inner mb-8 border-2 border-gray-100">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-white/15 to-white/5 rounded-full blur-lg"></div>

                  <div className="relative z-10">
                    <div
                      className={`flex items-center mb-4 border-b-2 ${plan.border} pb-3`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                          plan.id === "p1"
                            ? "bg-green-500"
                            : plan.id === "p2"
                            ? "bg-purple-500"
                            : "bg-blue-500"
                        } shadow-lg`}
                      >
                        <span className="text-white text-sm font-bold">💡</span>
                      </div>
                      <h4
                        className={`text-lg font-black ${plan.text} text-center`}
                      >
                        Perfect For:
                      </h4>
                    </div>

                    <div className="space-y-2">
                      <div className="grid gap-2 sm:gap-3">
                        {plan.bestFor.map((point: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-start group rounded-lg p-2 -m-2 transition-colors"
                          >
                            {/* <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5 shadow-md group-hover:scale-110 transition-transform">
                              <span className="text-white text-xs sm:text-sm font-bold">
                                ✓
                              </span>
                            </div> */}

                            <Check
                              className={`w-5 h-5 mr-2 ${
                                plan.id === "p1"
                                  ? "text-green-500"
                                  : plan.id === "p2"
                                  ? "text-purple-500"
                                  : "text-blue-500"
                              }`}
                            />

                            <div
                              className={`flex-1 text-sm font-semibold ${plan.text} leading-relaxed group-hover:${plan.text} transition-colors`}
                            >
                              {point.replace("✅ ", "")}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div
                  className={`p-4 rounded-xl mb-6 ${plan.bg} border-2 ${plan.border} relative overflow-hidden`}
                >
                  <div
                    className={`flex items-center mb-4 border-b-2 ${plan.border} pb-3`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                        plan.id === "p1"
                          ? "bg-green-500"
                          : plan.id === "p2"
                          ? "bg-purple-500"
                          : "bg-blue-500"
                      } shadow-lg`}
                    >
                      <span className="text-white text-sm font-bold">🎯</span>
                    </div>
                    <h4
                      className={`text-lg font-black ${plan.text} text-center`}
                    >
                      What's Included:
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {allFeatures
                      .filter((feature) => feature.id === plan.id) // ✅ Only show features for current plan
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3 text-sm"
                        >
                          <div
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              plan.id === "p1"
                                ? "text-green-500"
                                : plan.id === "p2"
                                ? "text-purple-500"
                                : "text-blue-500"
                            }`}
                          >
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5 shadow-md group-hover:scale-110 transition-transform">
                              <span className="text-white text-xs sm:text-sm font-bold">
                                ✓
                              </span>
                            </div>
                          </div>
                          <span
                            className={`flex-1 font-bold text-base ${plan.text} leading-relaxed`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
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
                      "https://wa.me/6369997653?text=Hi, I would like to know more about the mentorship plans.",
                      "_blank"
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
                <Check className="text-white w-8 h-8" />
              </div>
              <span className="text-lg font-bold text-gray-800">
                Verified Mentors
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
                Whether you need instant clarity, deep analysis, or long-term
                growth mastery - our expert mentors are ready to guide you to
                success. Choose your path and start your transformation today!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-base sm:text-lg md:text-xl font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 rounded-2xl w-full sm:w-auto"
                onClick={() => {
                  const message = `Hi! I want to know more about your career transformation plans and get started with my journey. 

🎯 I'm looking for:
• Expert mentorship and guidance
• Mock interview preparation  
• Career roadmap planning
• Job readiness training

Can you help me choose the right plan and get started?`;

                  window.open(
                    `https://wa.me/6369997653?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
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
