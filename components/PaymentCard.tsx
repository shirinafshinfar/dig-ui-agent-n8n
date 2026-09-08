import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "dig";
import { Button } from "dig";

type PaymentCardProps = {
  amount: string | number;
  traceId: string;
  status: string;
  onDetails?: () => void;
};

export default function PaymentCard({ amount, traceId, status, onDetails }: PaymentCardProps) {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>پرداخت</CardTitle>
          <CardDescription>اطلاعات تراکنش و وضعیت پرداخت</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">مبلغ</span>
            <span className="font-medium">{amount}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">شماره پیگیری</span>
            <span className="font-mono text-sm">{traceId}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">وضعیت پرداخت</span>
            <span className="font-medium">{status}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="outline" onClick={onDetails} aria-label="مشاهده جزئیات">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M11.998 19.355C15.806 19.355 19.289 16.617 21.25 12.053C19.289 7.48898 15.806 4.75098 11.998 4.75098H12.002C8.194 4.75098 4.711 7.48898 2.75 12.053C4.711 16.617 8.194 19.355 12.002 19.355H11.998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>مشاهده جزئیات</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
