"use client";

import AuthLayout from "@/components/AuthLayout";
import React, { useState } from "react";
import img from "../../assets/img2.png";
import TextInput from "@/UI/input/TextInput";
import PasswordInput from "@/UI/input/PasswordInput";
import PrimaryButton from "@/UI/button/Primary";
import EmailInput from "@/UI/input/EmailInput";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFirstnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <AuthLayout bcg={img}>
      <form className="w-[500px]">
        <div className="w-full flex items-center justify-center mb-[80px] text-3xl font-semibold ">
          Sign-Up
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[230px]">
            {" "}
            <TextInput
              label="First Name"
              value={firstName}
              onInputChange={handleFirstnameChange}
            />
          </div>
          <div className="w-[230px]">
            <TextInput
              label="Last Name"
              value={lastName}
              onInputChange={handleLastnameChange}
            />
          </div>
        </div>

        <EmailInput
          label="Email"
          value={email}
          onInputChange={handleEmailChange}
        />
        <TextInput
          label="Phone Number"
          value={phone}
          onInputChange={handlePhoneChange}
        />

        <PasswordInput
          label="Password"
          value={password}
          onInputChange={handlePasswordChange}
        />

        <PrimaryButton>Sign up</PrimaryButton>
      </form>
    </AuthLayout>
  );
}
