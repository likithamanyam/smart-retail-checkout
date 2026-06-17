import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/checkout");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="login-wrapper">

      <div className="login-box">

        {/* Left Side */}

        <div className="left-panel">

          <div className="left-content">

            <img
  src={logo}
  alt="Smart Retail Checkout"
  className="brand-logo"
/>

            <h1>
              Smart Retail Checkout
            </h1>

            <p>
              Intelligent Billing Platform
            </p>

            <ul>
              <li>Product Management</li>
              <li>Smart Discounts</li>
              <li>GST Calculation</li>
              <li>Final Bill Generation</li>
            </ul>

          </div>

        </div>

        {/* Right Side */}

        <div className="right-panel">

          <div className="user-icon">
            👤
          </div>

          <h2 className="login-title">
            Login
          </h2>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Email Address"
              className="form-control mb-3"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="form-control mb-4"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="submit"
              className="login-btn"
            >
              Sign In
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;