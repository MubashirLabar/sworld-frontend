import React, { useState } from "react";
import { ArrowUpIcon, SearchIcon, StarFillIcon } from "assets/icons";
import { Range, getTrackBackground } from "react-range";
import Categories from "./Categories";

const categories = [
  {
    label: "Monuments",
    value: "monuments",
  },
  {
    label: "Dishes",
    value: "dishes",
  },
  {
    label: "Mountain locations",
    value: "mountain-locations",
  },
  {
    label: "Museum",
    value: "museum",
  },
  {
    label: "Castles / Villas",
    value: "castles-Villas",
  },
  {
    label: "Products",
    value: "products",
  },
  {
    label: "Seaside locations",
    value: "seaside-locations",
  },
  {
    label: "Gardens",
    value: "gardens",
  },
  {
    label: "Cinematic locations",
    value: "cinematic-locations",
  },
  {
    label: "Views",
    value: "views",
  },
  {
    label: "Religious places",
    value: "religious-places",
  },
  {
    label: "Villages",
    value: "villages",
  },
  {
    label: "Historic Places",
    value: "historic-places",
  },
  {
    label: "Folklore",
    value: "folklore",
  },
  {
    label: "Wine of the World",
    value: "wine-of-the-world",
  },
  {
    label: "Trekking",
    value: "trekking",
  },
];

const types = [
  {
    label: "Stories",
    value: "stories",
  },
  {
    label: "Video",
    value: "video",
  },
];

const reviews = [
  {
    label: "One Star",
    value: 1,
  },
  {
    label: "Four Star",
    value: 4,
  },
  {
    label: "Two Star",
    value: 2,
  },
  {
    label: "Five Star",
    value: 5,
  },
  {
    label: "Three Star",
    value: 3,
  },
];

function SearchFilters() {
  const [expendFilters, setExpendFilters] = useState(false);
  const [selectedType, setSelectedType] = useState();
  const range = {
    min: 0,
    max: 500,
  };
  const [selectedDistance, setSelectedDistance] = useState(200);

  const handleType = (value) => {
    setSelectedType(value);
  };

  return (
    <div className="search-filters-section">
      <div className="search-field">
        <div className="field">
          <input
            type="text"
            placeholder={`Where would you like to go near the "Colosseum"?`}
            className="input"
          />
        </div>
        <button className="search-btn">
          <SearchIcon />
        </button>
      </div>
      <div className="filters-block">
        <div className="hdr">
          <button
            className={`expend-filter ${expendFilters ? "expended" : ""}`}
            onClick={() => setExpendFilters(!expendFilters)}
          >
            Filters <ArrowUpIcon />
          </button>
        </div>
        {expendFilters && (
          <div className="filters-wrap">
            <div className="block">
              <div className="label">Categories</div>
              <div className="category-list">
                {categories.map((category, index) => (
                  <Categories key={index} category={category} />
                ))}
              </div>
            </div>
            <div className="block">
              <div className="label">Type</div>
              <div className="types-list">
                {types.map((item, index) => (
                  <label
                    className="item"
                    key={index}
                    onClick={() => handleType(item.value)}
                  >
                    <div className="lbl">{item.label}</div>
                    <div
                      className={`checkbox ${
                        selectedType === item.value ? "active" : ""
                      }`}
                    ></div>
                  </label>
                ))}
              </div>
            </div>
            <div className="block">
              <div className="label">Distance</div>
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
            <div className="block">
              <div className="label">Reviews</div>
              <div className="reviews-list">
                {reviews.map((item, index) => (
                  <label className="item" key={index}>
                    <div className="stars-list">
                      {[...Array(item.value)].map((_, idx) => (
                        <div key={idx} className="star">
                          <StarFillIcon />
                        </div>
                      ))}
                    </div>

                    <div className="checkbox"></div>
                  </label>
                ))}
              </div>
            </div>
            <div className="block">
              <div className="label">Duration</div>
              <div className="duration-fields">
                <div className="field">
                  <div className="lbl">
                    Min <span>(hours)</span>
                  </div>
                  <input type="number" className="input" placeholder="0" />
                </div>
                <div className="field">
                  <div className="lbl">
                    Max <span>(hours)</span>
                  </div>
                  <input type="number" className="input" placeholder="0" />
                </div>
              </div>
              <div className="btns">
                <button className="btn">Done</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchFilters;
