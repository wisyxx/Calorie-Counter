import { CalorieDisplay } from './CalorieDisplay';
import { useActivity } from '../hooks/useActivity';

export const CalorieTracker = () => {
  const { caloriesConsumed, caloriesBurned, totalCalories } = useActivity();

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
