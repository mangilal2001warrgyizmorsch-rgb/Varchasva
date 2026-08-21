"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/enquiries")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setEnquiries(data.data);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredEnquiries = enquiries.filter(enq => 
    enq.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    enq.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enq.phone?.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold font-serif text-[#1a4a38] tracking-tight">Customer Enquiries</h1>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by name, email, or phone..."
            className="pl-9 bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <Card className="shadow-sm border-gray-100/60 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow>
                <TableHead className="w-[120px]">Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Product / Qty</TableHead>
                <TableHead className="max-w-[200px]">Message</TableHead>
                <TableHead className="text-right">Dealer Request</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                    <div className="flex justify-center items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-[#1a4a38] border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading enquiries...</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredEnquiries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                    No enquiries found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredEnquiries.map((enq) => (
                  <TableRow key={enq._id} className="hover:bg-gray-50/50 transition-colors">
                    <TableCell className="font-medium text-gray-500 text-xs">
                      {new Date(enq.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </TableCell>
                    <TableCell className="font-medium text-gray-900">{enq.name}</TableCell>
                    <TableCell>
                      <div className="text-sm">{enq.phone}</div>
                      <div className="text-xs text-muted-foreground">{enq.email}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm font-medium">{enq.product || "General Enquiry"}</div>
                      <div className="text-xs text-muted-foreground">{enq.quantity}</div>
                    </TableCell>
                    <TableCell className="max-w-[200px]">
                      <p className="truncate text-sm text-gray-600" title={enq.message}>
                        {enq.message || "-"}
                      </p>
                    </TableCell>
                    <TableCell className="text-right">
                      {enq.becomeDealer ? (
                        <Badge variant="outline" className="bg-[#e2a325]/10 text-[#e2a325] border-[#e2a325]/20">
                          Interested
                        </Badge>
                      ) : (
                        <span className="text-xs text-gray-400">-</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
