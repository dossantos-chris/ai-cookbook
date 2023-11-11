'use client'
import { Suspense, useState } from "react";
import Spinner from "./Spinner";

const FoodForm = () => {
  const controller = new AbortController();
  const signal = controller.signal;
  const [food, setFood] = useState("");
  const [recipe, setRecipe] = useState("");

  const handleFoodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const fetchRecipe = async () => {
      try {
        setRecipe("Loading...");
        const res = await fetch("http://127.0.0.1:5000/api", {
          signal,
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: food
        });
      
        const resData = await res.json();
        setRecipe(resData["text"]);
      }
      catch(e: any){
        console.log(e);
        setRecipe('Error generating recipe');
      }
    }

    fetchRecipe()
  }

  const clearRecipe = (e: React.FormEvent) => {
    e.preventDefault();
    controller.abort();
    setRecipe("");
  }

  return (
  <>
    <div className="w-1/3 bg-white p-6 rounded-lg mt-36">
      <h1 className="text-2xl font-bold mb-4">Generate a Recipe</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">What would you like to cook?</label>
          <input
            className="mt-1 p-2 block w-full border rounded-md"
            placeholder="Enter food here"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>
        <div>
          <button 
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={handleFoodSubmit}
          >
          Generate
          </button>
          <button 
            className="bg-blue-500 text-white p-2 ml-2 rounded-md hover:bg-blue-600"
            onClick={clearRecipe} //Figure out why its not aborting , also implement abort for sending multiple POSTs after eachother
          >
          Clear
          </button>
        </div>
      </form>
    </div>
    <div className="w-1/2 bg-white p-6 mt-6 rounded-lg">
      {recipe}
    </div>
  </>
  )
}

export default FoodForm