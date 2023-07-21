import axios from "axios";
import { getTrainsDepartingIn12Hours } from "../helper/index.js";
export const getAllTrains = async (req, res) => {
  const { token_type, access_token } = req.authh;
  const config = {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  };

  console.log(config);
  try {
    const resp = await axios.get("http://20.244.56.144/train/trains", config);
    const trainsInNext12Hours = getTrainsDepartingIn12Hours(resp.data);
    res.status(200).json({ data: trainsInNext12Hours });
  } catch (err) {
    console.log(err);
  }
};

export const getTrainById = async (req, res) => {
  const { token_type, access_token } = req.authh;

  const id = req.params.id;

  const config = {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  };

  console.log(config);
  try {
    const resp = await axios.get(
      `http://20.244.56.144/train/trains/${id}`,
      config
    );
    res.json({ data: resp.data });
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};
