import Registration from "../models/registration.js";

export function register(req, res, next) {
  const {email, age, batch, txnID} = req.body;

  if (!!email && !!age && !!batch && !!txnID) {
    Registration.findOne({email}).then((userExists) => {
      if (userExists) {
        res.status(200).json({error: "User already exists"});
      } else {
        Registration
          .create({email, age, batch, txnID})
          .then((doc) => {
            res.status(201).json({id: doc._id, email, batch});
          });
      }
    });
  } else {
    res.status(400).json({error: "invalid inputs"});
  }
}