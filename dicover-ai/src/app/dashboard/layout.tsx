"use client";

import Header from "@/components/Header";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-700">
      <ClerkLoading>
        <div className="flex h-screen w-full items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-purple-400" />
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Optional: Add breadcrumbs or page title here */}
            <div className="pb-4">
              {/* Breadcrumbs or page title */}
            </div>

            {/* Main content area */}
            <div className="rounded-xl bg-purple-800/40 backdrop-blur-sm border border-purple-600/60 p-6 shadow-lg">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-purple-600/50 bg-purple-900/30 backdrop-blur-sm py-4">
            <div className="container mx-auto px-4 text-center text-purple-300 text-sm">
              © 2024 Discover.AI. All rights reserved.
            </div>
          </footer>
        </div>
      </ClerkLoaded>
    </div>
  );
}

export default DashboardLayout;
