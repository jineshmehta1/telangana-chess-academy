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
      name: "Tejavath Naresh",
      title: "Head Coach & Founder",
      image: "/naresh.jpg",
      specialization: ["Opening Theory", "Endgame Mastery", "Tournament Preparation"],
      achievements: ["FIDE Arbiter", "FIDE Rated Player", "Chess Coach"],
      experience: "15+ Years",
      students: "200+",
      bio: "Tejavath Naresh is the visionary founder of our academy with over 15 years of coaching excellence.",
      color: "from-[#2B6CB0] to-[#9F7AEA]",
    },
    {
      name: "Tejavath Aruna",
      title: "Senior Coach",
      rating: "2450",
      image: "/coach.png",
      specialization: ["Tactical Training", "Youth Development", "Women's Chess"],
      achievements: ["FIDE Rated Player", "Chess Coach"],
      experience: "12+ Years",
      students: "150+",
      bio: "Tejavath Aruna specializes in developing young talent and has coached multiple national champions.",
      color: "from-[#48BB78] to-[#38A169]",
    },
    {
      name: "Ranghanathan K S",
      title: "Junior Coach",
      rating: "2400",
      image: "/coach.png",
      specialization: ["Beginner Training", "School Programs", "Online Coaching"],
      achievements: ["International FIDE Rated"],
      experience: "8+ Years",
      students: "100+",
      bio: "Ranghanathan K S brings innovative teaching methods and excels in online chess education.",
      color: "from-[#9F7AEA] to-[#D53F8C]",
    },
    {
      name: "Kethavath Lokesh",
      title: "Assistant Coach",
      rating: "2300",
      image: "/coach.png",
      specialization: ["Puzzle Solving", "Pattern Recognition", "Rapid Chess"],
      achievements: ["International FIDE Rated"],
      experience: "6+ Years",
      students: "80+",
      bio: "Kethavath Lokesh is known for her expertise in tactical training and rapid chess improvement.",
      color: "from-[#FF69B4] to-[#D53F8C]",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {coaches.map((coach, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${coach.color} border border-transparent shadow-lg hover:shadow-xl hover-lift overflow-hidden transition-shadow duration-300`}
              >
                <div className={`h-2 bg-gradient-to-br ${coach.color}`}></div>
                <div className="relative">
                  <img
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{coach.name}</h3>
                    <p className="text-white text-sm font-medium">{coach.title}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-sm text-gray-100 mb-4 leading-relaxed">{coach.bio}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/10 rounded-lg border border-white/20">
                      <Calendar className="w-5 h-5 mx-auto mb-2 text-white" />
                      <div className="text-xs font-semibold text-gray-200">Experience</div>
                      <div className="text-sm font-bold text-white">{coach.experience}</div>
                    </div>
                    <div className="text-center p-3 bg-white/10 rounded-lg border border-white/20">
                      <Users className="w-5 h-5 mx-auto mb-2 text-white" />
                      <div className="text-xs font-semibold text-gray-200">Students</div>
                      <div className="text-sm font-bold text-white">{coach.students}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialization.map((spec, specIndex) => (
                        <Badge
                          key={specIndex}
                          variant="outline"
                          className={`border-white/30 text-white hover:bg-white/20 text-xs`}
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {coach.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <Trophy className="w-3 h-3 text-white flex-shrink-0" />
                          <span className="text-xs text-gray-200">{achievement}</span>
                        </div>
                      ))}
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