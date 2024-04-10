import {
  sendEmailVerification,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { auth, db } from "../firebase";
import usePosts from "../hooks/usePosts";
import User from "../types/user";

const Profile = () => {
  const { reset } = useForm<User>();

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

  const userInfoCookie = Cookies.get("userInfo");
  const userInfo = userInfoCookie ? JSON.parse(userInfoCookie) : null;

  const { data: posts, isLoading, error } = usePosts();

  const handleDelete = async (postId: string) => {
    try {
      const postRef = doc(db, "posts", postId);
      await deleteDoc(postRef);
      console.log("Post deleted successfully");
      window.location.reload();
      return true;
    } catch (error) {
      console.error("Error deleting post:", error);
      return false;
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const userPosts = posts?.filter((post) => post.userId === userInfo.userId);

  return (
    <main>
      <NavBar />
      <section className="py-4 grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl">
        <div className="md:col-span-1">
          <h2 className="font-semibold text-xl ml-8 mb-6">{userInfo.email}</h2>
          <div className="px-6 py-4 bg-white mx-4 rounded-xl">
            <AuthForm onSubmit={onSubmit} btnLabel="Update Profile" />
          </div>
        </div>
        <div className="md:col-span-2 px-6">
          <h2 className="text-3xl font-bold text-bluegray flex justify-center mb-4">
            Your Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {userPosts?.map((post) => (
              <div key={post.id} className="bg-white rounded-md pb-4">
                <Card post={post} />
                <span className="flex justify-between px-6 mt-4">
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </Link>
                  {post.id && (
                    <button
                      onClick={() => post.id && handleDelete(post.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
