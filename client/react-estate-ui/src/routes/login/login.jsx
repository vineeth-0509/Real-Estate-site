import "./login.scss";
import {useState, useContext} from "react";
import { Link , useNavigate} from "react-router-dom";
import apiRequests from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {updateUser} = useContext(AuthContext)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setLoading(true);
    setError("");
    const formData = new FormData(e.target);
    const username = formData.get("username")
    const password = formData.get("password")

    
    try {
      const res = await apiRequests.post("/auth/login",{
        username,password
      })

     updateUser(res.data);
     navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message)
    } finally{
      setLoading(false);
    }
  }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" required minLength={5} maxLength={15}  type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
