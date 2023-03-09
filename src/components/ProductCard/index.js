import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  StarFillIcon,
  TwitterIcon,
} from "assets/icons";
import ShareIcon from "assets/icons/ShareIcon";

function ProductCard() {
  return (
    <Link to="/product-detail">
      <div className="product-card">
        <div
          className="graphic"
          style={{ backgroundImage: `url(/images/colosseo.webp)` }}
        />
        <div className="statics">
          <div className="lit">
            <div className="reviews">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="star">
                  <StarFillIcon />
                </div>
              ))}
            </div>
            <div className="distance">125km</div>
          </div>
          <div className="rit">
            <div className="address">
              <LocationIcon />
              Italy, Rome
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="card-title">
            Colosseo : il più grande anfiteatro di Roma
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="card-ftr">
          <div className="user-blk">
            <div
              className="dp"
              style={{ backgroundImage: `url(/images/user.png)` }}
            />
            <div className="meta">
              <div className="name">Maria Rossi</div>
              <div className="destination">Social media manager</div>
              <div className="social-links">
                <div className="link">
                  <FacebookIcon />
                </div>
                <div className="link">
                  <TwitterIcon />
                </div>
                <div className="link">
                  <InstagramIcon />
                </div>
                <div className="link">
                  <LinkedInIcon />
                </div>
              </div>
            </div>
          </div>
          <button className="share-btn">
            <ShareIcon />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
