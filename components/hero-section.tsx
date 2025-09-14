"use client";

import { Button } from "@/components/ui/button";
import { Play, Users, Trophy, Star, Sparkles, Award, VideoIcon , BellIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function HeroSection() {
  const [hoveredPiece, setHoveredPiece] = useState<number | null>(null);

  const chessPieces = ["♔", "♕", "♖", "♗", "♘", "♙"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 sm:pt-24 md:pt-32"
      style={{ background: "linear-gradient(135deg, #F5F7FA 0%, #E2E8F0 60%, #2B6CB0 90%, #9F7AEA 10%)" }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {chessPieces.map((piece, index) => {
          const colors = ["#2B6CB0", "#9F7AEA"];
          const color = colors[index % colors.length];
          return (
            <div
              key={index}
              className="absolute text-4xl sm:text-6xl md:text-8xl animate-chess-float cursor-default"
              style={{
                left: `${5 + index * 10}%`,
                top: `${10 + (index % 3) * 20}%`,
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

      <div className="absolute top-4 sm:top-16 right-4 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 bg-[#2B6CB0] rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-8 sm:top-24 left-4 sm:left-12 w-12 sm:w-20 h-12 sm:h-20 bg-[#2B6CB0] rounded-full opacity-15 animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-4 sm:bottom-16 right-4 sm:right-12 w-16 sm:w-28 h-16 sm:h-28 bg-[#2B6CB0] rounded-full opacity-15 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-8 sm:bottom-32 left-4 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 bg-[#FF69B4] rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>

      <div className="container max-w-full mx-auto px-8 sm:px-16 lg:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-[#E2E8F0] text-[#2B6CB0] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-8 shadow-md border border-[#E2E8F0]">
              <Star className="w-4 sm:w-5 h-4 sm:h-5 text-[#9F7AEA]" />
              <span>Certified FIDE Coaches</span>
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#2B6CB0]" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 text-balance leading-tight">
              <span className="text-[#2D3748]"><Link href="https://meet.google.com/vjj-cfpx-dav?pli=1" className="cursor-pointer">
              <Button size="lg" className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg animate-pulse-slow text-base sm:text-lg">
                <Users className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" /> Join Our Online Coaching
              </Button>
              </Link></span>
              {/* <span className="block relative">
                <div className="absolute inset-0 bg-[#E2E8F0]/80 rounded-lg -z-10"></div>
                <span className="text-[#2B6CB0] font-black text-shadow relative z-10">Click Now</span>
              </span> */}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#4A5568] mb-6 sm:mb-10 max-w-2xl leading-relaxed font-medium">
              Bharat chess academy empowers you with world-class training from FIDE-rated coaches. Build unshakeable
              skills, dominate the board, and rise to the top of the chess world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-6 sm:mb-12">
              <Link href="https://meet.google.com/vjj-cfpx-dav?pli=1" className="cursor-pointer">
              <Button size="lg" variant="outline" className="border-2 border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0] hover:text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md text-base sm:text-lg transition-all duration-300">
                <VideoIcon className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" /> G-Meet
              </Button>
              </Link>
              <Link href="https://meet.jit.si/TelanganaChessAcademy" className="cursor-pointer">
              <Button size="lg" variant="outline" className="border-2 border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0] hover:text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md text-base sm:text-lg transition-all duration-300">
                <Play className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" /> Start Call
              </Button>
              </Link>
              <Link href="https://meet.google.com/atu-ziid-ojg" className="cursor-pointer">
              <Button size="lg" variant="outline" className="border-2 border-[#FF69B4] text-[#FF69B4] hover:bg-[#FF69B4] hover:text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md text-base sm:text-lg transition-all duration-300">
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" /> TCS Meeting
              </Button>
              </Link>
              <Link href="https://meet.google.com/uux-vyxa-pgq" className="cursor-pointer">
              <Button size="lg" variant="outline" className="border-2 border-[#06402B] text-[#FF29G4] hover:bg-[#90EE90] hover:text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md text-base sm:text-lg transition-all duration-300">
                <BellIcon className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" /> BCA Meeting
              </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg border border-[#E2E8F0]">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#2B6CB0] rounded-full flex items-center justify-center">
                  <Trophy className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#2D3748]">120+</div>
                  <div className="text-xs sm:text-sm text-[#4A5568]">Tournaments</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg border border-[#E2E8F0]">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#2B6CB0] rounded-full flex items-center justify-center">
                  <Users className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#2D3748]">600+</div>
                  <div className="text-xs sm:text-sm text-[#4A5568]">Students</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg border border-[#E2E8F0]">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#9F7AEA] rounded-full flex items-center justify-center">
                  <Award className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#2D3748]">60+</div>
                  <div className="text-xs sm:text-sm text-[#4A5568]">Champions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative z-10">
              <div className="w-[18rem] h-[18rem] sm:w-[20rem] sm:h-[20rem] md:w-[28rem] md:h-[28rem] bg-white rounded-2xl shadow-xl p-4 sm:p-6 border-4 border-[#E2E8F0] hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-8 gap-px h-full rounded-xl overflow-hidden">
                  {Array.from({ length: 64 }, (_, i) => {
                    const row = Math.floor(i / 8);
                    const col = i % 8;
                    const isLight = (row + col) % 2 === 0;
                    return (
                      <div
                        key={i}
                        className="aspect-square flex items-center justify-center text-base sm:text-xl md:text-2xl font-bold transition-all duration-200 hover:scale-105 cursor-pointer"
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

              <div className="absolute top-1 sm:top-4 right-1 sm:right-4 bg-[#2B6CB0] text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-bounce-slow shadow-md">
                🔥 Live Matches
              </div>
              <div className="absolute bottom-1 sm:bottom-4 left-1 sm:left-4 bg-[#2B6CB0] text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-bounce-slow shadow-md" style={{ animationDelay: "0.5s" }}>
                🤖 AI Insights
              </div>
              <div className="absolute bottom-1 sm:bottom-4 right-1 sm:right-10 bg-[#2B6CB0] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold animate-float-slow shadow-sm" style={{ animationDelay: "1s" }}>
                ⚡ Expert Tips
              </div>
              <div className="absolute top-1 sm:top-16 left-1 sm:left-8 bg-[#FF69B4] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold animate-float-slow shadow-sm" style={{ animationDelay: "1.5s" }}>
                🌟 Pro Strategies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}