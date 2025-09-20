import { Video, Twitter, Linkedin, Github, Rocket, Users, Target, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const platformLinks = [
    { name: "Mentorship Plans", href: "#plan" },
    { name: "Join as Mentor", href: "join-mentor" },
  ];

  const resourceLinks = [
    { name: "Starter Plan", href: "#plan" },
    { name: "Pro Plan", href: "#plan" },
    { name: "Elite Plan", href: "#plan" },
    { name: "Offers", href: "#offers" },
  ];

  const supportLinks = [
    { name: "WhatsApp Support", href: "whatsapp" },
    { name: "Contact Us", href: "whatsapp" },
    { name: "Get Started", href: "#plan" },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "whatsapp") {
      window.open(
        "https://wa.me/6369997653?text=Hi, I would like to know more about the mentorship plans.",
        "_blank"
      );
    } else if (href === "join-mentor") {
      window.open(
        "https://wa.me/6369997653?text=Hi, I would like to join as a mentor",
        "_blank"
      );
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 backdrop-blur-sm group">
                <Rocket className="text-white w-5 h-5 group-hover:animate-bounce" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                MentoDesk
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Kickstart your 360° career mentorship with instant & daily mentor calls. 
              Get clarity, direction, and growth from industry experts.
            </p>
            
            {/* WhatsApp CTA */}
            <Button
              className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center group border-2 border-white/20 backdrop-blur-sm mb-6"
              onClick={() => handleLinkClick("whatsapp")}
              data-testid="footer-whatsapp-button"
            >
              <FaWhatsapp className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Start Your Journey
            </Button>
            
            {/* Social Links */}
            {/* <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
          </div>
          
          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Target className="w-5 h-5 mr-2 text-purple-400" />
              Mentorship
            </h3>
            <ul className="space-y-3 text-gray-400">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-white transition-colors text-left hover:translate-x-1 duration-200"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-400" />
              Resources
            </h3>
            <ul className="space-y-3 text-gray-400">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-white transition-colors text-left hover:translate-x-1 duration-200"
                    data-testid={`footer-resource-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-green-400" />
              Support
            </h3>
            <ul className="space-y-3 text-gray-400">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-white transition-colors text-left hover:translate-x-1 duration-200"
                    data-testid={`footer-support-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MentoDesk. All rights reserved. | Empowering careers through expert mentorship.</p>
        </div>
      </div>
    </footer>
  );
}
