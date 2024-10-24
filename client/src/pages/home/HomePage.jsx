import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./HomePage.scss";
import EventCard from "./eventCard/EventCard";
import { getEvents } from "../../api";
import { useEffect, useState } from "react";

const HomePage = () => {
  
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setAllEvents(events);
    };

    fetchEvents(); 
  }, []); 

  console.log("allEvents ger mig = ", allEvents);

  return (
    <Container
      className="HomePage"
      sx={{ backgroundColor: "white", minHeight: "100vh", minWidth: "90vw", padding: "2rem"}}
    >
      <div className="inputBox">
        <TextField size="small" id="outlined-basic" label="Sök event här..." variant="outlined" />
      </div>

      <Container className="eventsContainer">
        <Box
          className="eventsBox"
          sx={{ bgcolor: "orange", minWidth: "50vw", margin: "1rem", padding: "1rem", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}
        >
          {allEvents.length === 0 ? 
          (<p>Det har inte skapats några event ännu</p>
          ) : (
            allEvents.map((event, index) => (
            <EventCard className="eventCard" key={event._id} event={event} />
          )))  }
        </Box>
      </Container>
    </Container>
  );
};

export default HomePage;
