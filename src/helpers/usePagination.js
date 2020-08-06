import {useEffect, useState} from 'react';

import {useDispatch} from 'react-redux';

export const usePagination = ({actionSetter, total, driverId = null}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(actionSetter(driverId, count));
  }, [count]);

  const prevPage = () => {
    setCount((prev) =>
      prev === 0 ? (total > 10 ? Math.round(total / 10) - 1 : 0) : prev - 1,
    );
  };
  const nextPage = () => {
    setCount((prev) =>
      prev === (total > 10 ? Math.round(total / 10) - 1 : 0) ? 0 : prev + 1,
    );
  };

  return {
    nextPage,
    prevPage,
    count,
  };
};
