// Placeholder images for layout work. Swap these for real assets before shipping.

// Real photo. The same seed always returns the same image.
export const ph = (seed, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;

// Flat labelled box with exact dimensions, useful for checking aspect ratios.
export const box = (w = 1200, h = 800, label = `${w}×${h}`, bg = "e5e7eb", fg = "6b7280") =>
  `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(label)}`;
