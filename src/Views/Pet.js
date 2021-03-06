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
      <div className="column m25">
        <div className="pet-content-header">
          <div className="pet-content-name">{pet.name}</div>
          <div className="pet-content-id">Id: {pet.id}</div>
        </div>

        <div className="column m25">
          <img className="pet-info-img" src={pet.photoUrls} alt=""></img>
          <div>
            <p className="pet-info-txt">Status: {pet.status}</p>
          </div>
        </div>

        <div className="column dark-c">
          <h2>About</h2>

          <div>
            {pet.tags.map((data, index) => {
              return (
                <div className="dark-c" key={index}>
                  {data.name}
                </div>
              );
            })}
          </div>
        </div>

        <a href="/">
          <button className="btn m25">Back</button>
        </a>
      </div>
    );
  } else {
    content = (
      <div className="m25 column secondary-c">
        <p>The information isn't available!</p>
        <a href="/">
          <button className="btn m25">Back</button>
        </a>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
