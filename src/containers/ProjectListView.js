import React from "react";
import axios from "axios";
import Projects from "../components/Projects";
import "../styles/Project.css";
import { Card, CardImg, CardBody, Container, Jumbotron } from "reactstrap";

class ProjectList extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      this.setState({
        projects: res.data,
      });
    });
  }

  render() {
    return (
      <div className="overall">
        <Jumbotron className="Jumbo" fluid>
          <Container fluid>
            <h1 className="display-2">MikeSinc | Portfolio</h1>
            <p className="lead">
              Welcome to my collection of web development work.
            </p>
          </Container>
        </Jumbotron>

        <Container className="cards" fluid>
          <Card className="artCard" outline color="white">
            <CardImg
              className="cardImage"
              top
              src={require("../assets/images/001-null.png")}
              alt="UX"
            />
            <CardBody style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h3>User Focused</h3>
              <p className="graphicCardText">
                I design with the{" "}
                <span style={{ fontWeight: "bold" }}>user experience</span> in
                mind.
              </p>
            </CardBody>
          </Card>
          <Card className="artCard" outline color="white">
            <CardImg
              className="cardImage"
              top
              src={require("../assets/images/002-internet.png")}
              alt="Code"
            />
            <CardBody style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h3>Your Content</h3>
              <p className="graphicCardText">
                I handle all the{" "}
                <span
                  style={{ fontFamily: "Courier New", fontWeight: "bold" }}
                >{` <code>`}</span>
                , and let you handle your{" "}
                <span style={{ fontWeight: "bold" }}>content</span>.
              </p>
            </CardBody>
          </Card>
          <Card className="artCard" outline color="white">
            <CardImg
              className="cardImage"
              top
              src={require("../assets/images/004-paint.png")}
              alt="Art"
            />
            <CardBody style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h3>Built to Impress</h3>
              <p className="graphicCardText">
                I create websites that{" "}
                <span style={{ fontWeight: "bold" }}>look & feel</span> modern.
              </p>
            </CardBody>
          </Card>
          <Card className="artCard" outline color="white">
            <CardImg
              className="cardImage"
              top
              src={require("../assets/images/003-graph.png")}
              alt="Software"
            />
            <CardBody style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h3>Modern Design</h3>
              <p className="graphicCardText">
                I use the{" "}
                <span style={{ fontWeight: "bold" }}>latest technologies</span>{" "}
                under the hood.
              </p>
            </CardBody>
          </Card>
        </Container>

        <Jumbotron className="WorkJumbo" fluid>
          <Container fluid>
            <h2 className="display-5">Recent Work</h2>
          </Container>
        </Jumbotron>

        <Projects data={this.state.projects} />

        <div style={{ fontSize: "8px" }}>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectList;
