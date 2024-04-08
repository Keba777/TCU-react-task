import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center my-6">
      <div className="w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/5 bg-white px-6 sm:px-8 md:px-10 py-8 sm:py-10 rounded-md">
        <h2 className="flex justify-center font-bold text-4xl text-bluegray mb-4">
          Signup
        </h2>
        <LoginForm />
        <p className="text-secondary flex justify-center mt-4">
          Already have an account!{" "}
          <Link to="/login" className="font-bold pl-3">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
