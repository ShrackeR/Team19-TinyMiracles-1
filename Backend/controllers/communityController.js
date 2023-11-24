const Community = require("../models/communityModel");
// const Register = require("../models/registerModel");
// const FeesAllotment = require("../models/feesAllotmentModel");
const { resetPassword } = require("../utils/emailTemplates");
const { sendEmail } = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
// const cloudinary = require("cloudinary").v2;
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// cloudinary.config({
//   cloud_name: "ddyiex0z8",
//   api_key: "616962189132742",
//   api_secret: "s_7ldYcshqnuvBz7PnYj8E6S9fI",
//   secure: true,
// });
// login a community
const loginCommunity = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
 

  try {
    const community = await Community.login(email, password);

    // create a token
    const token = createToken(community._id);
    const id=community._id;
    // const gender = community.gender;
    const name = community.name;
    const mobile = community.number;
    console.log(token,id,name);
    res.status(200).json({token,name,id});
  } catch (error) {
    res.status(400).json({ error: error.message});
    console.log(error.message,"hi")
  }
};



const signupCommunity = async (req, res) => {
  console.log(req.body)
  const {
    name,
    isPanCard,
    pan,
    mobile,
    email,
    area,
    street,
    city,
    state,
    pin,
    location,
    password,
    isBankAccount,
    bankName,
    accountNumber,
    ifsc
  } = req.body;
  console.log(location)
  try {
    const community = await Community.signup(
        name,
        isPanCard,
        pan,
        mobile,
        email,
        area,
        street,
        city,
        state,
        pin,
        location,
        password,
        isBankAccount,
        bankName,
        accountNumber,
        ifsc
    );

    res.status(200).json({
      name,
    });
  } catch (error) {
    console.log("inside signup community catch", error.message);
    res.status(400).json({ error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { pan } = req.body;

  try {
    const community = await Community.forgot(pan);
    console.log(community,"hey");
    const newToken = jwt.sign(
      {
        _id: community._id,
      },
      process.env.JWT_RESET_PW_KEY,
      {
        expiresIn: "20m",
      }
    );
    console.log(newToken,"Hi");
    const emailTemplate = resetPassword(community.email, newToken);
    console.log("bye")
    sendEmail(emailTemplate);
    res.status(200).json({
      status: true,
      message: "Email for reset password has been sent",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const ResetPassword = async (req, res) => {
  const newToken = req.params.newToken;
  const { newpassword, confirmpassword } = req.body;
  try {
    const decoded = jwt.verify(newToken, process.env.JWT_RESET_PW_KEY);
    console.log(decoded, "inside resetpassoword in communitycontroller");

    const community = await Community.reset(decoded._id, newpassword, confirmpassword);
    res.status(200).json({
      status: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const viewAttended=async(req,res)=>{
  const {id}=req.params;
  try{

    const community=await Community.findById({_id:id});
    res.status(200).json(community);
  }catch(err){
    res.status(400).json({ error: error.message }); 
  }


}
const getcommunity=async(req,res)=>{
  try{
      const {id}=req.params;
      const community=await Community.findById({_id:id});
      res.status(200).json(community);



  }
  catch(err){
    res.status(400).json({ err: err.message }); 
  }

}


const allcommunities = async (req, res) => {

  try {
      Community.find({}).then(function (events) {
          events.map((event) => {
              event.createdAt = event._id.getTimestamp();
              // event.save();
          });
          res.send(events);
      });
      //   res.status(200).json("Success" );
  } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error.message)
  }
};


module.exports = {
  signupCommunity,
  // registerCommunity,
  loginCommunity,
  forgotPassword,
  ResetPassword,
  viewAttended,
  getcommunity,
  allcommunities
  // feesUpload,
};
