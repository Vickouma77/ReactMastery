import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Make it your own! Tailor your meal with options, add-ons, and special instructions. Our chefs are here to ensure your order is prepared just the way you like it.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Once you've crafted your ideal feast, proceed to the easy checkout process. Confirm your delivery details, and voilà – your order is on its way to becoming a reality. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Stay in the loop with our real-time tracking feature. Follow your meal's journey from our kitchen to your doorstep, ensuring you're ready to savor every moment",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Browse our diverse menu featuring a tantalizing array of culinary delights. From comfort classics to exotic flavors, choose the perfect meal that suits your cravings.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;