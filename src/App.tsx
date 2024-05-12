import { Form } from './components/Form';

export const App = () => {
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
          <Form />
        </div>
      </section>
    </>
  );
};
