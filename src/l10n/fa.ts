/* Farsi (Persian) locals for flatpickr */
import { CustomLocale } from "../types/locale";
import { FlatpickrFn } from "../types/instance";

const fp =
  typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : ({
        l10ns: {},
      } as FlatpickrFn);

export const Persian: CustomLocale = {
  weekdays: {
    shorthand: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'جمعه', 'شنبه'],
    
    longhand: [
      "یک‌شنبه",
      "دوشنبه",
      "سه‌شنبه",
      "چهارشنبه",
      "پنچ‌شنبه",
      "جمعه",
      "شنبه",
    ],
  },

  months: {
    shorthand: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
    longhand: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
  },

  ordinal: () => {
    return "";
  },

  amPM: ["صبح", "بعدازظهر"]
};

fp.l10ns.fa = Persian;

export default fp.l10ns;