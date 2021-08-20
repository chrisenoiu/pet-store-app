import PetCard from "../Components/PetCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  let content = null;
  const [pets, setPets] = useState(null);
  const url =
    "https://petstore.swagger.io/v2/pet/findByStatus?status=available";

  useEffect(() => {
    axios.get(url).then((response) => {
      setPets(response.data);
    });
  }, [url]);

  if (pets) {
    content = pets.map((value, key) => {
      return <PetCard key={key} name={value.name} id={value.id}></PetCard>;
    });
  } else {
    content = (
      <div>
        <div>No requests found! Try again.</div>
        <a href="/">
          <button className="back-btn">Refresh</button>
        </a>
      </div>
    );
  }

  return (
    <div className="list-container">
      <ul>{content}</ul>
    </div>
  );
}

export default Home;
