import React, { useState, useEffect } from "react";
// import { useCreateEvent } from "../hooks/useCreateEvent";
import EventWrapper from "../components/EventWrapper";
import { NavLink, useParams } from "react-router-dom";

const ViewEvent = (props) => {
    const { eventId } = useParams('');
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    // const { dispatch } = useAuthContext()
    const [success, setSuccess] = useState()
    // const id = "647ca68456ee5b502156f9df";
    console.log("here!!!!")

    // const { createEvent, error, isLoading, success, setSuccess } = useCreateEvent();
    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        location: '',
        start: '',
        end: '',
        tag: '',
        resources: '',

    });
    useEffect(() => {
        const response = fetch("https://miracleachievers.shreeraj.me/backend/api/event/get/" + eventId).then(res => {
            return res.json();

        }).then(data => {
            console.log(data);
            var start = new Date(data.start).toLocaleString('en-IN')
            var end = new Date(data.end).toLocaleString('en-IN')

            console.log("end" + end);
            const currentData = {
                title: data.title,
                description: data.description,
                location: data.location,
                start: start,
                end: end,
                tag: data.tag,
                resources: data.resources
            }
            setEventData((preD) => ({
                ...preD,
                ...currentData
            }));
        })


    }, []);


    return (
    <>
        <EventWrapper>
            <div class="col-sm-4 bg-c-lite-green user-profile">
                <div class="card-block text-center text-white">
                    <div class="m-b-25"> <img style="height: 100px;" src="" class="img-radius" alt="User-Profile-Image"/> </div>
                    <h2 style="color: white;"><b>{eventData.title}</b></h2>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Event Details</h6>
                    <div class="row">
                        <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Description</p>
                            <h6 class="text-muted f-w-400">{eventData.description}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </EventWrapper>

    </> )
}
export default ViewEvent;