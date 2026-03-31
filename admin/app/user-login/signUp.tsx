"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreatUser } from "../lib/user/post-user";
import { useState } from "react";
export function SignUp() {
  return (
    <div className="flex w-[1400px]justify-betwen">
      <div>
        <SignIn />{" "}
      </div>
      <div>
        <img src="/images/img.svg" />
      </div>
    </div>
  );
}

const SignIn = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const onSubmit = () => {
    const crendentials = {
      email,
      password,
    };

    try {
      const data = await SignIn(crendentials);
    } catch (error)
  }

  return (
    <div>
      <Input />
      <Input />
      <Button variant="outline">Button</Button>
    </div>
  );
};
