import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "dig";
import { Button } from "dig";

type PaymentCardProps = {
  amount: string; // مثال: "1,250,000 تومان"
  trackingNumber: string;
  status: "paid" | "pending" | "failed" | string;
  onViewDetails?: () => void;
};

const statusClass = (status: string) => {
  switch (status) {
    case "paid":
      return "text-green-700 bg-green-100 px-2 py-1 rounded-full text-sm";
    case "pending":
      return "text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full text-sm";
    case "failed":
      return "text-red-700 bg-red-100 px-2 py-1 rounded-full text-sm";
    default:
      return "text-gray-700 bg-gray-100 px-2 py-1 rounded-full text-sm";
  }
};

export default function PaymentCard({ amount, trackingNumber, status, onViewDetails }: PaymentCardProps) {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>پرداخت</CardTitle>
          <CardDescription>شماره پیگیری: {trackingNumber}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between px-2">
          <div>
            <div className="text-sm text-muted-foreground">مبلغ</div>
            <div className="mt-1 text-lg font-semibold">{amount}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className={statusClass(status)}>{status}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onViewDetails} variant="outline" size="sm">
          {/* DIGCHE icon (Eye) inlined and converted to JSX attributes */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M11.998 19.355C15.806 19.355 19.289 16.617 21.25 12.053C19.289 7.48898 15.806 4.75098 11.998 4.75098H12.002C8.194 4.75098 4.711 7.48898 2.75 12.053C4.711 16.617 8.194 19.355 12.002 19.355H11.998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>مشاهده جزئیات</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
