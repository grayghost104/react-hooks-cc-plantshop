import React, { useState } from "react";

function PlantCard({plant}) {
  const [showStock, setInStock] = useState(true)
  return (
    <li className="card" data-testid="plant-item">
      <img 
      // onClick={()=>setInStock(!showStock)}
       src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: $ {plant.price}</p>
      {true ? (
        <button onClick={()=>setInStock(!showStock)}
        // {showStock ? "In Stock" : "Out of Stock"}
         >{showStock ? "In Stock" : "Sold Out"}</button>
      ) : (
        <button>Out of Stock </button>
      )}
    </li>
  );
}

export default PlantCard;

/* The logic behind the button is that when you click anyone on the image it would change the 
In stock button to out of stock with the help of the ternary 
*/