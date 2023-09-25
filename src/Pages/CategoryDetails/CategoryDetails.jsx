import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryDetailsCard from "./CategoryDetailsCard";

const CategoryDetails = () => {
  const [category, setCategory] = useState({});
  const {id} = useParams();
  const categoryDetails = useLoaderData();
  useEffect(()=>{
   const findCategory = categoryDetails?.find(categoryCard=> categoryCard.id == id);
    setCategory(findCategory);
  },[categoryDetails, id]);
  return (
    <div>
      <CategoryDetailsCard category={category}></CategoryDetailsCard>
    </div>
  );
};

export default CategoryDetails;