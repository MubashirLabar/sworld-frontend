import { useState } from "react";
import { CopyIcon, SearchIcon } from "assets/icons";
import { Range, getTrackBackground } from "react-range";

function DeveloperCard() {
  const [selectedType, setSelectedType] = useState();
  const range = {
    min: 0,
    max: 500,
  };
  const [selectedDistance, setSelectedDistance] = useState(200);
  return (
    <div className="developer-card">
      <div className="lit">
        <div
          className="banner"
          style={{ backgroundImage: `url(/images/banner.webp)` }}
        />
        <div className="filters">
          <div className="search-field">
            <div className="field">
              <input
                placeholder="Ask to our Artificial Intelligence"
                className="input"
              />
              <button className="search-btn">
                <SearchIcon />
              </button>
            </div>
          </div>
          <div className="distance-blk">
            <div className="tit">Distance</div>
            <div className="range-selector">
              <div className="range-hdr">
                <div className="lbl">
                  Min <span>(km)</span>
                </div>
                <div className="lbl">
                  Max <span>(km)</span>
                </div>
              </div>
              <Range
                step={1}
                min={range.min}
                max={range.max}
                values={[selectedDistance || 0]}
                onChange={(values) => setSelectedDistance(values[0])}
                renderTrack={({ props, isDragged, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "3px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values: [selectedDistance || 0],
                        colors: ["#61b4e6", "#D9D9D9"],
                        min: range.min,
                        max: range.max,
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "14px",
                      width: "14px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                    }}
                  />
                )}
              />
              <div className="range-ftr">
                <div className="val">{selectedDistance}</div>
                <div className="val">{range.max}</div>
              </div>
              <div className="btns">
                <button className="btn">Done</button>
                <button className="btn transparent">Use Position</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rit">
        <div className="title">Searching Geolocation</div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="code-blk">
          <span>CODE GOES HERE</span>
        </div>
        <div className="actions">
          <button className="action">
            Code <CopyIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeveloperCard;
