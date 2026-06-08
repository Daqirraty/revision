import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "emilys",
          password: "emilyspass",
          expiresInMins: 30, // optional, defaults to 60
        }),
        credentials: "include", // Include cookies (e.g., accessToken) in the request
      })
      console.log("see", response)
        // const data = response.json()

        if(!response.ok) {
            throw new Error("Invalid credentials")
        }

        navigate("/home")

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Student Portal</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button
            disabled={isLoading}
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            {isLoading ? "Logging In..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
