import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CrossIcon, MenuIcon, PlusIcon, UserIcon } from "assets/icons";
import AuthModal from "modals/AuthModal";
import routes from "routes";

function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setOpenSidebar(false);
    });
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openSidebar]);

  const closeLoginModal = () => {
    setOpenLoginModal(false);
  };

  return (
    <>
      <div className="auth-layout_header">
        <div className="wrap app-width">
          <div className="ls">
            <Link to={routes.analytics} className="link">
              Advertise with us
            </Link>
            <Link to="/" className="link">
              Travel Stories
            </Link>
          </div>
          <div className="cs">
            <Link to="/" className="logo">
              <img src="/images/logo.svg" className="img" alt="logo" />
            </Link>
          </div>
          <div className="rs">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/" className="link">
              Travel Blogs
            </Link>
            <div className="actions">
              <button
                className="action"
                onClick={() => setOpenLoginModal(true)}
              >
                <UserIcon />
              </button>
              <button className="action">
                <PlusIcon />
              </button>
            </div>
            <button
              className="expend-menu-btn"
              onClick={(e) => {
                e.stopPropagation();
                setOpenSidebar(true);
              }}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for the small screens */}
      <div className={`auth_layout_sidebar ${openSidebar ? "expend" : ""}`}>
        <div className="wrapper">
          <div className="hdr">
            <div className="ls">
              <Link to="/" className="logo">
                <img src="/images/logo.svg" className="img" alt="logo" />
              </Link>
            </div>
            <div className="rs">
              <div className="actions">
                <button className="action">
                  <UserIcon />
                </button>
                <button className="action">
                  <PlusIcon />
                </button>
              </div>
              <button
                className="cross-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenSidebar(false);
                }}
              >
                <CrossIcon />
              </button>
            </div>
          </div>
          <div className="nav">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/" className="link">
              Travel Blogs
            </Link>
            <Link to={routes.analytics} className="link">
              Advertise with us
            </Link>
            <Link to="/" className="link">
              Travel Stories
            </Link>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <AuthModal open={openLoginModal} onClose={closeLoginModal} />
    </>
  );
}

export default Header;
