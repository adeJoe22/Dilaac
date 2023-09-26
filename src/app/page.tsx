"use client";
import React, { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import img from "../assets/img1.png";
import TextInput from "@/UI/input/TextInput";
import PasswordInput from "@/UI/input/PasswordInput";
import PrimaryButton from "@/UI/button/Primary";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <AuthLayout bcg={img}>
        <form className="w-[500px]">
          <div className="w-full flex items-center justify-center mb-[80px] text-3xl font-semibold ">
            Sign-In
          </div>
          <TextInput
            label="Username"
            value={username}
            onInputChange={handleUsernameChange}
          />

          <PasswordInput
            label="Password"
            value={password}
            onInputChange={handlePasswordChange}
          />

          <PrimaryButton>Sign in</PrimaryButton>
        </form>
      </AuthLayout>
    </main>
  );
}
