import { doc, updateDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { db } from "../firebase";
import Post from "../types/post";

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const onSubmit = async (data: Post) => {
    try {
      if (!id) {
        throw new Error("Post ID is undefined");
      }
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, { ...data });
      console.log("Document successfully updated!");
      navigate("/profile");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white p-8 w-full md:w-3/4 lg:w-2/4 xl:w-1/3 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-bluegray mb-6">Update post</h2>
        <PostForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default EditPost;
