import React, { useState } from "react";
import { Input } from "@/registry/dig/components/ui/input";
import { Button } from "@/registry/dig/components/ui/button";

export default function NewsletterSignupDigOnly() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // جای ارسال واقعی API قرار می‌گیرد
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full max-w-lg">
      <Input
        type="email"
        name="email"
        placeholder="آدرس ایمیل"
        value={email}
        onValueChange={(v) => setEmail(v)}
        required
        fullWidth
      />

      <Button type="submit" color="primary" loading={loading} disabled={loading || !email}>
        عضویت
      </Button>

      {submitted && (
        <p className="ms-3 text-sm text-success">متشکریم! ایمیل شما ثبت شد.</p>
      )}
    </form>
  );
}
