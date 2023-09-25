import { useEffect, useState } from "react";
import DonationListCard from "./DonationListCard";

const Donation = () => {
  const [Donations, setDonations] = useState([]);
  const [noDataFond, setNoDataFond] = useState(false);

  useEffect(() => {
    const DonationsItems = JSON.parse(localStorage.getItem("Donations"));

    if (DonationsItems) {
      setDonations(DonationsItems);
    } else {
      setNoDataFond("no data fond");
    }
  }, []);
  return (
    <div>
      {noDataFond ? (
        <p>{noDataFond}</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {Donations.map((Donation) => (
              <DonationListCard
                key={Donation.id}
                Donation={Donation}
              ></DonationListCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
