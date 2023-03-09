import { Link } from "react-router-dom";
import {
  AppStoreIcon,
  ArrowRightIcon,
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  LinkedInIcon,
  QrIcon,
  TwitterIcon,
} from "assets/icons";
import routes from "routes";

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

const gptLinks = [
  {
    label: "Travels",
    link: "/",
  },
  {
    label: "Start Now",
    link: "/",
  },
  {
    label: "Reviews",
    link: "/",
  },
  {
    label: "FAQ",
    link: "/",
  },
];

const contactLinks = [
  {
    label: "Support",
    link: "/",
  },
  {
    label: "Terms",
    link: "/",
  },
  {
    label: "Conditions",
    link: "/",
  },
  {
    label: "FAQ",
    link: "/",
  },
];

const servicesLinks = [
  {
    label: "Partners",
    link: "/",
  },
  {
    label: "Blogs",
    link: "/",
  },
  {
    label: "Articles",
    link: "/",
  },
  {
    label: "For Developer",
    link: "/",
  },
];

function Footer() {
  const date = new Date();

  return (
    <div className="auth-layout_footer">
      <div className="wrap app-width">
        <div className="ls">
          <div className="block">
            <div className="title">About us</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="social-links">
              {socialLinks.map((item, index) => (
                <div className="item" key={index}>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rs">
          <div className="block app-blk">
            <div className="app-blk-hdr">
              <div className="tit">Try our New App Now!</div>
              <div className="icon">
                <QrIcon />
              </div>
            </div>
            <div className="app-blk-content">
              <div className="meta">
                <div className="txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                <div className="btns">
                  <button className="btn">
                    <div className="icon">
                      <GooglePlayIcon />
                    </div>
                    <div className="lbl">Google Play</div>
                    <div className="r-icon">
                      <ArrowRightIcon />
                    </div>
                  </button>
                  <button className="btn">
                    <div className="icon">
                      <AppStoreIcon />
                    </div>
                    <div className="lbl">App Store</div>
                    <div className="r-icon">
                      <ArrowRightIcon />
                    </div>
                  </button>
                </div>
              </div>
              <div className="graphic">
                <img src="/images/iphone-14.png" alt="" className="iphone-14" />
                <img src="/images/iphone-13.png" alt="" className="iphone-13" />
              </div>
            </div>
          </div>
          <div className="block">
            <div className="title">Contact</div>
            <div className="links">
              {contactLinks.map((item, index) => (
                <div className="link" key={index}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <div className="block">
            <div className="title">Services</div>
            <div className="links">
              {servicesLinks.map((item, index) => (
                <div className="link" key={index}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <div className="content app-width">
          <div className="copyright">{`© Secret World - ${date.getFullYear()}`}</div>
          <div className="links">
            <Link to={routes.terms} className="link">
              Terms & Conditions
            </Link>
            <Link to={routes.privacy} className="link">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
