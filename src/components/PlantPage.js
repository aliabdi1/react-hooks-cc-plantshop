import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(()=> {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then((data) => setPlants(data));

  }, []);

  const handleAddPlant = (newPlant) => {
    setPlants([...plants,newPlant])
  }

  const handleSearchChange = (term) => {
    setSearchTerm(term)
  }

  const filteredPlants = plants.filter((plants) => 
    plants.name.toLowerCase().includes(SearchTerm.toLowerCase()));


  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search setSearchTerm={setSearchTerm} onSearchChange={handleSearchChange}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
