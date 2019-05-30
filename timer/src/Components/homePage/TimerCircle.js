import React, { Components } from 'react';

// From Florin Pop: https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/
// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}


export default class TimerCircle extends React.Component {
    render() {
        const radius = this.props.circumference * (360 / this.props.initialSeconds); // each second (1500) is .24 of a degree in a circle (360)
        return (
          <div className="timerCircle" id="countdown-svg">
                <svg className="countdown-svg" preserveAspectRatio="xMidYMid meet">
                    <path className="path1"
                        fill="none"
                        // stroke="#6A7E99" emily's default
                        stroke="#519657"
                        strokeWidth="29"
                        // starts at .00001 to show tiny bar
                        d={describeArc(225, 225, 150, 0.00001, 360)} // background
                    />
                    <path className="path2"
                        fill="none"
                        stroke="#F4F1F4" 
                        strokeWidth="30"
                        // starts at .00001 to show tiny bar
                        d={describeArc(225, 225, 150, 0.00001, radius)} // progress bar
                    />
                </svg>
          </div>
        );
    }
}