import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundGlow from "../components/login/BackgroundGlow";
import Logo from "../components/login/Logo";
import LeftSection from "../components/login/LeftSection";
import AuthForm from "../components/login/AuthForm";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (isLogin) {
      if (!formData.email.trim() || !formData.password.trim()) {
        setError("Please fill all required fields");
        return;
      }
    } else {
      if (
        !formData.firstName.trim() ||
        !formData.lastName.trim() ||
        !formData.email.trim() ||
        !formData.password.trim()
      ) {
        setError("Please fill all required fields");
        return;
      }

      if (!formData.agreed) {
        setError("You must accept Terms & Conditions");
        return;
      }
    }

    setIsLoading(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className="relative min-h-screen flex font-inter bg-[#0f0f0f] overflow-hidden">
      <BackgroundGlow />
      <Logo />
      <LeftSection />
      <AuthForm
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
