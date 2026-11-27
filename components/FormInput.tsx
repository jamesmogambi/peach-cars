"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  register: any;
  error?: FieldError;
  placeholder?: string;
  isMust?: boolean;
  className?: string;
  inputClass?: string;
  labelClass?: string;
}

export default function FormInput({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder = "Enter here",
  isMust = false,
  className = "",
  inputClass = "",
  labelClass = "",

  ...rest
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={cn("", className)}>
      <label
        className={cn("block pl-2 text-[13px]  font-semibold", labelClass)}
      >
        {label}
        <span
          className={cn(
            "text-lg font-bold",
            isMust ? "text-primary" : "text-transparent"
          )}
        >
          *
        </span>
      </label>
      <div className="relative">
        <Input
          className={cn(
            "w-full rounded-none  focus-visible:ring-0 border-0  border-b  underline-offset-4  shadow-none text-black p-2",
            isPassword && "pr-10",
            inputClass
          )}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          {...register(name)}
          placeholder={placeholder}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
