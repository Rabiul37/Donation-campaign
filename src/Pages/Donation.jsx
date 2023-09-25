import { useEffect, useState } from "react";
import DonationListCard from "./DonationListCard";

const Donation = () => {
  const [Donations, setDonations] = useState([]);
  const [noDataFond, setNoDataFond] = useState(false);
  const [isShow, setisShow] = useState(false);
  console.log(isShow);
  useEffect(() => {
    const DonationsItems = JSON.parse(localStorage.getItem("Donations"));

    if (DonationsItems) {
      setDonations(DonationsItems);
    } else {
      setNoDataFond("No data fond");
    }
  }, []);
  return (
    <div>
      {noDataFond ? (
        <p className=" h-[80vh] flex justify-center items-center text-3xl font-bold text-red-600">
          {noDataFond}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {isShow
              ? Donations.map((Donation) => (
                  <DonationListCard
                    key={Donation.id}
                    Donation={Donation}
                  ></DonationListCard>
                ))
              : Donations.slice(0, 2).map((Donation) => (
                  <DonationListCard
                    key={Donation.id}
                    Donation={Donation}
                  ></DonationListCard>
                ))}
          </div>
          {Donations.length > 2 && (
            <button
              className="mt-8 text-xl text-white font-medium bg-orange-500 p-2 rounded block mx-auto"
              onClick={() => setisShow(!isShow)}
            >
              {isShow ? "See Less" : "See More "}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
