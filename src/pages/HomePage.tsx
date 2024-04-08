import Cookies from "js-cookie";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const userInfoCookie = Cookies.get("userInfo");
  const userInfo = userInfoCookie ? JSON.parse(userInfoCookie) : null;

  return (
    <main>
      <NavBar />
      <div className="mt-6">
        {userInfo ? (
          <>
            <p>Email: {userInfo.email}</p>
            <p>User ID: {userInfo.userId}</p>
          </>
        ) : (
          <p>No user information found</p>
        )}
      </div>
      <h1 className="my-28">Home</h1>
      <Footer />
    </main>
  );
};

export default HomePage;
