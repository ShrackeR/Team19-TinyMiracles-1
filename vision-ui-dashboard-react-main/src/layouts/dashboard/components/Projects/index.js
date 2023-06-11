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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCheckCircleFill } from "react-icons/bs";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import data from "layouts/dashboard/components/Projects/data";
import StarRatings from 'react-star-ratings';
import { useEffect } from "react";
import Input from "assets/theme/components/form/input";
import { useParams } from "react-router-dom";
// import { useAuthContext2 } from "layouts/AuthContext2";

function compareAttend(a, b) {
  let aa = (a.attendants.length / a.expectedAttendance) * 100
  let bb = (b.attendants.length / b.expectedAttendance) * 100
  if (aa > bb)
    return -1;
  if (aa < bb)
    return 1;
  return 0;
}

function compareRating(a, b) {
  if (a.rating > b.rating)
    return -1;
  if (a.rating < b.rating)
    return 1;
  return 0;
}
function compareSurvey(a, b) {
  if (a.surveyRating > b.surveyRating)
    return -1;
  if (a.surveyRating < b.surveyRating)
    return 1;
  return 0;
}

function compareLikes(a, b) {
  if (a.likes > b.likes)
    return -1;
  if (a.likes < b.likes)
    return 1;
  return 0;
}





function Projects(token,startp,endp) {
  // const queryParameters = new URLSearchParams(window.location.search)
  // // console.log(queryParameters.get("token"),"queryParameters")
  // const token = queryParameters.get("token")
  
  // const { admin } = useAuthContext2();
  // admin.token = token;
  // const { columns, rows } = data();
  let start = new Date(startp);
  let end = new Date(endp);
  console.log(token,typeof(start),end,"tokenProjects")

  const [menu, setMenu] = useState(null);
  const [events, setEvents] = useState([]);
  const [ratings, setRatings] = useState({});
  const [feedbacks, setFeedbacks] = useState([]);
  const [sortType, setSort] = useState('attend');
  const [topNo, setTopNo] = useState(6);

  // const setTopNoHandler = (e) => {
  //   setTopNo(e.target.value);
  // }
  // const {token} = useParams('');
  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const getEvents = async () => {
    const response = await fetch("https://miracleachievers.shreeraj.me/backend/api/event/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdjYmI1NTgxY2U1YWE0MTcwZjgzYjgiLCJpYXQiOjE2ODY1MTgxMTYsImV4cCI6MTY4Njc3NzMxNn0.ifA7y_zNUlJr_UQZtWR1G6BCDMUIcj6LaBHAvla5Wl0`
      }
    }).then((res) => res.json());
    setEvents(response);
  };

  const getRatings = async () => {
    const response = await fetch("https://miracleachievers.shreeraj.me/backend/api/event/ratings", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdjYmI1NTgxY2U1YWE0MTcwZjgzYjgiLCJpYXQiOjE2ODY1MTgxMTYsImV4cCI6MTY4Njc3NzMxNn0.ifA7y_zNUlJr_UQZtWR1G6BCDMUIcj6LaBHAvla5Wl0`
      }
    }).then((res) => res.json());
    setRatings(response);
  };

  const getFeedback = async () => {
    const response = await fetch("https://miracleachievers.shreeraj.me/backend/api/event/getallsurvey", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdjYmI1NTgxY2U1YWE0MTcwZjgzYjgiLCJpYXQiOjE2ODY1MTgxMTYsImV4cCI6MTY4Njc3NzMxNn0.ifA7y_zNUlJr_UQZtWR1G6BCDMUIcj6LaBHAvla5Wl0`
      }
    }).then((res) => res.json());
    setFeedbacks(response);
  };

  let likes = {};
  let reviews = {};
  let attendance = {};
  events.map((item) => {
    likes[item._id] = item.likes;
    console.log("attendants" + item.expectedAttendance);
    attendance[item._id] = (item.attendants.length / item.expectedAttendance) * 100;
    // expAttendance[item._id] = item.expectedAttendance;
    // actAttendance[item._id] = item.attendants.length;
    // reviews[item._id] = item.reviews;
  });
  console.log("attend" + Object.values(attendance));

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );
  const columns = [
    { name: "event", align: "left" },
    { name: "rating", align: "center" },
    { name: "likes", align: "center" },
    { name: "attendance", align: "center" },
    { name: "impact", align: "center" },
  ]

  let rows = []
  let sortedEvents = {};
  let sum;
  let e = events;
  let o;
  let c;
  let s;
  let fc = 0;
  e.map((item) => {
    fc++;
    item.rating = 0;
    item.surveyRating = 0;
    o = 0;
    c = 0;
    if (Object.keys(item).includes("expectedAnswer")) {
      if (item.expectedAnswer == "YES" || item.expectedAnswer == "NO") {
        item.survey.map((survey) => {
          console.log(feedbacks, "survey", survey);
          s = feedbacks.filter(obj => {
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
        item.surveyRating = (o / c) * 100;
      }
      
    }else {
      item.surveyRating = 0;
    }
    console.log(item.surveyRating, "rating");


  })
  Object.keys(ratings).map((item) => {
    sum = 0;
    ratings[item].map((rating) => {
      sum += rating;
    })
    e.filter(obj => {
      return obj._id == item
    })[0].rating = sum / ratings[item].length;

    // console.log(events);
    // events[item].rating = sum / ratings[item].length;
  })
  // setEvents(events);
  if (sortType == 'attend') {
    sortedEvents = e.sort(compareAttend);
  } else if (sortType == 'rating') {
    sortedEvents = e.sort(compareRating);
  } else if (sortType == 'likes') {
    sortedEvents = e.sort(compareLikes);
  }else if (sortType == 'survey') {
  sortedEvents = e.sort(compareSurvey);
}
  let eventRatings = {};
  Object.keys(ratings).map((item) => {
    sum = 0;
    ratings[item].map((rating) => {
      sum += rating;
    })
    eventRatings[item] = sum / ratings[item].length;
  })
  console.log("eventRatings" + Object.values(eventRatings));
  // eventRatings[item] = item.rating;
  let count = 0;
  sortedEvents.map((item) => {
    if (count < topNo) {
      rows.push(
        {
          event: (
            <VuiBox display="flex" alignItems="center">
              <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
                {item.title}
              </VuiTypography>
            </VuiBox>
          ),
          rating: (
            <VuiBox display="flex" py={1}>
              <StarRatings
                rating={item.rating}
                starDimension="1vw"
                starSpacing="0.5vw"
                starRatedColor="#FFD700"
              />

            </VuiBox>
          ),
          likes: (
            <VuiTypography variant="button" color="white" fontWeight="bold">
              {item.likes}
            </VuiTypography>
          ),
          attendance: (
            <VuiBox width="8rem" textAlign="left">
              <VuiTypography color="white" variant="button" fontWeight="bold">
                {((item.attendants.length / item.expectedAttendance) * 100).toFixed(1)}%
              </VuiTypography>
              <VuiProgress value={(item.attendants.length / item.expectedAttendance) * 100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
            </VuiBox>
          ),
          impact: (
            <VuiBox width="8rem" textAlign="left">
              <VuiTypography color="white" variant="button" fontWeight="bold">
                {(item.surveyRating).toFixed(1)}%
              </VuiTypography>
              <VuiProgress value={item.surveyRating} color="info" label={false} sx={{ background: "#2D2E5F" }} />
            </VuiBox>
          ),
        })
      count++;
    }
  });

  const handleSortChange = (sortType) => {
    setSort(sortType.target.value);
  }
  useEffect(() => {
    getEvents();
    getRatings();
    getFeedback();
  }, []);
  return (
    <Card
      sx={{
        height: "100% !important",
      }}
    >
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
        <VuiBox mb="auto">
          <VuiTypography color="white" variant="lg" mb="6px" gutterBottom>
            Top Events
          </VuiTypography>
          <VuiBox display="flex" alignItems="center" lineHeight={0}>
            {/* <BsCheckCircleFill color="green" size="15px" /> */}
            <VuiTypography variant="button" fontWeight="regular" color="text" ml="5px">
              {/* &nbsp;<strong>{fc} events</strong> so far... */}
              {/* <Input type="number" value={topNo} onChange={setTopNoHandler} >enter o</Input> */}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        {/* <VuiBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </VuiBox> */}
        {renderMenu}
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
        <label htmlFor="filterStatus" style={{ color: "white" }}>Filter by: &nbsp;&nbsp;</label>
        <select id="filterStatus" value={sortType} onChange={handleSortChange}>
          <option value="attend">Attendance</option>
          <option value="rating">Rating</option>
          <option value="likes">Likes</option>
          <option value="survey">Impact</option>
        </select>
        <Table columns={columns} rows={rows} />
      </VuiBox>
    </Card>
  );
}

export default Projects;
