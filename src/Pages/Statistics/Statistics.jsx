import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import CommonNav from "../../Components/CommonNav/CommonNav";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [donationPrice, setDonationPrice] = useState(0);
  const [allPrice, setAllPrice] = useState(0);
  const donationPercent = ((donationPrice / allPrice) * 100).toFixed(1);
  const allPricePercent = (100 - donationPercent).toFixed(1);
  const donateNum = parseFloat(donationPercent);
  const allPriceNum = parseFloat(allPricePercent);

  const allDonationPrice = useLoaderData();
  useEffect(() => {
    const donationItemPrice = JSON.parse(localStorage.getItem("donations"));
    if (donationItemPrice) {
      const totalDonation = donationItemPrice.reduce(
        (prevValue, currentValue) => prevValue + currentValue.price,
        0
      );
      setDonationPrice(totalDonation);
    }
    const getAllPrice = allDonationPrice?.reduce(
      (preValue, currentValue) => preValue + currentValue.price,
      0
    );
    setAllPrice(getAllPrice);
  }, [allDonationPrice]);

  const data = [
    ["Donate", "Donation Count"],
    ["Your Donation", donateNum],
    ["Total Donation", allPriceNum],
  ];

  return (
    <div>
      <CommonNav></CommonNav>
      <div className="max-w-[1600px] flex justify-center items-center mx-auto mt-[50px] mb-[172px]">
        <Chart
          chartType="PieChart"
          data={data}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default Statistics;
