import { Link, useNavigate } from "react-router-dom";
import Menubar from "../../Shared/Menubar/Menubar";
import "./Login.css"
import useFirebase from "../../../Hooks/useFirebase";
const Login = () => {
    const {signInWithGoogle,setUser} = useFirebase();
    const navigate = useNavigate();
    const googleSignIn =() =>{
        signInWithGoogle()
    .then((result) => {
        console.log(result.user)
        setUser(result.user)
        navigate('/home')
    });
    }
  return (
    <>
    
    <div className="min-h-screen min-w-screen banner ">
    <Menubar></Menubar>
    <div className="flex justify-center items-center mt-16">
    <div className="card bg-card w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div>
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <Link className="label-text-alt link link-hover text-white">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className=" mt-6">
            <button className="btn bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white w-full">Login</button>
            <div className="divider text-white ">OR</div>
            
            <button onClick={googleSignIn} className="btn bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 text-white w-full">Sign In With Google</button>
          </div>
        </form>
      </div>
    </div>
      
    </div>
    </>
  );
};

export default Login;
