import FoodForm from "@/components/FoodForm";

export default function Home() {
  
  const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <FoodForm/>
      <div className="w-1/4 bg-white p-6 mt-6 rounded-lg">
        {sampleText}
      </div>
    </main>
  );
}
