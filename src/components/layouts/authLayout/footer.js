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

const socialLinksList = [
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

const contactLinks = [
  {
    label: "Support",
    link: routes.contact,
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
    link: routes.developer,
  },
];

const socialLinks = () => (
  <div className="social-links">
    {socialLinksList.map((item, index) => (
      <div className="item" key={index}>
        {item.icon}
      </div>
    ))}
  </div>
);

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
            <div className="social-links-lg"> {socialLinks()}</div>
          </div>
        </div>
        <div className="rs">
          <div className="block">
            <div className="app-blk">
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
                  <img
                    src="/images/iphone-14.png"
                    alt=""
                    className="iphone-14"
                  />
                  <img
                    src="/images/iphone-13.png"
                    alt=""
                    className="iphone-13"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="title">Contact</div>
            <div className="links">
              {contactLinks.map((item, index) => (
                <Link to={item.link} className="link" key={index}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="block">
            <div className="title">Services</div>
            <div className="links">
              {servicesLinks.map((item, index) => (
                <Link to={item.link} className="link" key={index}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <div className="cont app-width">
          <div className="copyright">{`© Secret World - ${date.getFullYear()}`}</div>
          <div className="links">
            <Link
              to={routes.terms}
              className="link"
              onClick={() => (document.documentElement.scrollTop = 0)}
            >
              Terms & Conditions
            </Link>
            <Link
              to={routes.privacy}
              className="link"
              onClick={() => (document.documentElement.scrollTop = 0)}
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
