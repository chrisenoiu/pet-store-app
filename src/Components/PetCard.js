import React from "react";

function PetCard(props) {
  return (
    <li>
      <div className="pet-card">
        <div className="pet-name">
          <a href={"pet/" + props.id}>
            <div>{props.name}</div>
          </a>
        </div>
        <div className="pet-status">Available</div>
      </div>
    </li>
  );
}

export default PetCard;
