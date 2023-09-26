import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Home/Banner";
import DonationCard from "../Components/Home/DonationCard";

const Home = () => {
  const Donations = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="mt-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Donations.map((Donation) => (
          <DonationCard key={Donation.id} Donation={Donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
