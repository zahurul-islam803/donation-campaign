import PropTypes from "prop-types";
const DonationCard = ({ donation }) => {
  const {category, title, picture,category_bg, card_bg,text_color,price  } = donation || {}
  return (
    <div>
      <div style={{ background: card_bg }} className="flex flex-row rounded">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <button
            style={{ background: category_bg, color: text_color }}
            className="mb-2 px-2 py-1 text-sm font-normal rounded"
          >
            {category}
          </button>

          <p className="mb-4 text-[#0B0B0B] text-2xl font-semibold">{title}</p>
          <p
            style={{ color: text_color }}
            className="mb-8 text-[#0B0B0B] text-2xl font-semibold"
          >
            ${price}.00
          </p>

          <button
            style={{ background: text_color }}
            className="rounded py-2 px-4 text-lg text-white font-semibold"
            type="button"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
DonationCard.propTypes = {
  donation: PropTypes.object,
};
export default DonationCard;
