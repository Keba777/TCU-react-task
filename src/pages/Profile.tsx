import NavBar from "../components/NavBar";
import Cookies from "js-cookie";
import ProfileForm from "../components/ProfileForm";

const Profile = () => {
  const userInfoCookie = Cookies.get("userInfo");
  const userInfo = userInfoCookie ? JSON.parse(userInfoCookie) : null;
  return (
    <main>
      <NavBar />
      <section className="py-4 flex space-x-8">
        <div>
          <h2 className="font-semibold text-xl ml-8 mb-6">{userInfo.email}</h2>
          <ProfileForm />
        </div>
        <div>
          <h2>Your Posts</h2>
        </div>
      </section>
    </main>
  );
};

export default Profile;
