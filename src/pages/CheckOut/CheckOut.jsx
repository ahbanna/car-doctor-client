import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, description } = service;

  return (
    <div>
      <h2>This is checkout</h2>
      <p>Title: {title}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <form>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
