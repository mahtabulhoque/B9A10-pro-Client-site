import { useRef, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const formRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: 'Wait!',
        text: 'Password must contain at least 6 characters, including one uppercase letter and one lowercase letter.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
    
      const { user } = await createUser(email, password);

   
      await updateUser(name, photoUrl);


      setUser({ displayName: name, photoURL: photoUrl });

   
      Swal.fire({
        title: 'Success!',
        text: 'Registration Successful',
        icon: 'success',
        confirmButtonText: 'OK'
      });

    
      form.reset();

    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl lg:text-5xl font-bold">Register Now</h1>
          <p className="py-6">Please Register Here</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form ref={formRef} onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoUrl"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>

          <p className="text-center font-medium m-2">Do you have an account? <Link className="text-blue-600 font-bold" to="/logIn">LogIn</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
