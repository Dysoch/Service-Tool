// ./frontend/context/LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { getUserLanguage } from "../services/api";

type LangContextType = {
    lang: string;
    setLang: (lang: string) => void;
};

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export const LanguageProvider = ({ userId, children }: { userId: string; children: React.ReactNode }) => {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        if (userId) {
            getUserLanguage(userId).then(setLang);
        } else {
            setLang("en"); // fallback for guests
        }
    }, [userId]);

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
    return ctx;
};
