import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Clock,
  BookOpen,
  Target,
  Zap,
  Crown,
} from "lucide-react";

export default function CoursesPage() {
  const courses = [
    {
      title: "Beginner's Foundation",
      level: "Beginner",
      duration: "3 Months",
      price: "₹5,000",
      students: "50+",
      rating: "4.9",
      icon: BookOpen,
      color: "from-[#2B6CB0] to-[#9F7AEA]",
      description: "Perfect for complete beginners who want to learn chess from scratch.",
      features: [
        "Basic rules and piece movements",
        "Fundamental tactics and strategies",
        "Opening principles",
        "Basic endgames",
        "Chess notation",
        "Practice games with guidance",
      ],
      schedule: "2 classes per week (1.5 hours each)",
      ageGroup: "6+ years",
      classSize: "8-10 students",
    },
    {
      title: "Intermediate Mastery",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹8,000",
      students: "40+",
      rating: "4.8",
      icon: Target,
      color: "from-[#48BB78] to-[#38A169]",
      description:
        "For players who know the basics and want to improve their game significantly.",
      features: [
        "Advanced tactical patterns",
        "Opening repertoire development",
        "Middlegame planning",
        "Endgame techniques",
        "Tournament preparation",
        "Positional understanding",
      ],
      schedule: "3 classes per week (2 hours each)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
    },
    {
      title: "Advanced Competition",
      level: "Advanced",
      duration: "6 Months",
      price: "₹12,000",
      students: "25+",
      rating: "4.9",
      icon: Trophy,
      color: "from-[#9F7AEA] to-[#D53F8C]",
      description:
        "Intensive training for serious players aiming for competitive success.",
      features: [
        "Deep opening preparation",
        "Complex tactical combinations",
        "Strategic masterpieces analysis",
        "Psychological preparation",
        "Tournament coaching",
        "Rating improvement focus",
      ],
      schedule: "4 classes per week (2.5 hours each)",
      ageGroup: "12+ years",
      classSize: "4-6 students",
    },
    {
      title: "Master Class Elite",
      level: "Expert",
      duration: "12 Months",
      price: "₹20,000",
      students: "15+",
      rating: "5.0",
      icon: Crown,
      color: "from-[#F6E05E] to-[#DD6B20]",
      description: "Elite program for aspiring masters and titled players.",
      features: [
        "Grandmaster-level analysis",
        "Professional opening preparation",
        "Advanced endgame mastery",
        "Tournament strategy",
        "Mental conditioning",
        "Individual coaching sessions",
      ],
      schedule: "5 classes per week (3 hours each)",
      ageGroup: "14+ years",
      classSize: "2-4 students",
    },
    {
      title: "Rapid Chess Specialist",
      level: "All Levels",
      duration: "2 Months",
      price: "₹4,000",
      students: "30+",
      rating: "4.7",
      icon: Zap,
      color: "from-[#FF69B4] to-[#D53F8C]",
      description: "Specialized course focusing on rapid and blitz chess formats.",
      features: [
        "Time management techniques",
        "Quick pattern recognition",
        "Rapid calculation methods",
        "Blitz strategies",
        "Online tournament preparation",
        "Speed training exercises",
      ],
      schedule: "2 classes per week (1 hour each)",
      ageGroup: "10+ years",
      classSize: "10-12 students",
    },
    {
      title: "Kids Chess Fun",
      level: "Kids Special",
      duration: "3 Months",
      price: "₹3,500",
      students: "60+",
      rating: "4.8",
      icon: Star,
      color: "from-[#6B46C1] to-[#9F7AEA]",
      description:
        "Fun and engaging chess program designed specifically for young children.",
      features: [
        "Game-based learning",
        "Story-telling with chess",
        "Puzzle solving activities",
        "Mini tournaments",
        "Chess art and crafts",
        "Parent-child sessions",
      ],
      schedule: "2 classes per week (1 hour each)",
      ageGroup: "4-8 years",
      classSize: "6-8 students",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] to-[#E9D8FD]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] text-white px-6 py-2 text-lg">
            Our Courses
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            Chess Courses for Every Level
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            From complete beginners to aspiring grandmasters, we have the perfect course to elevate your chess game.
            Choose your path to chess mastery!
          </p>
        </div>
      </section>

      {/* Course Levels Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            Find Your Perfect Level
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { level: "Beginner", description: "New to chess", color: "bg-[#2B6CB0]" },
              { level: "Intermediate", description: "Know the basics", color: "bg-[#48BB78]" },
              { level: "Advanced", description: "Competitive player", color: "bg-[#9F7AEA]" },
              { level: "Expert", description: "Aspiring master", color: "bg-[#F6E05E]" },
            ].map((level, index) => (
              <Card key={index} className="text-center p-6 border-2 hover:border-[#9F7AEA] transition-all duration-300">
                <div
                  className={`${level.color} w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl`}
                >
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{level.level}</h3>
                <p className="text-gray-600">{level.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>

                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center`}
                      >
                        <course.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{course.title}</h3>
                        <Badge variant="outline" className="mt-1 border-[#48BB78] text-[#48BB78]">
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">{course.price}</div>
                      <div className="text-sm text-gray-500">{course.duration}</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-green-600" />
                      <div className="text-xs font-semibold text-gray-600">Duration</div>
                      <div className="text-sm font-bold text-green-700">{course.duration}</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                      <Users className="w-5 h-5 mx-auto mb-1 text-green-600" />
                      <div className="text-xs font-semibold text-gray-600">Students</div>
                      <div className="text-sm font-bold text-green-700">{course.students}</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                      <Star className="w-5 h-5 mx-auto mb-1 text-green-600" />
                      <div className="text-xs font-semibold text-gray-600">Rating</div>
                      <div className="text-sm font-bold text-green-700">{course.rating}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">{course.description}</p>

                  {/* Course Details */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Course Details</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Schedule:</span> {course.schedule}
                        </div>
                        <div>
                          <span className="font-medium">Age Group:</span> {course.ageGroup}
                        </div>
                        <div>
                          <span className="font-medium">Class Size:</span> {course.classSize}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">What You'll Learn</h4>
                      <div className="space-y-1">
                        {course.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                        {course.features.length > 3 && (
                          <div className="text-sm text-green-600 font-medium">
                            +{course.features.length - 3} more topics
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <Button className={`flex-1 bg-gradient-to-r ${course.color} hover:opacity-90 text-white`}>
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">Why Our Courses Stand Out</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Small Class Sizes",
                description: "Personalized attention with maximum 10 students per class for optimal learning.",
              },
              {
                icon: Trophy,
                title: "Proven Results",
                description: "Our students consistently achieve rating improvements and tournament success.",
              },
              {
                icon: BookOpen,
                title: "Structured Curriculum",
                description: "Carefully designed progressive curriculum that builds skills systematically.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <feature.icon className="w-16 h-16 mx-auto mb-6 text-white" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
            Ready to Begin Your Chess Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Join thousands of students who have improved their chess skills with our expert-designed courses. Start with a free trial class today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg"
            >
              Book Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-4 text-lg bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
