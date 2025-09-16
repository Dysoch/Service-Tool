// src/pages/LoginPage.tsx
import { useState } from "react"
import { supabase } from "../supabaseClient"

type LoginPageProps = {
  onLoginSuccess: () => void
}

// --- CONFIG ---
const USE_DUMMY_AUTH = false // toggle between dummy login and Supabase
const DUMMY_USERS = [
  { email: "admin@test.com", password: "test123" },
  { email: "user@test.com", password: "user123" }
]

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (USE_DUMMY_AUTH) {
      // ✅ Dummy login
      const match = DUMMY_USERS.find(
        (u) => u.email === email && u.password === password
      )
      if (match) {
        onLoginSuccess()
      } else {
        setError("Invalid credentials (dummy login)")
      }
    } else {
      // ✅ Supabase login
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else {
        onLoginSuccess()
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
        {USE_DUMMY_AUTH ? "Login (Demo)" : "Login"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}
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
          Login
        </button>
      </form>
    </div>
  )
}
