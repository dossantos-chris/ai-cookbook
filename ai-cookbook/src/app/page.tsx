import FoodForm from "@/components/FoodForm";
import Header from "@/components/Header";

export default function Home() {

  return (
    <main className="min-h-screen bg-gray-300">
      <Header/>
      <div className="flex flex-col items-center justify-center pt-8">
        <FoodForm/>
      </div>
    </main>
  );
}
