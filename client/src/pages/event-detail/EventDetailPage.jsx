import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from "./eventdetailpage.module.scss"
import party from "../../../src/assets/event-party.jpg"


const EventDetailPage = () => {
  return (
    <Container
      sx={{ backgroundColor: "white", minHeight: "100vh", minWidth: "90vw" }}
    >
      <div className={styles.detailcontainer}>
        <div className={styles.infoone}>
          <Card sx={{ maxWidth: 600, minHeight: 500 }}>
            <CardMedia
              sx={{ height: 250 }}
              image={party}
              title="party"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                AW party
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae libero cupiditate in iste consequuntur accusantium provident reiciendis hic veritatis consectetur ad enim, praesentium perspiciatis incidunt aperiam nemo delectus assumenda? Ratione.
              </Typography>
            </CardContent>
          </Card>
        </div>


        <div className={styles.infotwo}>
          <div className={styles.time}>
            <h2>Plats: </h2>
            <h2>Tid: </h2>
            <p><i>Organisatörens namn</i></p>
          </div>

          <Button variant="contained" color="success">Gå till anmäla</Button>
        </div>
      </div>

    </Container>
  );
};

export default EventDetailPage;
