import FormInput from './FormInput';
import '../styles/Form.css';

interface FormProps {
  title: string;
}

export default function EducationForm({ title }: FormProps) {
  return (
    <section className="form">
      <h1 className="form__title">{title}</h1>

      <FormInput
        label="School name"
        name="school"
        id="school"
        type="text"
        placeholder="IES Example"
      />
      <FormInput
        label="Course"
        name="course"
        id="course"
        type="text"
        placeholder="Secondary Education"
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
