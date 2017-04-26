var React = require('react');

var Message = ({location, temp}) => {

        return(

            <div>
                <p> It's it {temp} (°C) in {location}</p>
            </div>
        );
}

module.exports = Message;