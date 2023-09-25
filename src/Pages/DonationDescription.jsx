import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDescription = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();
  const Donations = useLoaderData();
  useEffect(() => {
    const findDonation = Donations.find((Donation) => Donation.id == id);
    setDonation(findDonation);
  }, [id, Donations]);
  const { img, title, description, price, textColor } = donation;
  const bgstyle = {
    backgroundColor: textColor,
  };
  return (
    <>
      <div className="w-11/12 m-auto mt-8">
        <div className="relative">
          <img className="w-full h-[70vh] relative" src={img} alt="" />
        </div>
        <div className="bg-[#00000099] h-20 absolute bottom-[90px] w-10/12  ">
          <div
            style={bgstyle}
            className="text-white inline absolute top-5 left-5 p-2 rounded font-semibold "
          >
            Donate {price}
          </div>
        </div>
      </div>
      <div className="p-12">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-medium font-semibold">{description}</p>
      </div>
    </>
  );
};

export default DonationDescription;
