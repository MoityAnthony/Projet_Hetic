import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PositionJoystick extends Component {
  static propTypes = {
    data: PropTypes.shape({
      direction: PropTypes.shape({
        x: PropTypes.string,
        y: PropTypes.string,
        angle: PropTypes.string,
      }),
    }),
  };

  render() {
    const { direction = {} } = this.props.data || {};

    var light_position = [];

    var last_light_position = [];

    var position_joystick = [];

    (function () {
      if (!console) {
        console = {};
      }
      var logger = document.getElementById("log");
      console.log = function (message) {
        if (typeof message == "object") {
          last_light_position =
            JSON && JSON.stringify ? JSON.stringify(message) : Array(message);
          logger.innerHTML = last_light_position;
        } else {
          last_light_position = message;
          logger.innerHTML = last_light_position;
        }
      };
    })();

    const LightPosition = () => {
      if (
        (direction.x === "right" || direction.x === "left") &&
        direction.y === "up" &&
        direction.angle === "up"
      ) {
        var new_light_position = [
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
        ];

        console.log(new_light_position);

        return (
          <ul className="light_position">
            <li>
              <ul>
                {new_light_position.map((new_light_position, i) => (
                  <li key={i}>{new_light_position + ""}</li>
                ))}
              </ul>
            </li>
          </ul>
        );
      } else if (
        (direction.x === "right" || direction.x === "left") &&
        direction.y === "down" &&
        direction.angle === "down"
      ) {
        var new_light_position = [
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
        ];

        console.log(new_light_position);

        return (
          <ul className="light_position">
            <li>
              <ul>
                {new_light_position.map((new_light_position, i) => (
                  <li key={i}>{new_light_position + ""}</li>
                ))}
              </ul>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className="light_position">
            <li>
              <ul>
                {light_position.map((light_position, i) => (
                  <li key={i}>{light_position + ""}</li>
                ))}
              </ul>
            </li>
          </ul>
        );
      }
    };

    return (
      <div className="debug">
        <h4 className="direction">
          Direction :
        </h4>
        <ul>
          <li className="x">
            x :
            <span className="data" children={direction.x} />
          </li>
          <li className="y">
            y :
            <span className="data" children={direction.y} />
          </li>
          <li className="angle">
            angle :
            <span className="data" children={direction.angle} />
          </li>
        </ul>
        <h4>Light position : </h4>
        <div id="log"></div>
        <LightPosition/>
      </div>
    );
  }
}
