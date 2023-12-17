"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const GithubButton = () => {
  const searchParams = useSearchParams()!;
  let callbackUrl = searchParams.get("callbackUrl")!;

  if (callbackUrl === null) {
    callbackUrl = "/my/dashboard";
  }

  return <div> React+ </div>;
  //   return (
  //     <p onClick={()=>{ signIn("github", { callbackUrl }) }} className=" flex items-center justify-between pl-4 flex-1   cursor-pointer hover:bg-[#F5F5F5] hover:font-medium  bg-[#EAECEF] py-2 sm:py-4 my-4 rounded-lg text-center">
  //       <span> Continue with Github </span>
  //     </p>
  //   );
};

export default GithubButton;
