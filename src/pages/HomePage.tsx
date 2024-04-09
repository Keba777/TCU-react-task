import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HomePage = () => {
  const userInfoCookie = Cookies.get("userInfo");
  const userInfo = userInfoCookie ? JSON.parse(userInfoCookie) : null;

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="flex-grow bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto">
          {userInfo ? (
            <>
              <h1 className="text-3xl font-bold mb-4">Welcome</h1>
              <p className="mb-4 text-secondary font-semibold">
                {userInfo.email}
              </p>
              <Link
                to="/profile"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Edit Profile
              </Link>
              <Link
                to="/posts"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Posts
              </Link>
            </>
          ) : (
            <p>No user information found</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
