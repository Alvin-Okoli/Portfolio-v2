import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "☀️ Good morning";
  }

  if (hour < 17) {
    return "🌤️ Good afternoon";
  }

  if (hour < 21) {
    return "🌆 Good evening";
  }

  return "🌙 Good night";
};
