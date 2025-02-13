"use client"; 
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default   function MealsSearchInput() {
    // const [meals, setMeals] = useState([]);
    const router = useRouter();
    const pathname = usePathname();
    const [search, setSearch] = useState("");



    useEffect(() =>   {
        const searchQuery = {search}
        const querySearchParam =  new URLSearchParams(searchQuery)
        const url = `${pathname}?${querySearchParam}`
        router.push(url)

      }, [search]);
    

  return (
    <div>
        <input
          type="text"
          className="p-2 border-2"
          placeholder="Search Melas"
          name=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id=""
        />
    </div>
  )
}
