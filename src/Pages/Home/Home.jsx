import { useLoaderData } from "react-router-dom";
import CategoryItems from "../../Components/CategoryItems/CategoryItems";
import Navbar from "../../Components/Header/Navbar/Navbar";
import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState(null);
  const [filterData, setFilterData] = useState([]);
  const categories = useLoaderData();
  let [forAllData, setForAllData] = useState(categories);
  let forSearch = categories;

  const handleSearchData = (data) => {
    const getData = data.toLowerCase();
    setSearch(getData);
    setForAllData(null);
  };

  useEffect(() => {
    const searchItem = forSearch.filter(
      (categoryItem) => categoryItem.category.toLowerCase() == search
    );
    setFilterData(searchItem);
  }, [forSearch, search]);

  return (
    <div>
      <Navbar handleSearch={handleSearchData}></Navbar>
      <div className="max-w-[1600px] mx-auto">
        <CategoryItems
          Categories={forAllData}
          filterData={filterData}
        ></CategoryItems>
      </div>
    </div>
  );
};

export default Home;
