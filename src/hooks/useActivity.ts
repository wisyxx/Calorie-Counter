import { useContext } from 'react';
import { ActivityContext } from '../contexts/ActivityContext';

export const useActivity = () => {
  const context = useContext(ActivityContext);

  if (!context) {
    throw new Error(
      'The hook useActivity must be used within ActivityProvider'
    );
  }
  return context;
};
