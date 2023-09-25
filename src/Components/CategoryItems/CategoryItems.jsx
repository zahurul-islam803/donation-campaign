import PropTypes from "prop-types";
import CategoryCard from "./CategoryCard";
const CategoryItems = ({ Categories }) => {
  return (
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[100px] mb-[184px]">
        {Categories?.map((categoryItem) => (
          <CategoryCard
            key={categoryItem.id}
            categoryItem={categoryItem}
          ></CategoryCard>
        ))}
      </div>
    
  );
};
CategoryItems.propTypes = {
  Categories: PropTypes.array,
};
export default CategoryItems;
