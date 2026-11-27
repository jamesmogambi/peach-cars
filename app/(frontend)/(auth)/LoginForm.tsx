"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "@/components/FormInput";
import MyButton from "@/components/MyButton";
import Link from "next/link";
import { useSignIn } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format"),
  password: z.string().min(8),
});

type FormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { signIn } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn.create({
        identifier: data.email,
        password: data.password,
        redirectUrl: "/",
      });

      if (res.status === "complete") {
        router.push("/");
        router.refresh();
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.longMessage || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-auto w-full bg-stone-300 rounded-t-xl overflow-hidden">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#333333] uppercase text-white text-[28px] px-[15px] py-[10px]">
          sign in
        </div>
        <div className="p-1">
          <div className="bg-white p-[15px] pt-[30px]">
            {error && (
              <div className="text-sm font-light mb-6 text-center bg-primary text-white p-5 opacity-30">
                <p>{error}</p>
              </div>
            )}
            {Object.keys(errors).length > 0 && (
              <div className="text-sm font-light mb-6 text-center bg-primary text-white p-5 opacity-30">
                {Object.entries(errors).map(([key, value]) => (
                  <p className="" key={key}>
                    {value.message?.toString()}
                  </p>
                ))}
              </div>
            )}

            <div className="space-y-5">
              <FormInput
                label="Email"
                name="email"
                register={register}
              />
              <FormInput
                label="Password"
                name="password"
                type="password"
                register={register}
              />
            </div>

            <div className="flex mt-6 justify-between items-center">
              <MyButton
                text={isLoading ? "Signing in..." : "login"}
                className={cn(
                  "px-9 py-2 hover:bg-black",
                  isSubmitting && "border-4 border-red-300"
                )}
                type="submit"
                disabled={isLoading}
              />

              <div className="flex items-center gap-4">
                <Link href="/forgot-password" className="text-primary text-[14px]">
                  Forgot Password
                </Link>
                <Link href="/register" className="text-primary text-[14px]">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;