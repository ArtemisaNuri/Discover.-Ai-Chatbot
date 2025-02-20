"use client";

import { SignedIn } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { HomeIcon, CreditCard, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-purple-700 bg-purple-900/50 backdrop-blur-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/dashboard"
              className="flex items-center text-xl font-bold text-purple-200 hover:text-purple-100 transition-colors"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Dashboard
            </Link>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/dashboard/documents"
                className="text-purple-300 hover:text-purple-200 transition-colors"
              >
                Documents
              </Link>
              <Link
                href="/dashboard/analytics"
                className="text-purple-300 hover:text-purple-200 transition-colors"
              >
                Analytics
              </Link>
            </div>
          </div>

          {/* Right side - Actions */}
          <SignedIn>
            <div className="flex items-center gap-4">
              {/* Pricing Button */}
              <Button
                variant="ghost"
                className="hidden md:flex items-center text-purple-300 hover:text-purple-200 hover:bg-purple-800/50"
                asChild
              >
                <Link href="/dashboard/upgrade">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Upgrade Plan
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="md:hidden text-purple-300 hover:text-purple-200 hover:bg-purple-800/50"
                size="icon"
              >
                <Menu className="h-5 w-5" />
              </Button>

              {/* User Button */}
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Header;
