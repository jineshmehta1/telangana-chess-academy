import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Calendar,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function CoachesPage() {
  const coaches = [
    {
      name: "GM Rajesh Kumar",
      title: "Head Coach & Founder",
      rating: "2650",
      image: "/placeholder-fmwwn.png",
      specialization: ["Opening Theory", "Endgame Mastery", "Tournament Preparation"],
      achievements: ["International Grandmaster", "3x National Champion", "Asian Games Bronze"],
      experience: "15+ Years",
      students: "200+",
      email: "rajesh@telanganachess.com",
      phone: "+91 98765 43210",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      bio: "Grandmaster Rajesh Kumar is the visionary founder of our academy with over 15 years of coaching excellence.",
    },
    {
      name: "WGM Priya Sharma",
      title: "Senior Coach",
      rating: "2450",
      image: "/placeholder-kf4vr.png",
      specialization: ["Tactical Training", "Youth Development", "Women's Chess"],
      achievements: ["Women's Grandmaster", "National Women's Champion", "Commonwealth Gold"],
      experience: "12+ Years",
      students: "150+",
      email: "priya@telanganachess.com",
      phone: "+91 98765 43211",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      bio: "WGM Priya Sharma specializes in developing young talent and has coached multiple national champions.",
    },
    {
      name: "IM Arjun Reddy",
      title: "Junior Coach",
      rating: "2400",
      image: "/placeholder-azdz7.png",
      specialization: ["Beginner Training", "School Programs", "Online Coaching"],
      achievements: ["International Master", "Under-25 National Champion", "State Champion"],
      experience: "8+ Years",
      students: "100+",
      email: "arjun@telanganachess.com",
      phone: "+91 98765 43212",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      bio: "IM Arjun Reddy brings innovative teaching methods and excels in online chess education.",
    },
    {
      name: "FM Kavitha Nair",
      title: "Assistant Coach",
      rating: "2300",
      image: "/placeholder-ynvy3.png",
      specialization: ["Puzzle Solving", "Pattern Recognition", "Rapid Chess"],
      achievements: ["FIDE Master", "State Women's Champion", "University Champion"],
      experience: "6+ Years",
      students: "80+",
      email: "kavitha@telanganachess.com",
      phone: "+91 98765 43213",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      bio: "FM Kavitha Nair is known for her expertise in tactical training and rapid chess improvement.",
    },
    {
      name: "CM Vikram Singh",
      title: "Youth Coach",
      rating: "2200",
      image: "/placeholder-jfq00.png",
      specialization: ["Kids Training", "Basic Fundamentals", "Chess Psychology"],
      achievements: ["Candidate Master", "Youth Champion", "Coaching Certification"],
      experience: "5+ Years",
      students: "120+",
      email: "vikram@telanganachess.com",
      phone: "+91 98765 43214",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      bio: "CM Vikram Singh has a special talent for working with children and making chess fun and engaging.",
    },
    {
      name: "WFM Ananya Gupta",
      title: "Online Coach",
      rating: "2250",
      image: "/placeholder-mex2r.png",
      specialization: ["Digital Learning", "Remote Training", "Chess Software"],
      achievements: ["Women's FIDE Master", "Online Tournament Winner", "Tech Innovation Award"],
      experience: "4+ Years",
      students: "90+",
      email: "ananya@telanganachess.com",
      phone: "+91 98765 43215",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      bio: "WFM Ananya Gupta is our technology expert, pioneering innovative online chess education methods.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 px-4 bg-[#E9D8FD]">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] text-white px-6 py-2 text-lg">
            Meet Our Team
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#2D3748]">
            Our Expert Coaches
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Learn from the best! Our team of experienced grandmasters, international masters, and certified coaches are dedicated to helping you achieve your chess goals.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card
                key={index}
                className="bg-white border border-[#E9D8FD] shadow-lg hover:shadow-xl hover:border-[#9F7AEA]/50 hover-lift overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] text-white font-bold">
                      {coach.rating} ELO
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{coach.name}</h3>
                    <p className="text-[#9F7AEA] text-sm font-medium">{coach.title}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{coach.bio}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-[#EDF2F7]/50 rounded-lg border border-[#2B6CB0]/10">
                      <Calendar className="w-5 h-5 mx-auto mb-2 text-[#2B6CB0]" />
                      <div className="text-xs font-semibold text-gray-600">Experience</div>
                      <div className="text-sm font-bold text-[#2D3748]">{coach.experience}</div>
                    </div>
                    <div className="text-center p-3 bg-[#EDF2F7]/50 rounded-lg border border-[#2B6CB0]/10">
                      <Users className="w-5 h-5 mx-auto mb-2 text-[#2B6CB0]" />
                      <div className="text-xs font-semibold text-gray-600">Students</div>
                      <div className="text-sm font-bold text-[#2D3748]">{coach.students}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#2D3748] mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialization.map((spec, specIndex) => (
                        <Badge
                          key={specIndex}
                          variant="outline"
                          className="border-[#9F7AEA]/30 text-[#9F7AEA] hover:bg-[#9F7AEA]/10 text-xs"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#2D3748] mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {coach.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <Trophy className="w-3 h-3 text-[#9F7AEA] flex-shrink-0" />
                          <span className="text-xs text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#2D3748] mb-3">Connect</h4>
                    <div className="flex gap-2 justify-center">
                      <a
                        href={coach.social.facebook}
                        aria-label={`${coach.name} Facebook`}
                        className="p-2 border border-[#2B6CB0]/20 rounded bg-transparent hover:bg-[#2B6CB0]/10 transition"
                      >
                        <Facebook className="w-4 h-4 text-[#2B6CB0]" />
                      </a>
                      <a
                        href={coach.social.twitter}
                        aria-label={`${coach.name} Twitter`}
                        className="p-2 border border-[#2B6CB0]/20 rounded bg-transparent hover:bg-[#2B6CB0]/10 transition"
                      >
                        <Twitter className="w-4 h-4 text-[#2B6CB0]" />
                      </a>
                      <a
                        href={coach.social.linkedin}
                        aria-label={`${coach.name} Linkedin`}
                        className="p-2 border border-[#2B6CB0]/20 rounded bg-transparent hover:bg-[#2B6CB0]/10 transition"
                      >
                        <Linkedin className="w-4 h-4 text-[#2B6CB0]" />
                      </a>
                      <a
                        href={coach.social.instagram}
                        aria-label={`${coach.name} Instagram`}
                        className="p-2 border border-[#2B6CB0]/20 rounded bg-transparent hover:bg-[#2B6CB0]/10 transition"
                      >
                        <Instagram className="w-4 h-4 text-[#2B6CB0]" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white flex justify-center items-center">
                      <Mail className="w-4 h-4 mr-2" /> Contact Coach
                    </Button>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                        <Phone className="w-3 h-3" />
                        {coach.phone}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#9F7AEA]/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#2D3748]">
            Why Choose Our Coaches?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Proven Track Record",
                description:
                  "Our coaches have trained numerous national and international champions with consistent results.",
              },
              {
                icon: Users,
                title: "Personalized Approach",
                description:
                  "Each coach adapts their teaching style to match individual learning preferences and goals.",
              },
              {
                icon: Trophy,
                title: "Competitive Experience",
                description:
                  "All our coaches are active or former competitive players who understand tournament pressure.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white border border-[#9F7AEA]/30 hover:border-[#9F7AEA]/50 hover-lift"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#2B6CB0]/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-[#2B6CB0]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#2D3748]">{feature.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#2D3748]">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Book a trial session with any of our expert coaches and begin your journey to chess mastery today!
          </p>
          <Button className="bg-[#9F7AEA] hover:bg-[#8B6BC1] text-white px-8 py-4 text-lg">
            Book Trial Session
          </Button>
        </div>
      </section>
    </div>
  );
}
