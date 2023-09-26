import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
const DonationCard = ({ Donation }) => {
  const {
    id,
    img,
    category,
    title,
    cardBackgroundColor,
    categoryBackgroundColor,
    textColor,
  } = Donation;
  const bgStyle = {
    backgroundColor: cardBackgroundColor,
    color: textColor,
  };
  const categoryBgStyle = {
    backgroundColor: categoryBackgroundColor,
  };
  return (
    <>
      <Link to={`/Home/${id}`}>
        <div
          style={bgStyle}
          className="card card-compact w-56 lg:w-60 shadow-xl {`bg-${cardBackgroundColor}-600`}"
        >
          <figure>
            <img className="w-full" src={img} />
          </figure>
          <div className="m-3">
            <h2
              style={categoryBgStyle}
              className="inline p-2 rounded font-semibold"
            >
              {category}
            </h2>
            <h2 className="card-title mt-3">{title}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

DonationCard.propTypes = {
  Donation: PropsTypes.object,
};
export default DonationCard;
