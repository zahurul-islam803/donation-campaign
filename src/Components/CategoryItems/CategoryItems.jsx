import PropTypes from "prop-types";
import CategoryCard from "./CategoryCard";

const CategoryItems = ({ Categories, filterData }) => {
  const displayData = Categories;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[100px] mb-[184px]">
      {displayData?.map((categoryItem) => (
        <CategoryCard
          key={categoryItem.id}
          categoryItem={categoryItem}
        ></CategoryCard>
      ))}
      {filterData &&
        filterData.map((categoryItem) => (
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
  filterData: PropTypes.array,
};
export default CategoryItems;
