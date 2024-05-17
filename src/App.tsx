import { useEffect, useReducer } from 'react';
import { Form } from './components/Form';
import { activityReducer, initialState } from './reducers/activityReducer';
import { ActivityList } from './components/ActivityList';

export const App = () => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(
    () => localStorage.setItem('activities', JSON.stringify(state.activities)),
    [state.activities]
  );

  return (
    <>
      <header className=" bg-lime-600 py-3">
        <div className="max-w-4 mx-auto flex justify-between">
          <h1 className=" text-center text-lg font-bold text-white uppercase">
            Calorie counter
          </h1>
        </div>
      </header>

      <section className=" bg-lime-500 py-20 px-5">
        <div className=" max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className=" p-10 mx-auto max-w-4xl">
        <ActivityList dispatch={dispatch} activities={state.activities} />
      </section>
    </>
  );
};
