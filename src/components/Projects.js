import React from "react";
import "../styles/Project.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  Container,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

const Projects = ({ data }) => {
  return (
    <Container className="projectCards" fluid>
      {data.map((project, key) => {
        return (
          <Card
            key={project.id}
            className="projectCard"
            style={{ borderWidth: "1px", borderColor: "grey" }}
          >
            <CardImg top width="100%" src={project.image} alt={project.title} />
            <CardBody>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CardTitle className="projectTitle">{project.title}</CardTitle>
                <Link to={`/${project.id}`}>
                  <Button
                    className="readButton"
                    style={{ width: "100%" }}
                    color="secondary"
                  >
                    Read more
                  </Button>
                </Link>
              </div>
              <CardSubtitle className="projectSubTitle">
                [ {project.techstack} ]
              </CardSubtitle>
              <CardText className="projectDescription">
                <div
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </CardText>
            </CardBody>
          </Card>
        );
      })}
    </Container>
  );
};

export default Projects;
