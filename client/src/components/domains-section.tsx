import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Code,
  Server,
  Layers,
  Settings,
  Smartphone,
  BarChart,
  Search,
  Filter,
  Clock,
  Star,
  Building,
  Calendar,
  Timer,
  MessageCircle,
  Users,
  Heart,
  Brain,
  CheckCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const domainIcons = {
  Frontend: Code,
  Backend: Server,
  "Full-Stack": Layers,
  DevOps: Settings,
  Mobile: Smartphone,
  "Data Science": BarChart,
};

const domainGradients = {
  Frontend: "from-blue-500 to-purple-600",
  Backend: "from-green-500 to-teal-600",
  "Full-Stack": "from-purple-500 to-pink-600",
  DevOps: "from-orange-500 to-red-600",
  Mobile: "from-teal-500 to-cyan-600",
  "Data Science": "from-indigo-500 to-purple-600",
};

export default function DomainsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [sortBy, setSortBy] = useState("original");

  // Enhanced domains with company focus and expert details
  const defaultDomains = [
    {
      id: "instant-360-talk",
      name: "Instant 360° Mentor Talk",
      description:
        "Need quick clarity on a career challenge or have questions you're stuck on? This one-time 30-minute session connects you instantly with an experienced mentor to address urgent questions or provide immediate guidance. It’s the fastest way to get unstuck and move forward with confidence.",
      techStacks: [],
      companies: ["Various Industry Experts"],
      experts: "Dynamic Pool",
      avgDuration: "30 min",
      difficulty: "All Levels",
      rating: 4.7,
      responseTime: "Instant / Within 30 min",
      category: "personal-growth",
      courseType: "talk",
      duration: "30 mins",
      validity: "1 Day",
      sessions: "1 session total",
      sessionType: "1-to-1",
      features: [
        "✅ Instant mentor matching",
        "✅ Personalized, actionable advice",
      ],
    },
    {
      id: "daily-360-guidance",
      name: "Daily 360° Mentor Guidance",
      description:
        "Stay consistent and hit your career goals faster with ongoing, personalized mentorship. In this month-long program, you'll connect with your mentor three times a week (Mon-Wed-Fri) for 30-minute 1-on-1 calls. Your mentor will create a customized growth plan, track your progress, and keep you accountable.",
      techStacks: [],
      companies: ["Various Industry Experts"],
      experts: "Assigned Personal Mentor",
      avgDuration: "30 min per session",
      difficulty: "All Levels",
      rating: 4.9,
      responseTime: "Scheduled Daily",
      category: "personal-growth",
      courseType: "subscription",
      duration: "30 mins per session",
      validity: "1 Month",
      sessions: "Daily (Mon-Wed-Fri)",
      sessionType: "1-to-1",
      features: [
        "✅ Personalized career planning",
        "✅ Progress tracking and regular feedback",
      ],
    },
  ];

  // Get all unique companies and skills for filtering
  const allCompanies = Array.from(
    new Set(defaultDomains.flatMap((d) => d.companies)),
  );
  const allSkills = Array.from(
    new Set(defaultDomains.flatMap((d) => d.techStacks)),
  );

  // const displayDomains =
  //   domains && Array.isArray(domains) && domains.length > 0
  //     ? domains
  //     : defaultDomains;

  const displayDomains = defaultDomains;

  // Filter domains based on active tab and filters
  const filteredDomainsBase = (displayDomains as any[]).filter((domain) => {
    // Tab filtering
    if (activeTab === "technical" && domain.category !== "technical")
      return false;
    if (
      activeTab === "personal-growth" &&
      domain.category !== "personal-growth"
    )
      return false;

    // Search filtering
    if (
      searchTerm &&
      !domain.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !domain.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;

    // Company filtering
    if (
      selectedCompany &&
      selectedCompany !== "all_companies" &&
      !domain.companies?.includes(selectedCompany)
    )
      return false;

    // Skill filtering - show both package courses containing the skill AND dedicated skill courses
    if (
      selectedSkill &&
      selectedSkill !== "all_skills" &&
      !domain.techStacks?.includes(selectedSkill)
    )
      return false;

    return true;
  });

  // Apply sorting only if not original order
  const filteredDomains =
    sortBy === "original"
      ? filteredDomainsBase
      : filteredDomainsBase.sort((a, b) => {
          switch (sortBy) {
            case "popular":
              return b.rating - a.rating;
            case "experts":
              return b.experts - a.experts;
            case "duration":
              return a.avgDuration.localeCompare(b.avgDuration);
            default:
              return 0;
          }
        });

  const getIconColor = (name: string) => {
    const colorMap: Record<string, string> = {
      Frontend: "text-blue-600",
      Backend: "text-green-600",
      "Full-Stack": "text-purple-600",
      DevOps: "text-orange-600",
      Mobile: "text-teal-600",
      "Data Science": "text-indigo-600",
    };
    return colorMap[name] || "text-blue-600";
  };

  const getBadgeColor = (tech: string) => {
    const colorMap: Record<string, string> = {
      React: "bg-blue-100 text-blue-700",
      "Vue.js": "bg-green-100 text-green-700",
      Angular: "bg-red-100 text-red-700",
      JavaScript: "bg-yellow-100 text-yellow-700",
      "Node.js": "bg-green-100 text-green-700",
      Python: "bg-blue-100 text-blue-700",
      Java: "bg-orange-100 text-orange-700",
      Go: "bg-purple-100 text-purple-700",
      MERN: "bg-indigo-100 text-indigo-700",
      MEAN: "bg-cyan-100 text-cyan-700",
      Django: "bg-emerald-100 text-emerald-700",
      Rails: "bg-rose-100 text-rose-700",
      Docker: "bg-blue-100 text-blue-700",
      Kubernetes: "bg-purple-100 text-purple-700",
      AWS: "bg-yellow-100 text-yellow-700",
      Jenkins: "bg-gray-100 text-gray-700",
      "React Native": "bg-sky-100 text-sky-700",
      Flutter: "bg-blue-100 text-blue-700",
      Swift: "bg-gray-100 text-gray-700",
      Kotlin: "bg-green-100 text-green-700",
      TensorFlow: "bg-orange-100 text-orange-700",
      PyTorch: "bg-red-100 text-red-700",
      Pandas: "bg-blue-100 text-blue-700",
    };
    return colorMap[tech] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="domains" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Find the Perfect{" "}
            <span className="text-gradient-primary">Mentorship Program</span>{" "}
            for Your Goals
          </h2>
          {/* <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto mb-4 sm:mb-6 leading-relaxed px-4">
            Get personalized guidance from industry experts at{" "}
            <span className="font-bold text-purple-600">FAANG companies</span>{" "}
            and <span className="font-bold text-blue-600">top startups</span>.
            Choose from technical mastery or personal growth programs.
          </p> */}
          {/* <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              💻 Technical Skills
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              🎯 Career Growth
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              👑 Leadership
            </span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              🚀 Product Management
            </span>
          </div> */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg mx-4">
            <span className="text-amber-700 font-bold text-xs sm:text-sm text-center">
              🔥 LIMITED TIME • Join Today!
            </span>
          </div>
        </div>

        {/* Filtering Interface */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-100 mb-8 sm:mb-10 lg:mb-12">
          <div className="space-y-4">
            {/* Search bar - full width on mobile */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search mentorship programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full h-10 sm:h-11 text-sm sm:text-base"
              />
            </div>

            {/* Filter dropdowns - responsive grid */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3"> */}
            {/* <Select value={activeTab} onValueChange={setActiveTab}>
                <SelectTrigger className="w-full h-10 text-sm">
                  <SelectValue
                    placeholder="Domain Category"
                    className="text-sm"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="text-sm">
                    All Domains
                  </SelectItem>
                  <SelectItem value="technical" className="text-sm">
                    Technical
                  </SelectItem>
                  <SelectItem value="personal-growth" className="text-sm">
                    Personal Growth
                  </SelectItem>
                </SelectContent>
              </Select> */}

            {/* <Select
                value={selectedCompany}
                onValueChange={setSelectedCompany}
              >
                <SelectTrigger className="w-full h-10 text-sm">
                  <SelectValue
                    placeholder="Filter by Company"
                    className="text-sm"
                  />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  <SelectItem value="all_companies">All Companies</SelectItem>
                  {allCompanies.map((company) => (
                    <SelectItem
                      key={company}
                      value={company}
                      className="text-sm"
                    >
                      {company}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select> */}

            {/* <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                <SelectTrigger className="w-full h-10 text-sm">
                  <SelectValue
                    placeholder="Filter by Skill"
                    className="text-sm"
                  />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  <SelectItem value="all_skills">All Skills</SelectItem>
                  {allSkills.map((skill) => (
                    <SelectItem key={skill} value={skill} className="text-sm">
                      {skill}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select> */}

            {/* <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full col-span-2 sm:col-span-2 lg:col-span-1 h-10 text-sm">
                  <SelectValue className="text-sm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular" className="text-sm">
                    Most Popular
                  </SelectItem>
                  <SelectItem value="experts" className="text-sm">
                    Most Experts
                  </SelectItem>
                  <SelectItem value="duration" className="text-sm">
                    Duration
                  </SelectItem>
                </SelectContent>
              </Select> */}
            {/* </div> */}
          </div>
        </div>

        {filteredDomains.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No mentorship programs found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Try adjusting your search criteria or filters to find the perfect
              mentorship program for you.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedSkill("");
                setSelectedCompany("");
                setActiveTab("all");
              }}
              variant="outline"
              className="px-6 py-2"
              data-testid="button-clear-filters"
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredDomains.map((domain: any, index: number) => {
              // Choose appropriate icon based on category and course type
              let Icon = Code; // default

              // First check category for different icons
              if (domain.category === "personal-growth") {
                // Use single heart for instant, double hearts for daily
                if (domain.id === "instant-360-talk") {
                  Icon = Heart; // Single heart for instant
                } else if (domain.id === "daily-360-guidance") {
                  // We'll create a double heart effect with CSS
                  Icon = Heart; // Use Heart as base, will style for double effect
                } else {
                  Icon = Heart; // Default heart for other personal growth
                }
              } else if (domain.category === "technical") {
                Icon = Brain; // Use brain icon for technical courses

                // For technical courses, further customize based on specific skills
                if (domain.courseType === "skill") {
                  if (domain.techStacks?.includes("React")) Icon = Code;
                  else if (domain.techStacks?.includes("Python")) Icon = Code;
                  else if (domain.techStacks?.includes("JavaScript"))
                    Icon = Code;
                  else if (domain.techStacks?.includes("Node.js"))
                    Icon = Server;
                  else if (domain.techStacks?.includes("AWS")) Icon = Settings;
                  else if (domain.techStacks?.includes("Docker"))
                    Icon = Settings;
                  else Icon = Brain;
                } else {
                  // For package courses, use the existing domain icons or brain
                  Icon =
                    domainIcons[domain.name as keyof typeof domainIcons] ||
                    Brain;
                }
              }

              const gradientClass =
                domain.category === "personal-growth"
                  ? "from-pink-500 to-rose-600" // Pink gradient for personal growth
                  : domain.category === "technical"
                    ? domain.courseType === "skill"
                      ? "from-emerald-500 to-teal-600" // Different gradient for skill courses
                      : domainGradients[
                          domain.name as keyof typeof domainGradients
                        ] || "from-blue-500 to-purple-600"
                    : "from-gray-500 to-gray-600"; // Default gradient

              return (
                <div
                  key={domain.id}
                  className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  data-testid={`card-domain-${domain.name.toLowerCase().replace(/ /g, "-")}`}
                >
                  {/* Icon and Title Row */}
                  <div className="flex items-start mb-4 sm:mb-6">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${gradientClass} rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform relative mr-4 sm:mr-5 flex-shrink-0`}
                    >
                      {domain.id === "daily-360-guidance" ? (
                        // Double hearts for daily guidance - outline only, same size
                        <div className="relative">
                          <Heart className="text-white w-6 h-6 sm:w-7 sm:h-7 stroke-2" />
                          <Heart className="text-white w-6 h-6 sm:w-7 sm:h-7 absolute -top-1 -right-1 opacity-70 stroke-2 transform rotate-12" />
                        </div>
                      ) : (
                        <Icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                      )}
                      {domain.courseType === "single" && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center">
                          <span className="text-xs">🎯</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 leading-snug font-sans">
                        {domain.name === "Instant 360° Mentor Talk" ? (
                          <>
                            Instant 360° Mentor
                            <br />
                            Talk
                          </>
                        ) : domain.name === "Daily 360° Mentor Guidance" ? (
                          <>
                            Daily 360° Mentor
                            <br />
                            Guidance
                          </>
                        ) : (
                          domain.name
                        )}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed font-sans">
                    {domain.description}
                  </p>

                  {/* Features - Show what's included */}
                  {domain.features && (
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border-2 border-pink-200 p-4 sm:p-5 mb-4 sm:mb-6 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-pink-800 tracking-wide">
                            What's Included
                          </h4>
                        </div>
                        
                        <div className="grid gap-2 sm:gap-3">
                          {domain.features.map((feature: string, index: number) => (
                            <div key={index} className="flex items-start group hover:bg-white/60 rounded-lg p-2 -m-2 transition-colors">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5 shadow-md group-hover:scale-110 transition-transform">
                                <span className="text-white text-xs sm:text-sm font-bold">✓</span>
                              </div>
                              <div className="flex-1 text-sm sm:text-base text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                                {feature.replace('✅ ', '')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Program Details - Stacked Layout */}
                  <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                    {/* Validity - First */}
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-md sm:rounded-lg p-2 sm:p-3 border border-purple-200">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-purple-700 mb-0.5 sm:mb-1">
                            Validity
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-purple-900">
                            {domain.validity}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sessions - Second */}
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-md sm:rounded-lg p-2 sm:p-3 border border-green-200">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-green-700 mb-0.5 sm:mb-1">
                            Sessions
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-green-900">
                            {domain.sessions}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Duration - Third */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-md sm:rounded-lg p-2 sm:p-3 border border-blue-200">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-blue-700 mb-0.5 sm:mb-1">
                            Duration
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-blue-900">
                            {domain.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Session Type - Fourth */}
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-md sm:rounded-lg p-2 sm:p-3 border border-orange-200">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-orange-700 mb-0.5 sm:mb-1">
                            Session Type
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-orange-900">
                            {domain.sessionType}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {domain.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {domain.category}
                      </Badge>
                      <Badge
                        variant={
                          domain.courseType === "package"
                            ? "default"
                            : "destructive"
                        }
                        className="text-xs"
                      >
                        {domain.courseType === "package"
                          ? "📦 Package"
                          : "🎯 Single"}
                      </Badge>
                    </div>
                  </div> */}

                  {/* Company Focus */}
                  {/* <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Building className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Target Companies:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {domain.companies?.slice(0, 3).map((company: string) => (
                      <Badge
                        key={company}
                        variant="outline"
                        className="text-xs px-2 py-1"
                      >
                        {company}
                      </Badge>
                    ))}
                    {domain.companies?.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{domain.companies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div> */}

                  {/* Tech Stack Pills */}
                  {/* <div className="flex flex-wrap gap-2 mb-6">
                  {domain.techStacks?.map((tech: string) => (
                    <Badge
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(tech)}`}
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div> */}

                  {/* WhatsApp Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <Button
                      className="w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center group border-2 border-white/20 backdrop-blur-sm"
                      onClick={() => {
                        window.open(
                          "https://wa.me/6369997653?text=Hi, I would like to know more about the mentorship program.",
                          "_blank",
                        );
                      }}
                      data-testid={`button-whatsapp-${domain.name.toLowerCase().replace(/ /g, "-")}`}
                    >
                      <FaWhatsapp className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      <span>WhatsApp Now</span>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
