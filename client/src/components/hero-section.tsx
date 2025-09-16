import { Button } from "@/components/ui/button";
import {
  Briefcase,
  ChartLine,
  Bus,
  Play,
  MessageCircle,
  CheckCircle,
  Star,
  Users,
  Shield,
  Rocket,
  Zap,
  Target,
  TrendingUp,
  Award,
  Crown,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative pb-12 sm:pb-16 lg:pb-20 pt-24 sm:pt-30 lg:pt-32 overflow-hidden flex items-center bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Launch badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 shadow-lg">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 mr-1 sm:mr-2 animate-pulse" />
              <span className="text-orange-700 text-xs sm:text-sm font-semibold">
                Newly Launched — Join Now!
              </span>
            </div>

            {/* Hero headline with modern typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6 sm:mb-8 tracking-tight">
              Kickstart Your{" "}
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                  360°
                </span>
                <div className="absolute -top-1 -right-2 sm:-top-4 sm:-right-2">
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-orange-500 animate-bounce" />
                </div>
              </div>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Career Mentorship
              </span>
            </h1>

            {/* Compelling subtitle */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed font-medium">
              <div className="font-semibold mb-2 sm:mb-4">
                Stuck in your career and don’t know what’s next?
              </div>{" "}
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                MentoDesk
              </span>{" "}
              is here to
              <span className="font-bold">
                {" "}
                listen, guide, and walk the path with you.
              </span>
            </p>

            {/* CTA buttons with modern design */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button
                className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center group border-2 border-white/20 backdrop-blur-sm"
                onClick={() => {
                  window.open(
                    "https://wa.me/6369997653?text=Hi, I would like to know more about the mentorship program.",
                    "_blank"
                  );
                }}
                data-testid="button-whatsapp-chat"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
                WhatsApp Now
              </Button>
              <Button
                variant="outline"
                className="border-2 border-purple-300 text-purple-700 bg-purple-50 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:bg-purple-100 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center group"
                onClick={() => {
                  const domainsSection = document.getElementById("plan");
                  if (domainsSection) {
                    const navbarHeight = 0;
                    const elementPosition =
                      domainsSection.getBoundingClientRect().top +
                      window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                data-testid="button-explore-programs"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-pulse" />
                Explore Plans
              </Button>
              {/* <Button
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                onClick={() => {
                  const pricingSection = document.getElementById("pricing");
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                data-testid="button-view-plans"
              >
                <Star className="w-4 h-4 mr-2" />
                View Plans
              </Button> */}
            </div>
            {/* <div className="mt-6 text-sm text-gray-600">
              <span className="font-medium">
                Tap now to talk to us!
              </span>
            </div> */}
          </div>

          {/* Right side - Modern hero visual */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main mentor card */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent rounded-3xl"></div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Professional conducting online mentorship session"
                  className="w-full h-48 sm:h-60 lg:h-72 object-cover rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg"
                />

                {/* Mentor info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <Crown className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-base sm:text-lg">
                        Sarah Johnson
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm font-medium">
                        Senior Tech Mentor
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-green-300">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 text-xs sm:text-sm font-semibold">
                      Live Mentoring
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating success metrics */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 lg:p-6 border border-gray-200">
              <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                    4.9/5 ⭐
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Led by Senior Industry Experts
                  </p>
                </div>
              </div>
            </div>

            {/* Floating achievement badge */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl shadow-2xl p-2 sm:p-3 lg:p-4 border-2 sm:border-4 border-white transform rotate-12">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Award className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <div>
                  <p className="text-white font-bold text-xs sm:text-sm">
                    #1 Mentoring
                  </p>
                  <p className="text-white/80 text-xs">Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof section */}
        {/* <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
            Trusted by professionals from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-70">
            <div className="text-gray-600 font-bold text-sm sm:text-base lg:text-lg">
              Google
            </div>
            <div className="text-gray-600 font-bold text-sm sm:text-base lg:text-lg">
              Microsoft
            </div>
            <div className="text-gray-600 font-bold text-sm sm:text-base lg:text-lg">
              Meta
            </div>
            <div className="text-gray-600 font-bold text-sm sm:text-base lg:text-lg">
              Amazon
            </div>
            <div className="text-gray-600 font-bold text-sm sm:text-base lg:text-lg">
              Netflix
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
