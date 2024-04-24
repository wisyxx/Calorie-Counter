import FormInput from './FormInput';
import '../styles/Form.css';

interface FormProps {
  title: string;
}

export default function GeneralInfoForm({ title }: FormProps) {
  return (
    <section className="form">
      <h1 className="form__title">{title}</h1>
      <FormInput
        placeholder="Company name"
        name="company"
        id="company"
        type="text"
        label="Company"
      />
      <FormInput
        placeholder="Job position"
        name="position"
        id="position"
        type="text"
        label="Job position"
      />
      <FormInput
        placeholder="..."
        name="description"
        id="description"
        type="text"
        label="Description"
      />
      <FormInput
        label="From"
        name="start-date"
        id="start-date"
        type="date"
        placeholder="20-01-2000"
      />
      <FormInput
        label="To"
        name="end-date"
        id="end-date"
        type="date"
        placeholder="12-10-2004"
      />
    </section>
  );
}
