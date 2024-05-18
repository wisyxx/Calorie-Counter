import { useEffect, useMemo, useReducer } from 'react';
import { Form } from './components/Form';
import { activityReducer, initialState } from './reducers/activityReducer';
import { ActivityList } from './components/ActivityList';
import { CalorieTracker } from './components/CalorieTracker';

export const App = () => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(
    () => localStorage.setItem('activities', JSON.stringify(state.activities)),
    [state.activities]
  );

  const canRestartApp = () =>
    useMemo(() => state.activities.length > 0, [state.activities]);

  return (
    <>
      <header className=" bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className=" text-center text-lg font-bold text-white uppercase">
            Calorie counter
          </h1>

          <button
            onClick={() =>
              dispatch({
                type: 'restart-app',
              })
            }
            disabled={!canRestartApp()} // If true disabled == false and vice-versa
            className=" bg-gray-800 hover:bg-gray-900 p-2 font-bold 
            uppercase text-white cursor-pointer rounded-lg text-sm 
            transition-all duration-[250ms] disabled:opacity-50 
          disabled:hover:bg-slate-800"
          >
            Reset App
          </button>
        </div>
      </header>

      <section className=" bg-lime-500 py-20 px-5">
        <div className=" max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className=" bg-gray-800 p-10">
        <div className=" max-w-4xl mx-auto">
          <CalorieTracker activities={state.activities} />
        </div>
      </section>

      <section className=" p-10 mx-auto max-w-4xl">
        <ActivityList dispatch={dispatch} activities={state.activities} />
      </section>
    </>
  );
};
