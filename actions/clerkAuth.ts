"use server";

import { signUpUserServer } from "./clerkAuthServer";
import { signInUserServer } from "./clerkAuthServer";
import { getCurrentUserServer } from "./clerkAuthServer";
import { updateUserProfileServer } from "./clerkAuthServer";
import { forgotPasswordServer } from "./clerkAuthServer";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function signUpUser(formData: FormData) {
  return signUpUserServer(formData);
}

export async function signInUser(formData: FormData) {
  return signInUserServer(formData);
}

export async function signOutUser() {
  (await cookies()).delete("__session");
  (await cookies()).delete("__client");
  redirect("/");
}

export async function getCurrentUser() {
  return getCurrentUserServer();
}

export async function updateUserProfile(formData: FormData) {
  return updateUserProfileServer(formData);
}

export async function forgotPassword(email: string) {
  return forgotPasswordServer(email);
}