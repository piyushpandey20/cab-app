import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
      {
        params: {
          rideId: props.ride._id,
          otp: otp,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      props.setConfirmRidePopupPanel(false);
      props.setRidePopupPanel(false);
      navigate("/cabdriver-riding", { state: { ride: props.ride } });
    }
  };

  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setConfirmRidePopupPanel(false);
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start
      </h3>

      <div className="flex items-center justify-between mt-4 p-3 border-2 border-yellow-400 rounded-lg">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7W9lCW-dzDW7_-Ub5UXxNiloGl6x49VPAQ&s"
            alt="driver-img"
          />
          <h2 className="text-lg font-medium capitalize">
            {props.ride?.user.fullName.firstName}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex justify-center flex-col items-center gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-5-fill"></i>
            <div>
              <h3 className="text-lg font-medium">22B/11-A</h3>
              <p className=" text-sm -mt-1 text-gray-600">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">22B/11-A</h3>
              <p className=" text-sm -mt-1 text-gray-600">
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-money-rupee-circle-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
              <p className=" text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5"
            />
            <button className="flex justify-center w-full text-lg mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg">
              Confirm
            </button>
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full mt-2 bg-red-500 text-lg text-white font-semibold p-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
