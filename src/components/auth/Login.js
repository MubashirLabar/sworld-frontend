import { ArrowRightIcon } from "assets/icons";

function Login({ onClose, setActiveTab }) {
  return (
    <div className="auth-container">
      <div className="inner-hdr">
        <div className="title">Login</div>
        <img src="/images/logo.svg" alt="logo" className="logo" />
      </div>
      <div className="text">
        Use your credentials below and Log in to your account
      </div>
      <div className="auth-form">
        <div className="field-row">
          <div className="field-control">
            <div className="field">
              <input
                type="text"
                className="input"
                placeholder="Email address"
              ></input>
            </div>
          </div>
        </div>
        <div className="field-row">
          <div className="field-control">
            <div className="field">
              <input
                type="text"
                className="input"
                placeholder="Password"
              ></input>
            </div>
            <div className="field-ftr">
              <div className="error-msg"></div>
              <button className="forgot-btn">Forgot password?</button>
            </div>
          </div>
        </div>
        <div className="field-row">
          <div className="field-control">
            <div className="breaker">
              <div className="or">OR</div>
            </div>
            <div className="zero-btns">
              <button className="zero-btn">
                <img src="/images/google.svg" className="icon" alt="" />
                <div className="lbl">Login with your Google Account</div>
                <div className="arrow">
                  <ArrowRightIcon />
                </div>
              </button>
              <button className="zero-btn">
                <img src="/images/facebook.svg" className="icon" alt="" />
                <div className="lbl">Login with your Facebook Account</div>
                <div className="arrow">
                  <ArrowRightIcon />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="field-row">
          <div className="field-control">
            <div className="not-account">
              Don’t have an account yet?{" "}
              <button type="button" onClick={() => setActiveTab("signup")}>
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="form-ftr">
          <button type="submit" className="btn" onClick={onClose}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
