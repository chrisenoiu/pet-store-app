import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
  let content = null;
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const url = `https://petstore.swagger.io/v2/pet/${id}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setPet(response.data);
    });
  }, [url]);

  if (pet) {
    content = (
      <div className="pet-list-content">
        <div className="pet-card pet-header">
          <div className="pet-name">{pet.name}</div>
          <div className="pet-status">Id: {pet.id}</div>
        </div>

        <div className="pet-info">
          <img className="pet-info-img" src={pet.photoUrls} alt=""></img>
          <div>
            <p className="pet-info-txt">Status: {pet.status}</p>
          </div>
        </div>

        <div className="pet-tags">
          <div className="sub-title">TAGS</div>

          <div className="pet-tags-list">
            {pet.tags.map((data, key) => {
              return (
                <div className="pet-tag" key={key}>
                  {data.name}
                </div>
              );
            })}
          </div>
        </div>

        <a href="/">
          <button className="back-btn">Back</button>
        </a>
      </div>
    );
  } else {
    content = (
      <div className="error-content">
        <div>The information isn't available!</div>
        <div>
          <a href="/pet-store-app">
            <button className="back-btn">Go back!</button>
          </a>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
