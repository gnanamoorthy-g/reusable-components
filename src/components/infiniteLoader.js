import React, { useEffect, useState } from "react";
import useLoader from "./useLoader";

const  InfiniteLoader = () =>{

  const [pageNumber,setPageNumber] = useState(1);
  const { items, hasMore, loading, error } = useLoader(pageNumber);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting && hasMore) {
        console.log("Intersection happened");
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
    const lastElement = document.getElementById("last-item");
    if(lastElement) observer.observe(lastElement);
  }, [items,hasMore]);

  return (
    <div className="container">
      {(items || []).map((item, index) => {
        return (
          <div
            id={`${index === items.length - 1 ? "last-item" : ""}`}
            key={item.id}
            className="flex-centered bg-card"
          >
            {item.title}
          </div>
        );
      })}
    </div>
  )
};

export default InfiniteLoader;