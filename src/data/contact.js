// Single source of truth for the society's contact details and social links.
export const CONTACT_EMAIL = "info@wisam.org.sa";

// Same number is used for calls and WhatsApp.
export const PHONE_DIGITS = "966557275295";
export const PHONE_DISPLAY = "+966 55 727 5295";
export const PHONE_HREF = `tel:+${PHONE_DIGITS}`;
export const WHATSAPP_HREF = `https://wa.me/${PHONE_DIGITS}`;

export const socialLinks = [
  { id: "instagram", name: "إنستغرام", href: "https://www.instagram.com/wisam_org/" },
  { id: "x", name: "إكس", href: "https://x.com/wisam_org" },
  { id: "youtube", name: "يوتيوب", href: "https://www.youtube.com/@Wisam_org" },
  { id: "tiktok", name: "تيك توك", href: "https://www.tiktok.com/@wisam_org" },
];

// Location of the society's office (Google Maps place).
export const ADDRESS_AR = "ممر عبد العزيز الشمري، العزيزية، الرياض 14512";
export const MAP_PLACE_NAME = "جمعية وسام لتنمية الطفل";
export const MAP_QUERY = encodeURIComponent(`${MAP_PLACE_NAME}، ${ADDRESS_AR}`);
export const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
export const MAP_LINK = "https://maps.app.goo.gl/m27wcEtkgGunBjyD6?g_st=awb";
