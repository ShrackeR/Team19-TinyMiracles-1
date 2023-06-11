import React, { useState, useEffect } from "react";
// import { useCreateEvent } from "../hooks/useCreateEvent";
// import EventWrapper from "../components/EventWrapper";
// import { NavLink, useParams } from "react-router-dom";
import "../components/eventCards.css";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { FaShareAlt, FaEye, FaRegHeart, FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import {
    EmailShareButton,
    FacebookShareButton, FacebookIcon,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
    EmailIcon,
    TelegramIcon
} from "react-share";

function toggleLike(id, status) {
    if (status === true) {
        fetch("https://miracleachievers.shreeraj.me/backend/api/event/unlike/" + id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json());
    } else {
        fetch("https://miracleachievers.shreeraj.me/backend/api/event/like/" + id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json());
    }
    // setLike(!like);
    // window.location.reload(false);
}


const EventCards = (props) => {
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [filterStatus, setFilterStatus] = useState('');
    const [lang, setLang] = useState("en");

    const handleClickToOpen = () => {
        setOpen(true);
    };
    const handleToClose = () => {
        setOpen(false);
    };
    const getData = async () => {
        const response = await fetch("https://miracleachievers.shreeraj.me/backend/api/event/getall", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json());
        setData(response);
    };

    useEffect(() => {
        getData();
    }, []);
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
            _id: item._id,
            name: item.title,
            description: item.description,
            location: item.location,
            address: item.address,
            start: new Date(item.start).toLocaleString('hi-IN').toUpperCase(),
            end: new Date(item.end).toLocaleString('hi-IN').toUpperCase(),
            tags: item.tag,
            status: new Date(item.start) > Date.now() ? "Upcoming" : new Date(item.end) > Date.now() ? "Ongoing" : "Past",
            like: false
        })
    });
    console.log(rows)

    const handleFilterChange = (e) => {
        setFilterStatus(e.target.value);
    };

    const filteredData = filterStatus
        ? rows.filter((element) => element.status === filterStatus)
        : rows;



    let currurl = "https://shreeraj.me/allevents/eventdetails/";
    let title = "Check out this event on Tiny Miracles!";

    {
        return (
            <>

                {/* { <EventWrapper> } */}
                <section>
                    <div className="events">
                        <h1 style={{ textAlign: "center", color: "white", paddingTop: "40px", }}>
                            All Events
                        </h1>

                        <ul>
                            <div className="filter-container">
                                <label htmlFor="filterStatus" style={{ color: "white" }}>Filter by Status: &nbsp;&nbsp;</label>
                                <select id="filterStatus" value={filterStatus} onChange={handleFilterChange}>
                                    <option value="">All</option>
                                    <option value="Past">Past</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="Upcoming">Upcoming</option>
                                </select>
                            </div>
                            {filteredData.map((item) => (

                                <>

                                    <li>
                                        <div className="time">
                                            <h2>
                                                {item.start}<span />
                                            </h2>
                                        </div>
                                        <div className="details">
                                            <div style={{ justifyContent: "space-between", display: "flex" }}>
                                                <h3>
                                                    {item.name}, {item.location}
                                                </h3>
                                                {!item.like?<FaRegHeart style={{ color: "red" }} onClick={() => { toggleLike(item._id,item.like); item.like? alert(item.name+" unliked!") :alert(item.name+" liked!"); item.like=!item.like; }} />:<FaHeart style={{ color: "red" }} onClick={() => { toggleLike(item._id,item.like); item.like=!item.like;}} />}
                                            </div>
                                            <p>
                    {lang === "hi" ? (
                      <>
                        {item.description_hindi && item.description_hindi.length > 0 ? (
                          <>{item.description_hindi.slice(0, 100) + "..."}</>
                        ) : (
                          <>{item.description.slice(0, 100) + "..."}</>
                        )}
                      </>
                    ) : (
                      <>{item.description.slice(0, 100) + "..."}</>
                    )}
                  </p>
                                            <div style={{ justifyContent: "space-between", display: "flex" }}>
                                            <NavLink to={`/allevents/eventdetails/${item._id}`}><FaEye /></NavLink>
                                                <a variant="outlined" color="primary"
                                                    onClick={handleClickToOpen} style={{ "margin-left": "auto", "margin-right": "0", cursor: "pointer", color: "#0d6efd" }}>
                                                    <FaShareAlt />
                                                </a>
                                            </div>

                                        </div>

                                        <div >

                                            <Dialog open={open} onClose={handleToClose}>
                                                <DialogTitle>Share Event - {item.name}</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        Click on one of the buttons below to share this event:<br />
                                                    </DialogContentText>
                                                    <FacebookShareButton
                                                        url={currurl + item._id}
                                                        quote={title}
                                                        hashtag="#TinyMiracles"
                                                    ><FacebookIcon size={"2em"} /></FacebookShareButton>
                                                    <span>&nbsp;&nbsp;</span>
                                                    <TwitterShareButton
                                                        url={currurl + item._id}
                                                        title={title}
                                                        hashtags={["TinyMiracles"]}
                                                    ><TwitterIcon size={"2em"} /></TwitterShareButton>
                                                    <span>&nbsp;&nbsp;</span>
                                                    <LinkedinShareButton
                                                        url={currurl + item._id}
                                                        title={title}
                                                        summary={item.description}
                                                        source={currurl + item._id}
                                                    ><LinkedinIcon size={"2em"} /></LinkedinShareButton>
                                                    <span>&nbsp;&nbsp;</span>
                                                    <WhatsappShareButton
                                                        url={currurl + item._id}
                                                        title={title}
                                                        separator=":: "
                                                    ><WhatsappIcon size={"2em"} /></WhatsappShareButton>
                                                    <span>&nbsp;&nbsp;</span>
                                                    <EmailShareButton
                                                        url={currurl + item._id}
                                                        subject={title}
                                                        body={item.description}
                                                        separator=":: "
                                                    ><EmailIcon size={"2em"} /></EmailShareButton>
                                                    <span>&nbsp;&nbsp;</span>
                                                    <TelegramShareButton
                                                        url={currurl + item._id}
                                                        title={title}
                                                    ><TelegramIcon size={"2em"} /></TelegramShareButton>
                                                    {/* <TwitterIcon size={32} round={true} /> */}
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleToClose}
                                                        color="primary" autoFocus>
                                                        Close
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </div>
                                    </li>
                                </>

                            ))
                            }
                        </ul>
                        {/* <button onClick={toggleLanguage}>
        {lang === "en" ? "Switch to Hindi" : "Switch to English"}
      </button> */}
                    </div>
                   
                </section>
                {/* </EventWrapper> */}

            </>)
    }
}
export default EventCards;
