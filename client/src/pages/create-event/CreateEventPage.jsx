import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import style from "./createEventPage.module.scss";
import { useState } from "react";
import { CreateEvent } from "../../api";

const CreateEventPage = () => {
  const [formData, setFormData] = useState({});

  return (
    <Container
      sx={{ backgroundColor: "white", minHeight: "100vh", minWidth: "90vw" }}
      className="create-event-page"
    >
      <h1>Skapa nytt event</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await CreateEvent(formData.event);
          console.log(result);
        }}
      >
        <div className={style.flexColumnCenter}>
          <div>
            <h2>Organisatör</h2>
            <FormControl>
              <TextField
                id="name"
                label="Namn"
                variant="outlined"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    organizer: {
                      ...formData.organizer,
                      name: e.currentTarget.value,
                    },
                  })
                }
              />

              <TextField
                id="email"
                label="Epost"
                variant="outlined"
                type="email"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    organizer: {
                      ...formData.organizer,
                      email: e.currentTarget.value,
                    },
                  })
                }
              />

              <TextField
                id="phone"
                label="Telefonnummer"
                variant="outlined"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    organizer: {
                      ...formData.organizer,
                      phone: e.currentTarget.value,
                    },
                  })
                }
              />
            </FormControl>
          </div>
          <div>
            <h2>Event informaton</h2>
            <FormControl>
              {/*   <FormLabel>Ladda upp Bild</FormLabel>
              <TextField id="basic" type="file" /> */}

              <TextField
                id="title"
                label="Titel"
                variant="outlined"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    event: {
                      ...formData.event,
                      title: e.currentTarget.value,
                    },
                  })
                }
              />

              <TextField
                id="location"
                label="Plats"
                variant="outlined"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    event: {
                      ...formData.event,
                      location: e.currentTarget.value,
                    },
                  })
                }
              />

              <FormLabel>Datum</FormLabel>
              <TextField
                id="date"
                variant="outlined"
                type="date"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    event: {
                      ...formData.event,
                      date: e.currentTarget.value,
                    },
                  })
                }
              />
              <FormLabel>Beskrivning</FormLabel>
              <TextField
                id="publicDescription"
                label="Beskrivning"
                multiline
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    event: {
                      ...formData.event,
                      publicDescription: e.currentTarget.value,
                    },
                  })
                }
              />

              <FormLabel>Information för anmälda deltagare</FormLabel>
              <TextField
                id="privateDescription"
                label="Information"
                multiline
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    event: {
                      ...formData.event,
                      privateDescription: e.currentTarget.value,
                    },
                  })
                }
              />

              <FormLabel>Öppet/Privat</FormLabel>
              <RadioGroup
                onChange={(e) => {
                  if (e.currentTarget.value === "private") {
                    setFormData({
                      ...formData,
                      event: {
                        ...formData.event,
                        public: false,
                      },
                    });
                  }
                  if (e.currentTarget.value === "public") {
                    setFormData({
                      ...formData,
                      event: {
                        ...formData.event,
                        public: true,
                      },
                    });
                  }
                }}
              >
                <FormControlLabel
                  value="open"
                  control={<Radio />}
                  label="Öppet"
                />
                <FormControlLabel
                  value="private"
                  control={<Radio />}
                  label="Privat"
                />
              </RadioGroup>

              <FormLabel>Anmälan</FormLabel>
              <RadioGroup
                onChange={(e) => {
                  if (e.currentTarget.value === "signUpRequierd") {
                    setFormData({
                      ...formData,
                      event: {
                        ...formData.event,
                        signUpRequierd: true,
                      },
                    });
                  }
                  if (e.currentTarget.value === "signUpApprovalRequierd") {
                    setFormData({
                      ...formData,
                      event: {
                        ...formData.event,
                        approvedSignUpRequierd: true,
                      },
                    });
                  }
                }}
              >
                <FormControlLabel
                  value="signUpRequierd"
                  control={<Radio />}
                  label="Anmälan krävs"
                />
                <FormControlLabel
                  value="signUpApprovalRequierd"
                  control={<Radio />}
                  label="Anmälan krävs och behöver godkännas"
                />
              </RadioGroup>
              <FormLabel>Pris</FormLabel>

              <TextField
                id="price"
                label="Pris"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  if (e.currentTarget.value) {
                    setFormData({
                      ...formData,
                      event: {
                        ...formData.event,
                        price: Number(e.target.value),
                      },
                    });
                  }
                }}
              />
              <FormLabel>Max antal deltagare</FormLabel>
              <TextField
                id="limitedNumberOfParticipents"
                label="Max antal deltagare"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  if (e.currentTarget.value) {
                    setFormData({
                      ...formData,
                      event: {
                        ...formData.event,
                        limitedNumberOfParticipents: Number(e.target.value),
                      },
                    });
                  }
                }}
              />
            </FormControl>
          </div>
          <Button variant="outlined" type="submit" sx={{ marginTop: "1em" }}>
            Skapa Event
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default CreateEventPage;
