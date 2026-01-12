import { useState } from "react";
import { authStateAtom, saveAuthState } from "../../../hooks/atoms/authStateAtom";
import useLogIn from "../../../hooks/auth/useLogIn";
import { useSetRecoilState } from "recoil";
import { useNavigate} from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate=useNavigate();
    const setAuth=useSetRecoilState(authStateAtom);
    const { signInWithEmail } = useLogIn();
const logIn=async()=>{
    if(!email || !password){
        alert("Please enter email and password");
        return;
    }
    try{
        const userCredential=await signInWithEmail({email,password});
        const user=userCredential.user;
        setAuth({isAuthenticated:true,userEmail:user.email,uid:user.uid,isLoading:false});
        saveAuthState({isAuthenticated:true,userEmail:email,uid:user.uid});
        navigate("/admin/dashboard");
    }catch(e){
        alert("enter correct email and password");
    }
}
    return (
        <div>
    <div className="flex-1">
      <div className="w-full flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
            <p className="text-gray-500 mb-8">Enter your credentials to continue</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all outline-none"
                  required
                />
              </div>

              <button
                onClick={logIn}
                className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;