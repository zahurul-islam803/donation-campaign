import { useEffect, useState } from "react";
import CommonNav from "../../Components/CommonNav/CommonNav";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [hiddenBtn, setHiddenBtn] = useState(false);

  useEffect(()=>{
    const getDonationItems = JSON.parse(localStorage.getItem('donations'));
    if(getDonationItems){
      setDonations(getDonationItems);
      const totalDonation = getDonationItems.reduce((prevValue, currentValue)=> prevValue + currentValue, 0);
      setTotalPrice(totalDonation);
    }
  },[]);
  const handleToShowAll = () =>{
    setIsShow(!isShow);
    setHiddenBtn(!hiddenBtn);

  }
  return (
    <div className="mb-[150px]">
      <CommonNav></CommonNav>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1600px] mx-auto mt-20">
        {isShow
          ? donations?.map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
              ></DonationCard>
            ))
          : donations
              .slice(0, 4)
              .map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}
                ></DonationCard>
              ))}
      </div>
      {!hiddenBtn && (
        <div>
          {donations.length > 4 && (
            <button
              onClick={handleToShowAll}
              className="bg-[#009444] text-white block mx-auto mt-10 py-[14px] px-7 font-semibold rounded-lg"
            >
              See All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;           