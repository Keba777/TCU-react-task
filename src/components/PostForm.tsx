import React from "react";
import { useForm } from "react-hook-form";
import Post from "../types/post";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<Post>();

  const router = useNavigate();

  const onSubmit = async (data: Post) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="title" className="text-secondary font-semibold">
          Email
        </label>
        <input
          type="text"
          id="title"
          placeholder="Lorem ipsum"
          {...register("title", { required: "Title is required" })}
          className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mb-4"
        />
        {errors.title && (
          <span className="text-red-500">{errors.title.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="text-secondary font-semibold">
          Email
        </label>

        <textarea
          id="content"
          placeholder="Lorem"
          {...register("content", { required: "Content is required" })}
          className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mb-4"
        />
        {errors.content && (
          <span className="text-red-500">{errors.content.message}</span>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="px-5 py-2 rounded-md bg-bluegray hover:bg-lightbluegray text-white w-full"
        >
          Login
        </button>
        <span>{errors.root?.message}</span>
      </div>
    </form>
  );
};

export default PostForm;
