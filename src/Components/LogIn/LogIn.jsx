import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';


const LogIn = () => {
  const { signInUser  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    try {
      // Attempt to log in
      const result = await signInUser (email, password);
      console.log(result);
      // If login successful, navigate to the previous location or home
      navigate(location?.state?.from ? location.state.from : '/');
    } catch (error) {
      // If login fails, display error using SweetAlert2
      Swal.fire({
        title: 'Error!',
        text: 'Invalid email or password.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-gray-200 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
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
          <p className="text-center m-3">Dont have an account? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
