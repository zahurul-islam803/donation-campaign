import { useLoaderData } from "react-router-dom";
import CategoryItems from "../../Components/CategoryItems/CategoryItems";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div className="max-w-[1600px] mx-auto">
      <CategoryItems Categories={categories}></CategoryItems>
    </div>
  );
};

export default Home;