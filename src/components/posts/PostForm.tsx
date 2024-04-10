import { useForm } from "react-hook-form";
import Post from "../../types/post";

interface Props {
  onSubmit: (data: Post) => Promise<void>;
}

const PostForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Post>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-transparent">
      <div className="mb-3">
        <label htmlFor="title" className="text-secondary font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Lorem ipsum"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 5,
              message: "Title must be at least 5 characters long",
            },
            maxLength: {
              value: 50,
              message: "Title cannot exceed 50 characters",
            },
          })}
          className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mb-4"
        />
        {errors.title && (
          <span className="text-red-500">{errors.title.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="text-secondary font-semibold">
          Content
        </label>

        <textarea
          id="content"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          {...register("content", {
            required: "Content is required",
            minLength: {
              value: 10,
              message: "Content must be at least 10 characters long",
            },
          })}
          className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mb-4"
        />
        {errors.content && (
          <span className="text-red-500">{errors.content.message}</span>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2 rounded-md bg-bluegray hover:bg-lightbluegray text-white w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PostForm;
