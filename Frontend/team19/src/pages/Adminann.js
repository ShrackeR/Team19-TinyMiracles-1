import { useState, useEffect } from "react";
import { useAuthContext2 } from "../hooks/useAuthContext2";

const Adminann = () => {
  const [announcement, setAnnouncement] = useState('');
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    community: '',
  });
  const { admin } = useAuthContext2();

  const [allCommunities, setAllCommunities] = useState([]);

  useEffect(() => {
    // Fetch data from the allcommunities API
    const fetchCommunities = async () => {
      try {
        const response = await fetch('http://35.244.31.186:8080/api/community/getall');
        const data = await response.json();
        const names = data.map(item => item.name);
        setAllCommunities(names); 
      } catch (error) {
        console.error('Error fetching communities:', error);
      }
    };

    fetchCommunities();
  }, []); 

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hii");

    const ann = { announcement };

    fetch('http://35.244.31.186:8080/api/admin/ann', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${admin.token}`
      },
      body: JSON.stringify({
        title: eventData.title,
        description: eventData.description,
        community: eventData.community,
        announcement: ann.announcement
      })
    })
    .then((res) => res.json())
    .then((data) => {
      alert("Announcement made");
      setEventData({
        title: '',
        description: '',
        community: '',
      });
      setAnnouncement('');
    })
    .catch((error) => console.error('Error making announcement:', error));
  };

  return (
    <div className="announcement-box">
      <h2>Make an announcement</h2>
      <form>
        <div className="mb-3">
          Title:
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-3">
          Description:
          <textarea
           rows="5" cols="80"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="form-control"
            placeholder=""
          ></textarea>
        </div>
        <div className="mb-3">
          Select Community
          <select
            name="community"
            value={eventData.community}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Community</option>
            {allCommunities.map((community) => (
              <option key={community} value={community}>
                {community}
              </option>
            ))}
          </select>
        </div>
       
        <button type="button" onClick={handleSubmit}>Done</button>
      </form>
    </div>
  );
};

export default Adminann;
