/* =========================================================
   Customized Wale – site script
   ---------------------------------------------------------
   EDIT THE SETTINGS BELOW. Everything else works on its own.
   A price of 0 shows as "₹ ___" until you fill it in.
   ========================================================= */

const SETTINGS = {
  // Your WhatsApp number with country code, digits only (e.g. "919876543210")
  whatsapp: "919370467551",
};

// Homepage categories. "item" opens that product's personalise page (see PRODUCT_PAGES below).
// Add an "image" path like "image/frames.jpg" to show a real photo instead of the drawn mockup.
const CATEGORIES = [
  { name: "Photo Frames", item: "frames" },
  { name: "Wall Clocks", item: "clocks" },
  { name: "Photo Mugs", item: "mugs", image: "image/mug.jpg" },
  { name: "Magic Photo Mug", item: "magicmugs" },
  { name: "Sipper & Travel Bottles", item: "bottles" },
  { name: "Photo Albums", item: "albums" },
  { name: "Mobile Cases", item: "cases", image: "image/mobilecase.jpg" },
  { name: "Keychains", item: "keychains", image: "image/keychain.jpg" },
  { name: "Coasters", item: "coasters", image: "image/squarecoaster.jpg" },
  { name: "Cushions", item: "cushions" },
  { name: "Photo Lamps", item: "lamps", image: "image/rotatinglamp.jpg" },
  { name: "Nameplates", item: "nameplates" },
  { name: "T-Shirts", item: "tshirts" },
  { name: "Polo T-Shirts", item: "polos" },
  { name: "Hoodies", item: "hoodies" },
  { name: "Mouse Pads", item: "mousepads", image: "image/mousepad.jpg" },
];

// Bestseller cards on the homepage (price = starting price in ₹)
const PRODUCTS = [
  { name: "Acrylic Photo Frame", note: "Crystal-clear, wall or table", price: 0, item: "frames", link: "product.html" },
  { name: "Personalised Wall Clock", note: "Your photo, silent movement", price: 0, item: "clocks" },
  { name: "Magic Photo Mug", note: "Photo appears with hot drinks", price: 0, item: "magicmugs", image: "image/mug.jpg" },
  { name: "Premium Photo Album", note: "Hardcover, lay-flat pages", price: 0, item: "albums" },
  { name: "Custom Mobile Case", note: "For most phone models", price: 0, item: "cases" },
  { name: "Photo Lamp", note: "Warm glow, your memory", price: 0, item: "lamps", image: "image/rotatinglamp.jpg" },
  { name: "Photo Keychain", note: "Carry your memory everywhere", price: 0, item: "keychains", image: "image/keychain.jpg" },
  { name: "Square Photo Coaster", note: "Set of coasters with your photos", price: 0, item: "coasters", image: "image/squarecoaster.jpg" },
  { name: "LED Pillow – Square", note: "Glowing photo pillow, with or without remote", price: 0, item: "cushions", image: "image/led-pillow-square.jpg", link: "customize.html?item=cushions&style=1" },
  { name: "LED Pillow – Heart", note: "Heart-shaped glowing photo pillow", price: 0, item: "cushions", image: "image/led-pillow-heart.jpg", link: "customize.html?item=cushions&style=2" },
  { name: "Custom Hoodie", note: "Your photo, name or design printed", price: 0, item: "hoodies" },
  { name: "Premium Mouse Pad", note: "Smooth surface, anti-slip base", price: 0, item: "mousepads", image: "image/mousepad.jpg" },
];

// Product page: Acrylic Photo Frame sizes and prices (₹) per shape
const FRAME_OPTIONS = {
  landscape: { label: "Landscape", w: 420, h: 315, sizes: [
    { label: "8 × 6 in", price: 0 }, { label: "12 × 9 in", price: 0 },
    { label: "16 × 12 in", price: 0 }, { label: "24 × 18 in", price: 0 } ] },
  portrait: { label: "Portrait", w: 300, h: 400, sizes: [
    { label: "6 × 8 in", price: 0 }, { label: "9 × 12 in", price: 0 },
    { label: "12 × 16 in", price: 0 }, { label: "18 × 24 in", price: 0 } ] },
  square: { label: "Square", w: 320, h: 320, sizes: [
    { label: "8 × 8 in", price: 0 }, { label: "12 × 12 in", price: 0 },
    { label: "16 × 16 in", price: 0 }, { label: "20 × 20 in", price: 0 } ] },
};

// Sample photo shown on every product until the customer uploads their own
const SAMPLE_PHOTO = "image/sample-photo.jpg";

// Every product: one "your photo" print. The designer opens right on the product page.
const PHOTO_ONLY = [{ name: "Your Photo", tag: "Custom photo", layout: "full", bg: "#EFE4D3", fg: "#FFFFFF", title: "" }];

// Nameplates: text-only until a photo is uploaded, then photo + name
const NAMEPLATE_DESIGNS = [
  { name: "Nameplate", tag: "Custom nameplate", layout: "text", bg: "#0B5A55", fg: "#FFF8EE", title: "Welcome" },
  { name: "Nameplate", tag: "Custom nameplate", layout: "circle", bg: "#0B5A55", fg: "#FFF8EE", title: "Welcome" },
];

// Polo T-shirts: company name on the left chest until a logo is uploaded, then logo + name.
// bg "transparent" lets the shirt colour show through.
const POLO_DESIGNS = [
  { name: "Polo", tag: "Logo print", layout: "text", bg: "transparent", fg: "#221A14", title: "" },
  { name: "Polo", tag: "Logo print", layout: "logo", bg: "transparent", fg: "#221A14", title: "" },
];

// Clothing colours (name + colour code). White shows the real photo; other colours show a drawn garment.
const GARMENT_COLORS = [
  { name: "White", hex: "#FFFFFF" }, { name: "Black", hex: "#1F1F1F" }, { name: "Navy Blue", hex: "#1B2A4A" },
  { name: "Royal Blue", hex: "#1F4FBF" }, { name: "Red", hex: "#C62828" }, { name: "Maroon", hex: "#6D1B2B" },
  { name: "Grey Melange", hex: "#9E9E9E" }, { name: "Bottle Green", hex: "#1E5631" }, { name: "Yellow", hex: "#F5C518" },
];
const HOODIE_COLORS = [
  { name: "White", hex: "#FFFFFF" }, { name: "Black", hex: "#1F1F1F" }, { name: "Grey Melange", hex: "#9E9E9E" },
  { name: "Navy Blue", hex: "#1B2A4A" }, { name: "Maroon", hex: "#6D1B2B" },
];

// LED pillow photos (your own). box = where the customer's design goes, in % (left, top, width, height)
const LED_SQUARE = { src: "image/led-pillow-square.jpg", ar: "1 / 1", box: [21.5, 23.3, 54.3, 55.8], cls: "led" };
const LED_HEART = { src: "image/led-pillow-heart.jpg", ar: "1 / 1", box: [21.8, 27.6, 56, 49.4], cls: "led heart" };

// Bottle photos (free Unsplash photos – see image/mockups/CREDITS.txt)
const BOTTLE_WHITE = { src: "image/mockups/bottle-white.jpg", ar: "660 / 980", box: [34.8, 29.6, 29.5, 50] };
const BOTTLE_SILVER = { src: "image/mockups/bottle-silver.jpg", ar: "380 / 520", box: [34.7, 36.5, 28.9, 51.9], cls: "metal" };
const TRAVEL_MUG = { src: "image/mockups/travel-mug.jpg", ar: "450 / 740", box: [20, 13.5, 56.7, 67.6], cls: "metal" };

// Mobile cases: brands and models customers can pick from (newest first).
// Edit these lists to match the models you can supply. Model names are shown after the brand, e.g. "Samsung" + "Galaxy S25".
const PHONE_BRANDS = [
  { key: "apple", name: "Apple", models: ["iPhone 18 Pro Max", "iPhone 18 Pro", "iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17 Air", "iPhone 17", "iPhone 17e", "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 16e", "iPhone 15 Pro Max", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini", "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11"] },
  { key: "samsung", name: "Samsung", models: ["Galaxy S25 Ultra", "Galaxy S25+", "Galaxy S25", "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S24 FE", "Galaxy S23 Ultra", "Galaxy S23", "Galaxy S23 FE", "Galaxy A56", "Galaxy A55", "Galaxy A36", "Galaxy A35", "Galaxy A26", "Galaxy A25", "Galaxy A16", "Galaxy A15", "Galaxy M55", "Galaxy M35", "Galaxy M15", "Galaxy F55"] },
  { key: "oneplus", name: "OnePlus", models: ["13", "13R", "12", "12R", "11", "11R", "Nord 5", "Nord CE5", "Nord 4", "Nord CE4", "Nord CE4 Lite", "Nord 3", "Nord CE3"] },
  { key: "redmi", name: "Redmi", models: ["Note 14 Pro+", "Note 14 Pro", "Note 14", "Note 13 Pro+", "Note 13 Pro", "Note 13", "14C", "13C", "13", "A4"] },
  { key: "xiaomi", name: "Xiaomi", models: ["15", "14", "14 Civi"] },
  { key: "poco", name: "Poco", models: ["F7", "F6", "X7 Pro", "X7", "X6 Pro", "X6", "M7 Pro", "M6 Pro", "M6", "C75"] },
  { key: "vivo", name: "Vivo", models: ["X200 Pro", "X200", "X100 Pro", "V50", "V40 Pro", "V40", "V30 Pro", "V30", "T4", "T3 Ultra", "T3", "Y58", "Y29", "Y28"] },
  { key: "realme", name: "Realme", models: ["GT 7 Pro", "GT 6", "14 Pro+", "14 Pro", "13 Pro+", "13 Pro", "13", "12 Pro+", "12 Pro", "P3 Pro", "P2 Pro", "Narzo 70 Pro", "C75", "C65"] },
  { key: "oppo", name: "Oppo", models: ["Find X8 Pro", "Reno 13 Pro", "Reno 13", "Reno 12 Pro", "Reno 12", "Reno 11 Pro", "F29 Pro", "F27 Pro+", "K13", "A3 Pro", "A79"] },
  { key: "iqoo", name: "iQOO", models: ["13", "12", "Neo 10R", "Neo 9 Pro", "Z10", "Z9s", "Z9", "Z9x"] },
  { key: "google", name: "Google", models: ["Pixel 10 Pro XL", "Pixel 10 Pro", "Pixel 10", "Pixel 9 Pro XL", "Pixel 9 Pro", "Pixel 9", "Pixel 9a", "Pixel 8 Pro", "Pixel 8", "Pixel 8a", "Pixel 7a"] },
  { key: "nothing", name: "Nothing", models: ["Phone (3)", "Phone (3a) Pro", "Phone (3a)", "Phone (2)", "Phone (2a) Plus", "Phone (2a)", "Phone (1)", "CMF Phone 2 Pro", "CMF Phone 1"] },
  { key: "motorola", name: "Motorola", models: ["Edge 60 Pro", "Edge 60 Fusion", "Edge 50 Pro", "Edge 50 Fusion", "Edge 50 Neo", "Moto G85", "Moto G64", "Moto G45", "Moto G35"] },
  { key: "infinix", name: "Infinix", models: ["GT 20 Pro", "Zero 40", "Note 40 Pro", "Hot 50", "Smart 8"] },
];

// Mug colour choices (name + colour code)
const MUG_COLORS_PATCH = [
  { name: "Black", hex: "#1F1F1F" }, { name: "Sky Blue", hex: "#7EC8E3" }, { name: "Yellow", hex: "#F5C518" },
];
const MUG_COLORS_INNER = [
  { name: "Red", hex: "#D62828" }, { name: "Green", hex: "#2A9D4B" }, { name: "Blue", hex: "#1F5FBF" },
  { name: "Yellow", hex: "#F5C518" }, { name: "Pink", hex: "#F28DB2" }, { name: "Orange", hex: "#F28C28" },
];
const MUG_COLORS_TONE = [
  { name: "Black", hex: "#1F1F1F" }, { name: "Sky Blue", hex: "#7EC8E3" }, { name: "Red", hex: "#D62828" },
  { name: "Pink", hex: "#F28DB2" }, { name: "Mint Green", hex: "#98DDCA" }, { name: "Yellow", hex: "#F5C518" },
  { name: "Orange", hex: "#F28C28" }, { name: "Dark Blue", hex: "#1B2A6B" }, { name: "Maroon", hex: "#7A1F2B" },
];

// Personalise pages – one entry per product, opened as customize.html?item=KEY
// types = options the customer picks (size, material…) with prices in ₹
const SIZES = ["S", "M", "L", "XL", "XXL"];
const PRODUCT_PAGES = {
  frames: {
    name: "Photo Frame", title: "Photo Frames", shape: "frame", photo: { src: "image/mockups/frame.jpg", ar: "800 / 600", box: [12.6, 18.7, 74.8, 55.8] }, typeLabel: "Choose size",
    intro: "Choose a size, upload your favourite photo and we print it on a premium acrylic frame — ready for your wall or table.",
    about: "Your photo is printed on premium clear acrylic for a glossy, glass-like finish with vivid colours. Comes ready to hang or stand.",
    types: [
      { label: "8 × 6 in", note: "Table size", price: 0 },
      { label: "12 × 9 in", note: "Wall or table", price: 0 },
      { label: "16 × 12 in", note: "Wall size", price: 0 },
      { label: "24 × 18 in", note: "Large wall size", price: 0 },
    ],
    details: {
      highlights: [
        { title: "Glass-like finish", text: "Printed on crystal-clear acrylic for a glossy, gallery-style look that makes colours pop." },
        { title: "Wall or table", text: "Hang it on the wall or stand it on a table, desk or shelf." },
        { title: "Vivid, fade-resistant print", text: "Sharp, bright colours that keep your memory looking new for years." },
        { title: "Gift-ready", text: "Packed safely so it arrives perfect — a lovely gift for any occasion." },
      ],
      specs: [
        ["Material", "Premium clear acrylic"],
        ["Finish", "Glossy"],
        ["Sizes", "8 × 6, 12 × 9, 16 × 12, 24 × 18 in"],
        ["Mounting", "Wall hanging or table stand"],
        ["Print", "Full-colour photo print"],
      ],
      care: ["Wipe with a soft, dry microfibre cloth", "Avoid harsh cleaners and rough cloths", "Keep away from direct sunlight for long periods"],
      faqs: [
        ["Which photos work best?", "Clear, well-lit photos taken on a phone or camera. Avoid screenshots and very small images."],
        ["Can I hang it on the wall?", "Yes — the frame can be hung on the wall or placed on a table."],
        ["Is the acrylic easy to scratch?", "Acrylic is durable for everyday use. Clean it with a soft cloth to keep it scratch-free."],
      ],
    },
  },
  clocks: {
    name: "Wall Clock", title: "Wall Clocks", shape: "clock", photo: { src: "image/mockups/clock.jpg", ar: "1 / 1", box: [10.8, 10.8, 78.4, 78.4] }, typeLabel: "Choose size",
    intro: "Turn your favourite photo into a wall clock. Choose a size, upload a photo and add a name.",
    about: "Photo wall clock with a silent, non-ticking movement. Battery not included.",
    types: [
      { label: "10 in round", note: "Silent movement", price: 0 },
      { label: "12 in round", note: "Silent movement", price: 0 },
      { label: "14 in round", note: "Silent movement", price: 0 },
    ],
    details: {
      highlights: [
        { title: "Your photo on the dial", text: "Your favourite photo fills the clock face, with clear hands on top." },
        { title: "Silent movement", text: "No ticking sound — perfect for bedrooms, living rooms and offices." },
        { title: "Three sizes", text: "Choose 10, 12 or 14 inch to suit your wall." },
        { title: "Ready to hang", text: "Comes ready to hang — just add a battery." },
      ],
      specs: [
        ["Shape", "Round"],
        ["Sizes", "10, 12 and 14 inch"],
        ["Movement", "Silent, non-ticking"],
        ["Power", "1 × AA battery (not included)"],
        ["Print", "Full-colour photo print"],
      ],
      care: ["Dust with a soft, dry cloth", "Keep away from water and direct sunlight", "Replace the battery when the clock slows down"],
      faqs: [
        ["Does the clock tick?", "No, it has a silent movement, so there is no ticking sound."],
        ["Is a battery included?", "No — it uses one AA battery, available at any store."],
        ["Will the hands cover my photo?", "The hands are slim, so your photo stays clearly visible."],
      ],
    },
  },
  mugs: {
    name: "Photo Mug", title: "Photo Mugs", shape: "mug", photo: { src: "image/mockups/mug.jpg", ar: "700 / 590", box: [19.4, 20.7, 43.1, 61.5] }, typeLabel: "Choose mug type",
    designs: PHOTO_ONLY, sample: "", direct: true,
    intro: "Choose your mug type and colour, upload your photo and add a name — we print it and deliver it to your door.",
    about: "Premium photo mugs printed with vivid, long-lasting colours. Choose from classic white, colourful patch and inner-colour mugs, heart-handle and two- or three-tone mugs, couple sets, shiny golden and silver mugs, and frosted glass and beer mugs.",
    // Each type: group = mug-type button above the designs. "mug" = how the preview mug is drawn
    // (body, inner, handle, rim colours; heart handle, patch, glass, pair). "$c" = the colour the customer picks.
    // Types without "mug" use the real mug photo.
    types: [
      { label: "White Mug", note: "Classic 11 oz ceramic", price: 0, group: "White Mug" },
      { label: "Patch Mug", note: "Coloured mug, white print patch", price: 0, group: "Patch Mug",
        colorLabel: "Mug colour", colors: MUG_COLORS_PATCH, mug: { body: "$c", inner: "$c", handle: "$c", patch: true } },
      { label: "Inner Colour", note: "Coloured inside & handle", price: 0, group: "Inner Colour",
        colorLabel: "Inner colour", colors: MUG_COLORS_INNER, mug: { inner: "$c", handle: "$c" } },
      { label: "White Heart Handle Mug", note: "Heart-shaped handle", price: 0, group: "Heart Handle",
        mug: { heart: true } },
      { label: "White Inner Heart Handle Mug", note: "Handle with a heart-shaped opening", price: 0, group: "Heart Handle",
        mug: { innerHeart: true } },
      { label: "2 Tone Mug", note: "Coloured inside & handle", price: 0, group: "2 & 3 Tone",
        colorLabel: "Colour", colors: MUG_COLORS_TONE, mug: { inner: "$c", handle: "$c" } },
      { label: "3 Tone Mug – Heart Handle", note: "Coloured inside, rim & heart handle", price: 0, group: "2 & 3 Tone",
        colorLabel: "Colour", colors: MUG_COLORS_TONE, mug: { inner: "$c", handle: "$c", rim: "$c", heart: true } },
      { label: "White Couple Mug (Set)", note: "Set of 2 mugs", price: 0, group: "Couple Set",
        mug: { pair: true } },
      { label: "Golden Mug", note: "Shiny metallic gold", price: 0, group: "Golden & Silver",
        mug: { body: "linear-gradient(90deg,#8C6A1C,#E9CB6B 35%,#FFF1B8 48%,#C99A2E 70%,#7A5A14)", inner: "#C99A2E", handle: "#D4AF37", patch: true } },
      { label: "Silver Mug", note: "Shiny metallic silver", price: 0, group: "Golden & Silver",
        mug: { body: "linear-gradient(90deg,#7D8288,#D9DDE1 35%,#FFFFFF 48%,#B4B9BF 70%,#6E7379)", inner: "#B4B9BF", handle: "#C9CDD2", patch: true } },
      { label: "Frosted Beer Mug", note: "Frosted glass beer mug", price: 0, group: "Frosted Glass",
        mug: { glass: true, tall: true } },
      { label: "Frosted Glass Mug", note: "Frosted glass coffee mug", price: 0, group: "Frosted Glass",
        mug: { glass: true } },
    ],
    details: {
      highlights: [
        { title: "12 mug styles", text: "White, patch, inner colour, heart handle, 2 & 3 tone, couple set, golden, silver and frosted glass." },
        { title: "Pick your colour", text: "Patch, inner-colour and tone mugs come in a range of bright colours." },
        { title: "Vivid, long-lasting print", text: "Your photo is printed in sharp, glossy colour that lasts." },
        { title: "Perfect gift", text: "Birthdays, anniversaries, Valentine's, Mother's and Father's Day — a mug suits every occasion." },
      ],
      specs: [
        ["Material", "Ceramic (frosted mugs: glass)"],
        ["Capacity", "11 oz (325 ml) standard mugs"],
        ["Print", "Full-colour photo print"],
        ["Styles", "12 styles — see the options above"],
        ["Packaging", "Safe, breakage-proof box"],
      ],
      care: ["Hand wash gently for the longest life", "Avoid scrubbing the print with abrasive pads", "Golden and silver mugs are not microwave safe"],
      faqs: [
        ["Which mug type should I choose?", "A white mug is the classic choice. For a pop of colour try patch, inner-colour or tone mugs; for a special gift try golden, silver or a couple set."],
        ["Can I add a name or message?", "Yes — type it in the designer and see it on the mug instantly."],
        ["Is the mug microwave safe?", "Ceramic mugs are. Golden and silver mugs have a metallic finish and should not go in the microwave."],
      ],
    },
  },
  magicmugs: {
    name: "Magic Photo Mug", title: "Magic Photo Mugs", shape: "mug", typeLabel: "Choose mug",
    photo: { src: "image/mockups/mug.jpg", ar: "700 / 590", box: [19.4, 20.7, 43.1, 61.5] },
    designs: PHOTO_ONLY, sample: "", direct: true,
    intro: "Add hot or cold water to see the magic.",
    about: "A colour-changing magic mug printed with your photo and name. Pour in a drink and watch your photo appear — a fun surprise gift for birthdays, anniversaries and friends.",
    types: [
      { label: "Magic Mug – 11 oz", note: "Colour-changing ceramic", price: 0 },
    ],
    details: {
      highlights: [
        { title: "A magical reveal", text: "The mug looks plain until you pour in a drink — then your photo appears." },
        { title: "Hot or cold", text: "Add hot or cold water to see the magic happen." },
        { title: "Your photo & name", text: "Print a favourite photo with a name or short message." },
        { title: "A gift that surprises", text: "Fun for birthdays, anniversaries and friends." },
      ],
      specs: [
        ["Material", "Colour-changing ceramic"],
        ["Capacity", "11 oz (325 ml)"],
        ["Print", "Full-colour photo print"],
        ["Packaging", "Safe, breakage-proof box"],
      ],
      care: ["Hand wash only — no dishwasher", "Not microwave safe", "Avoid scrubbing the outside with abrasive pads"],
      faqs: [
        ["How does the magic mug work?", "A special coating hides the photo. Pour in a drink and the coating changes, revealing your photo."],
        ["Can I put it in the microwave?", "No — please hand wash and avoid the microwave to protect the magic coating."],
        ["Will the magic effect last?", "Yes, with gentle hand washing the effect lasts a long time."],
      ],
    },
  },
  bottles: {
    name: "Sipper Bottle", title: "Sipper & Travel Bottles", shape: "bottle", typeLabel: "Choose bottle",
    photo: BOTTLE_WHITE,
    intro: "Sipper bottles and travel mugs printed with your photo and name — perfect for school, office, gym and travel.",
    about: "Durable 750 ml sipper bottles in classic, straw cap, sports cap, flip cap and silver styles, plus a silver travelling mug for tea and coffee on the go. Printed with your photo, name or logo — a useful gift for kids, friends, staff and teams.",
    // group = style button above the designs; each style shows its own bottle photo
    types: [
      { label: "Sipper Bottle 750 ml", note: "Classic cap", price: 0, group: "Sipper Bottles" },
      { label: "Sipper Bottle 750 ml – Straw Cap", note: "Sip through a straw", price: 0, group: "Sipper Bottles" },
      { label: "Sipper Bottle 750 ml – Sports Cap", note: "Push-pull sports cap", price: 0, group: "Sipper Bottles" },
      { label: "Sipper Bottle 750 ml – Flip Cap", note: "One-touch flip cap", price: 0, group: "Sipper Bottles" },
      { label: "Sipper Bottle 750 ml – Silver", note: "Silver finish", price: 0, group: "Silver Sipper", photo: BOTTLE_SILVER },
      { label: "Travelling Mug – Silver", note: "With lid, for tea & coffee", price: 0, group: "Travelling Mug", photo: TRAVEL_MUG },
    ],
    details: {
      highlights: [
        { title: "Take it everywhere", text: "School, office, gym or travel — a bottle that's unmistakably yours." },
        { title: "Choose your cap", text: "Classic, straw, sports or flip cap — or go for the silver sipper or travelling mug." },
        { title: "Your photo & name", text: "Printed with your photo, name or logo so it never gets mixed up." },
        { title: "Great for teams", text: "A useful gift for kids, staff, clubs and events — bulk orders welcome." },
      ],
      specs: [
        ["Capacity", "750 ml sipper bottles"],
        ["Cap options", "Classic, straw, sports, flip cap"],
        ["Also available", "Silver sipper, silver travelling mug"],
        ["Print", "Full-colour photo print"],
      ],
      care: ["Hand wash with warm, soapy water", "Do not put in the dishwasher or microwave", "Wipe the print gently — don't scrub it"],
      faqs: [
        ["Which cap should I choose?", "Straw and flip caps are easy for kids; sports caps are great for the gym; the classic cap suits everyday use."],
        ["Can I order bottles for my team or school?", "Yes — message us on WhatsApp for bulk pricing."],
        ["Is the travelling mug good for hot drinks?", "Yes, it comes with a lid and is made for tea and coffee on the go."],
      ],
    },
  },
  albums: {
    name: "Photo Album", title: "Photo Albums", shape: "album", photo: { src: "image/mockups/album.jpg", ar: "900 / 1080", box: [23.1, 8.4, 58.7, 83.9] }, typeLabel: "Choose pages",
    textLabel: "Add a title for the cover", placeholder: "e.g. Our Wedding",
    intro: "Upload your cover photo and add a title. Send the rest of your photos on WhatsApp after ordering.",
    about: "Hardcover photo album with thick, lay-flat pages.",
    types: [
      { label: "20 pages", note: "Hardcover, lay-flat", price: 0 },
      { label: "40 pages", note: "Hardcover, lay-flat", price: 0 },
      { label: "60 pages", note: "Hardcover, lay-flat", price: 0 },
    ],
    details: {
      highlights: [
        { title: "Your photo on the cover", text: "Your favourite photo and a title of your choice on a hardcover." },
        { title: "Lay-flat pages", text: "Pages open flat so photos spread beautifully across both sides." },
        { title: "20, 40 or 60 pages", text: "Choose the size that fits your wedding, trip or family story." },
        { title: "Easy to order", text: "Order here, then send the rest of your photos to us on WhatsApp." },
      ],
      specs: [
        ["Cover", "Hardcover with your photo and title"],
        ["Pages", "20, 40 or 60 lay-flat pages"],
        ["Print", "Full-colour photo print"],
        ["Photos", "Send the inside photos on WhatsApp after ordering"],
      ],
      care: ["Keep away from water and damp places", "Store flat or upright on a shelf", "Handle pages with clean, dry hands"],
      faqs: [
        ["How do I send the photos for the inside pages?", "After ordering, send your photos on WhatsApp — we'll arrange them and share a preview."],
        ["Can I choose the order of photos?", "Yes — number your photos or tell us the order when you send them."],
        ["What can I write on the cover?", "Any short title — names, a date, or an occasion like Our Wedding."],
      ],
    },
  },
  cases: {
    name: "Mobile Case", title: "Mobile Cases", shape: "case", typeLabel: "Choose case type",
    phones: PHONE_BRANDS,
    // One design only: the customer's photo across the whole case (name is optional)
    designs: PHOTO_ONLY,
    sample: "",
    intro: "Put your photo on your phone. Choose your phone brand and model, then upload your photo.",
    about: "Custom mobile cases made just for you — print a favourite photo, your name, a logo or one of our ready designs. Every case is made for your exact phone model, printed with vivid, long-lasting colours, and checked before it is packed and shipped. A thoughtful gift for friends, couples and family, or a fresh new look for your own phone.",
    extra: { label: "Your phone model", placeholder: "e.g. iPhone 13, Redmi Note 12", required: true },
    types: [
      { label: "Hard case", note: "Slim, glossy print", price: 0 },
      { label: "Soft case", note: "Flexible silicone", price: 0 },
      { label: "Glass case", note: "Toughened glass back", price: 0 },
    ],
    details: {
      highlights: [
        { title: "Your photo, your case", text: "Print a favourite photo, a name, a logo or one of our ready designs — no design skills needed." },
        { title: "Vivid, long-lasting print", text: "Sharp, bright colours printed to handle everyday use without fading or peeling." },
        { title: "Made for your model", text: "Each case fits your exact phone, with precise cut-outs for the camera, buttons, ports and speakers." },
        { title: "Hard, soft or glass", text: "Pick a slim hard case, a flexible soft case or a premium glass-back case." },
      ],
      steps: [
        { title: "Choose your brand", text: "Pick your phone brand — Apple, Samsung, OnePlus, Redmi and more." },
        { title: "Choose your model", text: "Select your exact phone model so the case fits perfectly." },
        { title: "Upload your photo & order", text: "Upload your photo, add a name if you like, select hard, soft or glass, then add to cart or order on WhatsApp." },
      ],
      stepsNote: "Need help with your design? Message us on WhatsApp and we'll help you create it.",
      specs: [
        ["Case types", "Hard case, soft case, glass case"],
        ["Print", "Full-colour print on the back"],
        ["Cut-outs", "Camera, buttons, ports & speakers"],
        ["Phone models", "Most popular models — enter yours when ordering"],
        ["Personalise with", "Photo, name, logo or ready design"],
        ["Packaging", "Safe, protective packaging"],
      ],
      brands: PHONE_BRANDS.map((b) => b.name),
      brandsNote: "Don't see your phone? Message us on WhatsApp — we'll check if your model is available.",
      care: [
        "Remove the phone before cleaning the case",
        "Wipe with a soft, damp cloth and mild soap",
        "Avoid alcohol, harsh chemicals and abrasive cleaners",
        "Don't leave the case in hot sun for long periods",
      ],
      faqs: [
        ["How do I clean my mobile case?", "Take the phone out, wipe the case with a soft cloth dampened with mild soapy water, then dry it. Avoid alcohol and harsh cleaners."],
        ["Will the print fade or peel?", "No — the print is made for everyday use. With normal care, the colours stay bright and the print stays in place."],
        ["Can I still use the buttons, ports and camera?", "Yes. Every case has precise cut-outs, so buttons, charging port, speakers and camera all work normally."],
        ["What's the difference between hard, soft and glass cases?", "Hard cases are slim and rigid. Soft cases are flexible and grippy and absorb small bumps. Glass cases have a toughened glass back for a shiny, premium look."],
        ["My phone model isn't listed — what should I do?", "Type your exact model when ordering, or message us on WhatsApp and we'll confirm if we can make it."],
      ],
    },
  },
  keychains: {
    name: "Photo Keychain", title: "Keychains", shape: "keychain", typeLabel: "Choose shape",
    samplePhoto: "image/shivba-art.jpg",
    intro: "Carry your favourite memory everywhere. Choose MDF or metal, pick a shape, upload a photo and add a name.",
    about: "Personalised photo keychains in MDF wood or metal, in square, rectangle, round, heart and oval shapes — with a strong metal ring.",
    // group = MDF / Metal buttons; key = how the preview keychain is drawn (shape, metal edge or MDF wood edge)
    types: [
      { label: "MDF Keychain – Square", note: "Wooden MDF", price: 0, group: "MDF Keychain", key: { shape: "square" } },
      { label: "MDF Keychain – Rectangle", note: "Wooden MDF", price: 0, group: "MDF Keychain", key: { shape: "rect" } },
      { label: "MDF Keychain – Round", note: "Wooden MDF", price: 0, group: "MDF Keychain", key: { shape: "round" } },
      { label: "MDF Keychain – Heart", note: "Wooden MDF", price: 0, group: "MDF Keychain", key: { shape: "heart" } },
      { label: "MDF Keychain – Oval", note: "Wooden MDF", price: 0, group: "MDF Keychain", key: { shape: "oval" } },
      { label: "Metal Keychain – Rectangle", note: "Silver metal", price: 0, group: "Metal Keychain", key: { shape: "rect", metal: true } },
      { label: "Metal Keychain – Heart", note: "Silver metal", price: 0, group: "Metal Keychain", key: { shape: "heart", metal: true } },
      { label: "Metal Keychain – Round", note: "Silver metal", price: 0, group: "Metal Keychain", key: { shape: "round", metal: true } },
    ],
    details: {
      highlights: [
        { title: "MDF or metal", text: "Lightweight MDF wood with a natural edge, or premium silver metal." },
        { title: "Five shapes", text: "Square, rectangle, round, heart and oval in MDF; rectangle, heart and round in metal." },
        { title: "Strong ring", text: "A sturdy metal ring that holds your keys securely." },
        { title: "Great return gift", text: "Perfect for birthdays, weddings and events — bulk orders welcome." },
      ],
      specs: [
        ["Materials", "MDF wood or metal"],
        ["MDF shapes", "Square, rectangle, round, heart, oval"],
        ["Metal shapes", "Rectangle, heart, round"],
        ["Ring", "Metal key ring"],
        ["Print", "Full-colour photo print"],
        ["Bulk orders", "Available — message us on WhatsApp"],
      ],
      care: ["Wipe with a soft, dry cloth", "Keep MDF keychains away from water", "Avoid scratching the print with keys or sharp objects"],
      faqs: [
        ["What's the difference between MDF and metal?", "MDF is a light, wood-based board with a warm natural look. Metal keychains feel heavier and more premium, with a shiny silver finish."],
        ["Which shape should I choose?", "Rectangle and oval suit portrait photos, square and round suit close-up faces, and heart is perfect for couples."],
        ["Can I order keychains as return gifts?", "Yes — message us on WhatsApp for bulk pricing."],
      ],
    },
  },
  coasters: {
    name: "Photo Coaster", title: "Coasters", shape: "coaster", typeLabel: "Choose set",
    intro: "Photo coasters for your home or as a gift. Choose a set, upload a photo and add a name.",
    about: "Square photo coasters with a heat-resistant surface and non-slip base.",
    types: [
      { label: "Set of 2", note: "Square coasters", price: 0 },
      { label: "Set of 4", note: "Square coasters", price: 0 },
      { label: "Set of 6", note: "Square coasters", price: 0 },
    ],
    details: {
      highlights: [
        { title: "Your photos on the table", text: "Every cup of tea comes with a smile." },
        { title: "Heat-resistant top", text: "Protects your table from hot mugs and cold glasses." },
        { title: "Non-slip base", text: "Stays in place on any surface." },
        { title: "Sets of 2, 4 or 6", text: "Perfect for gifting or for your own home." },
      ],
      specs: [
        ["Shape", "Square"],
        ["Sets", "2, 4 or 6 coasters"],
        ["Surface", "Heat-resistant, glossy print"],
        ["Base", "Non-slip"],
      ],
      care: ["Wipe with a damp cloth", "Do not soak in water or put in the dishwasher"],
      faqs: [
        ["Can each coaster have a different photo?", "Yes — upload one photo here and send the others on WhatsApp after ordering."],
        ["Are they heat resistant?", "Yes, they're made to hold hot mugs safely."],
      ],
    },
  },
  cushions: {
    name: "Photo Cushion", title: "Cushions", shape: "cushion", photo: { src: "image/mockups/cushion.jpg", ar: "1 / 1", box: [21.2, 23.1, 56.2, 55] }, typeLabel: "Choose style & size",
    intro: "Soft photo cushions and glowing LED photo pillows. Choose a style, upload a photo and add a name.",
    about: "Choose a classic soft-touch photo cushion, or a fluffy LED pillow that lights up your photo — available in square and heart shapes, with or without a remote. Filler included.",
    // group = style button above the designs; a type's own "photo" replaces the product photo in the preview
    types: [
      { label: "Cushion 12 × 12 in", note: "With filler", price: 0, group: "Photo Cushion" },
      { label: "Cushion 16 × 16 in", note: "With filler", price: 0, group: "Photo Cushion" },
      { label: "LED Square – with remote", note: "Glowing lights + remote", price: 0, group: "LED Pillow – Square", photo: LED_SQUARE },
      { label: "LED Square – without remote", note: "Glowing lights", price: 0, group: "LED Pillow – Square", photo: LED_SQUARE },
      { label: "LED Heart – with remote", note: "Glowing lights + remote", price: 0, group: "LED Pillow – Heart", photo: LED_HEART },
      { label: "LED Heart – without remote", note: "Glowing lights", price: 0, group: "LED Pillow – Heart", photo: LED_HEART },
    ],
    details: {
      highlights: [
        { title: "Soft & cuddly", text: "A plush cushion with your favourite photo printed on the front." },
        { title: "LED glow", text: "LED pillows light up your photo — a magical night light." },
        { title: "Square or heart", text: "Choose a square or heart-shaped LED pillow, with or without a remote." },
        { title: "Filler included", text: "Arrives ready to use — no extra filling needed." },
      ],
      specs: [
        ["Styles", "Photo cushion, LED pillow – square, LED pillow – heart"],
        ["Cushion sizes", "12 × 12 in, 16 × 16 in"],
        ["LED options", "With or without remote"],
        ["Filler", "Included"],
        ["Print", "Full-colour photo print"],
      ],
      care: ["Spot clean with a damp cloth", "Remove the LED unit before cleaning LED pillows", "Do not machine wash or iron the print"],
      faqs: [
        ["What does the remote do?", "The remote lets you switch the lights on and off and change the light effect without touching the pillow."],
        ["How is the LED pillow powered?", "It runs on batteries or a USB power source — ask us on WhatsApp for details of the model you choose."],
        ["Is the filler included?", "Yes, every cushion and pillow comes filled and ready to use."],
      ],
    },
  },
  lamps: {
    name: "Photo Lamp", title: "Photo Lamps", shape: "lamp", photo: { src: "image/mockups/lamp.jpg", ar: "730 / 970", box: [28.2, 13.9, 43.6, 66.5] }, typeLabel: "Choose lamp",
    intro: "Light up your memories. Choose a lamp, upload a photo and add a name.",
    about: "Photo lamp with a warm LED glow — a lovely night light and gift.",
    types: [
      { label: "Rotating Lamp", note: "Spins your photos", price: 0 },
      { label: "Warm Glow Lamp", note: "Soft warm light", price: 0 },
    ],
    details: {
      highlights: [
        { title: "Memories that glow", text: "Your photo lights up with a soft, warm LED glow." },
        { title: "Rotating or still", text: "A rotating lamp that spins your photos, or a calm warm-glow lamp." },
        { title: "Perfect night light", text: "Gentle light for bedrooms and living rooms." },
        { title: "A heartfelt gift", text: "Anniversaries, birthdays and housewarmings." },
      ],
      specs: [
        ["Types", "Rotating lamp, warm glow lamp"],
        ["Light", "Warm LED"],
        ["Print", "Full-colour photo print"],
      ],
      care: ["Switch off and unplug before cleaning", "Dust with a soft, dry cloth", "Keep away from water"],
      faqs: [
        ["Can I add more than one photo to the rotating lamp?", "Yes — upload one photo here and send the rest on WhatsApp after ordering."],
        ["Is it safe to leave on at night?", "Yes, it uses a low-heat LED that's made to be used as a night light."],
      ],
    },
  },
  nameplates: {
    name: "Nameplate", title: "Nameplates", shape: "nameplate", photo: { src: "image/mockups/nameplate.jpg", ar: "800 / 470", box: [12.4, 21.5, 75.2, 57] }, typeLabel: "Choose material",
    designs: NAMEPLATE_DESIGNS, photoOptional: true,
    textLabel: "House or family name", placeholder: "e.g. The Sharma Family", sample: "Your Family Name",
    intro: "A personalised nameplate for your home. Choose a material, add your family name and, if you like, a family photo.",
    about: "Weather-resistant nameplate with screws for easy fitting.",
    types: [
      { label: "Acrylic", note: "Glossy finish", price: 0 },
      { label: "Wooden", note: "Natural finish", price: 0 },
      { label: "Metal", note: "Brushed finish", price: 0 },
    ],
    details: {
      highlights: [
        { title: "Welcome guests in style", text: "Your family or house name on a smart, modern nameplate." },
        { title: "Add a family photo", text: "Keep it text-only or add a family photo for a personal touch." },
        { title: "Built for outdoors", text: "Weather-resistant materials made for your front door or gate." },
        { title: "Easy to fit", text: "Comes with screws for quick fitting." },
      ],
      specs: [
        ["Materials", "Acrylic, wooden or metal"],
        ["Personalise with", "Family or house name, optional photo"],
        ["Fitting", "Screws included"],
        ["Use", "Indoor and outdoor"],
      ],
      care: ["Wipe with a soft, damp cloth", "Avoid harsh chemicals and pressure washers"],
      faqs: [
        ["Can I add a photo?", "Yes — upload a family photo and it appears beside your name. Without a photo, the nameplate is text only."],
        ["Can I change the word Welcome?", "Yes — tell us your preferred text on WhatsApp after ordering."],
        ["Is it suitable for outdoors?", "Yes, it's made to handle sun and rain at your entrance."],
      ],
    },
  },
  tshirts: {
    name: "Photo T-Shirt", title: "T-Shirts", shape: "tshirt", photo: { src: "image/mockups/tshirt.jpg", ar: "600 / 570", box: [34.2, 19.3, 31.7, 40.4] }, typeLabel: "Choose size",
    colorLabel: "T-shirt colour", colors: GARMENT_COLORS,
    intro: "Wear your memories. Choose a size and colour, upload a photo or logo and add a name — printed on a soft, comfortable T-shirt.",
    about: "A soft, breathable unisex T-shirt printed with your photo, name or logo. Great for birthdays, couples, family trips, teams, events and businesses. Order one piece or many — bulk orders get special pricing.",
    extra: { label: "Print position", placeholder: "Front, back or both", required: true },
    types: SIZES.map((s) => ({ label: s, note: "", price: 0 })),
    // Detailed description shown below the designs. Text in [brackets] is for you to fill in.
    details: {
      highlights: [
        { title: "Bright, long-lasting print", text: "Your photo, logo or text is printed with high-quality inks that stay bright wash after wash." },
        { title: "Front, back or both", text: "Print on the chest, across the back, or on both sides — just choose the print position when you order." },
        { title: "Unisex regular fit", text: "A comfortable straight cut that suits men, women and teens. Sizes S to XXL." },
        { title: "Soft, breathable fabric", text: "[e.g. 100% cotton, 180 GSM] — gentle on the skin and comfortable to wear all day." },
      ],
      specs: [
        ["Fabric", "[e.g. 100% cotton / poly-cotton blend]"],
        ["Fabric weight", "[e.g. 180 GSM]"],
        ["Fit", "Unisex regular fit"],
        ["Neck & sleeves", "Round neck, half sleeves"],
        ["Print method", "[e.g. DTF / sublimation / screen print]"],
        ["Print area", "Front, back or both"],
        ["Colours", "White, Black, Navy, Royal Blue, Red, Maroon, Grey, Bottle Green, Yellow"],
        ["Minimum order", "1 piece"],
      ],
      sizeChart: {
        cols: ["Size", "Chest (in)", "Length (in)", "Shoulder (in)"],
        rows: [["S", 38, 27, 17], ["M", 40, 28, 18], ["L", 42, 29, 19], ["XL", 44, 30, 20], ["XXL", 46, 31, 21]],
        note: "Measured with the T-shirt laid flat. Tip: measure a T-shirt that fits you well and compare. [Edit to match your supplier's size chart.]",
      },
      bulk: [
        { qty: "1–9 pieces", price: 0 },
        { qty: "10–24 pieces", price: 0 },
        { qty: "25–49 pieces", price: 0 },
        { qty: "50+ pieces", price: 0 },
      ],
      care: [
        "Turn inside out before washing",
        "Machine or hand wash in cold water",
        "Do not bleach",
        "Do not iron directly on the print",
        "Dry in shade",
      ],
      faqs: [
        ["Can I print a logo instead of a photo?", "Yes. Upload your logo as a JPG or PNG — a high-resolution file with a plain background prints best."],
        ["Can I print on the back?", "Yes — front, back or both. Choose the print position when you order."],
        ["Is there a minimum order?", "No, you can order a single T-shirt. Bulk orders for teams, events and businesses get special pricing."],
        ["Which size should I choose?", "Check the size chart on this page. Measure a T-shirt that fits you well, laid flat, and pick the closest size."],
      ],
    },
  },
  polos: {
    name: "Polo T-Shirt", title: "Polo T-Shirts", shape: "polo", typeLabel: "Choose size",
    photo: { src: "image/mockups/polo.jpg", ar: "700 / 780", box: [55, 31.4, 12.9, 11.5] },
    designs: POLO_DESIGNS, photoOptional: true,
    colorLabel: "Polo colour", colors: GARMENT_COLORS,
    textLabel: "Company or team name", placeholder: "e.g. Sharma Traders", sample: "Your Company",
    intro: "Polo T-shirts with your logo printed on the chest — ideal for staff uniforms, teams, events and businesses. Choose a size and colour, upload your logo and add your company or team name.",
    about: "Smart collared polo T-shirts with your logo printed on the left chest, and optionally on the back. A professional look for offices, shops, restaurants, sports teams, colleges and events. Special prices on bulk orders.",
    types: SIZES.map((s) => ({ label: s, note: "", price: 0 })),
    details: {
      highlights: [
        { title: "Crisp logo print", text: "Your logo is printed sharp and clear, with colours that stay bright after many washes." },
        { title: "Chest and back printing", text: "Logo on the left chest as standard. Add your company name or a large logo on the back too — tell us when you order." },
        { title: "Smart unisex fit", text: "A classic collared polo with a button placket that looks neat on men and women. Sizes S to XXL." },
        { title: "Comfortable pique fabric", text: "[e.g. Poly-cotton pique, 220 GSM] — breathable, durable and comfortable for a full working day." },
      ],
      specs: [
        ["Fabric", "[e.g. Poly-cotton pique / 100% cotton]"],
        ["Fabric weight", "[e.g. 220 GSM]"],
        ["Fit", "Unisex regular fit"],
        ["Collar", "Ribbed collar, 2–3 button placket"],
        ["Sleeves", "Half sleeves with ribbed cuffs"],
        ["Print method", "[e.g. DTF / screen print / embroidery]"],
        ["Logo position", "Left chest (back optional)"],
        ["Colours", "White, Black, Navy, Royal Blue, Red, Maroon, Grey, Bottle Green, Yellow"],
        ["Minimum order", "[e.g. 1 piece / 5 pieces]"],
      ],
      sizeChart: {
        cols: ["Size", "Chest (in)", "Length (in)", "Shoulder (in)"],
        rows: [["S", 38, 27, 16.5], ["M", 40, 28, 17.5], ["L", 42, 29, 18.5], ["XL", 44, 30, 19.5], ["XXL", 46, 31, 20.5]],
        note: "Measured with the polo laid flat. Tip: measure a polo that fits you well and compare. [Edit to match your supplier's size chart.]",
      },
      bulk: [
        { qty: "5–9 pieces", price: 0 },
        { qty: "10–24 pieces", price: 0 },
        { qty: "25–49 pieces", price: 0 },
        { qty: "50–99 pieces", price: 0 },
        { qty: "100+ pieces", price: 0 },
      ],
      care: [
        "Turn inside out before washing",
        "Wash in cold water with similar colours",
        "Do not bleach",
        "Do not iron directly on the logo",
        "Dry in shade",
      ],
      faqs: [
        ["What logo file should I upload?", "A high-resolution JPG or PNG works best. A PNG with a transparent background gives the cleanest print."],
        ["Can I order different sizes in one order?", "Yes. Add each size to your cart, or tell us the size breakup on WhatsApp for bulk orders."],
        ["Can you print on the back as well?", "Yes — add your company name or a large logo on the back. Mention it when you order."],
        ["Do you offer bulk pricing?", "Yes, the price per piece goes down as quantity goes up. See the bulk pricing table or ask us for a quote."],
      ],
    },
  },
  hoodies: {
    name: "Custom Hoodie", title: "Hoodies", shape: "hoodie", photo: { src: "image/mockups/hoodie.jpg", ar: "1 / 1", box: [34.2, 24.2, 31.7, 30] }, typeLabel: "Choose size",
    colorLabel: "Hoodie colour", colors: HOODIE_COLORS,
    intro: "A cosy hoodie with your photo or name on it. Choose a size and colour, upload a photo and add a name.",
    about: "Warm fleece hoodie with your design printed on the front.",
    types: SIZES.map((s) => ({ label: s, note: "", price: 0 })),
    details: {
      highlights: [
        { title: "Warm & cosy", text: "Soft fleece inside to keep you warm on cool days." },
        { title: "Your photo on the front", text: "Your photo, name or logo printed boldly on the chest." },
        { title: "Five colours", text: "White, Black, Grey Melange, Navy Blue and Maroon." },
        { title: "Kangaroo pocket", text: "A roomy front pocket and an adjustable drawstring hood." },
      ],
      specs: [
        ["Fabric", "Fleece-lined cotton blend"],
        ["Fit", "Unisex regular fit"],
        ["Sizes", "S, M, L, XL, XXL"],
        ["Colours", "White, Black, Grey Melange, Navy Blue, Maroon"],
        ["Print", "Front chest print"],
      ],
      care: ["Turn inside out before washing", "Wash in cold water with similar colours", "Do not iron directly on the print", "Dry in shade"],
      faqs: [
        ["Which size should I choose?", "Hoodies have a relaxed fit. Pick your usual size, or one size up for a looser fit."],
        ["Can I order hoodies for my team or college?", "Yes — message us on WhatsApp for bulk pricing."],
      ],
    },
  },
  mousepads: {
    name: "Mouse Pad", title: "Mouse Pads", shape: "mousepad", typeLabel: "Choose size",
    intro: "A premium mouse pad with your photo. Choose a size, upload a photo and add a name.",
    about: "Smooth cloth surface with an anti-slip rubber base.",
    types: [
      { label: "Standard", note: "9 × 7.5 in", price: 0 },
      { label: "Large", note: "12 × 10 in", price: 0 },
      { label: "Desk mat", note: "31 × 12 in", price: 0 },
    ],
    details: {
      highlights: [
        { title: "Smooth glide", text: "A soft cloth surface for precise, smooth mouse movement." },
        { title: "Anti-slip base", text: "A rubber base keeps the pad firmly in place." },
        { title: "Three sizes", text: "Standard, large or a full desk mat." },
        { title: "Brighten your desk", text: "Your favourite photo, every working day." },
      ],
      specs: [
        ["Sizes", "9 × 7.5 in, 12 × 10 in, 31 × 12 in"],
        ["Surface", "Smooth cloth"],
        ["Base", "Anti-slip rubber"],
        ["Print", "Full-colour photo print"],
      ],
      care: ["Spot clean with a damp cloth and mild soap", "Let it dry flat before use"],
      faqs: [
        ["Which size should I choose?", "Standard fits most desks, large gives more room, and the desk mat fits both keyboard and mouse."],
        ["Will the print wear off?", "The print is made for daily use and stays bright with normal care."],
      ],
    },
  },
};

/* ================== no need to edit below ================== */

// Every product opens its designer right on the page (no design gallery); no "Your Name" sample text
Object.values(PRODUCT_PAGES).forEach((p) => {
  if (p.direct === undefined) p.direct = true;
  if (p.sample === undefined && !p.designs) p.sample = "";
});

const TINTS = ["--t1", "--t2", "--t3", "--t4", "--t5", "--t6"];
const $ = (id) => document.getElementById(id);
const rupees = (n) => (n > 0 ? "₹" + n.toLocaleString("en-IN") : "₹ ___");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---- Cart (saved in the visitor's browser) ---- */
function getCart() {
  try { return JSON.parse(localStorage.getItem("cw-cart")) || []; } catch (e) { return []; }
}
function saveCart(cart) {
  try { localStorage.setItem("cw-cart", JSON.stringify(cart)); } catch (e) { /* storage blocked */ }
  updateCartCount();
}
function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll(".cart-count").forEach((el) => (el.textContent = count));
}

/* ---- WhatsApp links ---- */
function setupWhatsApp() {
  document.querySelectorAll(".wa-link").forEach((a) => {
    const msg = encodeURIComponent(a.dataset.msg || "Hi Customized Wale");
    a.href = "https://wa.me/" + SETTINGS.whatsapp + "?text=" + msg;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

function toast(text) {
  const t = $("toast");
  if (!t) return;
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove("show"), 2500);
}

/* ---- Product mockups (drawn with CSS, used on the homepage and personalise pages) ---- */
const PHOTO_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 17l-5-5-9 8"/></svg>`;
const pageLink = (item) => "customize.html?item=" + encodeURIComponent(item);
const designsFor = (p) => p.designs || PHOTO_ONLY;

function printHTML(d, photo, name) {
  return `<div class="print"><div class="mp mp-${esc(d.layout)}" style="background:${esc(d.bg)};color:${esc(d.fg)}">
      ${d.title ? `<span class="mp-title">${esc(d.title)}</span>` : ""}
      <span class="mp-photo">${photo ? `<img src="${esc(photo)}" alt="">` : PHOTO_ICON}</span>
      ${d.noText ? "" : `<span class="mp-name">${esc(name)}</span>`}
    </div></div>`;
}

function mockupHTML(p, d, photo, name, accent) {
  const pr = printHTML(d, photo, name || (p.sample ?? "Your Name"));
  // Real product photo with the design placed on its printable area (box = left, top, width, height in %)
  if (p.photo) {
    const [l, t, w, h] = p.photo.box;
    const hands = p.shape === "clock" ? `<i class="clock-hand h"></i><i class="clock-hand m"></i><i class="clock-pin"></i>` : "";
    const extra = (p.photo.cls || "").split(" ").filter(Boolean).map((c) => " obj-photo-" + esc(c)).join("");
    return `<div class="obj obj-photo obj-photo-${esc(p.shape)}${extra}" style="aspect-ratio:${esc(p.photo.ar)}">
        <img class="obj-bg" src="${esc(p.photo.src)}" alt="" loading="lazy">
        <div class="photo-print" style="left:${l}%;top:${t}%;width:${w}%;height:${h}%">${pr}${hands}</div>
      </div>`;
  }
  const inner = {
    mug: "",
    frame: `<div class="frame-board">${pr}</div>`,
    clock: `<div class="clock-face">${pr}<i class="clock-ticks"></i><i class="clock-hand h"></i><i class="clock-hand m"></i><i class="clock-pin"></i></div>`,
    album: `<div class="album-book"><i class="album-pages"></i>${pr}<i class="album-spine"></i></div>`,
    case: `<div class="case-body">${pr}<i class="case-cam"></i></div>`,
    keychain: `<i class="key-ring"></i><i class="key-link"></i><div class="key-tag"><div class="key-face">${pr}</div><i class="key-hole"></i></div>`,
    coaster: `<i class="coaster-back"></i><div class="coaster-top">${pr}</div>`,
    cushion: `<div class="cushion-body">${pr}</div>`,
    lamp: `<i class="lamp-glow"></i><i class="lamp-base"></i><div class="lamp-shade">${pr}</div>`,
    nameplate: `<div class="plate">${pr}<i class="screw s1"></i><i class="screw s2"></i><i class="screw s3"></i><i class="screw s4"></i></div>`,
    tshirt: `<div class="garment"><i class="cloth"></i>${pr}</div>`,
    hoodie: `<div class="garment"><i class="hood"></i><i class="cloth"></i><i class="pocket"></i>${pr}</div>`,
    polo: `<div class="garment"><i class="cloth"></i><i class="collar l"></i><i class="collar r"></i><i class="placket"></i>${pr}</div>`,
    mousepad: `<div class="pad">${pr}</div>`,
  }[p.shape];
  if (p.shape === "mug") return drawnMugHTML(p.mugSpec || { handle: accent && accent !== "#fff" ? accent : null, inner: accent && accent !== "#fff" ? accent : null }, pr);
  const keyCls = p.keySpec ? ` k-${esc(p.keySpec.shape)} ${p.keySpec.metal ? "k-metal" : "k-mdf"}` : "";
  return `<div class="obj obj-${esc(p.shape)}${keyCls}${p.dark ? " on-dark" : ""}" style="--accent:${esc(accent || "#fff")};--cloth:${esc(p.color || "#fff")}">${inner}</div>`;
}

// Drawn mug: m = { body, inner, handle, rim, heart, innerHeart, patch, glass, tall, pair }
const HANDLE_PATHS = {
  plain: `<path class="hs" d="M0 9C30 7 37 19 37 30S30 53 0 51"/>`,
  heart: `<path class="hs thin" d="M2 30C10 22 13 6 25 6c10 0 14 9 11 16-2 4-6 6-8 8 2 2 6 4 8 8 3 7-1 16-11 16C13 54 10 38 2 30z"/>`,
  innerHeart: `<path class="hf" fill-rule="evenodd" d="M0 3C34 1 40 17 40 30S34 59 0 57zM11 30c4-4 6-10 12-10 5 0 7 5 5 8-1 1-2 2-3 2 1 0 2 1 3 2 2 3 0 8-5 8-6 0-8-6-12-10z"/>`,
};
function drawnMugHTML(m, pr) {
  const vars = [["--body", m.body], ["--inner", m.inner], ["--handle", m.handle], ["--rim", m.rim]]
    .filter(([, v]) => v).map(([k, v]) => `${k}:${esc(v)}`).join(";");
  const cls = ["patch", "glass", "tall"].filter((k) => m[k]).map((k) => " mug-" + k).join("");
  const handle = HANDLE_PATHS[m.innerHeart ? "innerHeart" : m.heart ? "heart" : "plain"];
  const one = (extra) => `<div class="obj obj-mug${cls}${extra}" style="${vars}">
      <svg class="mug-handle" viewBox="0 0 40 60" aria-hidden="true">${handle}</svg>
      <div class="mug-body">${m.rim ? `<i class="mug-rim"></i>` : ""}${pr}</div>
      <i class="mug-top"></i>
    </div>`;
  return m.pair ? `<div class="obj obj-mugpair">${one("")}${one(" mug-mirror")}</div>` : one("");
}

// Real photo if there is one (falls back to the mockup if the file is missing), else the mockup
function thumbHTML(x, alt) {
  const p = x.item && PRODUCT_PAGES[x.item];
  const first = p && p.types[0];
  const mock = p ? `<div class="obj-stage">${mockupHTML({ ...p, keySpec: first.key }, designsFor(p)[0], p.samplePhoto || SAMPLE_PHOTO)}</div>` : "";
  const img = x.image ? `<img class="thumb-photo" src="${esc(x.image)}" alt="${esc(alt)}" onerror="this.remove()">` : "";
  return mock + img || "[photo]";
}

function productCard(p, i) {
  const link = p.link || (p.item ? pageLink(p.item) : "#");
  return `<a class="card" href="${esc(link)}">
      <div class="card-img ph" style="background: var(${TINTS[i % TINTS.length]})">${thumbHTML(p, p.name)}</div>
      <div class="card-body">
        <h3>${esc(p.name)}</h3>
        ${p.note ? `<p>${esc(p.note)}</p>` : ""}
        <div class="card-foot">
          <span class="price">From ${rupees(p.price)}</span>
          <span class="btn-small">Personalise</span>
        </div>
      </div>
    </a>`;
}

/* ---- Homepage ---- */
function renderHome() {
  const catGrid = $("cat-grid");
  if (catGrid) {
    catGrid.innerHTML = CATEGORIES.map((c, i) => {
      const link = c.link || (c.item ? pageLink(c.item) : "#");
      return `<a class="cat" href="${esc(link)}">
          <span class="cat-img" style="background: var(${TINTS[i % TINTS.length]})">${thumbHTML(c, "")}</span>
          ${esc(c.name)}
        </a>`;
    }).join("");
  }
  const grid = $("product-grid");
  if (grid) grid.innerHTML = PRODUCTS.map(productCard).join("");
}

/* ---- Product page ---- */
function setupProductPage() {
  if (!$("frame")) return;

  const state = { shape: "landscape", size: 1, qty: 1, photo: null, caption: "" };

  function render() {
    const opt = FRAME_OPTIONS[state.shape];
    const size = opt.sizes[state.size];
    const scale = [0.8, 0.9, 1, 1.1][state.size] || 1;

    // Frame preview size
    $("frame").style.width = Math.round(opt.w * scale) + "px";
    $("frame").style.height = Math.round(opt.h * scale) + "px";

    // Shape chips
    $("shape-chips").innerHTML = Object.keys(FRAME_OPTIONS).map((key) =>
      `<button type="button" class="chip ${key === state.shape ? "active" : ""}" data-shape="${key}" aria-pressed="${key === state.shape}">${FRAME_OPTIONS[key].label}</button>`
    ).join("");

    // Size options
    $("size-grid").innerHTML = opt.sizes.map((s, i) =>
      `<button type="button" class="size-opt ${i === state.size ? "active" : ""}" data-size="${i}" aria-pressed="${i === state.size}"><b>${s.label}</b><small>${rupees(s.price)}</small></button>`
    ).join("");

    $("price").textContent = rupees(size.price * state.qty);
    $("qty").textContent = state.qty;
    $("spec-size").textContent = size.label;
    $("preview-note").textContent = `Live preview · ${size.label} · ${opt.label}`;
    $("frame-caption").textContent = state.caption;
  }

  $("shape-chips").addEventListener("click", (e) => {
    const b = e.target.closest("[data-shape]");
    if (!b) return;
    state.shape = b.dataset.shape;
    render();
  });

  $("size-grid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-size]");
    if (!b) return;
    state.size = Number(b.dataset.size);
    render();
  });

  // Photo upload with live preview (stays on the visitor's device)
  $("photo").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!/^image\/(jpeg|png)$/.test(file.type)) { alert("Please choose a JPG or PNG photo."); return; }
    if (file.size > 20 * 1024 * 1024) { alert("Please choose a photo smaller than 20 MB."); return; }
    const reader = new FileReader();
    reader.onload = () => {
      state.photo = { name: file.name, data: reader.result };
      $("frame-img").src = reader.result;
      $("frame-img").hidden = false;
      $("frame-empty").hidden = true;
      $("upload-box").classList.add("done");
      $("upload-title").textContent = file.name + " added ✓";
      $("upload-sub").textContent = "Tap to change photo";
      $("photo-alert").hidden = true;
    };
    reader.readAsDataURL(file);
  });

  $("caption").addEventListener("input", (e) => { state.caption = e.target.value; render(); });

  $("qty-minus").addEventListener("click", () => { state.qty = Math.max(1, state.qty - 1); render(); });
  $("qty-plus").addEventListener("click", () => { state.qty = Math.min(99, state.qty + 1); render(); });

  function addToCart() {
    if (!state.photo) { $("photo-alert").hidden = false; return false; }
    const opt = FRAME_OPTIONS[state.shape];
    const size = opt.sizes[state.size];
    const cart = getCart();
    cart.push({
      product: "Acrylic Photo Frame",
      shape: opt.label,
      size: size.label,
      price: size.price,
      qty: state.qty,
      caption: state.caption,
      photoName: state.photo.name,
    });
    saveCart(cart);
    return true;
  }

  $("add-to-cart").addEventListener("click", () => {
    if (addToCart()) toast("Added to cart ✓");
  });

  // Until you connect a payment gateway, "Buy now" sends the order on WhatsApp
  $("buy-now").addEventListener("click", () => {
    if (!state.photo) { $("photo-alert").hidden = false; return; }
    const opt = FRAME_OPTIONS[state.shape];
    const size = opt.sizes[state.size];
    const msg = `Hi Customized Wale, I want to order:
Acrylic Photo Frame – ${opt.label}, ${size.label}
Quantity: ${state.qty}
Message on frame: ${state.caption || "(none)"}
I will send my photo here.`;
    window.open("https://wa.me/" + SETTINGS.whatsapp + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });

  $("pin-check").addEventListener("click", () => {
    const pin = $("pin").value.trim();
    $("pin-result").textContent = /^[1-9][0-9]{5}$/.test(pin)
      ? "✓ We deliver to " + pin + ". [Add your delivery time]"
      : "Please enter a valid 6-digit pincode.";
    $("pin-result").style.color = /^[1-9][0-9]{5}$/.test(pin) ? "var(--teal)" : "#7A2410";
  });

  const related = $("related-grid");
  if (related) related.innerHTML = PRODUCTS.filter((p) => p.name !== "Acrylic Photo Frame").slice(0, 4).map(productCard).join("");

  render();
}

/* ---- Product details (highlights, specs, size chart, bulk prices, care, FAQs) ---- */
// "How to order" steps for products that don't list their own
function defaultSteps(p) {
  const what = p.designs === POLO_DESIGNS ? "logo" : "photo";
  const step2 = p.photoOptional
    ? { title: `Add your ${(p.textLabel || "name").toLowerCase()}`, text: "Type it in the designer — the preview updates instantly. Add a photo too if the design has one." }
    : { title: `Upload your ${what} & add a name`, text: `Upload a clear ${what} and add a name or message — the preview updates instantly.` };
  if (p.direct) return [
    { title: p.typeLabel, text: "Pick your option above — and a colour, if it has colour choices." },
    { title: "Upload your photo & add a name", text: "Upload a clear photo and add a name or message — the preview updates instantly." },
    { title: "Add to cart or order", text: "Choose the quantity, then add to cart or order on WhatsApp." },
  ];
  return [
    { title: "Pick a design", text: "Browse the designs above and tap Start design on the one you like." },
    step2,
    { title: `${p.typeLabel} & order`, text: "Pick your option and quantity, then add to cart or order on WhatsApp." },
  ];
}

function renderDetails(p) {
  const x = { steps: defaultSteps(p), stepsNote: "Need help with your design? Message us on WhatsApp and we'll help you create it.", ...(p.details || {}) };
  const block = (title, body) => `<div class="info-card"><h3>${esc(title)}</h3>${body}</div>`;
  const parts = [];
  if (x.highlights) {
    parts.push(`<div class="feature-grid">${x.highlights.map((h, i) =>
      `<div class="feature"><span class="feature-num">${i + 1}</span><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></div>`
    ).join("")}</div>`);
  }
  if (x.steps) {
    parts.push(`${p.details ? `<h3 class="details-sub">How to order</h3>` : ""}<div class="feature-grid steps-grid">${x.steps.map((s, i) =>
      `<div class="feature"><span class="feature-num step-badge">${i + 1}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`
    ).join("")}</div>${x.stepsNote ? `<p class="small-note details-note"><a class="wa-link" data-msg="Hi Customized Wale, I need help with my ${esc(p.name.toLowerCase())} design." href="#">${esc(x.stepsNote)}</a></p>` : ""}`);
  }
  const cards = [];
  if (x.specs) {
    cards.push(block("Specifications", x.specs.map(([k, v]) => `<div class="spec"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join("")));
  }
  if (x.sizeChart) {
    const s = x.sizeChart;
    cards.push(block("Size chart", `<div class="table-wrap"><table class="size-table">
        <thead><tr>${s.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead>
        <tbody>${s.rows.map((r) => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>${s.note ? `<p class="small-note">${esc(s.note)}</p>` : ""}`));
  }
  if (x.bulk) {
    cards.push(block("Bulk pricing", x.bulk.map((b) => `<div class="spec"><span>${esc(b.qty)}</span><b>${rupees(b.price)} / piece</b></div>`).join("") +
      `<p class="small-note">Ordering for a team, school, event or business? <a class="wa-link" data-msg="Hi Customized Wale, I want a bulk quote for ${esc(p.title.toLowerCase())}." href="#">Get a bulk quote on WhatsApp</a></p>`));
  }
  if (x.brands) {
    cards.push(block("Supported brands", `<div class="brand-list">${x.brands.map((b) => `<span>${esc(b)}</span>`).join("")}</div>` +
      (x.brandsNote ? `<p class="small-note">${esc(x.brandsNote)}</p>` : "")));
  }
  if (x.care) {
    cards.push(block("Care instructions", `<ul class="care-list">${x.care.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>`));
  }
  if (cards.length) parts.push(`<div class="details-grid">${cards.join("")}</div>`);
  $("details").innerHTML = parts.join("");
  $("details-title").textContent = p.details ? `${p.name} details` : "How to order";
  $("details-section").hidden = false;
  if (x.faqs) {
    $("extra-faqs").innerHTML = x.faqs.map(([q, a]) => `<details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");
  }
}

/* ---- Phone picker for mobile cases: brand → model → designs ----
   Uses the link: customize.html?item=cases&brand=apple&model=iPhone%2015
   Returns the full phone name once a model is chosen, otherwise null. */
function renderPhonePicker(p, key) {
  const params = new URLSearchParams(location.search);
  const base = pageLink(key);
  const brand = p.phones.find((b) => b.key === params.get("brand"));
  const model = brand && brand.models.includes(params.get("model")) ? params.get("model") : null;
  const step = !brand ? 1 : !model ? 2 : 3;
  const box = $("phone-picker");
  const request = (msg) => `<p class="small-note picker-request">Can't find your phone? <a class="wa-link" data-msg="${esc(msg)}" href="#">Request your model on WhatsApp</a></p>`;

  $("design-steps").innerHTML = ["Choose brand", "Choose model", "Upload photo & buy"].map((s, i) =>
    `<li class="${i + 1 === step ? "current" : ""}"><b>${i + 1}</b> ${s}</li>`).join("");
  box.hidden = false;

  if (step === 1) {
    box.innerHTML = `<div class="picker-head"><h2>Select your phone brand</h2></div>
      <div class="brand-grid">${p.phones.map((b) =>
        `<a class="brand-tile" href="${base}&brand=${encodeURIComponent(b.key)}">
          <span class="brand-mark">${esc(b.name.charAt(0))}</span>
          <b>${esc(b.name)}</b><small>${b.models.length} models</small>
        </a>`).join("")}</div>
      ${request("Hi Customized Wale, I want a mobile case. My phone is: ")}`;
    return null;
  }

  if (step === 2) {
    box.innerHTML = `<div class="picker-head">
        <div><a class="picker-back" href="${base}">← All brands</a><h2>Choose your ${esc(brand.name)} model</h2></div>
        <label class="sr-only" for="model-search">Search models</label>
        <input class="text-input model-search" id="model-search" type="search" placeholder="Search ${esc(brand.name)} models…">
      </div>
      <div class="model-grid" id="model-grid">${brand.models.map((m) =>
        `<a class="model-tile" href="${base}&brand=${encodeURIComponent(brand.key)}&model=${encodeURIComponent(m)}">${esc(m)}</a>`).join("")}</div>
      <p class="small-note" id="model-none" hidden>No model matches your search.</p>
      ${request(`Hi Customized Wale, I want a mobile case for my ${brand.name} phone. My model is: `)}`;
    $("model-search").addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      let shown = 0;
      $("model-grid").querySelectorAll(".model-tile").forEach((a) => {
        const hit = a.textContent.toLowerCase().includes(q);
        a.hidden = !hit;
        if (hit) shown++;
      });
      $("model-none").hidden = shown > 0;
    });
    return null;
  }

  const phone = `${brand.name} ${model}`;
  box.innerHTML = `<div class="phone-bar">
      <span class="phone-bar-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></svg></span>
      <div><small>Designing a case for</small><b>${esc(phone)}</b></div>
      <a href="${base}&brand=${encodeURIComponent(brand.key)}">Change model</a>
      <a href="${base}">Change brand</a>
    </div>`;
  return phone;
}

/* ---- Personalise page (customize.html?item=…) ---- */
function setupDesignPage() {
  if (!$("design-grid")) return;

  const keys = Object.keys(PRODUCT_PAGES);
  const asked = new URLSearchParams(location.search).get("item");
  const key = keys.includes(asked) ? asked : "mugs";
  const p = PRODUCT_PAGES[key];
  const designs = designsFor(p);
  const tags = ["All", ...new Set(designs.map((d) => d.tag))];
  const state = { tag: "All", design: 0, type: 0, color: 0, qty: 1, photo: null, photoName: "", name: "", extra: "" };
  const dialog = $("designer");
  const fromPrice = Math.min(...p.types.map((t) => t.price));
  const accentFor = (d) => (p.types[state.type].accent ? d.fg : "#fff");
  const needsPhoto = (d) => !p.photoOptional && d.layout !== "text";
  // Styles (e.g. classic cushion / LED square / LED heart): each style can have its own product photo
  const groups = [...new Set(p.types.map((t) => t.group).filter(Boolean))];
  // What the preview shows for the chosen type: its own photo, a drawn mug (with the chosen colour), or the product photo
  // Colours can belong to a type (mugs) or to the whole product (T-shirts, polos, hoodies)
  const colorList = () => p.types[state.type].colors || p.colors || [];
  const colorOf = () => { const list = colorList(); return list.length ? list[state.color] || list[0] : null; };
  const colorLabel = () => p.types[state.type].colorLabel || p.colorLabel || "Colour";
  const isDark = (hex) => { const n = parseInt(hex.slice(1), 16); return ((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000 < 140; };
  const shown = () => {
    const t = p.types[state.type];
    const c = colorOf();
    const mugSpec = t.mug ? Object.fromEntries(Object.entries(t.mug).map(([k, v]) => [k, v === "$c" ? c && c.hex : v])) : null;
    // Clothing in a colour other than white: show a drawn garment in that colour instead of the white photo
    const swap = !t.colors && p.colors && c && c.hex.toUpperCase() !== "#FFFFFF";
    return { ...p, photo: swap ? null : t.photo || (t.mug ? null : p.photo), mugSpec, keySpec: t.key, color: swap ? c.hex : p.color, dark: swap && isDark(c.hex) };
  };
  const askedStyle = Number(new URLSearchParams(location.search).get("style"));
  if (groups[askedStyle]) state.type = p.types.findIndex((t) => t.group === groups[askedStyle]);
  const askedColor = Number(new URLSearchParams(location.search).get("color"));
  if (colorList()[askedColor]) state.color = askedColor;

  // Page text for this product
  document.title = `Personalised ${p.title} – Customized Wale`;
  $("crumb").textContent = p.title;
  $("page-title").textContent = p.title;
  $("page-intro").textContent = p.intro;
  $("about-title").textContent = "About our " + p.title.toLowerCase();
  $("about-text").textContent = p.about;
  $("wa-float").dataset.msg = `Hi Customized Wale, I have a question about ${p.title.toLowerCase()}.`;
  $("d-type-label").textContent = "1. " + p.typeLabel;
  $("d-photo-label").innerHTML = `2. Upload your ${p.designs === POLO_DESIGNS ? "logo" : "photo"}` +(p.photoOptional ? " <span>(optional)</span>" : "");
  $("d-text-label").innerHTML = `3. ${esc(p.textLabel || "Add a name or message")}` + (p.photoOptional ? "" : " <span>(optional)</span>");
  $("d-text").placeholder = p.placeholder || "e.g. Riya";
  if (p.extra) {
    $("d-extra-wrap").hidden = false;
    $("d-extra-label").textContent = "4. " + p.extra.label;
    $("d-extra").placeholder = p.extra.placeholder || "";
  }
  $("product-switch").innerHTML = "<span class=\"sr-only\">Personalise:</span>" + keys.map((k) =>
    `<a href="${pageLink(k)}"${k === key ? ' aria-current="page"' : ""}>${esc(PRODUCT_PAGES[k].title)}</a>`
  ).join("");

  renderDetails(p);

  // Mobile cases: customer picks brand and model first, then the designer opens on the page
  let phone = null;
  if (p.phones) {
    phone = renderPhonePicker(p, key);
    if (!phone) { $("gallery").hidden = true; return; }
    state.extra = phone;
    $("d-extra").value = phone;
    $("d-extra").readOnly = true;
    document.title = `${phone} Case – Customized Wale`;
  }

  const inline = !!phone || !!p.direct;
  if (p.direct && !p.phones) {
    $("design-steps").innerHTML = [p.typeLabel, `Upload ${p.designs === POLO_DESIGNS ? "logo" : "photo"}`, "Buy"]
      .map((s, i) => `<li><b>${i + 1}</b> ${esc(s)}</li>`).join("");
  }

  function renderGallery() {
    const group = p.types[state.type].group;
    $("style-tabs").hidden = groups.length < 2;
    $("style-tabs").innerHTML = groups.map((g) =>
      `<button type="button" class="chip ${g === group ? "active" : ""}" data-group="${esc(g)}" aria-pressed="${g === group}">${esc(g)}</button>`
    ).join("");
    $("design-tabs").innerHTML = tags.map((t) =>
      `<button type="button" class="chip ${t === state.tag ? "active" : ""}" data-tag="${esc(t)}" aria-pressed="${t === state.tag}">${esc(t)}</button>`
    ).join("");
    const list = designs.map((d, i) => ({ d, i })).filter(({ d }) => state.tag === "All" || d.tag === state.tag);
    $("design-count").textContent = `Showing ${list.length} design${list.length === 1 ? "" : "s"}` +
      (state.photo ? " with your photo" : "");
    $("design-grid").innerHTML = list.map(({ d, i }) =>
      `<div class="card design-card">
        <div class="obj-stage">${mockupHTML(shown(), d, state.photo, state.name)}</div>
        <div class="card-body">
          <h3>${esc(d.name)}</h3>
          <p>${esc(d.tag)}</p>
          <div class="card-foot">
            <span class="price">From ${rupees(fromPrice)}</span>
            <button type="button" class="btn-small" data-design="${i}">Start design</button>
          </div>
        </div>
      </div>`
    ).join("");
  }

  function renderDesigner() {
    const d = designs[state.design];
    const type = p.types[state.type];
    $("d-mockup").innerHTML = mockupHTML(shown(), d, state.photo || p.samplePhoto || SAMPLE_PHOTO, state.name, accentFor(d));
    $("d-preview-note").textContent = state.photo || d.layout === "text" ? "Live preview · your photo stays on your device" : "Showing a sample photo — upload yours to see it on your product";
    $("d-tag").textContent = d.tag;
    $("d-title").textContent = phone ? `${phone} Case` : p.direct ? p.name : `${d.name} ${p.name}`;
    // Group buttons (e.g. MDF / Metal) – the options below show only the chosen group
    const group = type.group;
    $("d-groups").hidden = groups.length < 2;
    $("d-groups").innerHTML = groups.length < 2 ? "" : groups.map((g) =>
      `<button type="button" class="chip ${g === group ? "active" : ""}" data-group="${esc(g)}" aria-pressed="${g === group}">${esc(g)}</button>`).join("");
    $("d-types").innerHTML = p.types.map((t, i) => groups.length > 1 && t.group !== group ? "" :
      `<button type="button" class="size-opt ${i === state.type ? "active" : ""}" data-type="${i}" aria-pressed="${i === state.type}"><b>${esc(t.label)}</b><small>${t.note ? esc(t.note) + " · " : ""}${rupees(t.price)}</small></button>`
    ).join("");
    const colors = colorList();
    $("d-colors").hidden = !colors.length;
    $("d-colors").innerHTML = colors.length ? `<span class="option-label">${esc(colorLabel())}: <b>${esc(colorOf().name)}</b></span>
      <div class="swatches">${colors.map((c, i) => `<button type="button" class="swatch ${i === state.color ? "active" : ""}" data-color="${i}" style="--sw:${esc(c.hex)}" aria-label="${esc(c.name)}" aria-pressed="${i === state.color}" title="${esc(c.name)}"></button>`).join("")}</div>` : "";
    $("d-price").textContent = rupees(type.price * state.qty);
    // Optional MRP: add "mrp" to a type to show the old price crossed out and the % off
    const off = type.mrp > type.price && type.price > 0 ? Math.round((1 - type.price / type.mrp) * 100) : 0;
    $("d-mrp").hidden = !off;
    $("d-mrp").innerHTML = off ? `<s>${rupees(type.mrp * state.qty)}</s> <b>${off}% off</b>` : "";
    $("d-qty").textContent = state.qty;
  }

  // Returns an error message, or "" when the order is ready
  function problem() {
    const d = designs[state.design];
    if (needsPhoto(d) && !state.photo) return "Please upload your photo first.";
    if ((p.photoOptional || d.layout === "text") && !state.name.trim()) return "Please add your " + (p.textLabel || "name").toLowerCase() + ".";
    if (p.extra && p.extra.required && !state.extra.trim()) return "Please enter " + p.extra.label.toLowerCase() + ".";
    return "";
  }
  function showProblem() {
    const msg = problem();
    $("d-alert").textContent = msg;
    $("d-alert").hidden = !msg;
    return !!msg;
  }

  $("style-tabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-group]");
    if (!b) return;
    state.type = p.types.findIndex((t) => t.group === b.dataset.group);
    state.color = 0;
    renderGallery();
  });

  $("design-tabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-tag]");
    if (!b) return;
    state.tag = b.dataset.tag;
    renderGallery();
  });

  $("design-grid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-design]");
    if (!b) return;
    state.design = Number(b.dataset.design);
    $("d-alert").hidden = true;
    renderDesigner();
    dialog.showModal();
  });

  $("designer-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener("close", renderGallery);

  $("d-types").addEventListener("click", (e) => {
    const b = e.target.closest("[data-type]");
    if (!b) return;
    state.type = Number(b.dataset.type);
    state.color = 0;
    renderDesigner();
  });

  $("d-groups").addEventListener("click", (e) => {
    const b = e.target.closest("[data-group]");
    if (!b) return;
    state.type = p.types.findIndex((t) => t.group === b.dataset.group);
    state.color = 0;
    renderDesigner();
  });

  $("d-colors").addEventListener("click", (e) => {
    const b = e.target.closest("[data-color]");
    if (!b) return;
    state.color = Number(b.dataset.color);
    renderDesigner();
  });

  // Photo stays on the visitor's device; it is shown on every design
  $("d-photo").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!/^image\/(jpeg|png)$/.test(file.type)) { alert("Please choose a JPG or PNG photo."); return; }
    if (file.size > 20 * 1024 * 1024) { alert("Please choose a photo smaller than 20 MB."); return; }
    const reader = new FileReader();
    reader.onload = () => {
      state.photo = reader.result;
      state.photoName = file.name;
      if (designs.length > 1) state.design = 1; // nameplates & polos: switch to the photo/logo layout
      $("d-upload").classList.add("done");
      $("d-upload-title").textContent = file.name + " added ✓";
      $("d-upload-sub").textContent = "Tap to change photo";
      $("d-alert").hidden = true;
      renderDesigner();
    };
    reader.readAsDataURL(file);
  });

  $("d-text").addEventListener("input", (e) => { state.name = e.target.value; renderDesigner(); });
  $("d-extra").addEventListener("input", (e) => { state.extra = e.target.value; });
  $("d-minus").addEventListener("click", () => { state.qty = Math.max(1, state.qty - 1); renderDesigner(); });
  $("d-plus").addEventListener("click", () => { state.qty = Math.min(99, state.qty + 1); renderDesigner(); });

  $("d-cart").addEventListener("click", () => {
    if (showProblem()) return;
    const d = designs[state.design];
    const type = p.types[state.type];
    const cart = getCart();
    cart.push({
      product: p.name,
      design: d.name,
      type: type.label,
      colour: colorOf() ? colorOf().name : "",
      price: type.price,
      qty: state.qty,
      caption: state.name,
      details: state.extra,
      photoName: state.photoName,
    });
    saveCart(cart);
    if (!inline) dialog.close();
    toast("Added to cart ✓");
  });

  // Until you connect a payment gateway, "Buy now" sends the order on WhatsApp
  $("d-buy").addEventListener("click", () => {
    if (showProblem()) return;
    const type = p.types[state.type];
    const lines = [
      "Hi Customized Wale, I want to order:",
      `${p.name} – ${type.label}` + (colorOf() ? ` (${colorLabel()}: ${colorOf().name})` : ""),
      `Quantity: ${state.qty}`,
      `Text: ${state.name || "(none)"}`,
    ];
    if (p.extra) lines.push(`${p.extra.label}: ${state.extra || "(none)"}`);
    if (state.photo) lines.push("I will send my photo here.");
    window.open("https://wa.me/" + SETTINGS.whatsapp + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  });

  $("d-pin-check").addEventListener("click", () => {
    const pin = $("d-pin").value.trim();
    const ok = /^[1-9][0-9]{5}$/.test(pin);
    $("d-pin-result").textContent = ok ? "✓ We deliver to " + pin + "." : "Please enter a valid 6-digit pincode.";
    $("d-pin-result").style.color = ok ? "var(--teal)" : "#7A2410";
  });

  // No design gallery: show the designer right on the product page
  if (inline) {
    $("gallery").hidden = true;
    (phone ? $("phone-picker") : $("product-switch")).after(dialog);
    dialog.classList.add("designer-inline");
    renderDesigner();
    dialog.show();
    return;
  }

  renderGallery();
}

/* ---- Start ---- */
document.addEventListener("DOMContentLoaded", () => {
  const y = $("year");
  if (y) y.textContent = new Date().getFullYear();
  setupDesignPage();
  setupWhatsApp();
  updateCartCount();
  renderHome();
  setupProductPage();
});
