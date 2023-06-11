/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser, FaClock, FaUserTie } from 'react-icons/fa';
import { FaTransgender, FaMale, FaFemale } from 'react-icons/fa';


// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
// import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
// import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import { useState, useEffect } from "react";
// import { Height } from "@mui/icons-material";
// import { useAuthContext2 } from "layouts/useAuthContext2";
import { useParams } from "react-router-dom";

function Dashboard() {
  // const queryParameters = new URLSearchParams(window.location.search)
  // // console.log(queryParameters.get("token"),"queryParameters")
  // const token = queryParameters.get("token")
  // const { admin } = useAuthContext2();
  const {token,startp,endp} = useParams();
  console.log(token,startp,endp);
  let start = new Date(startp);
  let end = new Date(endp);
  console.log(start.toDateString(),end.toDateString());
  // admin.token = token;
  // let start = new Date();
  // start.setDate(start.getDate() - 5);
  // let end = new Date();
  // end.setDate(end.getDate());
  const { gradients } = colors;
  const { cardContent } = gradients;

  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [eduDone, seteduDone] = useState(0);
  const getData = async () => {
    const response = await fetch("https://miracleachievers.shreeraj.me/backend/api/details/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`

      }
    }).then((res) => res.json());
    setData(response);
    seteduDone(1);
  };
  const getEvents = async () => {
    const response = await fetch("https://miracleachievers.shreeraj.me/backend/api/event/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => res.json());
    setEvents(response);
  };

  let likes = {};
  // let expAttendance = {};
  // let actAttendance = {};
  let reviews = {};
  let attendance = {};
  events.map((item) => {
    likes[item._id] = item.likes;
    attendance[item._id] = (item.attendants.length / item.expectedAttendance) * 100;
    // reviews[item._id] = item.reviews;
  });
  // console.log("att"+Object.values(actAttendance));

  // let rows = [];
  let users = 0;
  let female = 0;
  let male = 0;
  let child = 0;
  let teen = 0;
  let adult = 0;
  let senior = 0;
  let age = 0;
  let employed = 0;
  let pan = 0;
  let eshram = 0;
  let basicDoc = 0;
  let maleEdu = new Array(8).fill(0);
  let femaleEdu = new Array(8).fill(0);
  let totalEdu = new Array(8).fill(0);
  let skills = {};
  let skillsm = {};
  let skillsf = {};
  let s;
  let nosm = 0;
  let nosf = 0;
  let nosw = 0;
  data.map((item) => {
    // console.log("date"+Date.parse(item.createdAt));
    if (Date.parse(item.createdAt) >= start && Date.parse(item.createdAt) <= end) {
      users++;
      if (item.gender == "male") male++;
      else female++;
      age = new Date().getFullYear() - new Date(item.dob).getFullYear();
      if (age <= 12) child++;
      else if (age <= 18) teen++;
      else if (age <= 60) adult++;
      else senior++;
      if (!item.needEmploymentSupport && age >= 18) employed++;
      if (item.isPanCard) pan++;
      if (item.isEshram) eshram++;
      if (item.isPanCard || item.isEshram) basicDoc++;
      if (item.educationLevel.toLowerCase() == 'nill') {
        totalEdu[0]++;
        if (item.gender == "male") maleEdu[0]++;
        else femaleEdu[0]++;
      }
      if (item.educationLevel.toLowerCase() == 'primary') {
        totalEdu[1]++;
        if (item.gender == "male") maleEdu[1]++;
        else femaleEdu[1]++;
      }
      if (item.educationLevel.toLowerCase() == 'secondary') {
        totalEdu[2]++;
        if (item.gender == "male") maleEdu[2]++;
        else femaleEdu[2]++;
      }
      if (item.educationLevel.toLowerCase() == 'higher') {
        totalEdu[3]++;
        if (item.gender == "male") maleEdu[3]++;
        else femaleEdu[3]++;
      }
      if (item.educationLevel.toLowerCase() == 'graduate') {
        totalEdu[4]++;
        if (item.gender == "male") maleEdu[4]++;
        else femaleEdu[4]++;
      }
      if (item.educationLevel.toLowerCase() == 'under graduate') {
        totalEdu[5]++;
        if (item.gender == "male") maleEdu[5]++;
        else femaleEdu[5]++;
      }
      if (item.educationLevel.toLowerCase() == 'post graduate') {
        totalEdu[6]++;
        if (item.gender == "male") maleEdu[6]++;
        else femaleEdu[6]++;
      }
      if (item.educationLevel.toLowerCase() == 'doctorate') {
        totalEdu[7]++;
        if (item.gender == "male") maleEdu[7]++;
        else femaleEdu[7]++;
      }
      if (item.skillset.length > 0) {
        nosw++;
        if (item.gender == "male") nosm++;
        else nosf++;
      }

      item.skillset.map(skill => {
        s = skill.toUpperCase();
        if (Object.keys(skills).includes(s)) {
          skills[s]++;
          if (item.gender == 'male') skillsm[s]++;
          else skillsf[s]++;
        }
        else {
          skills[s] = 1;
          if (item.gender == 'male') {
            skillsm[s] = 1;
            skillsf[s] = 0;
          }
          else {
            skillsf[s] = 1;
            skillsm[s] = 0;
          }
        }
      });
    }
  })


  let ousers = 0;
  let oemployed = 0;
  let ototalEdu = new Array(8).fill(0);
  let onosw = 0;
  let oadult = 0;
  data.map((item) => {
    if (Date.parse(item.createdAt) < start) {
      ousers++;
      if (!item.needEmploymentSupport && age >= 18) oemployed++;
      age = new Date().getFullYear() - new Date(item.dob).getFullYear();
      if (age >= 18) oadult++;
      if (item.educationLevel.toLowerCase() == 'nill') {
        ototalEdu[0]++;
      }
      if (item.educationLevel.toLowerCase() == 'primary') {
        ototalEdu[1]++;
      }
      if (item.educationLevel.toLowerCase() == 'secondary') {
        ototalEdu[2]++;
      }
      if (item.educationLevel.toLowerCase() == 'higher') {
        ototalEdu[3]++;
      }
      if (item.educationLevel.toLowerCase() == 'graduate') {
        ototalEdu[4]++;
      }
      if (item.educationLevel.toLowerCase() == 'under graduate') {
        ototalEdu[5]++;
      }
      if (item.educationLevel.toLowerCase() == 'post graduate') {
        ototalEdu[6]++;
      }
      if (item.educationLevel.toLowerCase() == 'doctorate') {
        ototalEdu[7]++;
      }
      if (item.skillset.length > 0) {
        onosw++;
      }

    }
  })
  let noswChange = nosw - onosw;
  nosm = ((nosm / male) * 100).toFixed(2);
  nosw = ((nosw / users) * 100).toFixed(2);
  nosf = ((nosf / female) * 100).toFixed(2);
  let perEmployed = parseInt((employed / adult) * 100);
  let perEmployedChange = perEmployed - parseInt((oemployed / oadult) * 100);
  let perEmployedColor = perEmployedChange < 0 ? "error" : "success";
  perEmployedChange = perEmployedChange < 0 ? "" + perEmployedChange : "+" + perEmployedChange;
  let totEduNo = totalEdu.reduce((a, b) => a + b, 0);
  let totEduNoChange = totEduNo - ototalEdu.reduce((a, b) => a + b, 0);
  let totEduNoColor = totEduNoChange < 0 ? "error" : "success";
  totEduNoChange = totEduNoChange < 0 ? "" + totEduNoChange : "+" + totEduNoChange;
  let noswColor = noswChange < 0 ? "error" : "success";
  noswChange = noswChange < 0 ? "" + noswChange : "+" + noswChange;
  let newUsers = users - ousers;
  let newUserColor = newUsers < 0 ? "error" : "success";
  newUsers = newUsers < 0 ? "" + newUsers : "+" + newUsers;

  console.log(nosm + " " + nosf + " " + nosw + " " + adult + " " + male + " " + female);

  barChartOptionsDashboard["xaxis"]["categories"] = Object.keys(skills);
  let barChartDataDashboard = [

    {
      name: "No. of Male Workers",
      data: Object.values(skillsm),
    },
    {
      name: "No. of Female Workers",
      data: Object.values(skillsf),
    },
    {
      name: "No. of Total Workers",
      data: Object.values(skills),
    },
  ];

  console.log(barChartDataDashboard);
  console.log(barChartOptionsDashboard);
  const panp = pan / users * 100;
  const eshramp = eshram / users * 100;
  const basicDocp = basicDoc / users * 100;
  let lineChartDataDashboard = [
    {
      name: "Total",
      data: totalEdu,
    },
    {
      name: "Male",
      data: maleEdu,
    },
    {
      name: "Female",
      data: femaleEdu,
    },]

  useEffect(() => {
    getData();
    getEvents();
  }, []);
  console.log(data);
  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <VuiBox py={3}>
        <Card style={{ marginBottom: "1.5vw", }}>
          <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
            User Footprint
          </VuiTypography>
          <VuiBox mb={3}>
            <Grid container spacing={3} >
              <Grid item xs={12} md={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "Users Registered", fontWeight: "regular" }}
                  count={users}
                  percentage={{ color: newUserColor, text: newUsers }}
                  icon={{ color: "info", component: <FaUser size="22px" color="white" /> }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "sex ratio (Male:Female)" }}
                  count={male + " : " + female}
                  // percentage={{ color: "success", text: "+3%" }}
                  icon={{ color: "info", component: <FaTransgender size="20px" color="white" /> }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "Child:Teen:Adult:Senior" }}
                  count={child + " : " + teen + " : " + adult + " : " + senior}
                  // percentage={{ color: "error", text: "-2%" }}
                  icon={{ color: "info", component: <FaClock size="20px" color="white" /> }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "Employment Rate" }}
                  count={perEmployed + "%"}
                  percentage={{ color: perEmployedColor, text: perEmployedChange + "%" }}
                  icon={{ color: "info", component: <FaUserTie size="20px" color="white" /> }}
                />
              </Grid>
            </Grid>
          </VuiBox>
        </Card>
        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={15} lg={6} xl={8}>
            <Card sx={{height: '100%'}}>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Education Profile
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color={totEduNoColor} fontWeight="bold">
                      {totEduNoChange} {totEduNoColor == "success" ? "increased" : "decreased"} {" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        after {start.toLocaleDateString()}
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox >
                    {eduDone && <LineChart sx={{height: '100%'}}
                      lineChartData={lineChartDataDashboard}
                      lineChartOptions={lineChartOptionsDashboard}
                    />}
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>

            <Grid item xs={12} lg={6} xl={4}>
              <ReferralTracking pan={panp} eshram={eshramp} basicDoc={basicDocp} />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} lg={6} xl={7}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Education Profile
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color={totEduNoColor} fontWeight="bold">
                      {totEduNoChange} {totEduNoColor == "success" ? "increased" : "decreased"} {" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        after {start.toLocaleDateString()}
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    {eduDone && <LineChart
                      lineChartData={lineChartDataDashboard}
                      lineChartOptions={lineChartOptionsDashboard}
                    />}
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid> */}
            <Grid item xs={12} lg={6} xl={12}>
              <Card>
                <VuiBox>
                  <VuiBox
                    mb="24px"
                    height="220px"
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    {eduDone && <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />}
                  </VuiBox>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Skilled Workers
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      ({noswChange}){" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        than on {start.toLocaleDateString()}
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <Grid container spacing="3vw">
                    <Grid item xs={6} md={4} lg={4}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaMale color="#fff" size="16px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Skilled Male Workers
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        {nosm}%
                      </VuiTypography>
                      <VuiProgress value={nosm} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={4} lg={4}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaFemale color="#fff" size="16px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Skilled Female Workers
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        {nosf}%
                      </VuiTypography>
                      <VuiProgress value={nosf} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={4} lg={4}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaUserTie color="#fff" size="16px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Total Skilled Workers
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        {nosw}%
                      </VuiTypography>
                      <VuiProgress value={nosw} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    {/* <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoBuild color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Items
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        320
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid> */}
                  </Grid>
                </VuiBox>
              </Card>
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6} lg={8}>
            {/* <Projects /> */}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {/* <OrderOverview /> */}
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
