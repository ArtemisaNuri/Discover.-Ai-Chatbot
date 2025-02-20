"use client";

import Header from "@/components/Header";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-purple-900 via-purple-800 to-black">
      <ClerkLoading>
        <div className="flex h-screen w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb or page title could go here */}
            <div className="pb-4">
              {/* You can add breadcrumbs or page title here if needed */}
            </div>

            {/* Main content area */}
            <div className="rounded-xl bg-purple-900/40 backdrop-blur-sm border border-purple-700/50 p-6">
              {children}
            </div>
          </main>

          {/* Footer - Optional */}
          <footer className="border-t border-purple-700/50 bg-purple-900/30 backdrop-blur-sm py-4">
            <div className="container mx-auto px-4 text-center text-purple-400 text-sm">
              © 2024 Discover.AI. All rights reserved.
            </div>
          </footer>
        </div>
      </ClerkLoaded>
    </div>
  );
}

export default DashboardLayout;
