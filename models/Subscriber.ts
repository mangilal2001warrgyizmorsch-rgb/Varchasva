import mongoose, { Schema, Document, models } from "mongoose";

export interface ISubscriber extends Document {
  email: string;
  createdAt: Date;
}

const SubscriberSchema = new Schema<ISubscriber>(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Subscriber = models.Subscriber || mongoose.model<ISubscriber>("Subscriber", SubscriberSchema);
