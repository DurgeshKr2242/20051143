"use client";
import { useGlobalStateContext } from "@/context/StateContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";

const TableComponent = () => {
  const { setIsLoading } = useGlobalStateContext();

  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("http://localhost:8888/api/train");

        console.log(res.data.data);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const convertTo24Hour = (depTime) => {
    const departureTime = new Date();
    departureTime.setHours(depTime.Hours, depTime.Minutes, depTime.Seconds);

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
    <div className="flex flex-col items-center justify-start w-full h-full gap-4 py-4 drop-shadow ">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="w-full overflow-x-auto">
          <div className="inline-block min-w-full align-middle ">
            <div className="overflow-hidden">
              <table className="min-w-full text-textBlack ">
                <thead className="bg-gray-200/70 ">
                  <tr className="">
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left uppercase "
                    >
                      <div className="flex flex-col items-start justify-start">
                        <p>Name</p>
                        <p>Number</p>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold uppercase "
                    >
                      Departure Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold uppercase "
                    >
                      AC
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold uppercase "
                    >
                      Sleeper
                    </th>
                    {/* <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold uppercase rounded-r-xl"
                    >
                      Status
                    </th> */}
                  </tr>
                </thead>
                <tbody className="">
                  {data.map((item, i) => {
                    return (
                      <tr
                        key={i}
                        className={`${
                          i % 2 === 1 && "bg-gray-200/50 "
                        } group cursor-pointer`}
                        onClick={() => router.push(`/${item.trainNumber}`)}
                      >
                        <td className="px-6 py-4 text-sm text-center whitespace-nowrap ">
                          <div className="flex flex-col items-start justify-start">
                            <p className="text-xl group-hover:underline group-hover:underline-offset-2">
                              {item.trainName}
                            </p>
                            <p className="text-base font-semibold">
                              {item.trainNumber}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-center whitespace-nowrap ">
                          <div className="flex flex-col items-center justify-center">
                            <p>
                              Before Delay :{" "}
                              <span className="font-semibold">
                                {convertTo24Hour(item?.departureTime)}
                              </span>
                            </p>
                            <p className="font-medium text-red-600">
                              After Delay :{" "}
                              <span className="font-semibold">
                                {convertTo24HourAfterDelay(
                                  item?.departureTime,
                                  item?.delayedBy
                                )}
                              </span>
                            </p>
                          </div>

                          {/* {convertTo24Hour(item.departureTime)} */}
                        </td>
                        <td className="px-6 py-4 text-sm text-center whitespace-nowrap ">
                          {item.seatsAvailable.AC === 0 ? (
                            <p>NA</p>
                          ) : (
                            <div className="flex flex-col items-center justify-center">
                              <p>
                                <span className="text-sm font-semibold">
                                  Available:
                                </span>{" "}
                                {item.seatsAvailable.AC}
                              </p>
                              <p>
                                <span className="text-sm font-semibold">
                                  Price:
                                </span>{" "}
                                Rs {item.price.AC}
                              </p>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-center whitespace-nowrap ">
                          {item.seatsAvailable.sleeper === 0 ? (
                            <p>NA</p>
                          ) : (
                            <div className="flex flex-col items-center justify-center">
                              <p>
                                <span className="text-sm font-semibold">
                                  Available:
                                </span>{" "}
                                {item.seatsAvailable.sleeper}
                              </p>
                              <p>
                                <span className="text-sm font-semibold">
                                  Price:
                                </span>{" "}
                                Rs {item.price.sleeper}
                              </p>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
