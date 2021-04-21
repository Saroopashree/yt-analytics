import React, { Component, Fragment } from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import LinearProgress from "@material-ui/core/LinearProgress";
// core components
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Table from "components/Table/Table";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle";
import TreemapChart from "components/Chart/TreemapChart";
import StackedBarChart from "components/Chart/StackedBar";

const useStyles = makeStyles(styles);

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.channels = [
      { id: "UCH1oRy1dINbMVp3UFWrKP0w", name: "Good Morning America" },
      { id: "UCq18eeL7D9Vd8DhjMcLh9QQ", name: "Good Morning Britain" },
      { id: "UCPPIsrNlEkaFQBk-4uNkOaw", name: "Hebbar's Kitchen" },
      { id: "UCVLbzhxVTiTLiVKeGV7WEBg", name: "Tutorials Point" },
      { id: "UCEXIAHV9bTpKyU30xmsykww", name: "ZYXTER Gaming" },
    ];

    this.state = {
      currentChannel: this.channels[0].id,
      summary: {
        subscriberCount: { 0: 2200000.0 },
        likedCount: { 0: 2845884 },
        videoCount: { 0: 12930.0 },
        viewCount: { 0: 269555201.0 },
      },
      details: {
        all: {
          0: {
            comment: 1549.0,
            disliked: 1614.0,
            liked: 52512,
            title: "MS Excel - Vlookup in Excel Video Tutorials",
            url: "https://www.youtube.com/watch?v=Jwo5Ae7tH_I",
            views: 4079254.0,
          },
          1: {
            comment: 1333.0,
            disliked: 916.0,
            liked: 40168,
            title: "MS Excel - Pivot Table Example 1 Video Tutorials",
            url: "https://www.youtube.com/watch?v=4PWVFBiFVVU",
            views: 2763201.0,
          },
          2: {
            comment: 339.0,
            disliked: 248.0,
            liked: 15711,
            title: "MS Excel - Introduction - Beginner's Guide",
            url: "https://www.youtube.com/watch?v=-ujVQzTtxSg",
            views: 1420947.0,
          },
          3: {
            comment: 520.0,
            disliked: 722.0,
            liked: 17554,
            title: "MS PowerPoint - Basic Presentation",
            url: "https://www.youtube.com/watch?v=tcj2BhhCMN4",
            views: 1332168.0,
          },
          4: {
            comment: 469.0,
            disliked: 345.0,
            liked: 14224,
            title: "MS Excel - Basics",
            url: "https://www.youtube.com/watch?v=rJPWi5x0g3I",
            views: 1266226.0,
          },
          5: {
            comment: 383.0,
            disliked: 417.0,
            liked: 10657,
            title: "MS Excel - Print Page Setup & Print Data Tips",
            url: "https://www.youtube.com/watch?v=DPh9ZPzExTI",
            views: 970313.0,
          },
          6: {
            comment: 361.0,
            disliked: 167.0,
            liked: 7361,
            title: "Introduction to Control System",
            url: "https://www.youtube.com/watch?v=XMfH2P2Fc6Q",
            views: 871834.0,
          },
          7: {
            comment: 453.0,
            disliked: 487.0,
            liked: 14883,
            title: "Soft Skills - Leadership Vs Management",
            url: "https://www.youtube.com/watch?v=DwwBZn5duk8",
            views: 867725.0,
          },
          8: {
            comment: 364.0,
            disliked: 453.0,
            liked: 11802,
            title: "MS Word - Paragraphs Formatting in Microsoft Office",
            url: "https://www.youtube.com/watch?v=TVe7XkvGu2I",
            views: 802288.0,
          },
          9: {
            comment: 421.0,
            disliked: 244.0,
            liked: 10718,
            title: "MS Excel - Advanced Filters",
            url: "https://www.youtube.com/watch?v=UV-SPoVkDaU",
            views: 789995.0,
          },
          10: {
            comment: 471.0,
            disliked: 432.0,
            liked: 13343,
            title: "Soft Skills - Presentation Skills",
            url: "https://www.youtube.com/watch?v=ADJAcyTq1us",
            views: 785976.0,
          },
          11: {
            comment: 526.0,
            disliked: 302.0,
            liked: 10101,
            title: "MS Excel - Import Live Data From Web to Excel",
            url: "https://www.youtube.com/watch?v=2yTAyVXzFGg",
            views: 774032.0,
          },
          12: {
            comment: 219.0,
            disliked: 198.0,
            liked: 6870,
            title: "MS Excel - Editing Data",
            url: "https://www.youtube.com/watch?v=ZnXYEljrelM",
            views: 754281.0,
          },
          13: {
            comment: 803.0,
            disliked: 472.0,
            liked: 10441,
            title: "Powerpoint - Convert PowerPoint to Video File",
            url: "https://www.youtube.com/watch?v=JG_APSVrZ1Y",
            views: 750439.0,
          },
          14: {
            comment: 497.0,
            disliked: 286.0,
            liked: 15937,
            title: "MS Excel - Shortcuts Ctrl+A to Ctrl+Z",
            url: "https://www.youtube.com/watch?v=Fy-CUwFT97s",
            views: 742731.0,
          },
          15: {
            comment: 261.0,
            disliked: 212.0,
            liked: 7593,
            title: "MS Excel - Copying and Filling - Tricks",
            url: "https://www.youtube.com/watch?v=OUOU9rRWPsQ",
            views: 734948.0,
          },
          16: {
            comment: 222.0,
            disliked: 204.0,
            liked: 6704,
            title: "MS Excel - Formatting",
            url: "https://www.youtube.com/watch?v=TKY_AuLMQIc",
            views: 730528.0,
          },
          17: {
            comment: 264.0,
            disliked: 315.0,
            liked: 8408,
            title: "MS Excel - Filtering Data",
            url: "https://www.youtube.com/watch?v=JNZqRYkgZ4c",
            views: 727133.0,
          },
          18: {
            comment: 316.0,
            disliked: 315.0,
            liked: 10934,
            title: "MS Word - Basics",
            url: "https://www.youtube.com/watch?v=ME_F9yypzsw",
            views: 722023.0,
          },
          19: {
            comment: 401.0,
            disliked: 348.0,
            liked: 10507,
            title: "MS Word  - Insert Pictures",
            url: "https://www.youtube.com/watch?v=X8e5WCdxbx0",
            views: 719187.0,
          },
          20: {
            comment: 502.0,
            disliked: 369.0,
            liked: 8228,
            title: "MS Excel - Cell Reference",
            url: "https://www.youtube.com/watch?v=LFIykJmL4M8",
            views: 688701.0,
          },
          21: {
            comment: 217.0,
            disliked: 239.0,
            liked: 6415,
            title: "MS Excel - IF Function",
            url: "https://www.youtube.com/watch?v=Os5S7B6jkxY",
            views: 663974.0,
          },
          22: {
            comment: 315.0,
            disliked: 187.0,
            liked: 9956,
            title: "MS Excel - Text Functions",
            url: "https://www.youtube.com/watch?v=4mwaiA4rL4o",
            views: 656216.0,
          },
          23: {
            comment: 126.0,
            disliked: 286.0,
            liked: 5275,
            title: "MS Excel - Compare Two Sheets",
            url: "https://www.youtube.com/watch?v=kwAPsnDpPxE",
            views: 639607.0,
          },
          24: {
            comment: 259.0,
            disliked: 137.0,
            liked: 5552,
            title:
              "Introduction to Tableau | How Tableau Works | Tableau Courses",
            url: "https://www.youtube.com/watch?v=gWZtNdMko1k",
            views: 633449.0,
          },
          25: {
            comment: 220.0,
            disliked: 190.0,
            liked: 6417,
            title: "Problem 1 on Block Diagram Reduction",
            url: "https://www.youtube.com/watch?v=7a2pyG1JkHQ",
            views: 630832.0,
          },
          26: {
            comment: 381.0,
            disliked: 169.0,
            liked: 9114,
            title: "MS Excel - Data Validation",
            url: "https://www.youtube.com/watch?v=nMxl1_NAcxc",
            views: 629041.0,
          },
          27: {
            comment: 272.0,
            disliked: 213.0,
            liked: 9598,
            title: "MS Excel - Consolidation",
            url: "https://www.youtube.com/watch?v=_lT8CpBXAWg",
            views: 626060.0,
          },
          28: {
            comment: 266.0,
            disliked: 183.0,
            liked: 7529,
            title: "Block Diagram Reduction",
            url: "https://www.youtube.com/watch?v=NUUGOgkOd1A",
            views: 617973.0,
          },
          29: {
            comment: 118.0,
            disliked: 96.0,
            liked: 4118,
            title: "MS Excel - Tabs & Groups",
            url: "https://www.youtube.com/watch?v=diWl_7obZjA",
            views: 602444.0,
          },
          30: {
            comment: 384.0,
            disliked: 436.0,
            liked: 7708,
            title: "Karnaugh Map (K-Map)",
            url: "https://www.youtube.com/watch?v=wjM2RDG5yTI",
            views: 578312.0,
          },
          31: {
            comment: 182.0,
            disliked: 77.0,
            liked: 5309,
            title: "Excel VBA - Introduction",
            url: "https://www.youtube.com/watch?v=FGQ0P9jTjU0",
            views: 577090.0,
          },
          32: {
            comment: 528.0,
            disliked: 331.0,
            liked: 10667,
            title: "MS Word - Mail Merge",
            url: "https://www.youtube.com/watch?v=iCxm0RZG4Fk",
            views: 561371.0,
          },
          33: {
            comment: 80.0,
            disliked: 66.0,
            liked: 3904,
            title: "MS Excel - Create & Close Files",
            url: "https://www.youtube.com/watch?v=bi-zr7j-eCU",
            views: 559754.0,
          },
          34: {
            comment: 304.0,
            disliked: 312.0,
            liked: 8985,
            title: "Soft Skills - First Time Managers",
            url: "https://www.youtube.com/watch?v=Ih3zVyz8H8U",
            views: 558142.0,
          },
          35: {
            comment: 212.0,
            disliked: 198.0,
            liked: 7069,
            title: "MS Excel - Conditional Formatting Part 1",
            url: "https://www.youtube.com/watch?v=7iKoccSTNZA",
            views: 555902.0,
          },
          36: {
            comment: 221.0,
            disliked: 345.0,
            liked: 5058,
            title: "S-R Flip Flop",
            url: "https://www.youtube.com/watch?v=tSti91b6qec",
            views: 524590.0,
          },
          37: {
            comment: 191.0,
            disliked: 307.0,
            liked: 6312,
            title: "Introduction to Computers",
            url: "https://www.youtube.com/watch?v=-AP1nNK3bRs",
            views: 477381.0,
          },
          38: {
            comment: 167.0,
            disliked: 144.0,
            liked: 4585,
            title: "MS Excel - Date Functions Part 1",
            url: "https://www.youtube.com/watch?v=lVfChEjnBu8",
            views: 472281.0,
          },
          39: {
            comment: 193.0,
            disliked: 243.0,
            liked: 5869,
            title: "MS Excel - Pie, Bar, Column & Line Chart",
            url: "https://www.youtube.com/watch?v=Z2gzLYaQatQ",
            views: 467663.0,
          },
          40: {
            comment: 249.0,
            disliked: 250.0,
            liked: 6202,
            title: "MS Word - Table part 1",
            url: "https://www.youtube.com/watch?v=3v3J1bBKn8c",
            views: 455727.0,
          },
          41: {
            comment: 207.0,
            disliked: 92.0,
            liked: 4375,
            title: "MS Excel - Text to Columns",
            url: "https://www.youtube.com/watch?v=D81rxIxCcYk",
            views: 443990.0,
          },
          42: {
            comment: 176.0,
            disliked: 200.0,
            liked: 5156,
            title: "MS Word - Page Setup Part 1",
            url: "https://www.youtube.com/watch?v=CCeRlrWOPUU",
            views: 438149.0,
          },
          43: {
            comment: 239.0,
            disliked: 127.0,
            liked: 4163,
            title: "Problem on Signal Flow Graph",
            url: "https://www.youtube.com/watch?v=9eAzSCKuGtc",
            views: 423249.0,
          },
          44: {
            comment: 224.0,
            disliked: 265.0,
            liked: 4969,
            title: "Rules for K-Map Simplification Part 1",
            url: "https://www.youtube.com/watch?v=eu5mqMepGuQ",
            views: 423086.0,
          },
          45: {
            comment: 114.0,
            disliked: 62.0,
            liked: 3137,
            title: "Digital Electronics Overview",
            url: "https://www.youtube.com/watch?v=vsoYlH1_hbc",
            views: 421944.0,
          },
          46: {
            comment: 94.0,
            disliked: 154.0,
            liked: 3187,
            title: "MS Excel - Basic Formulas",
            url: "https://www.youtube.com/watch?v=4rjOtiZGTM4",
            views: 417391.0,
          },
          47: {
            comment: 88.0,
            disliked: 97.0,
            liked: 2643,
            title: "Excel VBA - Write a Simple Macro",
            url: "https://www.youtube.com/watch?v=PoIVp9VWo4I",
            views: 416240.0,
          },
          48: {
            comment: 229.0,
            disliked: 151.0,
            liked: 4353,
            title: "Problem 2 on Block Diagram Reduction",
            url: "https://www.youtube.com/watch?v=ilN6-m7Oxf8",
            views: 414785.0,
          },
          49: {
            comment: 166.0,
            disliked: 133.0,
            liked: 4616,
            title: "MS Excel - Data Sorting",
            url: "https://www.youtube.com/watch?v=m97Rbqs6ico",
            views: 412343.0,
          },
        },
        viewed: {
          0: {
            title: "MS Excel - Vlookup in Excel Video Tutorials",
            views: 4079254.0,
          },
          1: {
            title: "MS Excel - Pivot Table Example 1 Video Tutorials",
            views: 2763201.0,
          },
          2: {
            title: "MS Excel - Introduction - Beginner's Guide",
            views: 1420947.0,
          },
          3: { title: "MS PowerPoint - Basic Presentation", views: 1332168.0 },
          4: { title: "MS Excel - Basics", views: 1266226.0 },
          5: {
            title: "MS Excel - Print Page Setup & Print Data Tips",
            views: 970313.0,
          },
          6: { title: "Introduction to Control System", views: 871834.0 },
          7: {
            title: "Soft Skills - Leadership Vs Management",
            views: 867725.0,
          },
          8: {
            title: "MS Word - Paragraphs Formatting in Microsoft Office",
            views: 802288.0,
          },
          9: { title: "MS Excel - Advanced Filters", views: 789995.0 },
        },
        liked: {
          0: {
            liked: 52512,
            title: "MS Excel - Vlookup in Excel Video Tutorials",
          },
          1: {
            liked: 40168,
            title: "MS Excel - Pivot Table Example 1 Video Tutorials",
          },
          2: { liked: 17554, title: "MS PowerPoint - Basic Presentation" },
          3: { liked: 15937, title: "MS Excel - Shortcuts Ctrl+A to Ctrl+Z" },
          4: {
            liked: 15711,
            title: "MS Excel - Introduction - Beginner's Guide",
          },
          5: { liked: 14883, title: "Soft Skills - Leadership Vs Management" },
          6: { liked: 14224, title: "MS Excel - Basics" },
          7: { liked: 13343, title: "Soft Skills - Presentation Skills" },
          8: {
            liked: 11802,
            title: "MS Word - Paragraphs Formatting in Microsoft Office",
          },
          9: { liked: 10934, title: "MS Word - Basics" },
        },
        disliked: {
          0: {
            disliked: 9991.0,
            title:
              "White soldier charged with assault for shoving, berating Black man in viral video l GMA",
          },
          1: {
            disliked: 5863.0,
            title:
              "Chicago police under fire after shooting death of 13-year-old l GMA",
          },
          2: {
            disliked: 3964.0,
            title:
              "Family of 13-year-old shot by police continue to grieve l GMA",
          },
          3: {
            disliked: 3238.0,
            title:
              "Pfizer CEO says COVID-19 booster shot will likely be necessary l GMA",
          },
          4: {
            disliked: 1794.0,
            title:
              "Officer who killed Daunte Wright makes 1st court appearance l GMA",
          },
          5: {
            disliked: 1614.0,
            title: "MS Excel - Vlookup in Excel Video Tutorials",
          },
          6: {
            disliked: 1397.0,
            title: "Should you get a COVID-19 vaccine if you have a cold?",
          },
          7: {
            disliked: 1193.0,
            title: "Possible new treatment for COVID-19",
          },
          8: {
            disliked: 1125.0,
            title:
              "At least 8 dead, several wounded in Indianapolis FedEx shooting l GMA",
          },
          9: {
            disliked: 1040.0,
            title:
              "Indianapolis community mourn victims of mass shooting l GMA",
          },
        },
        commented: {
          0: {
            comment: 1549.0,
            title: "MS Excel - Vlookup in Excel Video Tutorials",
          },
          1: {
            comment: 1333.0,
            title: "MS Excel - Pivot Table Example 1 Video Tutorials",
          },
          2: {
            comment: 803.0,
            title: "Powerpoint - Convert PowerPoint to Video File",
          },
          3: { comment: 528.0, title: "MS Word - Mail Merge" },
          4: {
            comment: 526.0,
            title: "MS Excel - Import Live Data From Web to Excel",
          },
          5: { comment: 520.0, title: "MS PowerPoint - Basic Presentation" },
          6: { comment: 502.0, title: "MS Excel - Cell Reference" },
          7: { comment: 497.0, title: "MS Excel - Shortcuts Ctrl+A to Ctrl+Z" },
          8: { comment: 471.0, title: "Soft Skills - Presentation Skills" },
          9: { comment: 469.0, title: "MS Excel - Basics" },
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
      fetch(
        `http://127.0.0.1:8000/channel_summary?${new URLSearchParams({
          channelID: this.state.currentChannel,
        }).toString()}`,
        { method: "GET" }
      ).then((res) => res.json())
    );
    apiRequests.push(
      fetch(
        `http://127.0.0.1:8000/channel_details?${new URLSearchParams({
          channelID: this.state.currentChannel,
        }).toString()}`,
        { method: "GET" }
      ).then((res) => res.json())
    );
    apiRequests.push(
      fetch(
        `http://127.0.0.1:8000/top10_views?${new URLSearchParams({
          channelID: this.state.currentChannel,
        }).toString()}`,
        { method: "GET" }
      ).then((res) => res.json())
    );
    apiRequests.push(
      fetch(
        `http://127.0.0.1:8000/top10_likes?${new URLSearchParams({
          channelID: this.state.currentChannel,
        }).toString()}`,
        { method: "GET" }
      ).then((res) => res.json())
    );
    apiRequests.push(
      fetch(
        `http://127.0.0.1:8000/top10_dislikes?${new URLSearchParams({
          channelID: this.state.currentChannel,
        }).toString()}`,
        { method: "GET" }
      ).then((res) => res.json())
    );
    apiRequests.push(
      fetch(
        `http://127.0.0.1:8000/top10_comment?${new URLSearchParams({
          channelID: this.state.currentChannel,
        }).toString()}`,
        { method: "GET" }
      ).then((res) => res.json())
    );

    Promise.all(apiRequests).then((responses) => {
      let summary = responses[0];
      let details = {
        all: responses[1],
        viewed: responses[2],
        liked: responses[3],
        disliked: responses[4],
        commented: responses[5],
      };

      this.setState({ summary: summary, details: details, isLoading: false });
    });
  };

  handleChannelChange = (event) => {
    this.setState({ currentChannel: event.target.value }, this.handleRequests);
  };

  getStackedBarProps = () => {
    let top5 = Object.values(this.state.details.all);
    top5 = top5
      .sort(
        (a, b) =>
          b.views +
          b.liked +
          b.disliked +
          b.comment -
          (a.views + a.liked + a.disliked + a.comment)
      )
      .slice(0, 5);

    let categories = [
      {
        category: top5.map((v) => ({
          label: v.title.length > 35 ? v.title.slice(0, 35) + "..." : v.title,
        })),
      },
    ];

    const colMap = {
      Likes: { key: "liked" },
      Dislikes: { key: "disliked" },
      Views: { key: "views" },
      Comments: { key: "comment" },
    };
    let dataset = Object.entries(colMap).map((e) => ({
      seriesName: e[0],
      data: top5.map((v) => ({ value: String(v[e[1].key]) })),
    }));

    return { categories, dataset };
  };

  render() {
    const { classes } = this.props;
    const colMap = {
      Title: { key: "title", link: "url" },
      Likes: { key: "liked" },
      Dislikes: { key: "disliked" },
      Views: { key: "views" },
      Comments: { key: "comment" },
    };

    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.container}>
            <div className={classes.flex}>
              <h3 className={classes.title} style={{ display: "inline" }}>
                Dashboard{" - "}
              </h3>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={this.state.currentChannel}
                onChange={this.handleChannelChange}
              >
                {this.channels.map((channel) => (
                  <MenuItem value={channel.id}>{channel.name}</MenuItem>
                ))}
              </Select>
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
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                      <Icon>content_copy</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Subscriber Count</p>
                    <h3 className={classes.cardTitle}>
                      {this.state.summary[0].subscriberCount.toLocaleString(
                        "en-IN"
                      )}
                    </h3>
                  </CardHeader>
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <Warning />
                      Total no. of Subscribers
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                      <Store />
                    </CardIcon>
                    <p className={classes.cardCategory}>View count</p>
                    <h3 className={classes.cardTitle}>
                      {this.state.summary[0].viewCount.toLocaleString("en-IN")}
                    </h3>
                  </CardHeader>
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <DateRange />
                      Total views in the channel
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="danger" stats icon>
                    <CardIcon color="danger">
                      <Icon>info_outline</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Video Count</p>
                    <h3 className={classes.cardTitle}>
                      {this.state.summary[0].videoCount.toLocaleString("en-IN")}
                    </h3>
                  </CardHeader>
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <LocalOffer />
                      No of videos uploaded
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                      <Accessibility />
                    </CardIcon>
                    <p className={classes.cardCategory}>Like Count</p>
                    <h3 className={classes.cardTitle}>
                      {this.state.summary[0].likedCount.toLocaleString("en-IN")}
                    </h3>
                  </CardHeader>
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <Update />
                      Total no. of likes in all videos
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Card chart>
                  <CardHeader color="success">
                    <TreemapChart
                      data={Object.values(this.state.details.viewed).map(
                        (v) => ({
                          x: v.title,
                          y: v.views,
                        })
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
                    <TreemapChart
                      data={Object.values(this.state.details.liked).map(
                        (v) => ({
                          x: v.title,
                          y: v.liked,
                        })
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
                    <TreemapChart
                      data={Object.values(this.state.details.commented).map(
                        (v) => ({
                          x: v.title,
                          y: v.comment,
                        })
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
                    <TreemapChart
                      data={Object.values(this.state.details.disliked).map(
                        (v) => ({
                          x: v.title,
                          y: v.disliked,
                        })
                      )}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Most disliked videos</h4>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <CardHeader color="warning">
                    <h4 className={classes.cardTitleWhite}>Popular Videos</h4>
                    <p className={classes.cardCategoryWhite}>
                      Videos that gained lot of traction
                    </p>
                  </CardHeader>
                  <CardBody>
                    <StackedBarChart {...this.getStackedBarProps()} />
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <CardHeader color="success">
                    <h4 className={classes.cardTitleWhite}>Detailed Stats</h4>
                    <p className={classes.cardCategoryWhite}>
                      50 Featured Videos
                    </p>
                  </CardHeader>
                  <CardBody>
                    <Table
                      tableHeaderColor="primary"
                      tableHead={Object.keys(colMap)}
                      tableData={Object.values(this.state.details.all)}
                      columnMap={colMap}
                    />
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

export default withStyles(styles)(Dashboard);
