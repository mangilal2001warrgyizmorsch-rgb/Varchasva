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
import { Search, Eye, MessageCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import { Button } from "@/components/ui/Button";

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState<any | null>(null);

  const openWhatsApp = (enq: any) => {
    const phone = enq.phone.replace(/[^\d+]/g, '');
    const text = `Hi ${enq.name},\n\nWe received your enquiry regarding ${enq.product || 'our products'} (${enq.quantity || 'N/A'}).\n\nYour message: "${enq.message || 'No message provided'}"\n\nHow can we help you today?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

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
                <TableHead>Dealer Request</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                    <div className="flex justify-center items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-[#1a4a38] border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading enquiries...</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredEnquiries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
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
                    <TableCell>
                      {enq.becomeDealer ? (
                        <Badge variant="outline" className="bg-[#e2a325]/10 text-[#e2a325] border-[#e2a325]/20">
                          Interested
                        </Badge>
                      ) : (
                        <span className="text-xs text-gray-400">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-[#1a4a38] hover:text-[#111810] hover:bg-[#1a4a38]/10"
                          onClick={() => setSelectedEnquiry(enq)}
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-green-600 hover:text-green-700 hover:bg-green-50"
                          onClick={() => openWhatsApp(enq)}
                          title="Contact via WhatsApp"
                        >
                          <WhatsappIcon size={14} color="currentColor" className="text-green-600" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Preview Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-lg shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-900"
              onClick={() => setSelectedEnquiry(null)}
            >
              <X className="h-5 w-5" />
            </Button>
            
            <CardHeader className="border-b border-gray-100 bg-gray-50/50 pb-4">
              <CardTitle className="text-xl font-serif text-[#1a4a38]">Enquiry Details</CardTitle>
            </CardHeader>
            
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Customer</h4>
                  <p className="font-medium text-gray-900">{selectedEnquiry.name}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Date</h4>
                  <p className="text-gray-900">
                    {new Date(selectedEnquiry.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-gray-900">{selectedEnquiry.phone}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-gray-900">{selectedEnquiry.email}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Product</h4>
                  <p className="text-gray-900 font-medium">{selectedEnquiry.product || 'General Enquiry'}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Quantity</h4>
                  <p className="text-gray-900">{selectedEnquiry.quantity || 'N/A'}</p>
                </div>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message</h4>
                <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 whitespace-pre-wrap">
                  {selectedEnquiry.message || <span className="italic text-gray-400">No message provided</span>}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dealer Request:</h4>
                  {selectedEnquiry.becomeDealer ? (
                    <Badge variant="outline" className="bg-[#e2a325]/10 text-[#e2a325] border-[#e2a325]/20">Interested</Badge>
                  ) : (
                    <span className="text-sm font-medium text-gray-500">No</span>
                  )}
                </div>
                
                <Button 
                  onClick={() => openWhatsApp(selectedEnquiry)}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <WhatsappIcon size={16} color="currentColor" className="mr-2" />
                  Reply on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
