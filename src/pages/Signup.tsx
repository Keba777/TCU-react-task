import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useForm } from "react-hook-form";
import User from "../types/user";

const SignupPage = () => {
  const { reset, setError } = useForm<User>();
  const navigate = useNavigate();

  const onSubmit = async (data: User) => {
    const { email, password } = data;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Successful");
      reset();
      navigate("/login");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setError("email", {
          type: "manual",
          message: "Email is already registered. Please use a different email.",
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
          Signup
        </h2>
        <AuthForm onSubmit={onSubmit} btnLabel="Signup" />
        <p className="text-secondary flex justify-center mt-4">
          Already have an account!{" "}
          <Link to="/login" className="font-bold pl-3">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
