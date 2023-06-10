const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");


const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  aadhar: {
    type: String,
    required: true,
    unique:true
  },
  isPanCard : {
    type : Boolean
  },
  pan: {
    type: String,
  },
  isEshram : {
    type : Boolean
   
  },
  eshram: {
    type: String,
  },
  mobile: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  familyFriends: [{
    type: String
  }],
  isBankAccount : {
    type : Boolean,
    
  },
  bankName: {
    type: String
  },
  accountNumber: {
    type: String
  },
  ifsc: {
    type: String
  },
  medicalTestFrequency: String,
  lastCheckup: Date,
  diseases: [{
    type: String,
  }],
  numberOfChildren: Number,
  needChildEducationAssistance: Boolean,
  needEmploymentSupport: Boolean,
  educationLevel: {
    type: String,
    required: true,
  },
  skillset: [{
    type: String
  }],
  interests: [{
    type: String
  }],
  eventsAttended: [{
    type: String
  }],
  eventsLiked: [{
    type: String
  }],
  community : {
    type: String,
    required: true
  },
  gender:{
    type:String,
    required:true
  },
status:{
  type:String
},
createdAt: {
    type: Date,
},
});


// static signup method

userSchema.statics.signup = async function (
  name,
  aadhar,
  isPanCard,
  pan,
  isEshram,
  eshram,
  mobile,
  dob,
  email,
  area,
  street,
  city,
  state,
  pin,
  password,
  familyFriends,
  isBankAccount,
  bankName,
  accountNumber,
  ifsc,
  medicalTestFrequency,
  lastCheckup,
  diseases,
  numberOfChildren,
  needChildEducationAssistance,
  needEmploymentSupport,
  educationLevel,
  skillset,
  interests,
  eventsAttended,
  community,
  gender,status
) {
  // validation
  if (
    !email ||
    !password ||
    !name ||
    !mobile ||
    !aadhar||
    !dob ||
    !area ||
    !city ||
    !state ||
    !pin ||
    
    !educationLevel ||
    !community ||
    !gender
  ) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ aadhar });

  if (exists) {
    throw Error("Aadhar already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({
    name,
    aadhar,
    isPanCard,
    pan,
    isEshram,
    eshram,
    mobile,
    dob,
    email,
    area,
    street,
    city,
    state,
    pin,
    password : hash,
    familyFriends,
    isBankAccount,
    bankName,
    accountNumber,
    ifsc,
    medicalTestFrequency,
    lastCheckup,
    diseases,
    numberOfChildren,
    needChildEducationAssistance,
    needEmploymentSupport,
    educationLevel,
    skillset,
    interests,
    eventsAttended,
    community,
    gender,status
  });

  return user;
};

// static login method
userSchema.statics.login = async function ( aadhar,password) {
  if (!aadhar || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ aadhar });
  if (!user) {
    throw Error("Incorrect Aadhar Number");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

userSchema.statics.forgot = async function (aadhar) {
  if (!aadhar) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ aadhar });
  if (!user) {
    throw Error("Incorrect Aadhar Number");
  }

  return user;
};

userSchema.statics.reset = async function (_id, newpassword, confirmpassword) {
  console.log("inside reset usermodel");

  if (!validator.isStrongPassword(newpassword)) {
    throw Error("Password not strong enough");
  }

  if (!newpassword || !confirmpassword) {
    throw Error("All fields must be filled");
  }
  if (newpassword !== confirmpassword) {
    throw Error("Password mismatch");
  }

  const user = await this.findOne({ _id });
  if (!user) {
    throw Error("invalid token");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newpassword, salt);

  this.findByIdAndUpdate(_id, { password: hash }, function (err, docs) {
    if (err) {
      throw Error(err.message);
    } else {
      console.log("Updated User");
    }
  });

  //  user.password
  return user;
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
