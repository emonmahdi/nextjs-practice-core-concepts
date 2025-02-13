import React from 'react'

const getRecipe = async (recipe_id) => {
    const res = await fetch(`https://dummyjson.com/recipes/${recipe_id}`);
    const data = await res.json();
    // console.log(data.recipes);
    return data
  };

export default async function SingleRecipe({params}) {
    const id = await params.id
    const singleRecipe = await getRecipe(id)
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
  <img
    src={singleRecipe?.image}
    className="w-full h-64 object-cover rounded-lg"
    alt={singleRecipe?.name}
  />

  <div className="mt-4">
    <h1 className="text-2xl font-bold text-gray-800">{singleRecipe?.name}</h1>
    <p className="text-gray-600 mt-2">{singleRecipe?.description || "No description available."}</p>

    <div className="mt-4 flex flex-wrap gap-4">
      <span className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
        Price: ${singleRecipe?.price}
      </span>
      <span className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
        Cooking Time: {singleRecipe?.cookTimeMinutes || "N/A"} min
      </span>
      <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
        Servings: {singleRecipe?.servings || "N/A"}
      </span>
    </div>

    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-800">Ingredients</h2>
      <ul className="list-disc list-inside mt-2 text-gray-600">
        {singleRecipe?.ingredients?.length > 0 ? (
          singleRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))
        ) : (
          <li>No ingredients available.</li>
        )}
      </ul>
    </div>

    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-800">Instructions</h2>
      <p className="mt-2 text-gray-600">{singleRecipe?.instructions || "No instructions provided."}</p>
    </div>

    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
      Order Now
    </button>
  </div>
</div>

  )
}
