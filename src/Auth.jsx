import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  Sparkles,
  Mail,
  LockKeyhole,
  UserRound,
  Eye,
  EyeOff,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      alert("Registration completed! Please sign in.");
      setIsLogin(true);

      setFormData({
        name: "",
        email: formData.email,
        password: "",
        confirmPassword: "",
      });

      return;
    }

    // Frontend demonstration only
    navigate("/create-task");
  };

  const fieldClass =
    "h-12 rounded-xl border border-white/20 bg-[#38263e]/80 pl-11 text-white placeholder:text-white/45 focus-visible:ring-2 focus-visible:ring-[#efc0df]";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#211027] via-[#351c39] to-[#512c50] px-4 py-10">
      {/* Background circles */}
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#ed9bb7] opacity-80" />

      <div className="pointer-events-none absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-[#9865dc] opacity-80" />

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md rounded-[30px] border border-white/30 bg-white/15 p-7 shadow-2xl backdrop-blur-xl sm:p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link to="/" className="mb-7 inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-[#f4c4ec]">
              <BrainCircuit size={28} />
            </div>

            <div className="text-left">
              <h2 className="text-xl font-bold text-white">Pulsework AI</h2>
              <p className="text-xs text-white/60">
                Your intelligent workspace
              </p>
            </div>
          </Link>

          <h1 className="text-3xl font-bold text-white">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h1>

          <p className="mt-2 text-sm text-white/70">
            {isLogin
              ? "Sign in to continue your productivity journey"
              : "Join Pulsework AI and organize your work"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleAuthSubmit} className="space-y-5">
          {/* Name - Registration only */}
          {!isLogin && (
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Full Name
              </label>

              <div className="relative">
                <UserRound
                  className="absolute left-3 top-3.5 text-white/60"
                  size={19}
                />

                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  required
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Email Address
            </label>

            <div className="relative">
              <Mail
                className="absolute left-3 top-3.5 text-white/60"
                size={19}
              />

              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className={fieldClass}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Enter a valid email address"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Password
            </label>

            <div className="relative">
              <LockKeyhole
                className="absolute left-3 top-3.5 text-white/60"
                size={19}
              />

              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`${fieldClass} pr-12`}
                minLength={isLogin ? 1 : 8}
                pattern={
                  isLogin
                    ? undefined
                    : "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}"
                }
                title="Use at least 8 characters, including uppercase, lowercase, number and special character"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-white/70 hover:text-white"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            {!isLogin && (
              <p className="mt-2 text-xs text-white/60">
                Minimum 8 characters with uppercase, lowercase, number and
                special character.
              </p>
            )}
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Confirm Password
              </label>

              <div className="relative">
                <LockKeyhole
                  className="absolute left-3 top-3.5 text-white/60"
                  size={19}
                />

                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`${fieldClass} pr-12`}
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-white/70 hover:text-white"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Remember / Forgot */}
          {isLogin && (
            <div className="flex items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 text-white/85">
                <input type="checkbox" className="h-4 w-4 accent-[#dba9df]" />
                Remember me
              </label>

              <button
                type="button"
                className="font-medium text-[#f4c4ec] hover:text-white"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Terms */}
          {!isLogin && (
            <label className="flex items-start gap-2 text-xs leading-5 text-white/80">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-[#dba9df]"
                required
              />
              I agree to the Terms of Service and Privacy Policy.
            </label>
          )}

          {/* Submit */}
          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-gradient-to-r from-[#efc0df] to-[#d6b0ee] text-base font-bold text-[#321b37] shadow-lg transition hover:brightness-110"
          >
            {isLogin ? "Sign In" : "Create Account"}
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </form>

        {/* Divider */}
        <div className="my-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/25" />

          <span className="text-xs font-medium text-white/65">
            OR CONTINUE WITH
          </span>

          <div className="h-px flex-1 bg-white/25" />
        </div>

        {/* Google Button - UI only */}
        <Button
          type="button"
          variant="outline"
          className="h-12 w-full border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
        >
          <span className="mr-2 text-lg font-bold">G</span>
          Continue with Google
        </Button>

        {/* Switch Login / Registration */}
        <p className="mt-8 text-center text-sm text-white/80">
          {isLogin ? "New here?" : "Already have an account?"}

          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
            }}
            className="ml-2 font-bold text-[#f4c4ec] hover:text-white"
          >
            {isLogin ? "Create an account" : "Sign in"}
          </button>
        </p>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-xs text-white/60 transition hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Auth;
