import { Mail, MapPin, Phone } from "lucide-react";
import SectionPage from "@/pages/section/SectionPage";

import SocialIcon from "@/componets/ui/SocialIcon";
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  socialLinks,
} from "@/data/contact";

// TODO: replace with the society's exact address or coordinates.
const MAP_QUERY = encodeURIComponent("جمعية وسام، المملكة العربية السعودية");

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
  </svg>
);

const channels = [
  {
    label: "البريد الإلكتروني",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
  },
  {
    label: "الهاتف",
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
    icon: Phone,
  },
  {
    label: "واتساب",
    value: PHONE_DISPLAY,
    href: WHATSAPP_HREF,
    icon: WhatsAppIcon,
    iconClass: "bg-[#25D366]/10 text-[#25D366]",
  },
];

const ContactUs = () => (
  <SectionPage
    section="تواصل معنا"
    title="اتصل بنا"
    intro="يسعدنا تواصلكم معنا عبر أي من القنوات التالية."
  >
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {channels.map(({ label, value, href, icon: Icon, iconClass }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="flex flex-col items-start gap-3 rounded-4xl bg-white p-6 text-secondary shadow-2xl
            shadow-black/20 transition-transform hover:-translate-y-1"
        >
          <span
            className={`grid size-12 place-items-center rounded-full ${iconClass ?? "bg-primary/10 text-primary"}`}
          >
            <Icon className="size-6" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold text-secondary/70">{label}</span>
          <span dir="ltr" className="text-base font-bold">
            {value}
          </span>
        </a>
      ))}

      <div className="rounded-4xl bg-white p-6 text-secondary shadow-2xl shadow-black/20 sm:col-span-2 lg:col-span-3">
        <span className="block text-sm font-semibold text-secondary/70">تابعنا على وسائل التواصل الاجتماعي</span>
        <ul className="mt-4 flex flex-wrap gap-3">
          {socialLinks.map(({ id, name, href }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <SocialIcon id={id} className="size-5" />
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-4xl bg-white p-6 text-secondary shadow-2xl shadow-black/20 sm:col-span-2 lg:col-span-1">
        <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
          <MapPin className="size-6" aria-hidden="true" />
        </span>
        <span className="mt-3 block text-sm font-semibold text-secondary/70">الموقع الجغرافي</span>
        <iframe
          src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
          title="موقع جمعية وسام على الخريطة"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mt-3 h-36 w-full rounded-2xl border-0"
        />
      </div>
    </div>
  </SectionPage>
);

export default ContactUs;
