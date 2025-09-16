import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"

// --- CONFIG ---
const USE_DUMMY_AUTH = false // toggle for testing without Supabase
const DUMMY_USERS: { email: string; password: string; clientId?: string }[] = []

type RegisterPageProps = {
    onRegisterSuccess: () => void
}

export default function RegisterPage({ onRegisterSuccess }: RegisterPageProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
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

        if (USE_DUMMY_AUTH) {
            const exists = DUMMY_USERS.find((u) => u.email === email)
            if (exists) {
                setError("User already exists (dummy)")
            } else {
                DUMMY_USERS.push({ email, password, clientId })
                setSuccess("Dummy account created! You can now log in.")
                onRegisterSuccess()
            }
        } else {
            // Real Supabase registration
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        client_id: clientId, // store selected client in auth.user metadata
                    },
                },
            })

            if (error) {
                setError(error.message)
            } else {
                setSuccess("Account created! Please check your email to confirm.")
                onRegisterSuccess()
            }
        }
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

                {/* Client dropdown */}
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>Client:</label>
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
