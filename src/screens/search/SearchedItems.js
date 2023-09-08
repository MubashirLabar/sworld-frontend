import { useState, useMemo } from "react";
import ProductCard from "components/ProductCard";

function SearchedItems({ loading = false, items = [] }) {
  // const [filterText, setFilterText] = useState("");

  // const filteredItems = useMemo(() => {
  //   return items?.filter((b) => {
  //     if (b) {
  //       return b?.name?.toLowerCase().includes(filterText.toLowerCase());
  //     }
  //   });
  // }, [filterText, items]);

  return (
    <>
      {loading ? (
        <div className="searched-items-section">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="placeholder-card holder" />
          ))}
        </div>
      ) : items.length > 0 ? (
        <div className="searched-items-section">
          {items.map((item, index) => (
            <ProductCard data={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="search-not-found">
          <div className="title">Results not found.</div>
        </div>
      )}
    </>
  );
}

export default SearchedItems;
