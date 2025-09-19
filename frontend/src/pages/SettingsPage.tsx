import { t } from "../types/locale";

export default function SettingsPage({ }) {
    const lang = "nl"; // later: read from user/client settings

    return (
        <div
            style={{
                padding: '20px',
                width: '100%',
                maxWidth: '1024px', // max width for large screens
                margin: '0 auto',   // center horizontally
                boxSizing: 'border-box',
            }}
        >
            <h1>{t(lang, "default.title")}</h1>
            <p>{t(lang, "default.empty")}</p>
        </div>
    )
}
