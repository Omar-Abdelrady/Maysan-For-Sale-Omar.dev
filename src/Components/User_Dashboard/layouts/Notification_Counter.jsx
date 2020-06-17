import React from 'react';

class Notification_Counter extends React.Component {

    render() {
        if (this.props.notification_counter > 0) {
            return (
                <div className="notification-counter d-flex justify-content-center align-items-center position-absolute">
                    <span>
                        {this.props.notification_counter}
                    </span>
                </div>
            );
        }
        else {
            return (
                <div className="notification-counter2 d-flex justify-content-center align-items-center position-absolute">
                    <span>
                        {this.props.notification_counter}
                    </span>
                </div>
            );
        }
    }

}

export default Notification_Counter;