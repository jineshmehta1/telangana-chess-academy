"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CalendarIcon,
  Clock,
  MapPin,
  Users,
  Trophy,
  BookOpen,
  Star,
  ArrowRight,
  Filter,
} from "lucide-react"
import { format } from "date-fns"

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedCategory, setSelectedCategory] = useState("all")

  const events = [
    {
      id: 1,
      title: "State Championship 2024",
      category: "tournament",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "Hyderabad Convention Center",
      participants: "200+",
      prize: "₹50,000",
      description: "Annual state-level championship open to all ages.",
      image: "/chess-tournament.png",
      status: "upcoming",
      registrationFee: "₹500",
      color: "from-red-600 to-rose-700",
    },
    {
      id: 2,
      title: "Grandmaster Workshop",
      category: "workshop",
      date: "2024-03-08",
      time: "02:00 PM",
      location: "Academy Main Hall",
      participants: "50",
      prize: "Certificate",
      description: "Exclusive workshop by GM Rajesh Kumar on advanced openings.",
      image: "/chess-workshop.jpg",
      status: "upcoming",
      registrationFee: "₹800",
      color: "from-blue-600 to-cyan-700",
    },
    {
      id: 3,
      title: "Youth Rapid Tournament",
      category: "tournament",
      date: "2024-03-22",
      time: "10:00 AM",
      location: "Online Platform",
      participants: "100+",
      prize: "₹15,000",
      description: "Fast-paced tournament for players under 18.",
      image: "/youth-chess.jpg",
      status: "upcoming",
      registrationFee: "₹300",
      color: "from-green-600 to-emerald-700",
    },
    {
      id: 4,
      title: "Chess Psychology Seminar",
      category: "seminar",
      date: "2024-03-12",
      time: "11:00 AM",
      location: "Academy Conference Room",
      participants: "30",
      prize: "Certificate",
      description: "Learn mental strategies and psychology of competitive chess.",
      image: "/chess-psychology.jpg",
      status: "upcoming",
      registrationFee: "₹600",
      color: "from-purple-600 to-pink-700",
    },
    {
      id: 5,
      title: "Simultaneous Exhibition",
      category: "exhibition",
      date: "2024-03-18",
      time: "04:00 PM",
      location: "City Chess Club",
      participants: "40",
      prize: "Experience",
      description: "Play simultaneous games against GM Rajesh Kumar.",
      image: "/chess-simultaneous.jpg",
      status: "upcoming",
      registrationFee: "₹200",
      color: "from-yellow-600 to-orange-700",
    },
    {
      id: 6,
      title: "Women's Chess Day",
      category: "special",
      date: "2024-03-25",
      time: "09:30 AM",
      location: "Academy Main Hall",
      participants: "80",
      prize: "₹10,000",
      description: "Tournament & workshop celebrating women.",
      image: "/women-chess.jpg",
      status: "upcoming",
      registrationFee: "₹400",
      color: "from-pink-600 to-rose-700",
    },
  ]

  const categories = [
    { id: "all", name: "All Events", icon: CalendarIcon },
    { id: "tournament", name: "Tournaments", icon: Trophy },
    { id: "workshop", name: "Workshops", icon: BookOpen },
    { id: "seminar", name: "Seminars", icon: Users },
    { id: "exhibition", name: "Exhibitions", icon: Star },
    { id: "special", name: "Special Events", icon: Star },
  ]

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter(event => event.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-700 text-white">
            Events & Tournaments
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-transparent">
            Chess Events Calendar
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join exciting tournaments, workshops, and special events. Compete with peers and learn from grandmasters.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-transparent">
            Event Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`p-4 h-auto flex flex-col items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-700 text-white"
                    : "border border-slate-300 text-slate-700 bg-white hover:bg-blue-50"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="grid" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <TabsList className="bg-white border border-slate-300">
                <TabsTrigger value="grid" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Grid View
                </TabsTrigger>
                <TabsTrigger value="calendar" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Calendar View
                </TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2 text-gray-600">
                <Filter className="w-5 h-5" />
                <span className="text-sm">
                  Showing {filteredEvents.length} of {events.length} events
                </span>
              </div>
            </div>

            <TabsContent value="grid">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredEvents.map(event => (
                  <Card key={event.id} className="bg-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>
                    <div className="relative">
                      <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                      <div className="absolute top-4 right-4">
                        <Badge className={`bg-gradient-to-r ${event.color} text-white`}>
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <CardContent>
                      <h3 className="text-2xl mb-3 font-semibold">{event.title}</h3>
                      <p className="text-gray-700 mb-4">{event.description}</p>
                      <div className="space-y-3 text-gray-700 mb-6">
                        <div className="flex items-center gap-3">
                          <CalendarIcon className="w-5 h-5 text-blue-600"/>
                          <span>{format(new Date(event.date), "MMMM dd, yyyy")}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-blue-600"/>
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-blue-600"/>
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-blue-600"/>
                          <span>{event.participants} participants</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center bg-blue-50 rounded-md p-4 border border-blue-200">
                          <Trophy className="m-auto mb-2 w-6 h-6 text-blue-600"/>
                          <div className="font-semibold">Prize</div>
                          <div className="text-blue-700">{event.prize}</div>
                        </div>
                        <div className="text-center bg-blue-50 rounded-md p-4 border border-blue-200">
                          <CalendarIcon className="m-auto mb-2 w-6 h-6 text-blue-600"/>
                          <div className="font-semibold">Entry Fee</div>
                          <div className="text-blue-700">{event.registrationFee}</div>
                        </div>
                      </div>

                      <Button className={`w-full bg-gradient-to-r ${event.color} text-white hover:opacity-90`}>
                        Register Now <ArrowRight className="ml-2 w-4 h-4"/>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <Card className="bg-white shadow-xl rounded-lg">
                    <CardContent>
                      <h3 className="text-xl font-bold mb-4">Select Date</h3>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={date => date < new Date()}
                        className="rounded-md"
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-2">
                  <Card className="bg-white shadow-xl rounded-lg">
                    <CardContent>
                      <h3 className="text-xl font-bold mb-6">Events for {selectedDate ? format(selectedDate, "MMMM dd, yyyy") : "Selected Date"}</h3>
                      <div className="space-y-4">
                        {filteredEvents
                          .filter(e => selectedDate ? e.date === format(selectedDate, "yyyy-MM-dd") : true)
                          .map(event => (
                            <div key={event.id} className="flex items-center gap-4 p-4 border border-blue-200 rounded-md hover:border-blue-400 transition-colors">
                              <div className={`w-4 h-4 rounded-full ${event.color}`}></div>
                              <div className="flex-1">
                                <h4 className="font-semibold">{event.title}</h4>
                                <div className="flex gap-2 text-sm text-gray-600 mt-1">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4"/>
                                    {event.time}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4"/>
                                    {event.location}
                                  </div>
                                </div>
                              </div>
                              <Button variant="outline" className="text-blue-700 border-blue-300 hover:bg-blue-50">
                                View Details
                              </Button>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-700 to-cyan-800 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-white">Event Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Competitive Tournaments",
                description: "Regular tournaments with quality prize pools.",
              },
              {
                icon: BookOpen,
                title: "Educational Workshops",
                description: "Learn from grandmasters and experts.",
              },
              {
                icon: Users,
                title: "Community Events",
                description: "Connect and play with fellow enthusiasts.",
              },
            ].map((highlight, idx) => (
              <Card key={idx} className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-md transform transition hover:scale-105">
                <CardContent className="text-center text-white">
                  <highlight.icon className="mx-auto mb-6 w-16 h-16"/>
                  <h3 className="text-2xl mb-3 font-semibold">{highlight.title}</h3>
                  <p className="opacity-80">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Ready to Participate?</h2>
          <p className="mb-8 max-w-md mx-auto text-gray-700">
            Join our vibrant community and register for upcoming events!
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-700 to-cyan-800 text-white px-10 py-4">View All Events</Button>
            <Button variant="outline" className="text-blue-700 border-blue-300 hover:bg-blue-50 px-10 py-4">Contact Organizers</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
