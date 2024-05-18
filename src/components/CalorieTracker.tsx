import { useMemo } from 'react';
import type { Activity } from '../types';
import { CalorieDisplay } from './CalorieDisplay';

type CalorieTrackerProps = {
  activities: Activity[];
};

export const CalorieTracker = ({ activities }: CalorieTrackerProps) => {
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const totalCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [activities]
  );

  return (
    <>
      <h2 className=" text-4xl text-white font-black text-center">Summary</h2>

      <div className=" flex flex-col items-center md:flex-row justify-between gap-5 mt-10">
        <CalorieDisplay calories={caloriesConsumed} text={'Consumed'} />
        <CalorieDisplay calories={caloriesBurned} text={'Burned'} />
        <CalorieDisplay calories={totalCalories} text={'Total'} />
      </div>
    </>
  );
};
