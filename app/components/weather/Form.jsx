var React = require('react');

var Form = React.createClass({

    onFormSubmit: function (e) {
        e.preventDefault();

        // var updates = {}
        var location = this.refs.location.value;

        if (location.length > 0){

            this.refs.location.value = '';
            // updates.location = location;
            this.props.onNewData(location);
        }

        // this.props.onNewData(updates);

    },

    render: function () {

        return(
            
                <form onSubmit={ this.onFormSubmit }>
                    <input type="text" ref="location" />
                    <button> Search </button>
                </form>
        );
    }
});

module.exports = Form;
