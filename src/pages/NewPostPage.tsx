import PostForm from "../components/PostForm";

const NewPostPage = () => {
  return (
    <div className="p-6">
      <div className="bg-white p-8 w-full md:w-3/4 lg:w-2/4 xl:w-1/3 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-bluegray mb-6">
          Add a new post
        </h2>
        <PostForm />
      </div>
    </div>
  );
};

export default NewPostPage;
