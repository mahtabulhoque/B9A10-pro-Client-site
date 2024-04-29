import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
  const { signInUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext); // Import signInWithGoogle
  const location = useLocation();
  const navigate = useNavigate();


    // Email & password Login

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const result = await signInUser(email, password);
      console.log(result);
      e.target.reset();

      navigate(location?.state?.from ? location.state.from : "/");

      Swal.fire({
        title: "Success!",
        text: "You have successfully logged in.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Invalid email or password.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error);
    }
  };

    // Google Login

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "You have successfully signed in with Google.",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(location?.state?.from ? location.state.from : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to sign in with Google.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  // GitHub Login

  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "You have successfully signed in with Google.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to sign in with Google.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };




  return (
    <div className="hero min-h-screen bg-gray-00 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl lg:text-5xl font-bold">Login now!</h1>
          <p className="py-6 text-2xl">Please fill out this form</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center text-[18px] p-2 m-3">
            Do not have an account?{" "}
            <Link className="text-blue-600 font-bold" to="/register">
              Register
            </Link>
          </p>

          <div className="">
            <h1 className="text-center font-bold text-slate-500 text-[18px]">
              You can also Login with
            </h1>

            <div className="flex justify-evenly">
              <div>
                <p>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-ghost font-bold text-[16px] text-green-500 "
                  >
                    Google
                  </button>
                </p>
              </div>

              <div>
                <p>
                  <button
                    onClick={handleGitHubSignIn}
                    className="btn btn-ghost font-bold text-[16px] "
                  >
                    Github
                  </button>
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
