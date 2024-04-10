import React from "react";
import { useForm } from "react-hook-form";
import {
  sendEmailVerification,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth } from "../firebase";
import User from "../types/user";

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = async (data: User) => {
    try {
      if (data.email) {
        await sendEmailVerification(auth.currentUser!);
        await updateEmail(auth.currentUser!, data.email);
      }
      if (data.password) {
        await updatePassword(auth.currentUser!, data.password);
      }
      console.log("Profile updated successfully");
      reset();
    } catch (error: any) {
      console.error("Failed to update profile", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-6 py-4 bg-white mx-4 rounded-xl"
    >
      <div className="mb-3">
        <label htmlFor="email" className="text-secondary font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
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
          {...register("password", { required: "Password is required" })}
          className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mb-6"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="px-5 py-2 rounded-md bg-bluegray hover:bg-lightbluegray text-white w-full"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
