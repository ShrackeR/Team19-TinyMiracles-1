require('dotenv').config()
const cors = require("cors");
const express = require('express')
const mongoose = require('mongoose')
// const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const eventRoutes = require('./routes/event')
const adminRoutes = require("./routes/admin");
const detailRoutes = require("./routes/details");

// const appointmentRoutes = require('./routes/appointment')
// const healthRoutes = require('./routes/healthroutes');
// const Workout = require('./models/workoutModel')
// const Workoutnew = require('./models/workoutModel2')
// const Appointment = require('./models/appointmentModel')
// const Appointmentnew = require('./models/appointmentModelnew')
// const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");

// express app
const app = express();
mongoose.set('strictQuery', true);
app.use(cors());
// 

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
// app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)
app.use('/api/event',eventRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/details',detailRoutes)
// app.use('/api/appointmentt',adminRoutes)
// app.use('/api/doctor', appointmentRoutes)
// app.use('/h', healthRoutes);
// app.use("/api/products", productRoute);
// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);
// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
