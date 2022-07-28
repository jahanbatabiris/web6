import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

class ProfileTabs extends React.PureComponent {
  state = { activeIndex: 0 };

  handleChange = (_, activeIndex) => this.setState({ activeIndex });
  render() {
    const { activeIndex } = this.state;
    return (
      <div
        style={{
          display: "flex"
        }}
      >
        <VerticalTabs value={activeIndex} onChange={this.handleChange}>
          <Tab style={{color:'red !important'}} >hi</Tab>
          <Tab label="item two" ></Tab>
          <Tab label="item three" ></Tab>
          <MyTab label="item one" ></MyTab>
          <MyTab label="item two" ></MyTab>
          <MyTab label="item three"></MyTab>
          <MyTab label="item one"></MyTab>
          <MyTab label="item two"></MyTab>
          <MyTab label="item three"></MyTab>
        </VerticalTabs>

        {activeIndex === 0 && <TabContainer>Item One</TabContainer>}
        {activeIndex === 1 && <TabContainer>Item Two</TabContainer>}
        {activeIndex === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: "column"
  },
  indicator: {
    display: "none"
  }
}))(Tabs);

const MyTab = withStyles(theme => ({
  root: {
    backgroundColor: "#ccc",
  },
  wrapper: {
    padding: theme.spacing(2),
  },
  selected: {
    color: "tomato",
    borderLeft: "2px solid tomato"
  },
  flexContainer: {
    flexDirection: "column"
  },
}))(Tab);


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 24 }}>
      {props.children}
    </Typography>
  );
}

export default ProfileTabs;