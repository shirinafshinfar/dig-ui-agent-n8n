import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "dig";
import { Button } from "dig";
import { Badge } from "dig";

type Status = "paid" | "pending" | "failed";

type PaymentCardProps = {
  amount: number; // تومان
  reference: string;
  status: Status;
  onDetails?: () => void;
};

const statusMap: Record<Status, { text: string; color: string }> = {
  paid: { text: "موفق", color: "success" },
  pending: { text: "در انتظار", color: "warning" },
  failed: { text: "ناموفق", color: "destructive" },
};

function formatAmount(amount: number) {
  try {
    return amount.toLocaleString("fa-IR") + " تومان";
  } catch {
    return amount + " تومان";
  }
}

export default function PaymentCard({
  amount,
  reference,
  status,
  onDetails,
}: PaymentCardProps) {
  const map = statusMap[status];

  return (
    <Card>
      <CardHeader>
        <CardTitle>اطلاعات پرداخت</CardTitle>
        <CardDescription>جزییات تراکنش و وضعیت آن</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm text-muted-foreground">مبلغ</div>
            <div className="text-lg font-semibold">{formatAmount(amount)}</div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground">شماره پیگیری</div>
            <div className="font-medium">{reference}</div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground">وضعیت</div>
            <Badge color={map.color as any} className="mt-1">
              {map.text}
            </Badge>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="outline" size="sm" onClick={onDetails}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-ml-1"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.998 19.355C15.806 19.355 19.289 16.617 21.25 12.053C19.289 7.48898 15.806 4.75098 11.998 4.75098H12.002C8.194 4.75098 4.711 7.48898 2.75 12.053C4.711 16.617 8.194 19.355 12.002 19.355H11.998Z"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>مشاهده جزئیات</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
