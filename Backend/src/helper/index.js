export const getTrainsDepartingIn12Hours = (data) => {
  const now = new Date();
  const next12Hours = new Date(now.getTime() + 12 * 60 * 60 * 1000);

  const filteredData = data.filter((train) => {
    const departureTime = new Date(
      new Date().setHours(
        train.departureTime.Hours,
        train.departureTime.Minutes + train.delayedBy,
        train.departureTime.Seconds
      )
    );

    return departureTime <= next12Hours;
  });

  return filteredData;
};
