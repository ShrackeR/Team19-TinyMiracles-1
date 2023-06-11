import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
  FacebookShareButton,
  FacebookIcon,
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
}

const EventCards2 = (props) => {
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

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredData = filterStatus
    ? data.filter((element) => element.status === filterStatus)
    : data;

  let currurl = "https://shreeraj.me/allevents/eventdetails/";
  let title = "Check out this event on Tiny Miracles!";

  return (
    <>
      <section>
        <div className="events" style={{ height: "230px" }}>



          <Carousel autoPlay interval={3000}  >
            {filteredData.slice(0,6).map((item,index) => (
              <div key={item._id}>
                <li>
                  <div className="time">
                    <h2>
                      {new Date(item.start).toLocaleString('hi-IN').toUpperCase()}<span />
                    </h2>
                  </div>
                  <div className="details">
                    <div style={{ justifyContent: "space-between", display: "flex" }}>
                      <h3>
                        {item.title}, {item.location}
                      </h3>
                      {!item.like ? (
                        <FaRegHeart style={{ color: "red" }} onClick={() => {
                          toggleLike(item._id, item.like);
                          item.like ? alert(item.title + " unliked!") : alert(item.title + " liked!");
                          item.like = !item.like;
                        }} />
                      ) : (
                        <FaHeart style={{ color: "red" }} onClick={() => {
                          toggleLike(item._id, item.like);
                          item.like = !item.like;
                        }} />
                      )}
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
                        onClick={handleClickToOpen} style={{ "marginLeft": "auto", "marginRight": "0", cursor: "pointer", color: "#0d6efd" }}>
                        <FaShareAlt />
                      </a>
                    </div>
                  </div>

                  <div>
                    <Dialog open={open} onClose={handleToClose}>
                      <DialogTitle>Share Event - {item.title}</DialogTitle>
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
                          body="Check out this event on Tiny Miracles!"
                        ><EmailIcon size={"2em"} /></EmailShareButton>
                        <span>&nbsp;&nbsp;</span>
                        <TelegramShareButton
                          url={currurl + item._id}
                          title={title}
                        ><TelegramIcon size={"2em"} /></TelegramShareButton>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleToClose} autoFocus>
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </li>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default EventCards2;
