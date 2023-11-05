const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const communitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isPanCard : {
    type : Boolean
  },
  pan: {
    type: String,
  },
  mobile: {
    type: String,
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
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    }
},
  password: {
    type: String,
    required: true,
  },
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
createdAt: {
    type: Date,
},
});


// static signup method

communitySchema.statics.signup = async function (
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
  password,
  isBankAccount,
  bankName,
  accountNumber,
  ifsc
) {
  // validation
  if (
    !email ||
    !password ||
    !name ||
    !mobile ||
    !area ||
    !city ||
    !state ||
    !pin 
  ) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }


  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const Community = await this.create({
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
    password : hash,
    isBankAccount,
    bankName,
    accountNumber,
    ifsc
  });

  return Community;
};

// static login method
communitySchema.statics.login = async function ( pan,password) {
  if (!pan || !password) {
    throw Error("All fields must be filled");
  }

  const Community = await this.findOne({ pan });
  if (!Community) {
    throw Error("Incorrect Aadhar Number");
  }

  const match = await bcrypt.compare(password, Community.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return Community;
};

communitySchema.statics.forgot = async function (pan) {
  if (!pan) {
    throw Error("All fields must be filled");
  }
  const Community = await this.findOne({ pan });
  if (!Community) {
    throw Error("Incorrect Pan Number");
  }

  return Community;
};

communitySchema.statics.reset = async function (_id, newpassword, confirmpassword) {
  console.log("inside reset Communitymodel");

  if (!validator.isStrongPassword(newpassword)) {
    throw Error("Password not strong enough");
  }

  if (!newpassword || !confirmpassword) {
    throw Error("All fields must be filled");
  }
  if (newpassword !== confirmpassword) {
    throw Error("Password mismatch");
  }

  const Community = await this.findOne({ _id });
  if (!Community) {
    throw Error("invalid token");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newpassword, salt);

  this.findByIdAndUpdate(_id, { password: hash }, function (err, docs) {
    if (err) {
      throw Error(err.message);
    } else {
      console.log("Updated Community");
    }
  });

  //  Community.password
  return Community;
};
communitySchema.index({ location: '2dsphere' });
const Community = new mongoose.model("Community", communitySchema);
module.exports = Community;