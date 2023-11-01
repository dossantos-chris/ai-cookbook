'use client'
import { useState } from "react";

const FoodForm = () => {
  const [food, setFood] = useState("");
  const [recipe, setRecipe] = useState("");

  const handleFoodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const fetchRecipe = async () => {
      setRecipe("loading...")
      try {
        const res = await fetch("http://127.0.0.1:5000/api", {
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
        setRecipe('error');
      }
    }

    fetchRecipe()
  }

  return (
  <>
    <div className="w-1/3 bg-white p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Generate a Recipe</h1>
      <form className="space-y-4" onSubmit={handleFoodSubmit}>
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
          <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
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