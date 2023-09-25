import PropTypes from "prop-types";
import swal from "sweetalert";
import CommonNav from "../../Components/CommonNav/CommonNav";
import './CategoryDetailsCard.css';
const CategoryDetailsCard = ({ category }) => {
  const handleToDonate = ()=>{
    const addedDonationArray = [];
    const getDonation = JSON.parse(localStorage.getItem('donations'));
    if(!getDonation){
      addedDonationArray.push(category);
      localStorage.setItem('donations', JSON.stringify(addedDonationArray));
      swal("Success", "You successfully donate", "success");
    }else{
      const isExist = getDonation.find(donation => donation.id == category.id);
      if(!isExist){
        addedDonationArray.push(...getDonation, category);
        localStorage.setItem('donations', JSON.stringify(addedDonationArray));
        swal("Success", "You successfully donate", "success");
      }else{
        swal("Oops!!", "No Duplicate", "error");
      }
    }
  }
  return (
    <div>
      <CommonNav></CommonNav>
      <div className="parent mt-[60px] mb-[122px] max-w-[1600px] mx-auto">
        <img
          className="w-[1600px] h-[600px] rounded-lg"
          src={category.picture}
          alt=""
        />
        <div className="overlay lg:w-[1600px] lg:h-[120px]">
          <button onClick={handleToDonate}
            className="btn-position"
            style={{
              background: category.text_color,
              color: "white",
              padding: "16px 26px",
              borderRadius: "4px",
              fontSize: "20px",
              fontWeight: "semibold",
            }}
          >
            Donate ${category.price}
          </button>
        </div>
        <h2 className="text-[#0B0B0B] text-[40px] font-bold mt-14 mb-6">
          {category.title}
        </h2>
        <p className="text-[#0B0B0BB2]">{category.description}</p>
      </div>
    </div>
  );
};
CategoryDetailsCard.propTypes = {
  category: PropTypes.object,
};
export default CategoryDetailsCard;
