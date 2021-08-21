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
    content = pets.map((data, index) => {
      return <PetCard key={index} name={data.name} id={data.id}></PetCard>;
    });
  } else {
    content = (
      <div>
        <p>No requests found! Try again.</p>
        <a href="/">
          <button className="btn m25">Refresh</button>
        </a>
      </div>
    );
  }

  return (
    <div className="list-container">
      <div className="m25">Pet List</div>
      <ul>{content}</ul>
    </div>
  );
}

export default Home;
