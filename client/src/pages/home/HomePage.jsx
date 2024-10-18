import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./HomePage.scss";
import EventCard from "./eventCard/EventCard";

const HomePage = () => {
  const oneEvent = [
    {
      title: "Halloween Maskerad",
      description:
        "En spännande maskerad där alla är inbjudna att klä ut sig i sina bästa skräckkostymer.",
      place: "Nattens Hus, Mörkergatan 13",
      time_and_date: "2024-10-31, 18:00 - 23:00",
      img: "pumpkins.jpg",

      free_or_not_free: "not free",
      cost: 150,
      payment_received: true,
      open_or_private: "öppet",
      registration: {
        required: "true",
      },
      max_participants: 100,
      organizer: "Skräckföreningen",
    },
    {
      title: "Skräckfilmkväll",
      description:
        "Njut av en kväll fylld av klassiska skräckfilmer tillsammans med popcorn och läsk.",
      place: "Biografen, Filmvägen 2",
      time_and_date: "2024-10-29, 19:00 - 22:00",
      img: "skeletons.jpg",
      free_or_not_free: "free",
      cost: null,
      payment_received: false,
      open_or_private: "öppet",
      registration: {
        required: "false",
      },
      max_participants: 50,
      organizer: "Filmklubben",
    },
    {
      title: "Pumpkin Carving Contest",
      description: "Visa upp din kreativitet och delta i vår pumpaskärningstävling! Priser till de bästa!",
      place: "Stora Torget, Halloween Park",
      time_and_date: "2024-10-28, 14:00 - 18:00",
      img: "pumpkins.jpg",
      free_or_not_free: "not free",
      cost: 50, // Kostnaden för deltagande
      payment_received: false, // Ingen betalning har mottagits än
      open_or_private: "öppet",
      registration: {
        required: "true",
      },
      max_participants: 30,
      organizer: "Pumpkin Lovers Club",
    },
    {
      title: "Haunted House Experience",
      description: "Våga dig in i vårt hemsökta hus och upplev skräcken på nära håll!",
      place: "Mörkergatan 7",
      time_and_date: "2024-10-30, 17:00 - 22:00",
      img: "skeletons.jpg",
      free_or_not_free: "not free",
      cost: 100,
      payment_received: true,
      open_or_private: "öppet",
      registration: {
        required: "false",
      },
      max_participants: 50,
      organizer: "Skräckföreningen",
    },
    {
      title: "Halloween Dance Party",
      description: "Kom och dansa natten lång till spöklika låtar och njut av god mat!",
      place: "Nattens Hus, Mörkergatan 13",
      time_and_date: "2024-10-31, 21:00 - 02:00",
      img: "pumpkins.jpg",
      free_or_not_free: "free",
      cost: null,
      payment_received: false,
      open_or_private: "öppet",
      registration: {
        required: "false",
      },
      max_participants: 100,
      organizer: "Halloween Dance Crew",
    },
    {
      title: "Ghost Storytelling Night",
      description: "Samla kring elden för att lyssna på skrämmande spökhistorier.",
      place: "Campingplatsen, Skogsgatan 5",
      time_and_date: "2024-10-29, 20:00 - 23:00",
      img: "skeletons.jpg",
      free_or_not_free: "not free",
      cost: 75,
      payment_received: false,
      open_or_private: "öppet",
      registration: {
        required: "true",
      },
      max_participants: 40,
      organizer: "Storytellers Guild",
    },
  ];

  return (
    <Container
      className="HomePage"
      sx={{ backgroundColor: "white", minHeight: "100vh", minWidth: "90vw", padding: "2rem"}}
    >
      <div className="inputBox">
        <TextField size="small" id="outlined-basic" label="Sök event här..." variant="outlined" />
      </div>

      <Container>
        <Box
          className="eventsBox"
          sx={{ bgcolor: "orange", minWidth: "50vw", margin: "1rem"}}
        >
          {oneEvent.map((event, index) => (
            <EventCard className="eventCard" key={index} event={event} />
          ))}
        </Box>
      </Container>
    </Container>
  );
};

export default HomePage;
