import React from "react";

function PetCard(props) {
  return (
    <li>
      <div className="pet-card">
        <div>
          <a href={"/pet/" + props.id}>
            <button className="btn">{props.name}</button>
          </a>
        </div>
        <div className="pet-status">Available</div>
      </div>
    </li>
  );
}

export default PetCard;
