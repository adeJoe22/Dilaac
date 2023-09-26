import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
type Props = {
  bcg: string | StaticImageData;
  children: React.ReactNode;
};

export default function AuthLayout({ bcg, children }: Props) {
  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      <Link href={"/"} className=" top-6 left-7 absolute z-10">
        <Image
          src={logo}
          alt="logo"
          style={{
            height: "30px",
            width: "100px",
          }}
        />
      </Link>
      <div className="h-full w-[400px]">
        <Image
          src={bcg}
          alt="images"
          width={400}
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="w-[calc(100%-400px)] bg-white flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
