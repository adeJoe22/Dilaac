"use client";

import AuthLayout from "@/components/AuthLayout";
import React, { useState } from "react";
import img from "../../assets/img3.png";
import EmailInput from "@/UI/input/EmailInput";
import PrimaryButton from "@/UI/button/Primary";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <AuthLayout bcg={img}>
      <form className="w-[500px]">
        <div className="w-full flex items-center justify-center mb-[20px] text-3xl font-semibold ">
          Forgot Password
        </div>
        <div className="w-full flex items-center justify-center mb-[60px] text-md ">
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password.
        </div>
        <EmailInput
          label="Email"
          value={email}
          onInputChange={handleEmailChange}
        />
        <PrimaryButton>Send reset instructions</PrimaryButton>
      </form>
    </AuthLayout>
  );
}
