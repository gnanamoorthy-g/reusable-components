import React,{ useEffect, useState } from 'react';

export default function useLoader(pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const addItemsToList = () => {
    let currLength = items.length;
    let newItems = [];
    for (let i = currLength + 1; i < currLength + 1 + 10; i++) {
      newItems.push({ id: i, title: i });
    }
    setItems((prevItems) => [...new Set([...prevItems, ...newItems])]);
    setHasMore(!(newItems.at(-1)?.id >= 100));
  };

  useEffect(() => {
    addItemsToList()
  }, [pageNumber]);

  return { loading, error, items, hasMore };
}