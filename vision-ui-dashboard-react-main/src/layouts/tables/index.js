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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiSwitch from "components/VuiSwitch";
import VuiButton from "components/VuiButton";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import BarChart from "examples/Charts/BarCharts/BarChart";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import Projects from "layouts/dashboard/components/Projects";
import LineChart from "examples/Charts/LineCharts/LineChart";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptionsEvent";
import { barDashboard } from "layouts/dashboard/data/barChartOptionsEventMonth";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import { FaThumbsUp, FaClock, FaUserTie } from 'react-icons/fa';
import { FaTransgender, FaMale, FaFemale, FaCalendarAlt } from 'react-icons/fa';
import {LuFootprints} from 'react-icons/lu';
import {AiOutlineLineChart} from 'react-icons/ai';
import GradientBorder from "examples/GradientBorder";
import borders from "assets/theme/base/borders";
import radialGradient from "assets/theme/functions/radialGradient";
import rgba from "assets/theme/functions/rgba";
import palette from "assets/theme/base/colors";
import VuiInput from "components/VuiInput";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import {useAuthContext2} from "layouts/AuthContext2";



function Function({ job, org }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="button" fontWeight="medium" color="white">
        {job}
      </VuiTypography>
      <VuiTypography variant="caption" color="text">
        {org}
      </VuiTypography>
    </VuiBox>
  );
}

function setEventStatus(id, status) {
  fetch("https://miracleachievers.shreeraj.me/backend/api/event/delete/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      enabled: status
    })
  }).then((res) => res.json());
  // window.location.reload(false);
}

function removeDuplicates(arr) {
  return arr.filter((item,
    index) => arr.indexOf(item) === index);
}

function Tables() {
  // const queryParameters = new URLSearchParams(window.location.search)
  // console.log(queryParameters.get("token"),"queryParameters")
  // const token = queryParameters.get("token")
  const {token,startp,endp} = useParams();
  let start = new Date(startp);
  let end = new Date(endp);

  // const { admin } = useAuthContext2();
  // admin.token = token;
  const [data, setData] = useState([]);
  const [eduDone, seteduDone] = useState(0);
  const [feedbacks, setFeedbacks] = useState({});
  const [surveys, setSurveys] = useState([]);
  const getFeedback = async () => {
    const response = await fetch("https://miracleachievers.shreeraj.me/backend/api/event/getallfeedback", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => res.json());
    setFeedbacks(response);
  };

  // let start = new Date();
  // start.setDate(start.getDate() - 10);
  // let end = new Date();
  // end.setDate(end.getDate());

  const getData = async () => {
    const response = await fetch("https://miracleachievers.shreeraj.me/backend/api/event/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => res.json());
    setData(response);
    seteduDone(1);
  };
  const getSurveys = async () => {
    const response = await fetch("https://miracleachievers.shreeraj.me/backend/api/event/getallsurvey", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => res.json());
    setSurveys(response);
  };

  useEffect(() => {
    getData();
    getFeedback();
    getSurveys();
  }, [data]);
  console.log(data);
  const columns = [
    { name: "name", align: "left" },
    { name: "location", align: "left" },
    { name: "start", align: "center" },
    { name: "end", align: "center" },
    { name: "tags", align: "center" },
    { name: "edit", align: "center" },
    { name: "visible", align: "center" },
  ]

  let rows = [];
  let Allattendants = [];
  let eno = new Array(12).fill(0);
  data.map((item) => {
    let d = new Date(item.start);
    eno[d.getMonth()]++;
  })

  // barChartOptionsDashboard["xaxis"]["categories"] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let barChartDataDashboard = [
    {
      name: "No. of Events",
      data: eno,
    }]
  // console.log("barChartOptionsDashboard"+barChartOptionsDashboard["xaxis"]["categories"]);
    
  let effective = [];
  let c;
  let o = 0;
  let s;
  data.map((item) => {
    c = 0;
    if (Object.keys(item).includes("expectedAnswer")) {
      if (item.expectedAnswer == "YES" || item.expectedAnswer == "NO") {
        item.survey.map((survey) => {
          console.log(feedbacks, "survey", survey);
          s = surveys.filter(obj => {
            return obj._id == survey
          })[0];
          if (typeof s == "object") {
            c++;
            if (s.answer && item.expectedAnswer == "YES") {
              o += 1;
            } else if (!s.answer && item.expectedAnswer == "NO") {
              o += 1;
            }
          }
        })
        if (!c == 0) 
        effective.push((o / c) * 100);
        else
        effective.push(0);
      }
      
    }

  })
  console.log(effective, "effective");
  let effectPer = ((effective.reduce((partialSum, a) => partialSum + a, 0) / effective.length)).toFixed(1);
  // let tagsOptions = Object.assign({},barChartOptionsDashboard) ;
  let fc = 0;
  let tags = {};
  data.map((item) => {
    if (Date.parse(item.createdAt) >= start && Date.parse(item.createdAt) <= end) {
      fc++;
      // attendants.concat(item.attendants);
      item.attendants.map((attendant) => {
        if (!Allattendants.includes(attendant))
          Allattendants.push(attendant);
      })
      if (item.tag != "" && item.tag != undefined) {
        if (Object.keys(tags).includes(item.tag))
          tags[item.tag]++;
        else
          tags[item.tag] = 1;
      }
      rows.push({
        name: <Function job={item.title} org={item.description.slice(0, 20) + "..."} />,
        location: <VuiTypography variant="button" fontWeight="medium" color="white">
          {item.location}
        </VuiTypography>,
        start: new Date(item.start).toLocaleString('hi-IN').toUpperCase(),
        end: new Date(item.end).toLocaleString('hi-IN').toUpperCase(),
        tags: <VuiBox
          sx={{
            display: "inline-block",
            borderRadius: "4px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            px: "8px",
            py: "4px",
            mr: "4px",
            mb: "4px",
          }}
        >
          <VuiTypography variant="caption" color="white">
            {item.tag}
          </VuiTypography>
        </VuiBox>,
        visible: <VuiSwitch color="info" id={item._id} checked={item.enabled} onChange={() => { setEventStatus(item._id, !item.enabled); console.log("this:" + item.enabled); item.enabled = !item.enabled; }} />,
        edit: <VuiButton variant="text" color="text" onClick={() => { window.open("http://localhost:3001/editEvent/" + item._id) }} >
          <Icon sx={{ mr: "4px" }}>edit</Icon>&nbsp;EDIT
        </VuiButton>

        // delete:
      })
    }
  })

  // tagsOptions["xaxis"]["categories"] = Object.keys(tags);
  let tagData = [
    {
      name: "No. of Beneficieries",
      data: Object.values(tags),
    }]
  console.log("tags", Object.keys(tags))
  barChartOptionsDashboard["xaxis"]["categories"] = Object.keys(tags);
  console.log("attendants" + Allattendants);
  console.log("fc" + fc);
  let oattend = [];
  let bc = 0;
  data.map((item) => {
    if (Date.parse(item.createdAt) < start) {
      bc++;
      // oattend.concat(item.attendants);
      item.attendants.map((attendant) => {
        if (!oattend.includes(attendant))
          oattend.push(attendant);
      })
    }
  })
  let totFoot = Allattendants.length;
  console.log("totFoot" + totFoot);
  let avgFoot = (Allattendants.length / fc).toFixed(1);
  // let totFootChange = totFoot - oattend.length;
  // let avgFootChange = oattend.length / bc;
  // let newUserColor = totFootChange > 0 ? "success" : "error";
  // totFootChange = totFootChange > 0 ? "+"  : ""+ totFootChange;
  // avgFootChange = avgFootChange > 0 ? "+"  : "" + avgFootChange;
  // let Eventchange = fc-bc;



  let fno = 0;
  console.log("feedbacks" + Object.values(feedbacks));
  Object.values(feedbacks).map((item) => {
    if (Date.parse(item.createdAt) >= start && Date.parse(item.createdAt) <= end) {
      fno++;
    }
    // fno++;
  })
  // const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      
      <Card >
        <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
        
      {/* <input type="date" id="start" value={start} /> */}
          Event Footprint
        </VuiTypography>
        <VuiBox mb={3}>
          <Grid container spacing={3} >
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Footfall (Total/Avg.)", fontWeight: "regular" }}
                count={totFoot + " / " + avgFoot}
                // percentage={{ color: newUserColor, text: totFootChange+" / "+avgFootChange }}
                icon={{ color: "info", component: <LuFootprints size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Events" }}
                count={fc}
                // percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: <FaCalendarAlt size="20px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Feedbacks" }}
                count={fno}
                // percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: <FaThumbsUp size="20px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "Overall Impact" }}
                  count={effectPer + "%"}
                  // percentage={{ color: perEmployedColor, text: perEmployedChange + "%" }}
                  icon={{ color: "info", component: <AiOutlineLineChart size="20px" color="white" /> }}
                />
              </Grid>
          </Grid>
        </VuiBox>
      </Card>
      <VuiBox py={3}>
        {/* <VuiBox mb={3}> */}
          {/* <Card> */}
            {/* <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
              <VuiTypography variant="lg" color="white">
                All Events
              </VuiTypography>
            </VuiBox> */}
            {/* <VuiBox
              sx={{
                "& th": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                      `${borderWidth[1]} solid ${grey[700]}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </VuiBox> */}
          {/* </Card> */}
        {/* </VuiBox> */}
        {/* <Projects /> */}
        {Projects(token,startp,endp)}
        {/* <Card>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center">
            <VuiTypography variant="lg" color="white">
              Projects table
            </VuiTypography>
          </VuiBox>
          <VuiBox
            sx={{
              "& th": {
                borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                  `${borderWidth[1]} solid ${grey[700]}`,
              },
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </VuiBox>
        </Card> */}<Grid container spacing="18px">
        <Grid item xs={12} lg={6} xl={8} style={{ marginTop: "1.5vw" }}>
          <Card style={{ Height: "" }}>
            <VuiTypography color="white" variant="lg" mb="6px" gutterBottom>
              Monthly Distribution of Events
            </VuiTypography>
            {eduDone && <BarChart
              barChartData={barChartDataDashboard}
              barChartOptions={barDashboard}
            />}
          </Card>
          </Grid>
          <Grid item xs={12} lg={6} xl={4} style={{ marginTop: "1.5vw" }}>
          <Card style={{ Height: ""}}>
            <VuiTypography color="white" variant="lg" mb="6px" gutterBottom>
              Category wise number of Beneficieries
            </VuiTypography>
            {eduDone && <BarChart
              barChartData={tagData}
              barChartOptions={barChartOptionsDashboard}
            />}
          </Card>
        </Grid>
        </Grid>
      </VuiBox>
      
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
