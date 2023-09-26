import { PieChart, Pie, Cell } from "recharts";
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

  const data = [
    { name: "donate", value: donateNum, color: "#00C49F" },
    { name: "allDonate", value: allPriceNum, color: "#FF444A" },
  ];
 


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


  const renderCustomizedLabel = ({
    cx,
    cy,
    innerRadius,
    outerRadius,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * donateNum;
    const y = cy + radius * allPriceNum;

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        
      </text>
    );
  };

  return (
    <div>
      <CommonNav></CommonNav>
      <div className="max-w-[1600px] flex flex-col justify-center items-center mx-auto mt-[50px] mb-[172px]">
        {" "}
        <PieChart height={400} width={400}>
          <Pie
            dataKey="value"
            startAngle={360}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            label={renderCustomizedLabel}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <div className="flex flex-col md:flex-row gap-14 mt-0 mx-auto">
          <p className="text-lg text-[#0B0B0B]">
            Your Donation:{" "}
            <span className="bg-[#00C49F] text-white rounded-lg px-5 py-2">
              {donateNum}
            </span>
          </p>
          <p className="text-lg text-[#0B0B0B]">
            Total Donation:{" "}
            <span className="bg-[#FF444A] text-white rounded-lg px-5 py-2">
              {allPriceNum}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
