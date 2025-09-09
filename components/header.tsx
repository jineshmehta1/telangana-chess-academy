"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image'

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
}

export function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", href: "/about/story" },
        { name: "Our Mission", href: "/about/mission" },
        { name: "Achievements", href: "/about/achievements" },
      ],
    },
    { name: "Our Courses", href: "/courses" },
    { name: "Our Coaches", href: "/coaches" },
    { name: "Online Coaching", href: "/online-coaching" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#F5F7FA] py-2 shadow-md fixed w-full z-50 h-24">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo Section */}
        <Link href="/" className="flex items-center justify-center space-x-5">
          <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
            <Image src="/logo.jpeg" alt="Telangana Chess Academy Logo" width={64} height={64} />
          </div>
          <div className="leading-tight">
            <span
              className="block text-xl font-bold tracking-wide bg-gradient-to-r from-[#2B6CB0] via-[#4299E1] to-[#F56565] bg-clip-text text-transparent"
            >
              Telangana Chess
            </span>
            <span
              className="block text-base font-semibold tracking-wider bg-gradient-to-r from-[#F56565] via-[#ED64A6] to-[#2B6CB0] bg-clip-text text-transparent"
            >
              Academy
            </span>
          </div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <div className="relative">
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="flex items-center space-x-1 text-[#2D3748] hover:text-[#2B6CB0] font-medium py-2 px-3 rounded"
                    aria-expanded={isAboutOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isAboutOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded shadow-lg border border-gray-200">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-2 text-[#2D3748] hover:bg-gray-100"
                          onClick={() => setIsAboutOpen(false)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#2D3748] hover:text-[#2B6CB0] font-medium py-2 px-3 rounded hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Contact and Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="text-[#2D3748] text-sm">+919864646481</div>
          <Button className="bg-[#2B6CB0] hover:bg-[#2C5282] text-white px-4 py-2 rounded-full">
            Join Now
          </Button>
          <Link href="/quick-pay">
            <Button
              variant="outline"
              className="border-[#F56565] text-[#F56565] hover:bg-[#F56565] hover:text-white px-4 py-2 rounded-full"
            >
              Quick Pay
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[#2D3748] hover:text-[#2B6CB0]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#F5F7FA] shadow-md">
            <nav className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                        className="flex items-center justify-between w-full text-[#2D3748] hover:text-[#2B6CB0] py-2"
                        aria-expanded={isAboutOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {isAboutOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems?.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block text-[#2D3748] hover:text-[#2B6CB0] py-2"
                              onClick={() => {
                                setIsAboutOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[#2D3748] hover:text-[#2B6CB0] py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 space-y-2">
                <div className="text-[#2D3748] text-sm">+91 98 64 64 64 81</div>
                <Button className="w-full bg-[#2B6CB0] hover:bg-[#2C5282] text-white py-2 rounded-full">
                  Join Now
                </Button>
                <Link href="/quick-pay">
                  <Button
                    variant="outline"
                    className="w-full border-[#F56565] text-[#F56565] hover:bg-[#F56565] hover:text-white py-2 rounded-full"
                  >
                    Quick Pay
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}