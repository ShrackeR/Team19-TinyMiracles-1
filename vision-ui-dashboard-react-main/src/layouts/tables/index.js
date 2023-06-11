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

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiSwitch from "components/VuiSwitch";
import VuiButton from "components/VuiButton";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useState, useEffect } from "react";

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
  fetch("http://localhost:4000/api/event/delete/"+id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      enabled: status
    })
  }).then((res) => res.json());
  // window.location.reload(false);
}


function Tables() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("http://localhost:4000/api/event/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json());
    setData(response);
  };

  useEffect(() => {
    getData();
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


  data.map((item) => {
    rows.push({
      name: <Function job={item.title} org={item.description} />,
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
      visible: <VuiSwitch color="info" id={item._id} checked={item.enabled} onChange={() => {setEventStatus(item._id, !item.enabled);console.log("this:"+item.enabled);item.enabled=!item.enabled; }} />,
      edit: <VuiButton variant="text" color="text" onClick={() => {window.open("http://localhost:3001/editEvent/"+item._id)}} >
      <Icon sx={{ mr: "4px" }}>edit</Icon>&nbsp;EDIT
    </VuiButton>
        
      // delete:
    })
  })

  // const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Card>
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
              <VuiTypography variant="lg" color="white">
                All Events
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
              <Table columns={columns} rows={rows} />
            </VuiBox>
          </Card>
        </VuiBox>
        <Card>
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
        </Card>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
