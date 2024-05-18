type CalorieDisplayProps = {
  calories: number;
  text: string;
};

export const CalorieDisplay = ({ calories, text }: CalorieDisplayProps) => {
  return (
    <p className=" w-20 text-lg text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      <span className=" font-black text-6xl text-orange-600">{calories}</span>
      {text}
    </p>
  );
};
