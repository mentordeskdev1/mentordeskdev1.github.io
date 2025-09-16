import { Button } from "@/components/ui/button";
import { Video, MessageCircle, Rocket } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 backdrop-blur-sm group">
              <Rocket className="text-white w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              MentoDesk
            </span>
          </div>

          {/* <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#domains" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="link-domains"
            >
              Domains
            </a>
            <a 
              href="#pricing" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="link-pricing"
            >
              Pricing
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="link-how-it-works"
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="link-testimonials"
            >
              Success Stories
            </a>
          </div> */}

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* <button 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => window.location.href = "/api/login"}
              data-testid="button-sign-in"
            >
              Sign In
            </button> */}
            <Button
              size="sm"
              className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-md sm:rounded-lg font-bold text-sm sm:text-base lg:text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center group border-2 border-white/20 backdrop-blur-sm"
              onClick={() => {
                window.open(
                  "https://wa.me/6369997653?text=Hi, I would like to know more about the mentorship program.",
                  "_blank",
                );
              }}
              data-testid="button-whatsapp-main"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-1 sm:mr-2 lg:mr-3 group-hover:animate-bounce" />
              <span className="hidden sm:inline">WhatsApp Now</span>
              <span className="sm:hidden">Chat</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
