var React = require('react');
var Form = require('Form');
var Message = require('Message');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function () {

    return {
      isLoading: false
    }
  },

  hendleNewData: function (location) {

    var that = this;

    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function (temp) {

      that.setState({

        location: location,
        temp: temp,
        isLoading: false
      });

    }, function (errorMessage) {
      that.setState({ isLoading: false });
    }
    );

  },

  render: function () {

    var { errorMessage1, isLoading, location, temp } = this.state;

    function renderMessage() {
      if (isLoading) {

        return <h3>Featching Weather...</h3>

      } else if (location && temp) {

        return <Message location={location} temp={temp} />
      }
    }

    return (

      <div>

        <h2>Weather Component</h2>

        <Form onNewData={this.hendleNewData} />

        {renderMessage()}

      </div>

    );
  }
});

module.exports = Weather;