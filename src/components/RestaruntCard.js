const RestaruntCard = (props) => {
  const { name, price, rating, imgId } = props;

  return (
    <div className="res-card">
      <img
        alt="item-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgId} `}
      />
      <h1>{name}</h1>
      {/* <h4>{subTitle}</h4> */}
      <p className="rating">Rating: {rating}</p>
      <p className="price-info">Price: {price} for two</p>
      {/* <p className="time-info">{time}</p> */}
    </div>
  );
};
export default RestaruntCard;
