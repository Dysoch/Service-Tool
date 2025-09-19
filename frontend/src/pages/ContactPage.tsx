import { t } from "../types/locale";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage({ }) {
    const { lang } = useLanguage();

    return (
        <div
            style={{
                padding: "20px",
                width: "100%",
                maxWidth: "1024px",
                margin: "0 auto",
                boxSizing: "border-box",
            }}
        >
            <h1>{t(lang, "default.title")}</h1>
            <p>{t(lang, "default.empty")}</p>
        </div>
    );
}

