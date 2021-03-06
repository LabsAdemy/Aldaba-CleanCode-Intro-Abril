import { notificationsMap } from "./notifications.map";
import { NotificationEventDto } from "./notification_event.dto";
import { NotificationKinds } from "./notification_kinds.enum";
import { SmtpService } from "./smtp.service";

export class NotificationsService {
  // ToDo : 💩 🤢 Depending on concrete implementations
  private smtp = new SmtpService();

  public notifyTripCancellation(cancellation: NotificationEventDto): string {
    const notification = notificationsMap.find((n) => n.kind === NotificationKinds.TRIP_CANCELLED);
    return this.smtp.sendMail({
      from: notification?.sender || "",
      to: cancellation.recipient,
      subject: notification?.sender || "",
      body: `Sorry, your trip to ${cancellation.tripDestination} has been cancelled.`,
    });
  }
  public notifyBankTransfer(transfer: NotificationEventDto): string {
    const notification = notificationsMap.find((n) => n.kind === NotificationKinds.TRIP_CANCELLED);
    return this.smtp.sendMail({
      from: notification?.sender || "",
      to: transfer.recipient,
      subject: `${notification?.sender || ""}  -  ${transfer.bookingId}`,
      body: `Please transfer ${transfer.amount} from ${transfer.transferAccount}.`,
    });
  }
  public notifyBookingConfirmation(confirmation: NotificationEventDto): string {
    const notification = notificationsMap.find((n) => n.kind === NotificationKinds.BOOKING_CONFIRMED);
    return this.smtp.sendMail({
      from: notification?.sender || "",
      to: confirmation.recipient,
      subject: `${notification?.sender || ""}  -  ${confirmation.bookingId}`,
      body: `Enjoy your tip to ${confirmation.tripDestination}!`,
    });
  }
}
