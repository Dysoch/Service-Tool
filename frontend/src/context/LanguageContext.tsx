// ./frontend/context/LanguageContext.tsx
//import { getUserLanguage } from "../services/api"; // fetch from Supabase
//import type { ReactNode } from "react";
// ./frontend/context/LanguageContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient"

type LanguageContextType = {
    lang: string;
    setLang: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    setLang: () => { },
});

export function LanguageProvider({
    userId,
    children,
}: {
    userId: string;
    children: React.ReactNode;
}) {
    const [lang, setLangState] = useState("en");

    useEffect(() => {
        if (!userId) return;
        supabase
            .from("users")
            .select("language")
            .eq("id", userId)
            .single()
            .then(({ data }) => {
                if (data?.language) setLangState(data.language);
            });
    }, [userId]);

    const setLang = async (newLang: string) => {
        setLangState(newLang);

        if (userId) {
            await supabase
                .from("users")
                .update({ language: newLang })
                .eq("id", userId);
        }
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
