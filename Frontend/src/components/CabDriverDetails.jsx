import React, { useContext } from "react";
import { CabDriverDataContext } from "../context/CabDriverContext";

const CabDriverDetails = () => {
  const { cabDriver } = useContext(CabDriverDataContext);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7W9lCW-dzDW7_-Ub5UXxNiloGl6x49VPAQ&s"
            alt="driver-img"
          />
          <h4 className="text-lg font-medium capitalize">
            {cabDriver.fullName.firstName + " " + cabDriver.fullName.lastName}
          </h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹200</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex items-start justify-center gap-5 p-3 bg-gray-100 rounded-xl mt-6">
        <div className="text-center">
          <i className="ri-timer-2-line text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-speed-up-line text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-booklet-line text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CabDriverDetails;
