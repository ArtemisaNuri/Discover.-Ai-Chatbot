"use client";

import { useState } from "react";
import {
  BarChart,
  FileText,
  Upload,
  Settings,
  Search,
  Bell,
  User,
  PieChart,
  Calendar,
  Clock,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const analyticsData = [
  { name: "Jan", docs: 4, insights: 24 },
  { name: "Feb", docs: 8, insights: 35 },
  { name: "Mar", docs: 15, insights: 45 },
  { name: "Apr", docs: 25, insights: 65 },
  { name: "May", docs: 30, insights: 85 },
];

const recentDocuments = [
  {
    id: 1,
    name: "Q1 Financial Report.pdf",
    date: "2024-02-20",
    status: "Analyzed",
  },
  {
    id: 2,
    name: "Marketing Strategy.pdf",
    date: "2024-02-19",
    status: "Processing",
  },
  { id: 3, name: "Customer Survey.pdf", date: "2024-02-18", status: "Pending" },
];

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-700">
      <nav className="border-b border-purple-700 bg-purple-900/50 backdrop-blur-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl font-bold text-purple-200">
                Discover.AI
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="pl-10 pr-4 py-2 rounded-lg bg-purple-800/50 border border-purple-600 text-purple-200 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-300 hover:text-purple-200"
              >
                <Bell className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-300 hover:text-purple-200"
              >
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50">
            <div className="flex items-center gap-4">
              <FileText className="h-8 w-8 text-purple-400" />
              <div>
                <p className="text-sm text-purple-300">Total Documents</p>
                <p className="text-2xl font-bold text-purple-200">1,234</p>
              </div>
            </div>
          </div>
          <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50">
            <div className="flex items-center gap-4">
              <PieChart className="h-8 w-8 text-purple-400" />
              <div>
                <p className="text-sm text-purple-300">Analyzed</p>
                <p className="text-2xl font-bold text-purple-200">892</p>
              </div>
            </div>
          </div>
          <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50">
            <div className="flex items-center gap-4">
              <Clock className="h-8 w-8 text-purple-400" />
              <div>
                <p className="text-sm text-purple-300">Processing</p>
                <p className="text-2xl font-bold text-purple-200">56</p>
              </div>
            </div>
          </div>
          <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50">
            <div className="flex items-center gap-4">
              <Calendar className="h-8 w-8 text-purple-400" />
              <div>
                <p className="text-sm text-purple-300">This Month</p>
                <p className="text-2xl font-bold text-purple-200">286</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-purple-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50 shadow-lg">
            <h3 className="text-lg font-semibold text-purple-200 mb-4">
              Analytics Overview
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={analyticsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4c1d95" />
                  <XAxis dataKey="name" stroke="#e9d5ff" />
                  <YAxis stroke="#e9d5ff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#4c1d95",
                      border: "1px solid #6b21a8",
                      borderRadius: "8px",
                      color: "#e9d5ff",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="docs"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="insights"
                    stroke="#2dd4bf"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-purple-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50 shadow-lg">
            <h3 className="text-lg font-semibold text-purple-200 mb-4">
              Recent Documents
            </h3>
            <div className="space-y-4">
              {recentDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-purple-800/30 border border-purple-700/30"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="text-sm font-medium text-purple-200">
                        {doc.name}
                      </p>
                      <p className="text-xs text-purple-400">{doc.date}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      doc.status === "Analyzed"
                        ? "bg-green-900/50 text-green-300"
                        : doc.status === "Processing"
                          ? "bg-yellow-900/50 text-yellow-300"
                          : "bg-purple-900/50 text-purple-300"
                    }`}
                  >
                    {doc.status === "Processing" && (
                      <Loader2 className="inline-block w-3 h-3 mr-1 animate-spin" />
                    )}
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
              <Upload className="h-4 w-4 mr-2" />
              Upload New Document
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
