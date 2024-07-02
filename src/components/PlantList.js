import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, search}) {
const searchPlant = plantList.filter((plant)=>{
  if(plant.name.toLowerCase().includes(search)){
    return true 
  }
  return false 
})

const mappedPlants = searchPlant.map((plant)=>{
  return <PlantCard key={plant.id} plant={plant}/>
})

  return (
    <div> 
      {mappedPlants}
    <ul className="cards">{/* render PlantCards components in here */}</ul>
    </div>
  );
}

export default PlantList;
