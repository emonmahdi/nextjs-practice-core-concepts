import Link from "next/link";
import MealsSearchInput from "./component/MealsSearchInput";

export default async function Meals({ searchParams }) {
  const query = await searchParams;
  console.log(query);

  const getMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query?.search}`
      );
      const data = await res.json();
      //   setMeals(data.meals || []);
      console.log(data?.meals);
      return data?.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await getMeals();

  return (
    <div>
      <div className="text-center bg-gray-500 py-8">
        <MealsSearchInput />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
        {meals?.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl p-4"
          >
            <h2>{meal.strMeal}</h2>
            <p>{meal.strCategory}</p>
            <p className="m-4">
              {meal.strInstructions.slice(0, 200)}..............
            </p>
            <Link
              href={"/"}
              className="bg-black text-white px-4 py-2 m-4 rounded-lg"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
