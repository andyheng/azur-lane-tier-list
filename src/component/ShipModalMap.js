import React, {Fragment} from "react";

const ShipModalMap = (props) => (
  props.skills
    .map(skill => (
      <div key={skill.skillName} className="modal__skill-container">
        <div className="modal__skill-title">
          <h4>{skill.skillName}</h4>
          <p className={`modal__skill modal__skill--${skill.skillType}`}><em>{skill.skillType}</em></p>
        </div>
        <div className="modal__skill-desc">
          <p>{skill.skillDescription}</p>
        </div>
      </div>
    ))
)

export default ShipModalMap