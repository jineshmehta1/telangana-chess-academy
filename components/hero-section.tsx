"use client";

import { Button } from "@/components/ui/button";
import { Play, Users, Trophy, Star, Sparkles, Award } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [hoveredPiece, setHoveredPiece] = useState<number | null>(null);

  const chessPieces = ["♔", "♕", "♖", "♗", "♘", "♙"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32"
      style={{ background: "linear-gradient(135deg, #F5F7FA 0%, #E2E8F0 60%, #2B6CB0 90%, #9F7AEA 10%)" }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {chessPieces.map((piece, index) => {
          const colors = ["#2B6CB0", "#9F7AEA"];
          const color = colors[index % colors.length];
          return (
            <div
              key={index}
              className="absolute text-6xl md:text-8xl animate-chess-float cursor-default"
              style={{
                left: `${5 + index * 15}%`,
                top: `${15 + (index % 3) * 25}%`,
                animationDelay: `${index * 0.5}s`,
                color: color,
                transform: `translateZ(${hoveredPiece === index ? "20px" : "0"})`,
                transition: "transform 0.3s ease, color 0.5s ease",
              }}
              onMouseEnter={() => setHoveredPiece(index)}
              onMouseLeave={() => setHoveredPiece(null)}
            >
              {piece}
            </div>
          );
        })}
      </div>

      <div className="absolute top-16 right-8 w-24 h-24 bg-[#2B6CB0] rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-32 left-12 w-20 h-20 bg-[#2B6CB0] rounded-full opacity-15 animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-16 right-12 w-28 h-28 bg-[#2B6CB0] rounded-full opacity-15 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-32 left-8 w-16 h-16 bg-[#FF69B4] rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-[#E2E8F0] text-[#2B6CB0] px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-md border border-[#E2E8F0]">
              <Star className="w-5 h-5 text-[#9F7AEA]" />
              <span>Certified FIDE Coaches</span>
              <Sparkles className="w-4 h-4 text-[#2B6CB0]" />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-balance leading-tight">
              <span className="text-[#2D3748]">Unleash Your</span>
              <span className="block relative">
                <div className="absolute inset-0 bg-[#E2E8F0]/80 rounded-lg -z-10"></div>
                <span className="text-[#2B6CB0] font-black text-shadow relative z-10">Chess Mastery</span>
              </span>
            </h1>

            <p className="text-xl text-[#4A5568] mb-10 max-w-2xl leading-relaxed font-medium">
              Telangana Chess Academy empowers you with world-class training from FIDE-rated coaches. Build unshakeable
              skills, dominate the board, and rise to the top of the chess world.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <Button size="lg" className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white font-bold px-8 py-4 rounded-full shadow-lg animate-pulse-slow text-lg">
                <Users className="w-6 h-6 mr-3" /> Start Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0] hover:text-white font-bold px-8 py-4 rounded-full shadow-md text-lg transition-all duration-300">
                <Play className="w-6 h-6 mr-3" /> Watch Demo
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#FF69B4] text-[#FF69B4] hover:bg-[#FF69B4] hover:text-white font-bold px-8 py-4 rounded-full shadow-md text-lg transition-all duration-300">
                <Sparkles className="w-6 h-6 mr-3" /> Explore Courses
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-3 bg-white px-4 py-3 rounded-full shadow-md hover:shadow-lg border border-[#E2E8F0]">
                <div className="w-10 h-10 bg-[#2B6CB0] rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#2D3748]">120+</div>
                  <div className="text-sm text-[#4A5568]">Tournaments</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white px-4 py-3 rounded-full shadow-md hover:shadow-lg border border-[#E2E8F0]">
                <div className="w-10 h-10 bg-[#2B6CB0] rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#2D3748]">600+</div>
                  <div className="text-sm text-[#4A5568]">Students</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white px-4 py-3 rounded-full shadow-md hover:shadow-lg border border-[#E2E8F0]">
                <div className="w-10 h-10 bg-[#9F7AEA] rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#2D3748]">60+</div>
                  <div className="text-sm text-[#4A5568]">Champions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="w-[28rem] h-[28rem] bg-white rounded-2xl shadow-xl p-6 border-4 border-[#E2E8F0] hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-8 gap-px h-full rounded-xl overflow-hidden">
                  {Array.from({ length: 64 }, (_, i) => {
                    const row = Math.floor(i / 8);
                    const col = i % 8;
                    const isLight = (row + col) % 2 === 0;
                    return (
                      <div
                        key={i}
                        className="aspect-square flex items-center justify-center text-2xl font-bold transition-all duration-200 hover:scale-105 cursor-pointer"
                        style={{ backgroundColor: isLight ? "#FFFFFF" : "#000000", color: isLight ? "#000000" : "#FFFFFF" }}
                      >
                        <span>
                          {i === 0 && "♜"}
                          {i === 7 && "♜"}
                          {i === 56 && "♖"}
                          {i === 63 && "♖"}
                          {i === 28 && "♔"}
                          {i === 35 && "♕"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-[#2B6CB0] text-white px-5 py-2 rounded-full text-sm font-bold animate-bounce-slow shadow-md">
                🔥 Live Matches
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#2B6CB0] text-white px-5 py-2 rounded-full text-sm font-bold animate-bounce-slow shadow-md" style={{ animationDelay: "0.5s" }}>
                🤖 AI Insights
              </div>
              <div className="absolute top-1/2 -right-10 bg-[#2B6CB0] text-white px-3 py-1 rounded-full text-xs font-bold animate-float-slow shadow-sm" style={{ animationDelay: "1s" }}>
                ⚡ Expert Tips
              </div>
              <div className="absolute top-16 -left-8 bg-[#FF69B4] text-white px-3 py-1 rounded-full text-xs font-bold animate-float-slow shadow-sm" style={{ animationDelay: "1.5s" }}>
                🌟 Pro Strategies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}