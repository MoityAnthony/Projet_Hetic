import React, { Component } from "react";
import History from "../History";
import { ReactComponent as RoomClim } from "../../room_clim.svg";
import { ReactComponent as RoomLight } from "../../room_light.svg";
import { ReactComponent as RoomInfra } from "../../room_infra.svg";
import Title from "../Title";
import { ReactComponent as Logo } from "../../logo.svg";
import { ReactComponent as SliderIcon } from "../../slider_icon.svg";
import Visuel from "../Visuel/index.js";
import Controleur from "../controller/index.js";
import { ReactComponent as ScrollIcon } from "../../scroll_icon.svg";
var CSSTransitionGroup = require("react-transition-group/CSSTransitionGroup");


export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: [
        {
          item: [
            {
              image: <RoomLight />,
              text: "L'éclairage",
              status: "visible",
              status_light_block: "visible",
              status_infra_rouge: "hidden",
              status_clim_block: '',
              intensity: this.props.intensity,
            },
          ],
        },
        {
          item: [
            {
              image: <RoomClim />,
              text: "La ventilation",
              status: "hidden",
              status_light_block: "hidden",
              status_infra_rouge: "hidden",
              status_clim_block: this.props.clim,
              intensity: '',
            },
          ],
        },
        {
          item: [
            {
              image: <RoomInfra />,
              text: "L'infrarouge",
              status: "hidden",
              status_light_block: "hidden",
              status_infra_rouge: "visible",
              status_clim_block: '',
              intensity: '',
            },
          ],
        },
      ],
      current: 0,
      isNext: true,
    };

    this.goToHistoryClick = this.goToHistoryClick.bind(this);
  }

  goToHistoryClick(curIndex, index) {
    let next = curIndex < index;
    this.setState({
      current: index,
      isNext: next,
    });
  }

  render() {
    let index = this.state.current,
      isnext = this.state.isNext,
      src = this.state.section[index].item[0].image,
      text = this.state.section[index].item[0].text,
      status = this.state.section[index].item[0].status,
      status_light_block = this.state.section[index].item[0].status_light_block,
      status_clim_block = this.state.section[index].item[0].status_clim_block,
      status_infra_rouge = this.state.section[index].item[0].status_infra_rouge,
      intensity = this.state.section[index].item[0].intensity;

    return (
      <div className="slider_carousel">
        <div className="carousel">
          <CSSTransitionGroup
            transitionName={{
              enter: isnext ? "enter-next" : "enter-prev",
              enterActive: "enter-active",
              leave: "leave",
              leaveActive: isnext ? "leave-active-next" : "leave-active-prev",
            }}
          >
            <div className="carousel_slide" key={index}>
              <div className="flex_container">
                <Logo className="logo" />
                <Visuel image={src} status_light_block={status_light_block} status_infra_rouge={status_infra_rouge} status_clim_block={status_clim_block} intensity={intensity} />
                <div className="block_container">
                  <Title text={text} />
                  {/* <Controleur status={status} /> */}
                </div>
              </div>
              <a href="#light_block">
                <ScrollIcon className="scroll_icon" />
              </a>
            </div>
          </CSSTransitionGroup>
          <div className="carousel_history">
            <History
              current={this.state.current}
              section={this.state.section}
              changeSilde={this.goToHistoryClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
