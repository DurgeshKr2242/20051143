"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
const SingleTrain = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [data, setData] = useState({});

  useEffect(() => {
    const getSingleTrainData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8888/api/train${pathname}`
        );
        console.log(`http://localhost:8888/api/train${pathname}`);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleTrainData();
  }, []);

  const convertTo24Hour = (depTime) => {
    const departureTime = new Date();
    departureTime.setHours(depTime?.Hours, depTime?.Minutes, depTime?.Seconds);

    const timeString = departureTime.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeString;
  };
  const convertTo24HourAfterDelay = (depTime, delay) => {
    const departureTime = new Date();
    departureTime.setHours(depTime?.Hours, depTime?.Minutes, depTime?.Seconds);

    const delayInMinutes = delay;
    const adjustedDepartureTime = new Date(
      departureTime.getTime() - delayInMinutes * 60 * 1000
    );

    const timeString = adjustedDepartureTime.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return timeString;
  };
  return (
    <main className="flex items-start justify-center w-screen min-h-screen pt-20">
      <div className="flex flex-col items-start justify-start w-full max-w-6xl p-2">
        {/*  */}

        <div className="flex flex-col items-start justify-start w-full gap-8 p-4 bg-gray-100 rounded-md drop-shadow-md">
          <div className="flex flex-col items-center justify-between w-full gap-4 tabletS:flex-row ">
            <div className="flex flex-col items-center justify-start tabletS:items-start">
              <p className="text-2xl font-medium">{data.trainName}</p>
              <p className="font-semibold">{data.trainNumber}</p>
            </div>

            <div className="flex flex-col items-start justify-start">
              <p>
                Departure Time :{" "}
                <span className="font-semibold">
                  {convertTo24Hour(data?.departureTime)}
                </span>
              </p>
              <p className="font-medium text-red-600">
                After Delay :{" "}
                <span className="font-semibold">
                  {convertTo24HourAfterDelay(
                    data?.departureTime,
                    data?.delayedBy
                  )}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col items-start justify-start">
              <p className="text-xl font-semibold">AC</p>
              <p>Seat Available: {data?.seatsAvailable?.AC}</p>
              <p>Price: {data?.price?.AC}</p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-xl font-semibold">Sleeper</p>
              <p>Seat Available: {data?.seatsAvailable?.sleeper}</p>
              <p>Price: {data?.price?.sleeper}</p>
            </div>
          </div>

          <div></div>
        </div>

        {/*  */}
      </div>
    </main>
  );
};

export default SingleTrain;
