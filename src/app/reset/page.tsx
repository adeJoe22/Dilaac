"use client";

import AuthLayout from "@/components/AuthLayout";
import React, { useState } from "react";
import img from "../../assets/img4.png";
import PasswordInput from "@/UI/input/PasswordInput";
import PrimaryButton from "@/UI/button/Primary";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <AuthLayout bcg={img}>
      <form className="w-[500px]">
        <div className="w-full flex items-center justify-center mb-[20px] text-3xl font-semibold ">
          Reset Password
        </div>

        <PasswordInput
          label="New Password"
          value={password}
          onInputChange={handlePasswordChange}
        />
        <PasswordInput
          label="Confirm Password"
          value={confirmPassword}
          onInputChange={handleConfirmPasswordChange}
        />
        <PrimaryButton>Continue</PrimaryButton>
      </form>
    </AuthLayout>
  );
}
