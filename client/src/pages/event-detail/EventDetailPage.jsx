import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from "./eventdetailpage.module.scss"
import party from "../../../src/assets/event-party.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventById } from "../../api";

const EventDetailPage = () => {
 const {id} = useParams();
 const [event, setEvent] = useState(null);

 useEffect(() => {
  const fetchEventId = async () => {
    if(id) {
      const eventData = await getEventById(id);
      setEvent(eventData)
    }
  };
  fetchEventId();
 }, [id])

 if(!event){
  return <p>Loading....</p>
 }

  return (
    <Container
      sx={{ backgroundColor: "white", minHeight: "100vh", minWidth: "90vw" }}
    >
      <div className={styles.detailcontainer}>
        <div className={styles.infoone}>
          <Card sx={{ maxWidth: 600, minHeight: 500 }}>
            <CardMedia
              sx={{ height: 400, width: 600 }}
              image={party}
              title="party"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {event.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               {event.publicDescription}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className={styles.infotwo}>
          <div className={styles.time}>
            <h2>Plats: {event.location}</h2>
            <h2>Tid: {event.date ? new Date(event.date).toLocaleString() : 'Ingen tid angiven'}</h2>
            <br />
            <h3>Pris: {event.price} kr</h3>
            <br />
            <h4>Max antal: {event.limitedNumberOfParticipents} pers</h4>
            <br />
            <p><i>Organisatörens namn:</i></p>
          </div>
          <Button variant="contained" color="success">Gå till anmäla</Button>
        </div>
      </div>
    </Container>
  );
};

export default EventDetailPage;
