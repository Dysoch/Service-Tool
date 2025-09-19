import { supabase } from "../supabaseClient";

export async function getUserLanguage(userId: string): Promise<string> {
  const { data, error } = await supabase
    .from("users")
    .select("language")
    .eq("auth_id", userId)
    .single();

  if (error) {
    console.error("Error fetching language:", error);
    return "en"; // fallback if DB fails
  }

  return data.language || "en";
}

export const getClients = async () => {
  return new Promise<{ id: number, name: string }[]>(resolve =>
    setTimeout(() => resolve([{ id: 1, name: "Client A" }, { id: 2, name: "Client B" }]), 300)
  );
};
