'use client'
import { useState } from "react";


export default function Home() {
  const [food, setFood] = useState("");

  const handleFoodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(food);
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-300">
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
    </main>
  );
}
