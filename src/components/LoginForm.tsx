import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import User from "../types/user";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<User>();

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="email" className="text-secondary font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Example@gmail.com"
          {...register("email", { required: "Email is required" })}
          className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mb-4"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="text-secondary font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password123"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mb-6"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2 rounded-md bg-bluegray hover:bg-lightbluegray text-white w-full"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
