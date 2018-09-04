import Colors from "./utils/colors";
import Dimensions from "./utils/dimensions";
import IndexPage from "./pages/index";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";

class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aspect: this.fetchAspect()
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.updateAspect());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updateAspect());
  }

  fetchAspect() {
    const width = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );

    let aspect = "desktop";
    if(width < Dimensions.tabletBreakpoint) {
      aspect = "mobile";
    } else if(width < Dimensions.desktopBreakpoint) {
      aspect = "tablet";
    }
    return(aspect);
  }

  updateAspect() {
    const aspect = this.fetchAspect();
    if(aspect !== this.state.aspect) {
      this.setState({aspect: aspect});
    }
  }

  render() {
    return(
      <ThemeProvider theme={{aspect: this.state.aspect, colors: Colors, dimensions: Dimensions, fonts: ["Helvetica Neue, Helvetica, Arial, sans-serif", "Open Sans, sans-serif"], fontWeights: [300, 400, 700]}}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={IndexPage}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

module.exports = Router;
