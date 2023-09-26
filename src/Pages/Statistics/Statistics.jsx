import { PieChart, Pie, Cell } from "recharts";
import { useLoaderData } from "react-router-dom";
import CommonNav from "../../Components/CommonNav/CommonNav";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [donationPrice, setDonationPrice] = useState(0);
  const [allPrice, setAllPrice] = useState(0);
  const donationPercent = ((donationPrice / allPrice) * 100).toFixed(1);
  const allPricePercent = (100 - donationPercent).toFixed(1);
  const data = [
    { name: "donate", value: donationPercent, color: "#00C49F" },
    { name: "allDonate", value: allPricePercent, color: "#FF444A" },
  ];
  // const data = [
  //   { name: "Group A", value: `${allPricePercent}` },
  //   { name: "Group B", value: `${donationPercent}` },
  // ];


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
  return (
    <div>
      <CommonNav></CommonNav>
      <div className="max-w-[1600px] mx-auto mt-[100px] mb-[172px]">
        <p>{donationPercent}</p>
        <p>{allPricePercent}</p>
        </div>
        {" "}
      <PieChart height={500} width={500}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={150}
          cy={200}
          innerRadius={50}
          outerRadius={100}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Statistics;
