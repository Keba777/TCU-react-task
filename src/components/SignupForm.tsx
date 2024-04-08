import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Sucessful");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email" className=" text-secondary font-semibold">
          Email
        </label>

        <input
          type="email"
          id="email"
          placeholder="Example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mb-4"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className=" text-secondary font-semibold">
          Password
        </label>

        <input
          type="password"
          id="password"
          placeholder="Password123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mb-6"
        />
      </div>

      <div>
        <button
          onClick={handleSignup}
          className="px-5 py-2 rounded-md bg-bluegray hover:bg-lightbluegray text-white w-full"
        >
          Signup
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
