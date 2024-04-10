import { useForm } from "react-hook-form";
import User from "../types/user";

interface Props {
  btnLabel: string;
  onSubmit: (data: User) => Promise<void>;
}

const AuthForm = ({ btnLabel, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>();

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
          {btnLabel}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
