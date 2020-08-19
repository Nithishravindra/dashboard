import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./Deploy.module.css";

export default class Deploy extends Component {
  state = {
    deploy: [
      {
        image: require("../../assets/dashboard/home.png"),
        title: "Buddy - Ground",
        text:
          " Make a project in buddy-ground using block logics and enjoy your logic with implementabe and working experience.",
      },
      {
        image: require("../../assets/deploy/python.png"),
        title: "Python",
        text:
          "Make a project in buddy-ground using block logics and enjoy your logic with implementabe and working experience.",
      },
    ],
  };

  render() {
    return (
      <Container>
        {/* <div className="layout"> */}
        <h1 className={styles.heading}>UK Newspaper Headlines: Deploy</h1>
        <div className={styles.layout}>
          {this.state.deploy.map((it, indx) => (
            <Row className={styles.r} key={indx}>
              <Col className={styles.c}>
                <div className={styles.imgbg}>
                  <img className={styles.img} src={it.image} alt=""></img>
                </div>
                <h3 className={styles.title}>{it.title}</h3>
              </Col>
              <Col>
                <p className={styles.text}>{it.text}</p>
              </Col>
            </Row>
          ))}
        </div>
        <div className="imgFT">
          <img
            className={styles.footImg}
            src={require("../../assets/deploy/OBJECTS.svg")}
            alt=""
          ></img>
        </div>
        {/* </div> */}
      </Container>
    );
  }
}
