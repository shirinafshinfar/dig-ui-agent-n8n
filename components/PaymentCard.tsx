import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "dig"
import { Button } from "dig"
import { Badge } from "dig"

type PaymentCardProps = {
  amount: string | number
  trackingNumber: string
  status: string
  onViewDetails?: () => void
}

export default function PaymentCard({ amount, trackingNumber, status, onViewDetails }: PaymentCardProps) {
  const statusColor = React.useMemo(() => {
    const s = (status || "").toString().toLowerCase()
    if (s.includes("موفق") || s.includes("paid") || s.includes("done")) return "success"
    if (s.includes("در انتظار") || s.includes("pending")) return "warning"
    if (s.includes("ناموفق") || s.includes("failed") || s.includes("error")) return "destructive"
    return "default"
  }, [status])

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between w-full">
          <div>
            <CardTitle>پرداخت</CardTitle>
            <CardDescription>شماره پیگیری: {trackingNumber}</CardDescription>
          </div>
          <CardAction>
            <Badge size="sm" color={statusColor} aria-label={`status-${status}`}>
              {status}
            </Badge>
          </CardAction>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mt-1 text-2xl font-semibold">{amount} تومان</div>
      </CardContent>

      <CardFooter>
        <Button variant="outline" size="sm" onClick={onViewDetails}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M11.998 19.355C15.806 19.355 19.289 16.617 21.25 12.053C19.289 7.48898 15.806 4.75098 11.998 4.75098H12.002C8.194 4.75098 4.711 7.48898 2.75 12.053C4.711 16.617 8.194 19.355 12.002 19.355H11.998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          مشاهده جزئیات
        </Button>
      </CardFooter>
    </Card>
  )
}
