import PropTypes from "prop-types";
import CategoryCard from "./CategoryCard";

const CategoryItems = ({ Categories, search }) => {
  const searchItem = Categories.filter((categoryItem) => categoryItem.category.toLowerCase() == search);
  const displayData = Categories;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[100px] mb-[184px]">
      {displayData?.map((categoryItem) => (
        <CategoryCard
          key={categoryItem.id}
          categoryItem={categoryItem}
        ></CategoryCard>
      ))}
      {searchItem &&
        searchItem.map((categoryItem) => (
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
  search: PropTypes.string,
};
export default CategoryItems;
