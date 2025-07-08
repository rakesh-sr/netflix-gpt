import { useState } from "react";
import { Header } from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            alt="background-image"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          />
        </div>
        <form className="w-3/12 absolute p-8 bg-black my-32 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
          <h1 className="font-bold text-3xl py-4 m-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-600 rounded-lg"
          />}
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-gray-600 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full bg-gray-600 rounded-lg"
          />

          <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4" onClick={toggleSignInForm}>
            {isSignInForm
              ? "Alreadt registered? Sign In Now"
              : "New to Netflix? Sign Up Now"}{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
