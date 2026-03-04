import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { LuLoader, LuEye, LuEyeClosed } from "react-icons/lu";

export default function AuthForm({
  isLogin,
  setIsLogin,
  formData,
  handleChange,
  handleSubmit,
  isLoading,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full md:w-1/2 items-center justify-center bg-transparent p-6 pt-20 md:pt-2">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-6 z-10">
        <h2 className="text-2xl font-semibold text-center">
          {isLogin ? "Log in" : "Sign up"}
        </h2>

        <p className="text-center text-sm mt-3">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-teal-600 cursor-pointer hover:underline"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-teal-600 cursor-pointer hover:underline"
              >
                Log in
              </span>
            </>
          )}
        </p>

        <form onSubmit={handleSubmit} className="mt-2 space-y-3">
          {!isLogin && (
            <>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name*"
                className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name*"
                className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </>
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address*"
            className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password (8+ characters)*"
              className="w-full border rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
            >
              {showPassword ? <LuEye size={18} /> : <LuEyeClosed size={18} />}
            </button>
          </div>

          {!isLogin && (
            <div className="flex items-start gap-2 text-xs text-gray-600">
              {" "}
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-1 ml-2"
              />{" "}
              <p>
                {" "}
                I agree to aps's{" "}
                <a href="/terms" className="text-blue-600 underline">
                  {" "}
                  Terms & Conditions{" "}
                </a>{" "}
                and acknowledge the{" "}
                <a href="/privacy" className="text-blue-600 underline">
                  {" "}
                  Privacy Policy{" "}
                </a>{" "}
              </p>{" "}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-2 py-2 rounded-full text-sm font-medium transition ${
              isLoading
                ? "bg-teal-400 cursor-not-allowed"
                : "bg-teal-600 hover:bg-teal-700 text-white"
            }`}
          >
            {isLoading
              ? "Please wait..."
              : isLogin
                ? "Log in"
                : "Create account"}
          </button>
        </form>

        {isLoading && (
          <div className="flex justify-center mt-4">
            <LuLoader className="animate-spin text-teal-600" size={28} />
          </div>
        )}

        {error && (
          <p className="text-red-500 text-xs mt-2 text-center">{error}</p>
        )}

        <div className="flex justify-between mt-3 gap-4">
          <button className="flex-1 bg-black text-white py-2.5 rounded-full flex items-center justify-center">
            <FaApple size={18} />
          </button>

          <button className="flex-1 bg-gray-100 py-2.5 rounded-full flex items-center justify-center">
            <FcGoogle size={18} />
          </button>

          <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-full flex items-center justify-center">
            <FaMeta size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
