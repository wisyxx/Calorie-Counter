import { useMemo } from 'react';
import type { Activity } from '../types';

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
  const calorieDifference = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [activities]
  );

  return (
    <>
      <h2 className=" text-4xl text-white font-black text-center">Summary</h2>

      <div className=" flex flex-col items-center md:flex-row justify-between gap-5 mt-10">
        <p className=" text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
          <span className=" font-black text-6xl text-orange-600">
            {caloriesConsumed}
          </span>
          Consumed
        </p>

        <p className=" text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
          <span className=" font-black text-6xl text-orange-600">
            {caloriesBurned}
          </span>
          Burned
        </p>

        <p className=" text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
          <span className=" font-black text-6xl text-orange-600">
            {calorieDifference}
          </span>
          Difference
        </p>
      </div>
    </>
  );
};
