import PropsTypes from "prop-types";
const DonationListCard = ({ Donation }) => {
  const {
    id,
    img,
    category,
    title,
    price,
    cardBackgroundColor,
    categoryBackgroundColor,
    textColor,
  } = Donation;
  const bgStyle = {
    backgroundColor: cardBackgroundColor,
  };
  const textStyle = {
    color: textColor,
  };
  const textBg = {
    backgroundColor: textColor,
  };
  const categoryBgStyle = {
    backgroundColor: categoryBackgroundColor,
  };
  return (
    <>
      <div style={bgStyle} className="flex rounded">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Movie" />
          </figure>
        </div>
        <div className="m-3">
          <h2
            style={categoryBgStyle}
            className="inline p-2 rounded font-semibold mt-3"
          >
            {category}
          </h2>
          <h2 className="card-title text-2xl font-bold mt-3">{title}</h2>
          <h2 style={textStyle} className="text-xl font-semibold mt-3">
            {price}
          </h2>
          <button
            style={textBg}
            className="text-white p-3 font-medium rounded mt-3"
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

DonationListCard.propTypes = {
  Donation: PropsTypes.object,
};
export default DonationListCard;
