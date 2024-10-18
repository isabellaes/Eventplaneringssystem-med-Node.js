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

const CreateEventPage = () => {
  const [formData, setFormData] = useState({
    event: {
      title: "",
      date: "YY-MM-DD",
      time: "00:00",
      location: "",
      despcription: "",
      public: true,
      signUpRequierd: false,
      approvedSignUpRequierd: false,
      free: true,
      availiblePlaces: "",
      price: "",
    },
    organisatör: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });
  return (
    <Container
      sx={{ backgroundColor: "white", minHeight: "100vh", minWidth: "90vw" }}
      className="create-event-page"
    >
      <h1>Skapa nytt event</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        <div className={style.flexRow}>
          <div>
            <h2>Organisatör</h2>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Namn"
                variant="outlined"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    organisatör: {
                      ...formData.organisatör,
                      name: e.currentTarget.value,
                    },
                  })
                }
              />

              <TextField
                id="outlined-basic"
                label="Epost"
                variant="outlined"
                type="email"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    organisatör: {
                      ...formData.organisatör,
                      email: e.currentTarget.value,
                    },
                  })
                }
              />

              <TextField
                id="outlined-basic"
                label="Telefonnummer"
                variant="outlined"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    organisatör: {
                      ...formData.organisatör,
                      phoneNumber: e.currentTarget.value,
                    },
                  })
                }
              />
            </FormControl>
          </div>
          <div>
            <h2>Event informaton</h2>
            <FormControl>
              <FormLabel>Ladda upp Bild</FormLabel>
              <TextField id="basic" type="file" />

              <TextField
                id="outlined-basic"
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
                id="outlined-basic"
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

              <TextField
                id="outlined-basic"
                label="Tid"
                variant="outlined"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    event: {
                      ...formData.event,
                      time: e.currentTarget.value,
                    },
                  })
                }
              />
              <FormLabel>Datum</FormLabel>
              <TextField
                id="outlined-basic"
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

              <TextField
                id="outlined-textarea"
                label="Beskrivning"
                multiline
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    event: {
                      ...formData.event,
                      despcription: e.currentTarget.value,
                    },
                  })
                }
              />

              <FormLabel>Öppet/Privat</FormLabel>
              <RadioGroup
                column
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
                column
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
                        signUpRequierd: true,
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
                id="outlined-basic"
                label="Pris"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  if (e.currentTarget.value) {
                    setFormData({
                      ...formData,
                      event: {
                        ...formData.event,
                        price: e.target.value,
                      },
                    });
                  }
                }}
              />
              <FormLabel>Max antal deltagare</FormLabel>
              <TextField
                id="outlined-basic"
                label="Max antal deltagare"
                variant="outlined"
                type="number"
                onChange={(e) => {
                  if (e.currentTarget.value) {
                    setFormData({
                      ...formData,
                      event: {
                        ...formData.event,
                        availiblePlaces: e.target.value,
                      },
                    });
                  }
                }}
              />
            </FormControl>
          </div>
        </div>

        <Button variant="outlined" type="submit" sx={{ marginTop: "1em" }}>
          Skapa Event
        </Button>
      </form>
    </Container>
  );
};

export default CreateEventPage;
