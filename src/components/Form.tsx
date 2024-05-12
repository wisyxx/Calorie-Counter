import { useState } from 'react';
import { categories } from '../data/categories';
import type { ChangeEvent } from 'react';

export const Form = () => {
  const [activity, setActivity] = useState({
    category: 1,
    name: '',
    calories: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setActivity({ ...activity, [e.target.id]: e.target.value });
  };

  return (
    <form className=" space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className=" font-bold">
          Category:
        </label>
        <select
          id="category"
          name="category"
          className=" border border-slate-300 p-2 rounded-lg w-full bg-white"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((categorie) => (
            <option key={categorie.id} value={categorie.id}>
              {categorie.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className=" font-bold">
          Activity:
        </label>
        <input
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="Ex. Lunch 🥗, Apple 🍎, Lemonade 🍋, 
          Steak filet 🥩| 5km run 🏃🏻‍♂️, Gym 🏋🏻..."
          type="text"
          id="name"
          name="name"
          value={activity.name}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className=" font-bold">
          Calories (kcal):
        </label>
        <input
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="Ex. 300"
          type="number"
          id="calories"
          name="calories"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className=" transition-all duration-[250ms] bg-gray-800 hover:bg-gray-900 w-full p-2 
        font-bold uppercase text-white cursor-pointer"
        value={'Save food | Save activity'}
      />
    </form>
  );
};
