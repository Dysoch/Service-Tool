import en from "../locale/en.json";
import nl from "../locale/nl.json";

type LocaleKey = "en" | "nl";

// Register all available locales here
const locales: Record<LocaleKey, any> = { en, nl };

export function t(lang: LocaleKey, path: string): string {
  const keys = path.split(".");

  // Try requested language
  let value = keys.reduce((acc, part) => acc?.[part], locales[lang]);

  // Fallback to English if missing
  if (value === undefined) {
    value = keys.reduce((acc, part) => acc?.[part], locales["en"]);
  }

  // Final fallback
  return value ?? `[missing: ${path}]`;
}
