import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "NextJs App Recipes",
  description: "Make your own recipes",
};

const getAllRecipies = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  // console.log(data.recipes);
  return data.recipes;
};

export default async function Recipes() {
  const recipes = await getAllRecipies();
  return (
    <div>
      Recipes {recipes?.length}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={recipe.image}
              width={267}
              height={192}
              className="w-full h-48 object-cover"
              alt={recipe.name}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {recipe.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Type: {recipe.mealType[0]}
              </p>
              <Link href={`recipies/${recipe.id}`}>
                <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
