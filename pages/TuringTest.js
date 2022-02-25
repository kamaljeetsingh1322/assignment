import React from "react";
import MiniDrawer from "./MiniDrawer";
import Container from "@mui/material/Container";
import Slider from "@mui/material/Slider";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function TuringTest() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Box
            sx={{
              backgroundColor: "white",
              height: "30vh",
              width: "150vh",
              borderRadius: "10px",
              border: "1px solid black",
              textDecoration: "none",
            }}
          >
            <h2 style={{ marginLeft: "50px", padding: "10px" }}>
              Test Score <span style={{ color: "lightslategray" }}>25%</span>
            </h2>
            <Box style={{ marginLeft: "13vh" }} sx={{ width: 850 }}>
              <Slider
                aria-label="Percecntage"
                defaultValue={20}
                checked
                step={10}
                marks
                min={10}
                max={40}
                value={20}
              />
            </Box>
            <Box sx={{ width: 1000 }}>
              <span
                style={{ fontSize: 14, marginLeft: "5vh", fontWeight: 600 }}
              >
                Welcome to turing
              </span>
              <span
                style={{
                  marginLeft: "15vh",
                  fontWeight: 700,
                  color: "black",
                  fontSize: 14,
                }}
              >
                Take the work and survey
              </span>
              <span
                style={{ fontSize: 14, marginLeft: "22vh", fontWeight: 600 }}
              >
                Pass your Test
              </span>
              <span
                style={{
                  fontSize: 14,
                  marginLeft: "12.5vh",
                  fontWeight: 600,
                }}
              >
                Pass to unlock coding challenge
              </span>
            </Box>
          </Box>

          <Box
            sx={{
              margin: "0",
              padding: "0",
              marginTop: "30px",
              fontSize: "14px",
              fontVariant: "tabular-nums",
              lineHeight: "1.5",
              listStyle: "none",
              height: "35vh",
              width: "150vh",
              borderRadius: "8px",
              background:
                " transparent linear-gradient(255deg,#56a8f7,#6c7bd4) 0 0 no-repeat padding-box!important",
              boxShadow: "0 0 24px rgb(0 0 0 / 4%)",
              opacity: "1",
            }}
          >
            <Container>
              <Row>
                <Col sm={8}>
                  <p
                    style={{
                      marginLeft: "20px",
                      padding: "5px",
                      marginTop: "30px",
                      textAlign: "left",
                      fontSize: "28px",
                      fontFamily: "GorditaMedium",
                      letterSpacing: "0",
                      color: "#fff",
                      opacity: "1",
                    }}
                  >
                    Tell us about your work experience
                  </p>

                  <h3
                    style={{
                      marginLeft: "26px",
                      padding: "1px",
                      textAlign: "left",
                      fontSize: "22px",
                      fontFamily: "GorditaMedium",
                      letterSpacing: "0",
                      color: "#fff",
                      opacity: "1",
                    }}
                  >
                    We will ask you about your past projects, product
                    involvement and experience working with other engineers.
                    This will help us find the right jobs for you.
                  </h3>
                  <Button variant="outlined">Outlined</Button>
                </Col>
                <Col sm={4}>
                  <Container>
                    <Box
                      sx={{
                        color: "lightslategray",
                        bgcolor: "white",
                        marginTop: "35px",
                        height: "24.66vh",
                        width: "31.33vh",
                        marginLeft: "3.86vh",
                        borderRadius: "15px",
                      }}
                    >
                      <span style={{ marginTop: "30px" }}>
                        <h4 style={{ padding: "5px", marginLeft: "30px" }}>
                          Work <br /> Experience
                          <br /> Survey
                        </h4>
                        <h6 style={{ padding: "5px", marginLeft: "30px" }}>
                          Est. time
                        </h6>
                        <h4 style={{ marginLeft: "33px" }}>30 min</h4>
                      </span>
                    </Box>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default TuringTest;
