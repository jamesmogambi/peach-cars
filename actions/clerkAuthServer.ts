import { auth, currentUser } from "@clerk/nextjs/server";

export async function signUpUserServer(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  const { email, password, firstName, lastName, phone, ...rest } = data as {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    [key: string]: any;
  };

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  try {
    const clerkPayload: any = {
      email_address: [email],
      password,
      first_name: firstName,
      last_name: lastName,
      public_metadata: {
        ...rest,
        phone,
      },
    };

    // Only add phone_number if it's provided and we want to try
    // Note: Phone auth must be enabled in Clerk Dashboard
    // For now, we'll store phone in public_metadata instead

    const res = await fetch(
      `https://api.clerk.com/v1/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
        body: JSON.stringify(clerkPayload),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.errors?.[0]?.long_message || "Signup failed" };
    }

    const user = await res.json();

    return { success: true, user };
  } catch (error) {
    console.error("Error signing up user:", error);
    return { error: error instanceof Error ? error.message : "Signup error" };
  }
}

export async function signInUserServer(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  try {
    const res = await fetch(
      `https://api.clerk.com/v1/client/sessions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.errors?.[0]?.long_message || "Invalid credentials" };
    }

    const session = await res.json();
    return { success: true, session };
  } catch (error) {
    console.error("Error signing in user:", error);
    return { error: error instanceof Error ? error.message : "Something went wrong. Please try again." };
  }
}

export async function getCurrentUserServer() {
  const { userId } = await auth();
  
  if (!userId) return null;

  const user = await currentUser();
  
  if (!user) return null;

  return {
    id: user.id,
    email: user.emailAddresses[0]?.emailAddress,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phoneNumbers[0]?.phoneNumber,
    imageUrl: user.imageUrl,
    publicMetadata: user.publicMetadata,
  };
}

export async function updateUserProfileServer(formData: FormData) {
  const { userId } = await auth();
  
  if (!userId) {
    return { error: "Unauthorized" };
  }

  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch(
      `https://api.clerk.com/v1/users/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
        body: JSON.stringify({
          first_name: data.firstName,
          last_name: data.lastName,
          public_metadata: {
            ...data,
            phone: data.phone,
          },
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.errors?.[0]?.long_message || "Update failed" };
    }

    await sanityClient
      .patch({ query: `*[_type == "user" && clerkId == $clerkId][0]`, params: { clerkId: userId } })
      .set({
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        publicMetadata: data,
        updatedAt: new Date().toISOString(),
      })
      .commit();

    return { success: true };
  } catch (error) {
    console.error("Error updating user:", error);
    return { error: error instanceof Error ? error.message : "Update error" };
  }
}

export async function forgotPasswordServer(email: string) {
  if (!email) {
    return { error: "Email is required" };
  }

  try {
    const res = await fetch(
      `https://api.clerk.com/v1/client/password_reset_tokens`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
        body: JSON.stringify({
          identifier: email,
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return { error: errorData.errors?.[0]?.long_message || "Failed to send reset email" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending reset email:", error);
    return { error: error instanceof Error ? error.message : "Something went wrong" };
  }
}