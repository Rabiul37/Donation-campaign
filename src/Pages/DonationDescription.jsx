import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDescriptionCard from "./DonationDescriptionCard";

const DonationDescription = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();
  const Donations = useLoaderData();
  useEffect(() => {
    const findDonation = Donations.find((Donation) => Donation.id == id);
    setDonation(findDonation);
  }, [id, Donations]);

  return (
    <>
      <DonationDescriptionCard donation={donation}></DonationDescriptionCard>
    </>
  );
};

export default DonationDescription;
