import React, { Component, Fragment } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import LinearProgress from "@material-ui/core/LinearProgress";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle";

import SunburstChart from "components/Chart/Sunburst";

var _ = require("lodash");

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.channels = [
      { id: "UCH1oRy1dINbMVp3UFWrKP0w", name: "Good Morning America" },
      { id: "UCq18eeL7D9Vd8DhjMcLh9QQ", name: "Good Morning Britain" },
      { id: "UCPPIsrNlEkaFQBk-4uNkOaw", name: "Hebbar's Kitchen" },
      { id: "UCEXIAHV9bTpKyU30xmsykww", name: "ZYXTER Gaming" },
      { id: "UCVLbzhxVTiTLiVKeGV7WEBg", name: "Tutorials Point" },
    ];

    this.state = {
      details: {
        liked: {
          0: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            liked: 52512,
            title: "MS Excel - Vlookup in Excel Video Tutorials",
          },
          1: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            liked: 40168,
            title: "MS Excel - Pivot Table Example 1 Video Tutorials",
          },
          2: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            liked: 30764,
            title:
              "White soldier charged with assault for shoving, berating Black man in viral video l GMA",
          },
          3: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            liked: 17554,
            title: "MS PowerPoint - Basic Presentation",
          },
          4: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            liked: 15937,
            title: "MS Excel - Shortcuts Ctrl+A to Ctrl+Z",
          },
          5: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            liked: 15711,
            title: "MS Excel - Introduction - Beginner's Guide",
          },
          6: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            liked: 14883,
            title: "Soft Skills - Leadership Vs Management",
          },
          7: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            liked: 14224,
            title: "MS Excel - Basics",
          },
          8: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            liked: 13789,
            title: "Grandma, mother, daughter trio are dancing queens! | GMA",
          },
          9: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            liked: 13343,
            title: "Soft Skills - Presentation Skills",
          },
        },
        viewed: {
          0: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            title: "MS Excel - Vlookup in Excel Video Tutorials",
            views: 4079254.0,
          },
          1: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            title: "MS Excel - Pivot Table Example 1 Video Tutorials",
            views: 2763201.0,
          },
          2: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            title:
              "White soldier charged with assault for shoving, berating Black man in viral video l GMA",
            views: 1976920.0,
          },
          3: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            title: "MS Excel - Introduction - Beginner's Guide",
            views: 1420947.0,
          },
          4: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            title: "MS PowerPoint - Basic Presentation",
            views: 1332168.0,
          },
          5: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            title: "MS Excel - Basics",
            views: 1266226.0,
          },
          6: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            title: "MS Excel - Print Page Setup & Print Data Tips",
            views: 970313.0,
          },
          7: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            title: "Introduction to Control System",
            views: 871834.0,
          },
          8: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            title: "Soft Skills - Leadership Vs Management",
            views: 867725.0,
          },
          9: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            title: "MS Word - Paragraphs Formatting in Microsoft Office",
            views: 802288.0,
          },
        },
        disliked: {
          0: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            disliked: 9991.0,
            title:
              "White soldier charged with assault for shoving, berating Black man in viral video l GMA",
          },
          1: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            disliked: 5863.0,
            title:
              "Chicago police under fire after shooting death of 13-year-old l GMA",
          },
          2: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            disliked: 3964.0,
            title:
              "Family of 13-year-old shot by police continue to grieve l GMA",
          },
          3: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            disliked: 3238.0,
            title:
              "Pfizer CEO says COVID-19 booster shot will likely be necessary l GMA",
          },
          4: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            disliked: 1794.0,
            title:
              "Officer who killed Daunte Wright makes 1st court appearance l GMA",
          },
          5: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            disliked: 1614.0,
            title: "MS Excel - Vlookup in Excel Video Tutorials",
          },
          6: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            disliked: 1397.0,
            title: "Should you get a COVID-19 vaccine if you have a cold?",
          },
          7: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            disliked: 1193.0,
            title: "Possible new treatment for COVID-19",
          },
          8: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            disliked: 1125.0,
            title:
              "At least 8 dead, several wounded in Indianapolis FedEx shooting l GMA",
          },
          9: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            disliked: 1040.0,
            title:
              "Indianapolis community mourn victims of mass shooting l GMA",
          },
        },
        commented: {
          0: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            comment: 35273.0,
            title:
              "White soldier charged with assault for shoving, berating Black man in viral video l GMA",
          },
          1: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            comment: 13533.0,
            title:
              "Chicago police under fire after shooting death of 13-year-old l GMA",
          },
          2: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            comment: 6651.0,
            title:
              "Family of 13-year-old shot by police continue to grieve l GMA",
          },
          3: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            comment: 4796.0,
            title:
              "At least 8 dead, several wounded in Indianapolis FedEx shooting l GMA",
          },
          4: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            comment: 4522.0,
            title:
              "Officer who killed Daunte Wright makes 1st court appearance l GMA",
          },
          5: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            comment: 4172.0,
            title:
              "Pfizer CEO says COVID-19 booster shot will likely be necessary l GMA",
          },
          6: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            comment: 2152.0,
            title:
              "Indianapolis community mourn victims of mass shooting l GMA",
          },
          7: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            comment: 2067.0,
            title:
              "Fourth-grade trans activist testifies before Texas lawmakers | GMA",
          },
          8: {
            channelId: "UCH1oRy1dINbMVp3UFWrKP0w",
            comment: 1954.0,
            title:
              "Bodycam footage shows officer fatally shooting 13-year-old boy l GMA",
          },
          9: {
            channelId: "UCVLbzhxVTiTLiVKeGV7WEBg",
            comment: 1549.0,
            title: "MS Excel - Vlookup in Excel Video Tutorials",
          },
        },
      },
      isLoading: true,
    };
  }

  componentDidMount() {
    this.handleRequests();
  }

  handleRequests = () => {
    this.setState({ isLoading: true });

    let apiRequests = [];

    apiRequests.push(
      fetch("http://127.0.0.1:8000/most_viewed", {
        method: "GET",
      }).then((res) => res.json())
    );
    apiRequests.push(
      fetch("http://127.0.0.1:8000/most_liked", { method: "GEt" }).then((res) =>
        res.json()
      )
    );
    apiRequests.push(
      fetch("http://127.0.0.1:8000/most_disliked", {
        method: "GEt",
      }).then((res) => res.json())
    );
    apiRequests.push(
      fetch("http://127.0.0.1:8000/most_commented", {
        method: "GEt",
      }).then((res) => res.json())
    );

    Promise.all(apiRequests).then((responses) => {
      let details = {
        viewed: responses[0],
        liked: responses[1],
        disliked: responses[2],
        commented: responses[3],
      };
      this.setState({ details: details, isLoading: false });
    });
  };

  getDataForSunburst = (data, keyName) => {
    let channelLevelData = _.mapValues(
      _.groupBy(data, "channelId"),
      (videos) => {
        let channelId = videos[0].channelId;
        let channel = this.channels.find((c) => c.id === channelId);
        return {
          id: channelId,
          parent: "",
          name: channel ? channel.name : "",
          value: videos.map((v) => v[keyName]).reduce((a, b) => a + b, 0),
        };
      }
    );

    let consolidated = [
      ...data.map((v) => ({
        id: v.title,
        parent: v.channelId,
        name: v.title,
        value: v[keyName],
      })),
    ].concat(Object.values(channelLevelData));

    return consolidated;
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.container}>
            <div className={classes.flex}>
              <h3 className={classes.title}>Youtube Data Analysis</h3>
            </div>
          </Toolbar>
        </AppBar>
        {this.state.isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <LinearProgress
              style={{ height: "20px", width: "100px" }}
              color="primary"
            />
          </div>
        ) : (
          <Fragment>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Card chart>
                  <CardHeader color="success">
                    <SunburstChart
                      data={this.getDataForSunburst(
                        Object.values(this.state.details.viewed),
                        "views"
                      )}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Most viewed videos</h4>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Card chart>
                  <CardHeader color="warning">
                    <SunburstChart
                      data={this.getDataForSunburst(
                        Object.values(this.state.details.liked),
                        "liked"
                      )}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Most liked videos</h4>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Card chart>
                  <CardHeader color="danger">
                    <SunburstChart
                      data={this.getDataForSunburst(
                        Object.values(this.state.details.commented),
                        "comment"
                      )}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Most commented videos</h4>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Card chart>
                  <CardHeader color="info">
                    <SunburstChart
                      data={this.getDataForSunburst(
                        Object.values(this.state.details.disliked),
                        "disliked"
                      )}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Most disliked videos</h4>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
