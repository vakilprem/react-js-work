import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { login, signup } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [singState, setSingState] = useState("Sing In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (singState === "Sing In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="login_spinner">
      <img src={netflix_spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{singState}</h1>
        <form action="">
          {singState === "Sing Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {singState}
          </button>
          <div className="from-help">
            <div className="remeber">
              <input type="checkbox" />
              <label htmlFor="">Rember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {singState === "Sing In" ? (
            <p>
              New To Netflix?{" "}
              <span
                onClick={() => {
                  setSingState("Sing Up");
                }}
              >
                Sing Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setSingState("Sing In");
                }}
              >
                Sing In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
