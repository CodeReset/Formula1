import {useEffect, useState} from 'react';

import {useDispatch} from 'react-redux';

export const usePagination = ({actionSetter, total, driverId = null}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  useEffect(() => {
    dispatch(actionSetter(driverId, count));
  }, [count]);
  // WHEN WE PUSH PREV ARROWBUTTON WE DICRIMENT PAGE IF PAGE MIN==0 WE BREACK COUNT TO MAX ELSE -1
  const prevPage = () => {
    setCount((prev) =>
      prev === 0 ? (total > 10 ? Math.floor(total / 10) : 0) : prev - 1,
    );
  };
  // WHEN WE PUSH NEXT ARROW BUTTON WE INCREMENT PAGE IF PAGE MAX WE BREACK COUNT TO 0 ELSE +1
  const nextPage = () => {
    setCount((prev) =>
      prev === (total > 10 ? Math.floor(total / 10) : 0) ? 0 : prev + 1,
    );
  };

  return {
    nextPage,
    prevPage,
    count,
  };
};
