// 🧼 Struct to avoid multiple parameters on methods signatures
export type NotificationEvent = {
  recipient: string;
  tripDestination?: string;
  bookingId?: string;
  amount?: number;
  transferAccount?: string;
};
