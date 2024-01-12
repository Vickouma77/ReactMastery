import React from 'react';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage2 from '../Assets/home-banner-image2.png'
import Navbar from './Navbar';
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
    return (
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
             From Kitchen to Your Doorstep
            </h1>
            <p className="primary-text">
              Unleashing Hot & Fresh Delight, your Favorite dish delivered Piping Hot & Bursting with Freshness!
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage2} alt="" />
          </div>
        </div>
      </div>
    );
  };
 
export default Home;

