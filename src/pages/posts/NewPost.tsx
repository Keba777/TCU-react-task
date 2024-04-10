import { addDoc, collection } from "firebase/firestore";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PostForm from "../../components/posts/PostForm";
import { db } from "../../firebase";
import Post from "../../types/post";

const NewPostPage = () => {
  const { reset } = useForm<Post>();
  const router = useNavigate();

  const onSubmit = async (data: Post) => {
    try {
      const userId = Cookies.get("userInfo")
        ? JSON.parse(Cookies.get("userInfo")!).userId
        : "";

      if (!userId) {
        console.error("User ID not found in cookie");
        return;
      }

      const postData = { ...data, userId };

      const docRef = await addDoc(collection(db, "posts"), postData);
      console.log("Document written with ID: ", docRef.id);
      reset();
      router("/");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white p-8 w-full md:w-3/4 lg:w-2/4 xl:w-1/3 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-bluegray mb-6">
          Add a new post
        </h2>
        <PostForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default NewPostPage;
