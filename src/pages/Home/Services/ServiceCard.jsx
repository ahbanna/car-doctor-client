import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl single-service-card">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
