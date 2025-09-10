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
      details: ["11-13-75 Road No 2, Alkapuri, Kothapet, Hyderabad-500035, Above Pragathi Model School"],
      color: "from-[#2B6CB0] to-[#9F7AEA]",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Office: +91-9864646481", "WhatsApp: +91-9864646481"],
      color: "from-[#48BB78] to-[#38A169]",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["telanganachessacademy@gmail.com"],
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
      <section className="pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] text-white px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base">Get In Touch</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to start your chess journey? We're here to help every step of the way.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            How to Reach Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {contactInfo.map(({ icon: Icon, title, details, color }, idx) => (
              <Card key={idx} className="shadow-lg rounded overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${color}`}></div>
                <CardContent className="p-2 sm:p-4 text-center">
                  <div className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${color}`}>
                    <Icon className="text-white w-6 sm:w-8 h-6 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800">{title}</h3>
                  {details.map((d, i) => (
                    <p key={i} className="text-gray-600 text-xs sm:text-sm">{d}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-12">
          <Card className="shadow-xl rounded">
            <CardContent className="p-2 sm:p-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-800">Send a Message</h2>
              {isSubmitted ? (
                <div className="text-center py-6 sm:py-8">
                  <CheckCircle className="mx-auto w-12 sm:w-16 h-12 sm:h-16 mb-2 sm:mb-3 text-green-500" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-green-600">Message Sent!</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="name" className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Full Name *</Label>
                      <Input id="name" value={formData.name} onChange={e => handleInputChange("name", e.target.value)} required className="text-sm sm:text-base" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email *</Label>
                      <Input type="email" id="email" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} required className="text-sm sm:text-base" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="phone" className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Phone</Label>
                      <Input id="phone" value={formData.phone} onChange={e => handleInputChange("phone", e.target.value)} className="text-sm sm:text-base" />
                    </div>
                    <div>
  <Label className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Inquiry Type *</Label>
  <Select value={formData.inquiryType} onValueChange={value => handleInputChange("inquiryType", value)}>
    <SelectTrigger className="w-full text-sm sm:text-base">
      <SelectValue placeholder="Select Inquiry Type" />
    </SelectTrigger>
    <SelectContent>
      {inquiryTypes.map((type, i) => (
        <SelectItem key={i} value={type} className="text-sm sm:text-base">{type}</SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Subject *</Label>
                    <Input id="subject" value={formData.subject} onChange={e => handleInputChange("subject", e.target.value)} required className="text-sm sm:text-base" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-gray-700 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Message *</Label>
                    <Textarea id="message" value={formData.message} onChange={e => handleInputChange("message", e.target.value)} rows={4} required className="text-sm sm:text-base" />
                  </div>

                  <Button type="submit" className="w-full py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] hover:from-[#265b94] hover:to-[#9672c8] text-white">
                    Send Message <Send className="inline ml-1 sm:ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-4 sm:space-y-6">
            <Card className="rounded shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#c7f0db] to-[#85d7bc] h-32 sm:h-48 flex items-center justify-center">
                <MapPin className="w-12 sm:w-16 h-12 sm:h-16 text-[#2f855a]" />
              </div>
              <CardContent className="p-2 sm:p-4">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-800">Find Us</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base"># 11-13-75 Road No 2, Alkapuri, Kothapet, Hyderabad-500035, Above Pragathi Model School</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#2B6CB0] to-[#9F7AEA] text-white rounded shadow-xl">
              <CardContent className="p-2 sm:p-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Contact Support</h3>
                <div className="mb-2 sm:mb-4 space-y-1 sm:space-y-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <MessageCircle className="w-4 sm:w-6 h-4 sm:h-6" /> WhatsApp: +91 9864646481
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Phone className="w-4 sm:w-6 h-4 sm:h-6" /> Call: +91 9864646481
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Mail className="w-4 sm:w-6 h-4 sm:h-6" /> Email: telanganachessacademy@gmail.com
                  </div>
                </div>
                <Button className="w-full bg-white text-[#2B6CB0] hover:bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">Schedule Visit</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800">Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <Card key={i} className="border border-gray-300 mb-2 sm:mb-3 md:mb-4">
              <CardContent className="p-2 sm:p-4">
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#2B6CB0] to-[#9F7AEA] py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Ready to Start?</h2>
          <p className="mb-3 sm:mb-4 md:mb-8 text-base sm:text-lg">Join us and enhance your chess skills with expert coaching.</p>
          <Button className="bg-white text-[#2B6CB0] hover:bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg">
            Book a Trial Session
          </Button>
        </div>
      </section>
    </div>
  )
}