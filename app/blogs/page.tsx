"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  Search,
  ArrowRight,
  Eye,
  Heart,
} from "lucide-react";
import { format } from "date-fns";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const blogPosts = [
    {
      id: 1,
      title: "Mastering the Sicilian Defense: A Complete Guide",
      excerpt:
        "Learn the intricacies of one of chess's most popular and complex openings. From basic principles to advanced variations.",
      content: "The Sicilian Defense is one of the most popular and successful responses to 1.e4...",
      author: "GM Rajesh Kumar",
      authorImage: "/placeholder.svg",
      date: "2024-03-10",
      readTime: "8 min read",
      category: "openings",
      tags: ["Sicilian", "Defense", "Opening Theory"],
      image: "/blog-sicilian.jpg",
      views: 1250,
      likes: 89,
      featured: true,
      color: "from-[#2B6CB0] to-[#9F7AEA]", // Hero section blue-purple gradient
    },
    {
      id: 2,
      title: "Chess Psychology: Mental Preparation for Tournaments",
      excerpt:
        "Discover the psychological aspects of competitive chess and learn techniques to stay calm under pressure.",
      content: "Tournament chess is as much a mental game as it is about chess knowledge...",
      author: "WGM Priya Sharma",
      authorImage: "/placeholder.svg",
      date: "2024-03-08",
      readTime: "6 min read",
      category: "psychology",
      tags: ["Psychology", "Tournament", "Mental Game"],
      image: "/blog-psychology.jpg",
      views: 980,
      likes: 67,
      featured: false,
      color: "from-[#9F7AEA] to-[#FF69B4]", // Purple to pink gradient
    },
    {
      id: 3,
      title: "Endgame Essentials: King and Pawn vs King",
      excerpt:
        "Master the fundamental endgame technique that every chess player must know to improve their game.",
      content: "King and pawn endgames are the foundation of endgame theory...",
      author: "IM Arjun Reddy",
      authorImage: "/placeholder.svg",
      date: "2024-03-05",
      readTime: "5 min read",
      category: "endgames",
      tags: ["Endgame", "King", "Pawn"],
      image: "/blog-endgame.jpg",
      views: 756,
      likes: 45,
      featured: false,
      color: "from-[#2B6CB0] to-[#68D391]", // Blue to green gradient
    },
    {
      id: 4,
      title: "Tactical Patterns Every Player Should Know",
      excerpt:
        "Explore the most common tactical motifs in chess and learn how to spot them in your games.",
      content: "Tactics are the building blocks of chess strategy...",
      author: "FM Kavitha Nair",
      authorImage: "/placeholder.svg",
      date: "2024-03-03",
      readTime: "7 min read",
      category: "tactics",
      tags: ["Tactics", "Patterns", "Combinations"],
      image: "/blog-tactics.jpg",
      views: 1100,
      likes: 78,
      featured: true,
      color: "from-[#FF69B4] to-[#D53F8C]", // Pink shades
    },
    {
      id: 5,
      title: "The Evolution of Chess: From Ancient India to Modern AI",
      excerpt:
        "Journey through the fascinating history of chess and its transformation in the digital age.",
      content: "Chess has a rich history spanning over 1500 years...",
      author: "CM Vikram Singh",
      authorImage: "/placeholder.svg",
      date: "2024-03-01",
      readTime: "10 min read",
      category: "history",
      tags: ["History", "Evolution", "AI"],
      image: "/blog-history.jpg",
      views: 892,
      likes: 56,
      featured: false,
      color: "from-[#F6E05E] to-[#DD6B20]", // Yellow to soft orange
    },
    {
      id: 6,
      title: "Building Your Opening Repertoire: A Systematic Approach",
      excerpt:
        "Learn how to construct a solid opening repertoire that suits your playing style and level.",
      content:
        "A well-constructed opening repertoire is essential for competitive success...",
      author: "WFM Ananya Gupta",
      authorImage: "/placeholder.svg",
      date: "2024-02-28",
      readTime: "9 min read",
      category: "openings",
      tags: ["Repertoire", "Opening", "Strategy"],
      image: "/blog-repertoire.jpg",
      views: 1050,
      likes: 72,
      featured: false,
      color: "from-[#6B46C1] to-[#9F7AEA]", // Indigo to purple gradient
    },
  ];

  // Preserve all original filtering and state logic exactly
  const categories = [
    { id: "all", name: "All Articles", count: blogPosts.length },
    {
      id: "openings",
      name: "Openings",
      count: blogPosts.filter((p) => p.category === "openings").length,
    },
    {
      id: "tactics",
      name: "Tactics",
      count: blogPosts.filter((p) => p.category === "tactics").length,
    },
    {
      id: "endgames",
      name: "Endgames",
      count: blogPosts.filter((p) => p.category === "endgames").length,
    },
    {
      id: "psychology",
      name: "Psychology",
      count: blogPosts.filter((p) => p.category === "psychology").length,
    },
    {
      id: "history",
      name: "History",
      count: blogPosts.filter((p) => p.category === "history").length,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#E2E8F0] to-[#EDE9FE]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] text-white px-6 py-2 text-lg">
            Chess Blog
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            Chess Insights & Articles
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover expert insights, strategic guides, and the latest chess knowledge from our grandmasters and experienced coaches.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            Featured Articles
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${post.color}`}></div>
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] text-white">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 border-white text-gray-700">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-4 mb-4">
                    <img src={post.authorImage || "/placeholder.svg"} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">{post.author}</div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(post.date), "MMM dd, yyyy")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-[#2B6CB0] text-[#2B6CB0]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${post.color} hover:opacity-90 text-white`}>
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2B6CB0] w-5 h-5" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-[#9F7AEA] focus:border-[#2B6CB0]"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 h-12 border-[#9F7AEA] focus:border-[#2B6CB0]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48 h-12 border-[#9F7AEA] focus:border-[#2B6CB0]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                className={
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] text-white"
                    : "border-[#9F7AEA] text-[#9F7AEA] hover:bg-[#E9D8FD] bg-transparent"
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 border-white text-gray-700">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-800 text-sm">{post.author}</div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{format(new Date(post.date), "MMM dd")}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-[#9F7AEA] text-[#9F7AEA] hover:bg-[#E9D8FD] bg-transparent">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-[#9F7AEA] text-[#9F7AEA] hover:bg-[#E9D8FD] px-8 py-4 text-lg bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-[#2B6CB0] to-[#9F7AEA]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Subscribe to our newsletter and get the latest chess insights, tips, and articles delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1 h-12 bg-white border-0" />
            <Button size="lg" className="bg-white text-[#2B6CB0] hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
