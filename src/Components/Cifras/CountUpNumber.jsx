import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CountUpNumber = ({ count, ...rest }) => {

    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <CountUp {...rest} start={viewPortEntered ? null : 0}>
          {({ countUpRef }) => {
            return (
              <VisibilitySensor
                active={!viewPortEntered}
                onChange={isVisible => {
                  if (isVisible) {
                    setViewPortEntered(true);
                  }
                }}
                delayedCall
              >
                <h1 className="count" ref={countUpRef} />
              </VisibilitySensor>
            );
          }}
        </CountUp>
      );
    };
    

export default CountUpNumber
