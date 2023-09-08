import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import haversine from "haversine-distance";
import {
  ClockIcon,
  HostingIcon,
  LocationIcon,
  LocationIcon2,
  StarFillIcon,
  TypeIcon,
  UserIconAudio,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  ShareIcon,
} from "assets/icons";
import SharingOptions from "components/sharingOptions";
import GoogleMap from "components/GoogleMap";

function ProductDetailContent({
  data,
  showExternalButtons = false,
  showSocialButtons = false,
}) {
  const { userGeoLocation } = useSelector((state) => state.globalReducer);
  const [openShareOptions, setOpenShareOptions] = useState(false);

  const a = {
    latitude: data?.lat,
    longitude: data?.lon,
  };
  const b = {
    latitude: userGeoLocation?.lat,
    longitude: userGeoLocation?.lng,
  };

  let distance = haversine(a, b).toFixed(0);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setOpenShareOptions(false);
    });
  }, []);

  const descriptionHTML = data?.historical_descr
    ?.trimStart()
    ?.replace(/\n/g, "<br/>");

  console.log("userGeoLocation....", userGeoLocation);

  return (
    <div className="product-detail-content">
      <div className="section">
        <div className="hdr">
          <div className="hdr-ls">
            <div className="meta">
              <div className="name ellipsis-1">{data?.name || "N/A"}</div>
              <div className="rating-blk">
                <div className="rating">
                  {[...Array(data?.review)].map((_, index) => (
                    <StarFillIcon key={index} />
                  ))}
                </div>
                {showExternalButtons && (
                  <div className="external-btns">
                    <button className="btn">
                      <UserIconAudio />
                    </button>
                    <button
                      className="btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenShareOptions(true);
                      }}
                    >
                      <ShareIcon />
                      {openShareOptions && (
                        <div className="share-popup">
                          <SharingOptions />
                        </div>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="location">
              <LocationIcon />
              <span>{data?.address || "N/A"}</span>
            </div>
          </div>
          <div className="hdr-rs">
            {showSocialButtons && (
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
            )}
            <div className="user">
              <div className="meta">
                <div className="name">{`${data?.first_name} ${data?.last_name}`}</div>
                <div className="role">N/A</div>
              </div>
              <div
                className="dp"
                style={{ backgroundImage: `url(/images/user.png)` }}
              />
            </div>
          </div>
        </div>
        <div className="content-row">
          <div className="ls">
            <div className="statics">
              <div className="item">
                <LocationIcon2 />
                <div className="lbl">Distance</div>
                <div className="stamp">{`${distance}km` || "N/A"}</div>
              </div>
              <div className="item clock">
                <ClockIcon />
                <div className="lbl">Duration</div>
                <div className="stamp">N/A</div>
              </div>
              <div className="item">
                <TypeIcon />
                <div className="lbl">Type</div>
                <div className="stamp">{data?.type || "N/A"}</div>
              </div>
              <div className="item">
                <HostingIcon />
                <div className="lbl">Hosting</div>
                <div className="stamp">N/A</div>
              </div>
            </div>
            <div
              className="image"
              style={{
                backgroundImage: `url(https://sworld.co.uk/img/img/${data?.images[0]})`,
              }}
            />
          </div>
          <div className="rs">
            <div className="map-section">
              <div className="map-block">
                {userGeoLocation ? (
                  <GoogleMap geoLocation={userGeoLocation} zoom={11} />
                ) : (
                  <div className="">Map is not available</div>
                )}
              </div>
              <div className="ftr">
                <button className="action">View on Map</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: descriptionHTML }}
        className="description"
      />
      {/* <div className="gallery">
          <div
            className="image"
            style={{ backgroundImage: `url(/images/poster-1.webp)` }}
          />
        </div> */}
    </div>
  );
}

export default ProductDetailContent;
