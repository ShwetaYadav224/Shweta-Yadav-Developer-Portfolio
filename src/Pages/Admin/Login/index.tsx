import { useState } from "react";
import useLogIn from "../../../hooks/auth/useLogIn";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { signInWithEmail } = useLogIn(); 
  const logIn = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    try {
      await signInWithEmail({ email, password });
      navigate("/admin/dashboard");
    } catch (e) {
      alert("enter correct email and password");
    }
  };
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