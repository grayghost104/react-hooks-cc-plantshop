import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plantList, setplantList]= useState([])
const [search, setSearch]=useState("")

useEffect(()=>{
  fetch('http://localhost:6001/plants')
  .then(r=>r.json())
  .then(data=>setplantList(data))
},[])



function addPlant(newPLant){
  fetch('http://localhost:6001/plants',{
    method: "POST",
    headers:{
      "Content-Type":"application/JSON"
    },
    body: JSON.stringify(newPLant)
  })
  .then(r=>r.json())
  .then(data=>{
    const newPlantArr = [...plantList,data]
    setplantList(newPlantArr)
  })
}



  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList search={search} plantList={plantList}/>
    </main>
  );
}

export default PlantPage;
