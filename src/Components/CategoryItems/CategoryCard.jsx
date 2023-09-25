import PropTypes from "prop-types";
const CategoryCard = ({ categoryItem }) => {
  const { picture, title, category, category_bg,card_bg, text_color } =
    categoryItem || {};
  return (
    <div>
      <div style={{background: card_bg}} className="card card-compact w-[312px] h-[283px] mx-auto rounded-lg">
        <figure>
          <img src={picture} alt="category" />
        </figure>
        <div className="card-body">
          <div className="card-actions mb-2">
            <button style={{ background: category_bg, color: text_color, padding: "4px 10px", borderRadius: '4px', fontSize: '14px', fontWeight: 'medium' }}>{category}</button>
          </div>
          <p style={{ color: text_color, fontWeight: 'semibold', fontSize: '20px', marginBottom: '16px' }}>{title}</p>
        </div>
      </div>
    </div>
  );
};
CategoryCard.propTypes = {
  categoryItem: PropTypes.object,
};
export default CategoryCard;
