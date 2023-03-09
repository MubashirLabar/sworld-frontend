import { ArrowRightIcon } from "assets/icons";
import Checkbox from "components/atoms/Checkbox";
import { useState } from "react";

function SignUp({ onClose, setActiveTab }) {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [isNewsletter, setIsNewsletter] = useState(false);

  return (
    <div className="modal-container">
      <div className="inner-hdr">
        <div className="title">Sign Up</div>
        <img src="/images/logo.svg" alt="logo" className="logo" />
      </div>
      <div className="text">
        Use your credentials below and Sign Up and create an account
      </div>
      <div className="auth-form">
        <div className="field-row">
          <div className="field-control">
            <div className="field">
              <input
                type="text"
                className="input"
                placeholder="First name"
              ></input>
            </div>
          </div>
          <div className="field-control">
            <div className="field">
              <input
                type="text"
                className="input"
                placeholder="Last name"
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
            <div className="terms">
              <label className="item">
                <Checkbox
                  className="checkbox"
                  check={agreeTerms}
                  setCheck={setAgreeTerms}
                />
                <div className="lbl">I agree Terms & Conditions</div>
              </label>
              <label className="item">
                <Checkbox
                  className="checkbox"
                  check={agreePrivacy}
                  setCheck={setAgreePrivacy}
                />
                <div className="lbl">I agree Privacy & Policy</div>
              </label>
              <label className="item">
                <Checkbox
                  className="checkbox"
                  check={isNewsletter}
                  setCheck={setIsNewsletter}
                />
                <div className="lbl">Sign to our Newsletter</div>
              </label>
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
              Already have an account?{" "}
              <button type="button" onClick={() => setActiveTab("login")}>
                Login
              </button>
            </div>
          </div>
        </div>

        <div className="form-ftr">
          <button type="submit" className="btn" onClick={onClose}>
            Sing Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
