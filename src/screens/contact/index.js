import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon3,
  MessageIcon,
  PhoneIcon,
  TwitterIcon,
} from "assets/icons";
import AuthLayout from "components/layouts/authLayout";
import React from "react";
import AboutOption from "./aboutOption";

function Contact() {
  const socialLinks = [
    {
      label: "Facebook",
      link: "/",
      icon: <FacebookIcon />,
    },
    {
      label: "Twitter",
      link: "/",
      icon: <TwitterIcon />,
    },
    {
      label: "Instagram",
      link: "/",
      icon: <InstagramIcon />,
    },
    {
      label: "LinkedIn",
      link: "/",
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <AuthLayout className="contact-page">
      <div className="wrapper app-width">
        <div className="headline">
          <div className="title">Contact Us</div>
          <div className="text">
            Any question, request or suggestion? Let us know what you think with
            a message.
          </div>
        </div>
        <div className="content">
          <div className="ls">
            <img
              src="/images/line-top-left-contact.webp"
              alt=""
              className="top-left-line"
            />
            <div className="contact-info">
              <div className="hdr">
                {socialLinks.map((item, index) => (
                  <div key={index} className="link">
                    {item.icon}
                  </div>
                ))}
              </div>
              <div className="block">
                <div className="meta">
                  <div className="label">Contact Information</div>
                  <div className="text">
                    Hi, Please contact me by using the below information for the
                    detailed meeting.
                  </div>
                </div>
                <div className="info">
                  <div className="item">
                    <PhoneIcon />
                    +92 3080059035
                  </div>
                  <div className="item">
                    <MessageIcon />
                    mubashirnazir115@gmail.com
                  </div>
                  <div className="item">
                    <LocationIcon3 />
                    Italy, xxx
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rs">
            <div className="text">
              As soon as we receive the message, the team will get in touch with
              you
            </div>
            <div className="contact-form">
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
                <div className="field-control">
                  <div className="field">
                    <input
                      type="text"
                      className="input"
                      placeholder="Phone number"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="about-block">
                <div className="label">What are you contacting us about?</div>
                <div className="options">
                  {[...Array(6)].map((_, index) => (
                    <AboutOption key={index} />
                  ))}
                </div>
                <div className="field-control">
                  <div className="field">
                    <textarea
                      type="text"
                      className="input textarea"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="form-ftr">
                <button className="action">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Contact;
