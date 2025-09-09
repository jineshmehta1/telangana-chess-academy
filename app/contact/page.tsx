"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit logic here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Telangana Chess Academy", "123 Chess Street", "Banjara Hills, Hyderabad", "India"],
      color: "from-[#2B6CB0] to-[#9F7AEA]",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Office: +91 40 2345 6789", "Admissions: +91 98765 43210", "WhatsApp: +91 98765 43211", "Emergency: +91 98765 43212"],
      color: "from-[#48BB78] to-[#38A169]",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@telanganachess.com", "admissions@telanganachess.com", "coaching@telanganachess.com", "events@telanganachess.com"],
      color: "from-[#9F7AEA] to-[#D53F8C]",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9am - 8pm", "Sat: 9am - 6pm", "Sun: 10am - 4pm", "Holidays by appointment"],
      color: "from-[#ED8936] to-[#DD6B20]",
    },
  ]

  const inquiryTypes = [
    "General Information",
    "Course Enrollment",
    "Private Coaching",
    "Tournament Registration",
    "Workshop Booking",
    "Partnership Inquiry",
    "Media & Press",
    "Other",
  ]

  const faqs = [
    { question: "What age groups do you accept?", answer: "We welcome all ages from 4 and up." },
    { question: "Do you offer trial classes?", answer: "Yes, free trial classes available." },
    { question: "What are your class timings?", answer: "Classes scheduled morning, afternoon, evening daily." },
    { question: "Do you provide online coaching?", answer: "Yes, with interactive tools and personalized sessions." },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDF2F7] to-[#E9D8FD]">
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] text-white">Get In Touch</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to start your chess journey? We're here to help every step of the way.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            How to Reach Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map(({ icon: Icon, title, details, color }, idx) => (
              <Card key={idx} className="shadow-lg rounded overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${color}`}></div>
                <CardContent className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${color}`}>
                    <Icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
                  {details.map((d, i) => (
                    <p key={i} className="text-gray-600 text-sm">{d}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <Card className="shadow-xl rounded">
            <CardContent>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Send a Message</h2>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto w-16 h-16 mb-4 text-green-500" />
                  <h3 className="text-2xl font-bold mb-2 text-green-600">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name *</Label>
                      <Input id="name" value={formData.name} onChange={e => handleInputChange("name", e.target.value)} required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</Label>
                      <Input type="email" id="email" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</Label>
                      <Input id="phone" value={formData.phone} onChange={e => handleInputChange("phone", e.target.value)} />
                    </div>
                    <div>
                      <Label className="block text-gray-700 font-semibold mb-2">Inquiry Type *</Label>
                      <Select value={formData.inquiryType} onValueChange={value => handleInputChange("inquiryType", value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Inquiry Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "General Information", "Course Enrollment", "Private Coaching",
                            "Tournament Registration", "Workshop Booking", "Partnership Inquiry",
                            "Media & Press", "Other",
                          ].map((type, i) => (
                            <SelectItem key={i} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject *</Label>
                    <Input id="subject" value={formData.subject} onChange={e => handleInputChange("subject", e.target.value)} required />
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message *</Label>
                    <Textarea id="message" value={formData.message} onChange={e => handleInputChange("message", e.target.value)} rows={6} required />
                  </div>

                  <Button type="submit" className="w-full py-4 text-lg bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] hover:from-[#265b94] hover:to-[#9672c8] text-white">
                    Send Message <Send className="inline ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="rounded shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#c7f0db] to-[#85d7bc] h-64 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-[#2f855a]" />
              </div>
              <CardContent>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Find Us</h3>
                <p className="text-gray-600 leading-relaxed">123 Chess Street, Banjara Hills, Hyderabad, Telangana, India</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#2B6CB0] to-[#9F7AEA] text-white rounded shadow-xl">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Contact Support</h3>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6" /> WhatsApp: +91 98765 43211
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6" /> Call: +91 40 2345 6789
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6" /> Email: info@telanganachess.com
                  </div>
                </div>
                <Button className="w-full bg-white text-[#2B6CB0] hover:bg-gray-100">Schedule Visit</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>
          {[
            { q: "What age groups do you accept?", a: "We welcome all ages from 4 and up." },
            { q: "Do you offer trial classes?", a: "Yes, free trial classes are available." },
            { q: "What are your class timings?", a: "We have flexible schedules week-round." },
            { q: "Do you provide online coaching?", a: "Yes, interactive and personalized." }
          ].map((faq, i) => (
            <Card key={i} className="border border-gray-300 mb-4">
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#2B6CB0] to-[#9F7AEA] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="mb-8 text-lg">Join us and enhance your chess skills with expert coaching.</p>
          <Button className="bg-white text-[#2B6CB0] hover:bg-gray-100 px-8 py-4 text-lg">
            Book a Trial Session
          </Button>
        </div>
      </section>
    </div>
  )
}
