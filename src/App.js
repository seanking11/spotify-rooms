import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        requestFailed: false,
        dataSlice: {}
      }
    }

  componentDidMount() {
      fetch("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg", {
        header: {
          Accept: "application/json",
          Authorization: "Bearer BQBI520u0D8DAQBaQeEbW-clBJgGYjr1a3n_pArB5KhpGt16ZA217YqRa0_iBoS3vViz5mLq7oz9y5YPMiIAjKI4UdxXGqqYGmKILt-GPsDvsOQM_C5qce2usfpXNR09gltEfACiSOWsfZmhKg"
        }
      })
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response;
      })
      .then(d => d.json())
      .then(d => {
        console.log(d);
        this.setState({
          apiData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
    }

  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="Hello" secondary />
      </MuiThemeProvider>
    );
  }
}

export default App;
