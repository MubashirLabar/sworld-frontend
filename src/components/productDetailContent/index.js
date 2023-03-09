import { useState, useEffect } from "react";
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

function ProductDetailContent({
  data,
  showExternalButtons = false,
  showSocialButtons = false,
}) {
  const [openShareOptions, setOpenShareOptions] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setOpenShareOptions(false);
    });
  }, []);

  return (
    <div className="product-detail-content">
      <div className="section">
        <div className="hdr">
          <div className="hdr-ls">
            <div className="meta">
              <div className="name">{data.title}</div>
              <div className="rating">
                {[...Array(data.review)].map((_, index) => (
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
            {data?.address && (
              <div className="location">
                <LocationIcon />
                <span>{data.address}</span>
              </div>
            )}
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
                <div className="name">{data.user.name}</div>
                <div className="role">{data.user.role}</div>
              </div>
              <div
                className="dp"
                style={{ backgroundImage: `url(${data.user.dp})` }}
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
                <div className="stamp">{data.distance}</div>
              </div>
              <div className="item clock">
                <ClockIcon />
                <div className="lbl">Duration</div>
                <div className="stamp">{data.duration}</div>
              </div>
              <div className="item">
                <TypeIcon />
                <div className="lbl">Type</div>
                <div className="stamp">{data.type}</div>
              </div>
              <div className="item">
                <HostingIcon />
                <div className="lbl">Hosting</div>
                <div className="stamp">{data.hosting}</div>
              </div>
            </div>
            <div
              className="image"
              style={{ backgroundImage: `url(${data.poster})` }}
            />
          </div>
          <div className="rs">
            <div className="map-section">
              <div className="map-block">Google Map</div>
              <div className="ftr">
                <button className="action">View on Map</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        {data.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {/* <div className="gallery">
          <div
            className="image"
            style={{ backgroundImage: `url(/images/poster-1.webp)` }}
          />
        </div> */}
      </div>
    </div>
  );
}

export default ProductDetailContent;
