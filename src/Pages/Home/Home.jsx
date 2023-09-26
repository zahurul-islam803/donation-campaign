import { useLoaderData } from "react-router-dom";
import CategoryItems from "../../Components/CategoryItems/CategoryItems";
import Navbar from "../../Components/Header/Navbar/Navbar";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState(null);
  const categories = useLoaderData();
  const handleSearchData = (data) =>{
    const getData = data.toLowerCase();
    setSearch(getData);
  }
  
  return (
    <div>
      <Navbar handleSearch={handleSearchData}></Navbar>
      <div className="max-w-[1600px] mx-auto">
        <CategoryItems Categories={categories} search={search}></CategoryItems>
      </div>
    </div>
  );
};

export default Home;