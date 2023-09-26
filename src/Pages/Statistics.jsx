import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [DonationData, setDonationData] = useState([]);
  const [dynamic, setDynamic] = useState();
  console.log(DonationData);
  console.log(dynamic);
  useEffect(() => {
    const DonationsItems = JSON.parse(localStorage.getItem("Donations"));
    if (DonationsItems) {
      setDonationData(DonationsItems.length);
    } else {
      <h1>You do not Donate yet</h1>;
    }
  }, []);

  useEffect(() => {
    const totalDonate = (100 / 12) * DonationData;
    setDynamic(totalDonate);
  }, [DonationData]);

  // const restDonate = 100 - totalDonate;
  const data = [
    { name: "Total Donate", value: dynamic },
    { name: "Rest Donate", value: 100 - dynamic },
  ];

  const COLORS = ["#86B049", "#FF5733"];
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-5">
        Your Donation Details
      </h1>
      <div>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="40%"
              outerRadius={120}
              labelLine={true}
              label={(entry) => entry.value.toFixed(1) + "%"}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-10 -mt-28">
        <div className="flex items-center gap-1">
          {" "}
          <p className="w-16 h-5 bg-[#86B049]"></p>
          <span className="text-xl font-semibold">Total Donate</span>
        </div>
        <div className="flex items-center gap-1">
          {" "}
          <p className="w-16 h-5 bg-[#FF5733]"></p>
          <span className="text-xl font-semibold">Rest Donate</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
