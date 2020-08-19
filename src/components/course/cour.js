import React, { Component } from "react";
import { Container } from "reactstrap";
import styles from "./Course.module.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  Button,
} from "reactstrap";

export default class cour extends Component {
  constructor() {
    super();

    this.state = {
      iconsAssets: [
        require("../../assets/courses/doc.png"),
        require("../../assets/courses/pro.png"),
        require("../../assets/courses/vid.png"),
      ],

      courses: [
        {
          Title: "1. Introduction to IT",
          Descriptipn: "This is Description",
          toggle: false,
          SubCat: [
            {
              id: 1,
              Title: "1 . This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 80,
              showAssets: false,
            },
            {
              id: 2,
              Title: "2 . This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 0,
              showAssets: false,
            },
            {
              id: 3,
              Title: "3. This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 40,
              showAssets: false,
            },
          ],
        },
        {
          Title: "2 . Introduction to Python",
          Descriptipn: "This is Description",
          toggle: false,
          SubCat: [
            {
              id: 1,
              Title: "1 . This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 80,
              showAssets: false,
            },

            {
              id: 3,
              Title: "3. This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 40,
              showAssets: false,
            },
          ],
        },
        {
          Title: "3. Introduction to React",
          Descriptipn: "This is Description",
          toggle: false,
          SubCat: [
            {
              id: 1,
              Title: "1 . This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 80,
              showAssets: false,
            },
            {
              id: 3,
              Title: "3. This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 40,
              showAssets: false,
            },
          ],
        },
        {
          Title: "4. Introduction to node",
          Descriptipn: "This is Description",
          toggle: false,
          SubCat: [
            {
              id: 1,
              Title: "1 . This is title",
              description: "this is Description",
              Video: "this is video link",
              Text: "this is Text Link",
              sample: "THis is Sample Link",
              progressVal: 80,
              showAssets: false,
            },
          ],
        },
      ],
    };
  }

  tog = (ele) => {
    for (let i = 0; i < this.state.courses.length; i++) {
      // console.log(this.state.courses[i]);
      if (ele === this.state.courses[i]) {
        ele.toggle = !ele.toggle;
        this.setState({
          courses: [...this.state.courses],
        });
        break;
      }
    }
  };

  dispIcon = (item, index) => {
    for (let i = 0; i < this.state.courses.length; i++) {
      if (item === this.state.courses[i]) {
        item.SubCat[index].showAssets = !item.SubCat[index].showAssets;
        item.toggle = !item.toggle;
        console.log("updated = ", item);
        this.setState({
          courses: [...this.state.courses],
        });
        break;
      }
    }
  };

  render() {
    return (
      <Container>
        <h1>Information Technology 2020-21</h1>
        {this.state.courses.map((item, index) => (
          <Row key={index}>
            <Col>
              <Dropdown
                // className={styles.dropdown_main}
                isOpen={item.toggle}
                toggle={() => this.tog(item)}
              >
                <DropdownToggle
                  // className={styles.dropdown_toggle}
                  caret
                >
                  {item.Title}
                </DropdownToggle>
                <DropdownMenu>
                  {item.SubCat.map((i, idx) => (
                    <DropdownItem
                      key={idx}
                      // onClick={() => this.dispIcon(item, idx)}
                    >
                      <div>
                        <h2 onClick={() => this.dispIcon(item, idx)}>
                          {i.Title}
                        </h2>

                        <div>
                          {i.showAssets ? (
                            <div>
                              <div className={styles.alignCard}>
                                <div>
                                  <Card className={styles.card}>
                                    <img
                                      className={styles.cardImg}
                                      src={require("../../assets/courses/doc.png")}
                                      alt="Card"
                                    />
                                    <Button>READING</Button>
                                  </Card>
                                </div>
                                <div>
                                  <Card className={styles.card}>
                                    <img
                                      className={styles.cardImg}
                                      src={require("../../assets/courses/vid.png")}
                                      alt="Card"
                                    />
                                    <Button>VIDEO</Button>
                                  </Card>
                                </div>
                                <div>
                                  <Card className={styles.card}>
                                    <img
                                      className={styles.cardImg}
                                      src={require("../../assets/courses/pro.png")}
                                      alt=""
                                    />
                                    <Button>PROJECT</Button>
                                  </Card>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

{
  /* <div className={styles.alignCard}>
<div>
  <Card className={styles.card}>
    <img
      className={styles.cardImg}
      src={require("../../assets/courses/doc.png")}
      alt="Card"
    />
    <Button>READING</Button>
  </Card>
</div>
<div>
  <Card className={styles.card}>
    <img
      className={styles.cardImg}
      src={require("../../assets/courses/vid.png")}
      alt="Card"
    />
    <Button>VIDEO</Button>
  </Card>
</div>
<div>
  <Card className={styles.card}>
    <img
      className={styles.cardImg}
      src={require("../../assets/courses/pro.png")}
      alt=""
    />
    <Button>PROJECT</Button>
  </Card>
</div>
</div> */
}
