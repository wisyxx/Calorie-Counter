import FormInput from './FormInput';

interface FormProps {
  title: string
}

export default function Form({ title }: FormProps) {
  return (
    <section className="form">
      <h1>{title}</h1>
      <FormInput
        placeholder="Your name"
        name="name"
        id="name"
        type="text"
        label="Name"
      />
    </section>
  );
}
