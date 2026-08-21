import mongoose, { Schema, Document, models } from "mongoose";

export interface IEnquiry extends Document {
  name: string;
  phone: string;
  email?: string;
  product?: string;
  quantity?: string;
  message?: string;
  becomeDealer: boolean;
  createdAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: false },
    product: { type: String, required: false },
    quantity: { type: String, required: false },
    message: { type: String, required: false },
    becomeDealer: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Enquiry = models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);
