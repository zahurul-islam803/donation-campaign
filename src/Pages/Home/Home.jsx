import { useLoaderData } from "react-router-dom";
import CategoryItems from "../../Components/CategoryItems/CategoryItems";
import Navbar from "../../Components/Header/Navbar/Navbar";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1600px] mx-auto">
        <CategoryItems Categories={categories}></CategoryItems>
      </div>
    </div>
  );
};

export default Home;