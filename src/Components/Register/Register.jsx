import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    console.log(name, email, photoUrl, password);

        // Password verification
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
          Swal.fire({
            title: 'Wait!',
            text: 'Password must contain at least 6 characters, including one uppercase letter and one lowercase letter.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          return; // Stop execution if password doesn't meet the requirements
        }




    createUser(email,password)
      .then(result => {
        console.log(result.user);
        
        const user = { name, email, password, photoUrl};
        fetch('http://localhost:5000/user',{
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Registration Successfull',
              icon: 'success',
              confirmButtonText: 'OK'
            })
  
          }
        })
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now</h1>
          <p className="py-6">Please Register Here</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
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
                name="email"
                placeholder="email"
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
                placeholder="password"
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          <p className="text-center font-medium m-2">Do you have an account? <Link className="text-blue-600 font-bold" to='/logIn'>LogIn</Link></p>
        </div>
       
      </div>
    </div>
  );
};

export default Register;
