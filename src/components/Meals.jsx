import { useState, useEffect } from 'react';

import MealItem from './MealItem.jsx';
import useHttp from './hooks/useHttp.js';

const reqconfig = {};
export default function Meals() {
  const {data: loadedMeals,isLoading,error}= useHttp('http://localhost:3000/meals',reqconfig,[]);


// /////////////
  // instead of this we are using useHttp
  // const [loadedMeals, setLoadedMeals] = useState([]);
  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch('http://localhost:3000/meals');

  //     if (!response.ok) {
  //       // ...
  //     }

  //     const meals = await response.json();
  //     setLoadedMeals(meals);
  //   }

  //   fetchMeals();
  // }, []);

// /////////////

if(isLoading){
  <p className='center'>Feting meals...</p>
}

if(error){
  return <Error title="failed to fetch meals" message={error}/>
}
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}