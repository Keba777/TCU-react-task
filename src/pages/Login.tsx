import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import User from "../types/user";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

const LoginPage = () => {
  const { reset, setError } = useForm<User>();
  const router = useNavigate();

  const onSubmit = async (data: User) => {
    const { email, password } = data;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userId = userCredential.user?.uid;
      Cookies.set("userInfo", JSON.stringify({ email, userId }), {
        expires: 7,
        secure: true,
      });

      reset();
      router("/");
    } catch (error: any) {
      if (error.code === "auth/invalid-credential") {
        setError("password", {
          type: "manual",
          message: "Invalid email or password.",
        });
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center my-6">
      <div className="w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/5 bg-white px-6 sm:px-8 md:px-10 py-8 sm:py-10 rounded-md">
        <h2 className="flex justify-center font-bold text-4xl text-bluegray mb-4">
          Login
        </h2>
        <AuthForm onSubmit={onSubmit} btnLabel="Login" />
        <p className="text-secondary flex justify-center mt-4">
          Don't have an account!{" "}
          <Link to="/signup" className="font-bold pl-3">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
