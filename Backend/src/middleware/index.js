import axios from "axios";

export const protect = async (req, res, next) => {
  try {
    const data = {
      companyName: "Train Booking Made Easy",
      clientID: "9c1354b6-7180-41e4-a42a-5e9cd1805215",
      ownerName: "Durgesh Kumar",
      ownerEmail: "code.durgesh@gmail.com",
      clientSecret: "NtPRViLXLCrSAZCj",
      rollNo: "20051143",
    };
    const resp = await axios.post("http://20.244.56.144/train/auth", data);
    console.log(resp.data);

    req.authh = resp.data;
    next();
    return;
  } catch (err) {
    console.log(err);
    res.status(401).json({ Message: "Error while getting the auth token" });
    return;
  }

  // try {
  //   const payload = jwt.verify(token, process.env.JWT_SECRET);
  //   req.user = payload;
  //   console.log(payload);
  //   next();
  //   return;
  // } catch (e) {
  //   console.error(e);
  //   res.status(401);
  //   res.send("Not authorized");
  //   return;
  // }
};
