import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"

// --- CONFIG ---
const USE_DUMMY_AUTH = false // toggle for testing without Supabase
type RegisterPageProps = {
    onRegisterSuccess: () => void
}

export default function RegisterPage({ onRegisterSuccess }: RegisterPageProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [langSet, setLanguage] = useState("");
    const [clientId, setClientId] = useState("")
    const [clients, setClients] = useState<{ id: string; name: string }[]>([])
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    // Fetch clients from Supabase
    useEffect(() => {
        const fetchClients = async () => {
            const { data, error } = await supabase.from("clients").select("id, name").order("name")
            if (error) {
                console.error("Error fetching clients:", error)
            } else {
                console.log("Clients fetched:", data, "Error:", error);
                setClients(data ?? [])
                if (data?.length) setClientId(data[0].id) // default to first client
            }
        }
        fetchClients()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setSuccess("")

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        // ✅ Real Supabase registration
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName,
                    client_id: clientId,
                    language: langSet
                }
            }
        });

        if (error) {
            setError(error.message)
            return
        }

        setSuccess("Account created! You can now Login, but your account has to be validated by the admin before you can use it")
        onRegisterSuccess()
    }

    return (
        <div
            style={{
                padding: "20px",
                width: "100%",
                maxWidth: "400px",
                margin: "60px auto",
                boxSizing: "border-box",
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                color: "white",
            }}
        >
            <h1 style={{ marginBottom: "20px" }}>
                {USE_DUMMY_AUTH ? "Register (Demo)" : "Register"}
            </h1>
            <form onSubmit={handleSubmit}>
                {/* Email, Password, Confirm Password fields here (same as before) */}
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #555",
                            backgroundColor: "#2c2c2c",
                            color: "white",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Password:
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #555",
                            backgroundColor: "#2c2c2c",
                            color: "white",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #555",
                            backgroundColor: "#2c2c2c",
                            color: "white",
                        }}
                    />
                </div>

                {/* First Name */}
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #555", backgroundColor: "#2c2c2c", color: "white" }}
                    />
                </div>

                {/* Last Name */}
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #555", backgroundColor: "#2c2c2c", color: "white" }}
                    />
                </div>

                {/* Language */}
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>Language:</label>
                    <select
                        value={langSet ?? "en"}
                        onChange={(e) => setLanguage(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #555",
                            backgroundColor: "#2c2c2c",
                            color: "white",
                        }}
                    >
                        <option key="nl" value="nl">Dutch</option>
                        <option key="en" value="en">English</option>
                        <option key="pl" value="pl">Polish</option>
                    </select>
                </div>

                {/* Client dropdown */}
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>Company:</label>
                    <select
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #555",
                            backgroundColor: "#2c2c2c",
                            color: "white",
                        }}
                    >
                        {clients.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>

                {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
                {success && <div style={{ color: "lime", marginBottom: "10px" }}>{success}</div>}
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        border: "none",
                        borderRadius: "4px",
                        backgroundColor: "#FFD700",
                        color: "black",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Register
                </button>
            </form>
        </div>
    )
}
