import { useState } from 'react';

const useSorting = (initialList) => {
  const [order, setOrder] = useState(false);
  const [orderByPrice, setOrderByPrice] = useState(null);

  const handleOrder = () => {
    setOrder(!order);
  };

  const handleOrderByPrice = (orderType) => {
    setOrderByPrice(orderType);
    setOrder(false);
  };

  const sortedList = () => {
    const sortedComponents = [...initialList];

    if (orderByPrice === 'asc') {
      sortedComponents.sort((a, b) => a.price - b.price);
    } else if (orderByPrice === 'desc') {
      sortedComponents.sort((a, b) => b.price - a.price);
    }

    return sortedComponents;
  };

  return {
    order,
    orderByPrice,
    handleOrder,
    handleOrderByPrice,
    sortedList,
  };
};

export default useSorting;
