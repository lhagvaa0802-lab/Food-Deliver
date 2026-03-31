import { SignUp } from "./user-login/signUp";
import { SignIn } from "./user-login/login";

export default function Home() {
  return (
    <div className="p-10 text-center">
      <SignUp />
    </div>
  );
}
