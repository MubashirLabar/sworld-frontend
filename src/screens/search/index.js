import React from "react";
import AuthLayout from "components/layouts/authLayout";
import SearchFilters from "./SearchFilters";
import AISearch from "./AISearch";
import SearchedItems from "./SearchedItems";

function Search() {
  return (
    <AuthLayout className="search-page">
      <div className="wrapper app-width">
        <SearchFilters />
        <AISearch />
        <SearchedItems />
      </div>
    </AuthLayout>
  );
}

export default Search;
