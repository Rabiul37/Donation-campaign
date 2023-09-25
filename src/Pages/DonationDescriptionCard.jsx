import PropsTypes from "prop-types";
import swal from "sweetalert";
const DonationDescriptionCard = ({ donation }) => {
  const { id, img, title, description, price, textColor } = donation;
  const bgstyle = {
    backgroundColor: textColor,
  };

  const handleAddToDonation = () => {
    const addedDonationArry = [];
    const DonationItems = JSON.parse(localStorage.getItem("Donations"));
    if (!DonationItems) {
      addedDonationArry.push(donation);
      localStorage.setItem("Donations", JSON.stringify(addedDonationArry));
      swal("Thanks You", "Your Donation is successful", "success");
    } else {
      const isExits = DonationItems.find((Donation) => Donation.id == id);
      if (!isExits) {
        addedDonationArry.push(...DonationItems, donation);
        localStorage.setItem("Donations", JSON.stringify(addedDonationArry));
        swal("Thanks You", "Your Donation is successful", "success");
      } else {
        swal("Error", "Your already Donate here", "error");
      }
    }
  };

  return (
    <div>
      <div className="w-11/12 m-auto mt-8">
        <div className="relative">
          <img className="w-full h-[70vh] relative" src={img} alt="" />
        </div>
        <div className="bg-[#00000099] h-20 absolute bottom-[90px] w-10/12  ">
          <button
            onClick={handleAddToDonation}
            style={bgstyle}
            className="text-white inline absolute top-5 left-5 p-2 rounded font-semibold cursor-pointer"
          >
            Donation {price}
          </button>
        </div>
      </div>
      <div className="p-12">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-medium font-semibold">{description}</p>
      </div>
    </div>
  );
};

DonationDescriptionCard.propTypes = {
  donation: PropsTypes.object,
};
export default DonationDescriptionCard;
