"use strict";

/**
 * @fileoverview Blue Cafe Menu - High Performance, Secure, and Cinematic
 * Focuses on DOM safety, requestAnimationFrame for animations, and clean code principles.
 */

// =========================================
// 1. Data Structure (Read-Only)
// =========================================
const menuData = Object.freeze({
  قهوة: {
    enTitle: "Coffee",
    items: [
      { type: "header", title: "Iced Coffee (آيس كوفي)" },
      {
        name: "آيس كوفي",
        enName: "Iced Coffee",
        prices: { Medium: 55, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "آيس لاتيه",
        enName: "Iced Latte",
        prices: { Medium: 60, "can M": 75, "can L": 105, Cup: 115 },
      },
      {
        name: "آيس امريكانو",
        enName: "Iced Americano",
        prices: { Medium: 60, "can M": 75, "can L": 105, Cup: 115 },
      },
      {
        name: "آيس فرابيتشينو",
        enName: "Iced Frappuccino",
        prices: { Medium: 65, "can M": 80, "can L": 110, Cup: 120 },
      },
      {
        name: "آيس شوكولاته",
        enName: "Iced Chocolate",
        prices: { Medium: 65, "can M": 80, "can L": 110, Cup: 120 },
      },
      {
        name: "آيس كراميل",
        enName: "Iced Caramel",
        prices: { Medium: 65, "can M": 80, "can L": 110, Cup: 120 },
      },
      {
        name: "آيس موكا",
        enName: "Iced Mocha",
        prices: { Medium: 65, "can M": 80, "can L": 110, Cup: 120 },
      },
      {
        name: "آيس وايت موكا",
        enName: "Iced White Mocha",
        prices: { Medium: 65, "can M": 80, "can L": 110, Cup: 120 },
      },
      {
        name: "آيس بستاشيو موكا",
        enName: "Iced Pistachio Mocha",
        prices: { Medium: 80, "can M": 95, "can L": 125, Cup: 135 },
      },
      {
        name: "آيس اكسترا ريدبول",
        enName: "Iced Extra Red Bull",
        prices: { Medium: 90, "can M": 105, "can L": 135, Cup: 145 },
      },
      {
        name: "آيس سبانش لاتيه",
        enName: "Iced Spanish Latte",
        prices: { Medium: 65, "can M": 80, "can L": 110, Cup: 120 },
      },
      { type: "header", title: "Espresso & Coffee (اسبريسو)" },
      {
        name: "اسبريسو",
        enName: "Espresso",
        prices: { Single: 35, Double: 50 },
      },
      {
        name: "تركي",
        enName: "Turkish Coffee",
        prices: { Single: 30, Double: 40 },
      },
      {
        name: "تركي محوج",
        enName: "Spiced Turkish Coffee",
        prices: { Single: 35, Double: 45 },
      },
      {
        name: "مكياتو",
        enName: "Macchiato",
        prices: { Single: 45, Double: 55 },
      },
      {
        name: "بندق",
        enName: "Hazelnut Coffee",
        prices: { Single: 40, Double: 50 },
      },
      { type: "header", title: "Hot Drinks (مشروبات ساخنة)" },
      { name: "هوت سيدر", enName: "Hot Cider", prices: { Price: 40 } },
      { name: "كابتشينو", enName: "Cappuccino", prices: { Price: 50 } },
      { name: "لاتيه", enName: "Latte", prices: { Price: 50 } },
      { name: "موكا", enName: "Mocha", prices: { Price: 55 } },
      {
        name: "موكا بستاشيو",
        enName: "Pistachio Mocha",
        prices: { Price: 70 },
      },
      { name: "فرنساوي", enName: "French Coffee", prices: { Price: 35 } },
      { name: "شاي", enName: "Tea", prices: { Price: 20 } },
      { name: "شاي حليب", enName: "Milk Tea", prices: { Price: 25 } },
    ],
  },
  "بلو باور": {
    enTitle: "Power Blue",
    items: [
      { type: "header", title: "Power Blue (بلو باور)" },
      {
        name: "هاني بلو",
        enName: "hany Blue",
        desc: "افوكادو - مانجو - ايس كريم - مكسرات | Avocado - Mango - Ice Cream - Nuts",
        prices: { Medium: 80, "can M": 90, "can L": 120, Cup: 130 },
      },
      {
        name: "هورس بلو",
        enName: "Horse Blue",
        desc: "افوكادو - مانجو - عسل - مكسرات | Avocado - Mango - Honey - Nuts",
        prices: { Medium: 80, "can M": 90, "can L": 120, Cup: 130 },
      },
      {
        name: "هوت بلو",
        enName: "Hot Blue",
        desc: "كيوي - زبادي - ايس كريم | Kiwi - Yogurt - Ice Cream",
        prices: { Medium: 75, "can M": 85, "can L": 115, Cup: 125 },
      },
      {
        name: "ريد بلو",
        enName: "Red Blue",
        desc: "افوكادو - كيوي - زبادي - عسل | Avocado - Kiwi - Yogurt - Honey",
        prices: { Medium: 85, "can M": 95, "can L": 125, Cup: 135 },
      },
      {
        name: "باور بلو",
        enName: "Power Blue",
        desc: "افوكادو - بلح - كيوي - عسل - مانجو - ايس كريم - مكسرات | Avocado - Dates - Kiwi - Honey - Mango - Ice Cream - Nuts",
        prices: { Medium: 100, "can M": 110, "can L": 145, Cup: 155 },
      },
    ],
  },
  سموزي: {
    enTitle: "Smoothies",
    items: [
      { type: "header", title: "Iced Drinks (سموزي)" },
      {
        name: "مانجو",
        enName: "Mango",
        prices: { Medium: 55, "can M": 70, "can L": 95, Cup: 105 },
      },
      {
        name: "كيوي",
        enName: "Kiwi",
        prices: { Medium: 65, "can M": 80, "can L": 105, Cup: 115 },
      },
      {
        name: "فراوله",
        enName: "Strawberry",
        prices: { Medium: 55, "can M": 70, "can L": 95, Cup: 105 },
      },
      {
        name: "جوافه",
        enName: "Guava",
        prices: { Medium: 50, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "كنتالوب",
        enName: "Cantaloupe",
        prices: { Medium: 50, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "بطيخ",
        enName: "Watermelon",
        prices: { Medium: 50, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "موز حليب",
        enName: "Banana Milk",
        prices: { Medium: 50, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "بلح حليب",
        enName: "Dates Milk",
        prices: { Medium: 55, "can M": 70, "can L": 95, Cup: 105 },
      },
      {
        name: "ليمون",
        enName: "Lemon",
        prices: { Medium: 35, "can M": 50, "can L": 80, Cup: 90 },
      },
      {
        name: "ليمون نعناع",
        enName: "Lemon Mint",
        prices: { Medium: 40, "can M": 55, "can L": 85, Cup: 95 },
      },
      {
        name: "خوخ",
        enName: "Peach",
        prices: { Medium: 55, "can M": 70, "can L": 100, Cup: 110 },
      },
      {
        name: "برتقال",
        enName: "Orange",
        prices: { Medium: 50, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "رمان",
        enName: "Pomegranate",
        prices: { Medium: 50, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "أناناس",
        enName: "Pineapple",
        prices: { Medium: 50, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "تفاح",
        enName: "Apple",
        prices: { Medium: 60, "can M": 75, "can L": 100, Cup: 110 },
      },
      {
        name: "أفوكادو",
        enName: "Avocado",
        prices: { Medium: 70, "can M": 85, "can L": 120, Cup: 130 },
      },
      {
        name: "توت بري",
        enName: "Wild Berries",
        prices: { Medium: 55, "can M": 70, "can L": 100, Cup: 110 },
      },
    ],
  },
  موخيتو: {
    enTitle: "Mojito",
    items: [
      { type: "header", title: "Mojito (موخيتو)" },
      {
        name: "جميع النكهات",
        enName: "All Flavors",
        prices: { Medium: 55, "can M": 65, "can L": 95, Cup: 105 },
      },
    ],
  },
  كوكتيل: {
    enTitle: "Cocktails",
    items: [
      { type: "header", title: "Blue Cocktails (كوكتيل)" },
      {
        name: "لوجي",
        enName: "Logy",
        desc: "مانجو - فراولة - ايس كريم | Mango - Strawberry - Ice Cream",
        prices: { Medium: 60, "can M": 70, "can L": 100, Cup: 110 },
      },
      {
        name: "بلو لوز",
        enName: "Blue Lose",
        desc: "اناناس - مانجو - خوخ | Pineapple - Mango - Peach",
        prices: { Medium: 60, "can M": 70, "can L": 100, Cup: 110 },
      },
      {
        name: "بلو ملديف",
        enName: "Blue Maldives",
        desc: "جوزهند - اناناس - برتقال | Coconut - Pineapple - Orange",
        prices: { Medium: 55, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "بلو حبحب",
        enName: "Blue hphp",
        desc: "كنتالوب - بطيخ | Cantaloupe - Watermelon",
        prices: { Medium: 55, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "بلو بيروت",
        enName: "Blue Beirut",
        desc: "جوافة - برتقال - اناناس | Guava - Orange - Pineapple",
        prices: { Medium: 55, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "بلو جاكرتا",
        enName: "Blue Jakarta",
        desc: "خوخ - مانجو - توت | Peach - Mango - Berries",
        prices: { Medium: 65, "can M": 75, "can L": 105, Cup: 115 },
      },
      {
        name: "بلو شانغهاي",
        enName: "Blue Shanghai",
        desc: "مانجو - توت - ايس كريم | Mango - Berries - Ice Cream",
        prices: { Medium: 65, "can M": 75, "can L": 105, Cup: 115 },
      },
      {
        name: "فريش بلو",
        enName: "Fresh Blue",
        desc: "انت وحظك | Up to your luck ",
        prices: { Medium: 70, "can M": 80, "can L": 110, Cup: 120 },
      },
      {
        name: "اورانج باي",
        enName: "Orange Bay",
        desc: "مشروب طاقة بالبرتقال | Orange Energy Drink",
        prices: { Medium: 80, "can M": 90, "can L": 120, Cup: 130 },
      },
      {
        name: "بلو هافانا",
        enName: "Blue Havana",
        desc: "مانجو - كيوي | Mango - Kiwi",
        prices: { Medium: 65, "can M": 75, "can L": 105, Cup: 115 },
      },
      {
        name: "بلو ايطاليانو",
        enName: "Blue Italiano",
        desc: "مانجو - كيوي - موز | Mango - Kiwi - Banana",
        prices: { Medium: 70, "can M": 80, "can L": 110, Cup: 120 },
      },
    ],
  },
  زبادي: {
    enTitle: "Yogurt",
    items: [
      { type: "header", title: "Blended Yogurt (زبادي خلاط)" },
      {
        name: "زبادي سادة",
        enName: "Plain Yogurt",
        prices: { Medium: 60, "can M": 70, "can L": 100, Cup: 110 },
      },
      {
        name: "زبادي فواكه",
        enName: "Fruits Yogurt",
        prices: { Medium: 70, "can M": 80, "can L": 110, Cup: 120 },
      },
      {
        name: "زبادي فواكه قطع",
        enName: "Mixed Fruits Yogurt",
        prices: { Medium: 80 },
      },
      { type: "header", title: "Add-ons (الأضافات)" },
      { name: "ايس كريم", enName: "Ice Cream", prices: { Price: 20 } },
      { name: "عسل", enName: "Honey", prices: { Price: 15 } },
      { name: "مكسرات", enName: "Nuts", prices: { Price: 25 } },
      { name: "حليب", enName: "Milk", prices: { Price: 10 } },
      { name: "لوتس", enName: "Lotus", prices: { Price: 20 } },
      { name: "نوتيلا", enName: "Nutella", prices: { Price: 20 } },
      { name: "كراميل", enName: "Caramel", prices: { Price: 10 } },
      { name: "بستاشيو", enName: "Pistachio", prices: { Price: 20 } },
      { name: "صوص", enName: "Sauce", prices: { Price: 10 } },
      { name: "بوبا", enName: "Boba", prices: { Price: 15 } },
    ],
  },
  "ميلك شيك": {
    enTitle: "Milkshake",
    items: [
      { type: "header", title: "Milkshake (ميلك تشيك)" },
      {
        name: "فانيليا",
        enName: "Vanilla",
        prices: { Medium: 55, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "شوكولاته",
        enName: "Chocolate",
        prices: { Medium: 55, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "كراميل",
        enName: "Caramel",
        prices: { Medium: 55, "can M": 65, "can L": 95, Cup: 105 },
      },
      {
        name: "بستاشيو",
        enName: "Pistachio",
        prices: { Medium: 75, "can M": 85, "can L": 115, Cup: 125 },
      },
      {
        name: "اوريو",
        enName: "Oreo",
        prices: { Medium: 65, "can M": 75, "can L": 105, Cup: 115 },
      },
      {
        name: "هوهوز",
        enName: "Hohos",
        prices: { Medium: 65, "can M": 75, "can L": 105, Cup: 115 },
      },
      {
        name: "كيتكات",
        enName: "KitKat",
        prices: { Medium: 75, "can M": 85, "can L": 115, Cup: 125 },
      },
      {
        name: "توينكيز",
        enName: "Twinkies",
        prices: { Medium: 65, "can M": 75, "can L": 105, Cup: 115 },
      },
      {
        name: "جلاكسي",
        enName: "Galaxy",
        prices: { Medium: 75, "can M": 85, "can L": 115, Cup: 125 },
      },
      {
        name: "نوتيلا",
        enName: "Nutella",
        prices: { Medium: 75, "can M": 85, "can L": 115, Cup: 125 },
      },
      {
        name: "لوتس",
        enName: "Lotus",
        prices: { Medium: 70, "can M": 80, "can L": 110, Cup: 120 },
      },
      {
        name: "توت بري",
        enName: "Wild Berries",
        prices: { Medium: 65, "can M": 75, "can L": 105, Cup: 115 },
      },
      {
        name: "فواكه",
        enName: "Fruits",
        prices: { Medium: 70, "can M": 80, "can L": 110, Cup: 120 },
      },
      {
        name: "روشيه",
        enName: "Ferrero Rocher",
        prices: { Medium: 70, "can M": 80, "can L": 110, Cup: 120 },
      },
      {
        name: "ماندولين",
        enName: "Mandolin",
        prices: { Medium: 70, "can M": 80, "can L": 110, Cup: 120 },
      },
      {
        name: "بلو",
        enName: "Blue",
        prices: { Medium: 75, "can M": 85, "can L": 115, Cup: 125 },
      },
    ],
  },

  حلويات: {
    enTitle: "Desserts",
    items: [
      { type: "header", title: "Pancakes (بان كيك)" },
      { name: "شوكليت", enName: "Chocolate", prices: { Price: 50 } },
      { name: "بستاشيو", enName: "Pistachio", prices: { Price: 85 } },
      { name: "موز شوكليت", enName: "Banana Chocolate", prices: { Price: 60 } },
      { name: "تفاح شوكليت", enName: "Apple Chocolate", prices: { Price: 65 } },
      { name: "ميكس", enName: "Mix", prices: { Price: 75 } },
      { name: "اوريو", enName: "Oreo", prices: { Price: 65 } },
      { name: "كيت كات", enName: "Kit Kat", prices: { Price: 85 } },
      { name: "جلاكسي", enName: "Galaxy", prices: { Price: 85 } },
      { name: "روشيه", enName: "Ferrero Rocher", prices: { Price: 75 } },
      { name: "لوتس", enName: "Lotus", prices: { Price: 60 } },
      { name: "وايت", enName: "White Chocolate", prices: { Price: 50 } },
      { name: "بلو", enName: "Blue", prices: { Price: 95 } },
      { type: "header", title: "Waffles (وافل)" },
      { name: "شوكليت", enName: "Chocolate", prices: { Price: 55 } },
      { name: "فواكه", enName: "Fruits", prices: { Price: 80 } },
      { name: "بستاشيو", enName: "Pistachio", prices: { Price: 95 } },
      { name: "وايت شوكليت", enName: "White Chocolate", prices: { Price: 55 } },
      { name: "لوتس", enName: "Lotus", prices: { Price: 65 } },
      { name: "بلوبيري", enName: "Blueberry", prices: { Price: 70 } },
      { name: "توينكيز", enName: "Twinkies", prices: { Price: 70 } },
      { name: "سندوتش دبل", enName: "Double Sandwich", prices: { Price: 95 } },
      { name: "ميكس", enName: "Mix", prices: { Price: 80 } },
      { name: "اوريو", enName: "Oreo", prices: { Price: 70 } },
      { name: "كيت كات", enName: "Kit Kat", prices: { Price: 90 } },
      { name: "جلاكسي", enName: "Galaxy", prices: { Price: 90 } },
      { name: "روشيه", enName: "Ferrero Rocher", prices: { Price: 80 } },
      { name: "هوهوز", enName: "Hohos", prices: { Price: 70 } },
      { name: "بلو", enName: "Blue", prices: { Price: 100 } },
      { type: "header", title: "Blue Tajines (طواجن بلو)" },
      { name: "طاجن نوتيلا", enName: "Nutella Tajine", prices: { Price: 50 } },
      {
        name: "طاجن فتة وافل",
        enName: "Waffle Fatteh Tajine",
        prices: { Price: 80 },
      },
      { name: "طاجن دبل", enName: "Double Tajine", prices: { Price: 95 } },
      { name: "طاجن لوتس", enName: "Lotus Tajine", prices: { Price: 65 } },
      { name: "طاجن اوريو", enName: "Oreo Tajine", prices: { Price: 65 } },
      { name: "طاجن بلو", enName: "Blue Tajine", prices: { Price: 95 } },
      { type: "header", title: "Freska (فريسكا)" },
      { name: "شوكليت", enName: "Chocolate", prices: { Price: 40 } },
      { name: "وايت شوكليت", enName: "White Chocolate", prices: { Price: 40 } },
      { name: "موز عسل", enName: "Banana Honey", prices: { Price: 45 } },
      { name: "لوتس", enName: "Lotus", prices: { Price: 45 } },
      {
        name: "كنافه بستاشيو",
        enName: "Kunafa Pistachio",
        prices: { Price: 60 },
      },
      { name: "اوريو", enName: "Oreo", prices: { Price: 50 } },
      { name: "موز شوكليت", enName: "Banana Chocolate", prices: { Price: 45 } },
      { name: "كيت كات", enName: "Kit Kat", prices: { Price: 60 } },
      { name: "جلاكسي", enName: "Galaxy", prices: { Price: 60 } },
      { name: "روشيه", enName: "Ferrero Rocher", prices: { Price: 55 } },
      { name: "بلو", enName: "Blue", prices: { Price: 65 } },
      { name: "توينكيز", enName: "Twinkies", prices: { Price: 50 } },
      { name: "هوهوز", enName: "Hohos", prices: { Price: 50 } },
      { name: "بلوبيري", enName: "Blueberry", prices: { Price: 45 } },
    ],
  },
  شتاء: {
    enTitle: "Winter Nights",
    items: [
      { type: "header", title: "Winter Nights (ليالي الشتاء)" },
      {
        name: "أم علي مكسرات",
        enName: "Om Ali with Nuts",
        prices: { Price: 60 },
      },
      {
        name: "أم علي نوتيلا",
        enName: "Om Ali Nutella",
        prices: { Price: 65 },
      },
      {
        name: "أم علي بستاشيو",
        enName: "Om Ali Pistachio",
        prices: { Price: 75 },
      },
      {
        name: "أم علي مارشميلو",
        enName: "Om Ali Marshmallow",
        prices: { Price: 70 },
      },
      {
        name: "طاجن بطاطا",
        enName: "Sweet Potato Tajine",
        desc: "نوتيلا - لوتس - بستاشيو | Nutella - Lotus - Pistachio",
        prices: { Price: 60 },
      },
      {
        name: "سحلب مكسرات",
        enName: "Sahlab with Nuts",
        prices: { Price: 60 },
      },
      { name: "سحلب لوتس", enName: "Sahlab Lotus", prices: { Price: 70 } },
      { name: "سحلب نوتيلا", enName: "Sahlab Nutella", prices: { Price: 70 } },
      { name: "سحلب فواكه", enName: "Sahlab Fruits", prices: { Price: 75 } },
      {
        name: "سحلب بستاشيو",
        enName: "Sahlab Pistachio",
        prices: { Price: 80 },
      },
      { name: "هوت شوكليت", enName: "Hot Chocolate", prices: { Price: 40 } },
      {
        name: "هوت شوكليت نوتيلا",
        enName: "Nutella Hot Chocolate",
        prices: { Price: 65 },
      },
      {
        name: "هوت شوكليت لوتس",
        enName: "Lotus Hot Chocolate",
        prices: { Price: 60 },
      },
      {
        name: "هوت شوكليت مارشميلو",
        enName: "Marshmallow Hot Chocolate",
        prices: { Price: 65 },
      },
      {
        name: "هوت شوكليت ماندولين",
        enName: "Mandolin Hot Chocolate",
        prices: { Price: 50 },
      },
      { name: "حمص الشام", enName: "Hummus El Sham", prices: { Price: 55 } },
      { name: "اوريو سخن", enName: "Hot Oreo", prices: { Price: 65 } },
      { name: "بلح حليب سخن", enName: "Hot Dates Milk", prices: { Price: 65 } },
      {
        name: "كابتشينو نكهات",
        enName: "Flavored Cappuccino",
        prices: { Price: 70 },
      },
      { name: "بنادول", enName: "Panadol Drink", prices: { Price: 70 } },
    ],
  },
  دباديبو: {
    enTitle: "Blue Bears",
    items: [
      { type: "header", title: "Blue Bears (دباديبو بلو)" },
      {
        name: "دباديبو نوتيلا",
        enName: "Nutella Blue Bears",
        prices: { Price: 110 },
      },
      {
        name: "دباديبو مانجو",
        enName: "Mango Blue Bears",
        prices: { Price: 110 },
      },
      {
        name: "دباديبو بستاشيو",
        enName: "Pistachio Blue Bears",
        prices: { Price: 125 },
      },
      {
        name: "دباديبو بلوبيري",
        enName: "Blueberry Blue Bears",
        prices: { Price: 110 },
      },
      {
        name: "دباديبو كاندي",
        enName: "Candy Blue Bears",
        prices: { Price: 115 },
      },
      {
        name: "دباديبو فراولة",
        enName: "Strawberry Blue Bears",
        prices: { Price: 110 },
      },
      {
        name: "دباديبو لوتس",
        enName: "Lotus Blue Bears",
        prices: { Price: 110 },
      },
      {
        name: "دباديبو لبان",
        enName: "Gum Blue Bears",
        prices: { Price: 110 },
      },
      {
        name: "دباديبو دارك نعناع",
        enName: "Dark Mint Blue Bears",
        prices: { Price: 110 },
      },
      {
        name: "دباديبو لولي",
        enName: "Lolly Blue Bears",
        prices: { Price: 110 },
      },
    ],
  },
});

// =========================================
// 2. DOM Utilities (Security focused)
// =========================================
/**
 * Safely creates a DOM element with given attributes and text content
 * Prevents XSS by entirely avoiding innerHTML.
 */
const createElementSafe = (tag, className = "", textContent = "") => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent) el.textContent = textContent;
  return el;
};

// =========================================
// 3. UI Rendering logic
// =========================================
const container = document.getElementById("menu-items");
const tabsContainer = document.getElementById("tabs");
let activeCategory = "";

/**
 * Builds the DOM structure for a single menu item
 */
const createItemNode = (itemData, index) => {
  if (itemData.type === "header") {
    return createElementSafe("div", "category-header", itemData.title);
  }

  const itemWrapper = createElementSafe("article", "item");
  itemWrapper.style.animationDelay = `${index * 0.04}s`;

  // Info Section
  const infoDiv = createElementSafe("div", "item-info");
  infoDiv.appendChild(createElementSafe("h3", "item-name-ar", itemData.name));
  infoDiv.appendChild(createElementSafe("h4", "item-name-en", itemData.enName));
  if (itemData.desc) {
    infoDiv.appendChild(createElementSafe("p", "item-desc", itemData.desc));
  }

  // Prices Section
  const pricesDiv = createElementSafe("div", "item-prices");
  const priceEntries = Object.entries(itemData.prices);

  priceEntries.forEach(([label, value], idx) => {
    const groupDiv = createElementSafe("div", "price-group");

    if (label.toLowerCase() !== "price") {
      groupDiv.appendChild(createElementSafe("span", "price-label", label));
    }
    groupDiv.appendChild(createElementSafe("span", "price-value", value));
    pricesDiv.appendChild(groupDiv);

    if (idx < priceEntries.length - 1) {
      pricesDiv.appendChild(createElementSafe("span", "price-divider", "|"));
    }
  });

  itemWrapper.appendChild(infoDiv);
  itemWrapper.appendChild(pricesDiv);

  return itemWrapper;
};

/**
 * Renders the chosen category securely with cinematic transitions
 */
const renderItems = (cat) => {
  if (activeCategory === cat) return;
  activeCategory = cat;

  container.classList.add("fade-out");

  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`btn-${cat}`);
  if (activeBtn) activeBtn.classList.add("active");

  setTimeout(() => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const fragment = document.createDocumentFragment();
    menuData[cat].items.forEach((item, index) => {
      fragment.appendChild(createItemNode(item, index));
    });

    container.appendChild(fragment);

    void container.offsetWidth;
    container.classList.remove("fade-out");
  }, 400);
};

/**
 * Initializes the Navigation Tabs
 */
const initTabs = () => {
  const fragment = document.createDocumentFragment();

  Object.keys(menuData).forEach((cat) => {
    const btn = createElementSafe("button", "tab-btn");
    btn.id = `btn-${cat}`;
    btn.setAttribute("type", "button");
    btn.setAttribute("aria-label", `View ${cat} menu`);

    const arText = document.createTextNode(cat + " ");
    const enSpan = createElementSafe("span", "en-tab", menuData[cat].enTitle);

    btn.appendChild(arText);
    btn.appendChild(enSpan);

    btn.addEventListener("click", () => renderItems(cat));
    fragment.appendChild(btn);
  });

  tabsContainer.appendChild(fragment);
};

// =========================================
// 4. Performance-Optimized Parallax & Effects
// =========================================
let mouseX = 0;
let mouseY = 0;
let isTicking = false;
const bgImages = document.querySelectorAll(".bg-img");

/**
 * Animation loop using requestAnimationFrame to prevent layout thrashing
 */
const updateParallax = () => {
  bgImages.forEach((layer, index) => {
    const speed = (index + 1) * 2;
    const xOffset = mouseX * speed;
    const yOffset = mouseY * speed;
    layer.style.setProperty("--mouseX", `${-xOffset}px`);
    layer.style.setProperty("--mouseY", `${-yOffset}px`);
  });
  isTicking = false;
};

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

  if (!isTicking) {
    requestAnimationFrame(updateParallax);
    isTicking = true;
  }
});

document.addEventListener(
  "touchmove",
  (e) => {
    if (e.touches.length > 0) {
      mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;

      if (!isTicking) {
        requestAnimationFrame(updateParallax);
        isTicking = true;
      }
    }
  },
  { passive: true },
);

document.querySelector(".menu-bg-animation").addEventListener("click", (e) => {
  const img = e.target.closest(".bg-img");
  if (!img || img.classList.contains("interactive-fly")) return;

  const dynamicScale = (1.2 + Math.random() * 0.15).toFixed(2);
  const randomRotation = ((Math.random() - 0.5) * 20).toFixed(1);

  img.style.setProperty("--dynamicScale", dynamicScale);
  img.style.setProperty("--randomRotation", `${randomRotation}deg`);

  img.classList.add("interactive-fly");

  setTimeout(() => {
    img.classList.remove("interactive-fly");
  }, 2500);
});

// =========================================
// 5. App Initialization
// =========================================
window.addEventListener("DOMContentLoaded", () => {
  initTabs();
  const firstCategory = Object.keys(menuData)[0];
  if (firstCategory) renderItems(firstCategory);
});
