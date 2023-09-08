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
import { useSelector } from "react-redux";
import haversine from "haversine-distance";

function ProductCard({ data }) {
  const { userGeoLocation } = useSelector((state) => state.globalReducer);

  const a = {
    latitude: data?.lat,
    longitude: data?.lon,
  };
  const b = {
    latitude: userGeoLocation?.lat,
    longitude: userGeoLocation?.lng,
  };

  let distance = haversine(a, b).toFixed(0);

  return (
    <Link to={`/product-detail/${data?.oid}`}>
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
            {distance && <div className="distance">{`${distance} km`}</div>}
          </div>
          <div className="rit">
            {data?.address && (
              <div className="address">
                <LocationIcon />
                {data?.address}
              </div>
            )}
          </div>
        </div>
        <div className="card-content">
          <div className="card-title ellipsis-1">{data?.name}</div>
          <div className="text ellipsis-2">{data?.description}</div>
        </div>
        <div className="card-ftr">
          <div className="user-blk">
            <div
              className="dp"
              style={{ backgroundImage: `url(/images/user.png)` }}
            />
            <div className="meta">
              {(data?.first_name || data?.last_name) && (
                <div className="name">{`${data?.first_name} ${data?.last_name}`}</div>
              )}
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
