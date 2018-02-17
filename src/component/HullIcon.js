import React from "react"
import CV from "../images/hullIcons/CV.png";
import BB from "../images/hullIcons/BB.png";
import CL from "../images/hullIcons/CL.png";
import CA from "../images/hullIcons/CA.png";
import DD from "../images/hullIcons/DD.png";
import AR from "../images/hullIcons/AR.png";
import BBV from "../images/hullIcons/BBV.png";

const HullIcon = (props) => {
  const HullIcons = {
    AR,
    BB,
    BC: BB,
    BBV: BBV,
    CA,
    CL,
    CV,
    CVL: CV,
    DD
  }
  return (
    <img src={HullIcons[props.hullType]} className="item__hull" />
  )
}

export default HullIcon;