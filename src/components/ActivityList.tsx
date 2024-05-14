import { Activity } from '../types';

type ActivityListProps = {
  activities: Activity[];
};

export const ActivityList = ({ activities }: ActivityListProps) => {
  console.log(activities);
  return (
    <>
      <h2 className=" text-4xl font-bold text-slate-600 text-center">
        Food & Activities
      </h2>

      {activities.map((activity) => (
        <div
          key={activity.id}
          className=" px-5 bg-white mt-5 flex justify-between"
        >
          <div className=" space-y-2 relative">
            <p>{activity.category === 1 ? 'Food' : 'Exercise'}</p>
            <p className=" text-2xl font-bold pt-5">{activity.name}</p>
            <p className=" font-black text-4xl text-lime-500">
              {activity.calories} <span>Kcal</span>
            </p>
          </div>

          {/* Activity actions */}
          <div></div>
        </div>
      ))}
    </>
  );
};
