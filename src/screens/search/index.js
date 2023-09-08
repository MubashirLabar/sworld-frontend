import { useState, useEffect } from "react";
import AuthLayout from "components/layouts/authLayout";
import SearchFilters from "./SearchFilters";
import AISearchField from "./AISearchField";
import SearchedItems from "./SearchedItems";
import { useSearchPlacesMutation } from "store/services/searchServices";

function Search() {
  const [submitSearchField, response] = useSearchPlacesMutation();
  const [searchedRecords, setSearchRecords] = useState([]);

  useEffect(() => {
    if (response?.isSuccess && response?.status === "fulfilled") {
      setSearchRecords(response?.data?.data);
    } else {
      console.log("search form response....", response?.data?.message);
    }
  }, [response?.isSuccess]);

  return (
    <AuthLayout className="search-page">
      <div className="wrapper app-width">
        <SearchFilters submitSearchField={submitSearchField} />
        <AISearchField />
        <SearchedItems loading={response?.isLoading} items={searchedRecords} />
      </div>
    </AuthLayout>
  );
}

export default Search;
