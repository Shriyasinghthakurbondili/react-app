import React, { useState } from "react"

// Create AuthPage component and receive setIsAuthenticated as prop
const AuthPage = ({ setIsAuthenticated }) => {

    // State to toggle between signup and sign in
    // true => SignUp
    // false => Login
    const [isSignup, setIsSignUp] = useState(true)

    // State to store email input
    // Used to store user email typed in input
    const [email, setEmail] = useState("")

    // State to store password input
    // Store password
    const [password, setPassword] = useState("")

    // State to show message (success/error)
    // Used to display:
    // SignUp => Success
    // Login => Success
    // Errors
    const [message, setMessage] = useState("")

    // function runs when user clicks button
    function handleSubmit() {

        // Main logic for SignUp/SignIn
        // localStorage = browser memory
        // if no users => empty array
        let users = JSON.parse(localStorage.getItem("users")) || []

        // ================= SIGNUP LOGIC =================
        // If user is on signup page
        if (isSignup) {

            // Check if email already exists
            // Prevent duplicate accounts
            const exists = users.find((u) => u.email === email)

            // If already exists → show error
            if (exists) {
                setMessage("⚠️ User already exists")
            } else {
                // Add new user
                users.push({ email, password })

                // Save data in browser
                localStorage.setItem("users", JSON.stringify(users))

                // Show success message
                setMessage("✅ Successfully Signed Up")

                // After 1 second → go to MyStore app
                setTimeout(() => {
                    setIsAuthenticated(true)
                }, 1000)
            }
        }

        // ================= LOGIN LOGIC =================
        else {

            // Check if email & password match
            const validUser = users.find(
                (u) => u.email === email && u.password === password
            )

            // If correct credentials
            if (validUser) {
                setMessage("✅ Login successful")

                // After 1 second → go to MyStore app
                setTimeout(() => {
                    setIsAuthenticated(true)
                }, 1000)
            } else {
                // Wrong credentials
                setMessage("❌ Invalid Credentials")
            }
        }
    }

    return (
        // full screen background overlay
        <div className="auth-overlay">

            {/* Center login/signup box */}
            <div className="auth-box">

                {/* Dynamic heading */}
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>

                {/* Email input */}
                {/* Controlled component (React controls value) */}
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password input */}
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Button triggers function */}
                {/* Text changes dynamically */}
                <button onClick={handleSubmit}>
                    {isSignup ? "Sign Up" : "Login"}
                </button>

                {/* Display success/error message */}
                <p className="msg">{message}</p>

                {/* Switch between SignUp/Login */}
                <p
                    className="toggle"
                    onClick={() => setIsSignUp(!isSignup)}
                >
                    {/* Dynamic toggle text */}
                    {
                        isSignup
                            ? "Already have account ? Login"
                            : "New users ? Sign Up"
                    }
                </p>
            </div>
        </div>
    )
}

export default AuthPage
