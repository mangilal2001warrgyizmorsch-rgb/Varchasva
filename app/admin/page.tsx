"use client";
import React, { useEffect, useState } from "react";
import { MessageSquare, Mail, FileText, TrendingUp, Users, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ enquiries: 0, subscribers: 0, articles: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/enquiries").then(res => res.json()),
      fetch("/api/newsletter").then(res => res.json()),
      fetch("/api/journal").then(res => res.json()),
    ]).then(([enq, sub, art]) => {
      setStats({
        enquiries: enq.data?.length || 0,
        subscribers: sub.data?.length || 0,
        articles: art.data?.length || 0,
      });
      setLoading(false);
    }).catch(console.error);
  }, []);

  const cards = [
    { 
      title: "Total Enquiries", 
      value: stats.enquiries, 
      description: "Customer inquiries across all products",
      icon: <MessageSquare size={20} className="text-[#e2a325]" />, 
      delay: 0.1 
    },
    { 
      title: "Newsletter Subs", 
      value: stats.subscribers, 
      description: "Active subscribers to newsletter",
      icon: <Mail size={20} className="text-[#e2a325]" />, 
      delay: 0.2 
    },
    { 
      title: "Journal Articles", 
      value: stats.articles, 
      description: "Published articles in the journal",
      icon: <FileText size={20} className="text-[#e2a325]" />, 
      delay: 0.3 
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif text-[#1a4a38] tracking-tight">Dashboard Overview</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Welcome to the Varchasva admin panel. Here's what's happening today.
        </p>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse shadow-sm border-gray-100/60">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 w-1/4 bg-gray-200 rounded mt-2"></div>
                <div className="h-3 w-2/3 bg-gray-100 rounded mt-3"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: card.delay }}
            >
              <Card className="shadow-sm shadow-black/5 border-gray-100/60 hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    {card.title}
                  </CardTitle>
                  <div className="p-2.5 bg-[#faf3e0] rounded-xl">
                    {card.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-[#1a4a38]">{card.value}</div>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Placeholder for future charts */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="shadow-sm shadow-black/5 border-gray-100/60 h-80 flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50/50">
            <Activity className="h-10 w-10 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-500">Analytics Overview</h3>
            <p className="text-sm text-gray-400 mt-2 text-center max-w-sm">
              More detailed charts and analytics can be added here in the future to track engagement over time.
            </p>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
