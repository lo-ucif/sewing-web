import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const DEVELOPER_EMAIL = "developer@example.com"; // replace with your email
const DEVELOPER_LINKEDIN = "https://www.linkedin.com/in/your-profile"; // replace
const DEVELOPER_PORTFOLIO = "https://your-portfolio.example.com"; // replace
const DEVELOPER_WHATSAPP = "+000000000000"; // international format, replace

const DeveloperContact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`رسالة من ${name || "زائر"}`);
    const body = encodeURIComponent(
      `الاسم: ${name}\nالبريد: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${DEVELOPER_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div dir="rtl" className="px-4 pb-16 pt-28 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-right text-2xl font-semibold text-[#3d2734]">
          التواصل مع المطوّر
        </h1>

        <p className="mb-6 text-right text-sm text-muted">
          إذا كانت لديك ملاحظات أو تريد التعاون التقني، أرسل رسالة هنا وسأردّ
          عليك.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-right">
          <div>
            <label className="mb-1 block text-xs font-medium text-[#5d4352]">
              الاسم
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-border px-3 py-2 text-sm"
              placeholder="اسمك"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-[#5d4352]">
              البريد الإلكتروني
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-border px-3 py-2 text-sm"
              placeholder="email@domain.com"
              type="email"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-[#5d4352]">
              الرسالة
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-[120px] rounded-md border border-border px-3 py-2 text-sm"
              placeholder="اكتب رسالتك هنا..."
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-white shadow-sm"
            >
              إرسال إلى المطوّر
            </button>
            {sent && (
              <span className="text-sm text-[#3d2734]">
                تم فتح تطبيق البريد لإرسال الرسالة.
              </span>
            )}
          </div>
        </form>

        <div className="mt-8 border-t border-border pt-6 text-right">
          <p className="mb-3 text-sm font-semibold text-[#3d2734]">
            طرق إضافية للتواصل
          </p>
          <div className="flex flex-col gap-2">
            <a
              href={DEVELOPER_LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#0a66c2] hover:underline"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.75v2.2h.05c.52-.98 1.8-2.2 3.7-2.2 3.95 0 4.68 2.6 4.68 5.98V24h-4v-7.4c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.92-2.83 3.9V24h-4V8z" />
              </svg>
              LinkedIn — عرض الملف الشخصي
            </a>

            <a
              href={DEVELOPER_PORTFOLIO}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#3d2734] hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Portfolio — مشاهدة الأعمال
            </a>

            <a
              href={`https://wa.me/${DEVELOPER_WHATSAPP.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:underline"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 .01 5.37.01 12c0 2.12.55 4.18 1.6 5.98L0 24l6.3-1.65A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-1.98-.48-3.85-1.48-5.52zM12 21.5c-1.5 0-2.96-.4-4.2-1.17l-.3-.18-3.74.98.99-3.64-.19-.3A8.5 8.5 0 013.5 12c0-4.69 3.81-8.5 8.5-8.5S20.5 7.31 20.5 12 16.69 21.5 12 21.5zm5.15-7.9c-.27-.14-1.6-.8-1.85-.89-.25-.09-.43-.14-.62.14-.19.27-.76.89-.93 1.08-.17.19-.34.21-.62.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.3.41-.45.14-.15.19-.25.28-.42.09-.17.05-.31-.03-.45-.09-.14-.62-1.5-.85-2.06-.22-.54-.45-.47-.62-.48-.16-.01-.34-.01-.52-.01-.18 0-.45.07-.69.31-.24.24-.91.88-.91 2.15 0 1.27.93 2.5 1.05 2.67.12.17 1.81 2.85 4.38 3.88 3.42 1.4 3.42 0 3.42 0 .24-.01.38-.15.51-.27.13-.12.52-.5.59-1.01.07-.51.07-.94.05-1.03-.02-.09-.08-.14-.18-.19z" />
              </svg>
              WhatsApp — {DEVELOPER_WHATSAPP}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperContact;
