import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [DonationData, setDonationData] = useState([]);
  const [dynamic, setDynamic] = useState();
  console.log(DonationData);
  console.log(dynamic);
  useEffect(() => {
    const DonationsItems = JSON.parse(localStorage.getItem("Donations"));
    setDonationData(DonationsItems.length);
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

  const COLORS = ["#FF5733", "#33FF57"];
  return (
    <div>
      <h1>This is Statistics section</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            labelLine={false}
            label={(entry) => entry.name}
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
  );
};

export default Statistics;
