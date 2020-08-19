import React, { Component } from "react";
import { Container, CardBody, Card, Button, Row } from "reactstrap";
import styles from "./Test.module.css";
import { Table } from "reactstrap";

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      table: [
        {
          no: "1",
          searchRecord: "What is name ?",
          class: "Name",
          trainRecord: "06/08 12:52",
          confidence: "60%",
        },
        {
          no: "2",
          searchRecord: "What is your name ?",
          class: "Name",
          trainRecord: "07/08 09:53",
          confidence: "72%",
        },
        {
          no: "3",
          searchRecord: "What is my father name ?",
          class: "Name",
          trainRecord: "08/08 12:54",
          confidence: "75%",
        },
        {
          no: "4",
          searchRecord: "What is my name ?",
          class: "Name",
          trainRecord: "06/08 16:55",
          confidence: "88%",
        },
      ],
    };
  }

  displayTable = () => {
    this.setState({
      show: !this.state.show,
    });

    console.log("Inside table");
  };

  render() {
    return (
      <Container className={styles.layout}>
        <h1>UK Newspaper Headlines: Test</h1>
        <Card className={styles.card1}>
          <CardBody className={styles.cardbody}>
            <Row>
              <h4 className={styles.title}>
                Try putting on some text to see how it is recognised based on
                your learning
              </h4>
            </Row>

            <div className={styles.inputT}>
              <div className={styles.inputDiv}>
                <input
                  type="text"
                  placeholder="Enter a text here!"
                  className={styles.cardinput}
                ></input>
              </div>
              <div>
                {" "}
                <Button type="submit" className={styles.cardbutton}>
                  {" "}
                  Test{" "}
                </Button>{" "}
              </div>
            </div>
          </CardBody>
        </Card>

        <Row>
          <Button
            type="submit"
            className={styles.searchbutton}
            onClick={this.displayTable}
          >
            Search history
          </Button>
        </Row>

        <Row>
          <img
            className={styles.protestingImg}
            src={require("../../assets/projects/protesting.png")}
            alt=""
          ></img>

          {this.state.show ? (
            <Card className={styles.card2}>
              <Table>
                <thead>
                  <tr className={styles.tableHeader}>
                    <th>Sr No</th>
                    <th>Search Record</th>
                    <th>Class</th>
                    <th>Train Record</th>
                    <th>Confidence</th>
                  </tr>
                </thead>
                {this.state.table.map((index) => (
                  <tbody key={index} className={styles.table}>
                    <tr>
                      <th>{index.no}</th>
                      <th className={styles.searchRec}>{index.searchRecord}</th>
                      <th>{index.class}</th>
                      <th>{index.trainRecord}</th>
                      <th>{index.confidence}</th>
                    </tr>
                  </tbody>
                ))}
              </Table>
              <div className={styles.clearHis}>
                <Button className={styles.clear}>Clear History</Button>
                <img
                  className={styles.bin}
                  src={require("../../assets/projects/trash.svg")}
                  alt=""
                ></img>
              </div>
            </Card>
          ) : null}
        </Row>
      </Container>
    );
  }
}
