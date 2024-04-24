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
        placeholder="Your name"
        name="name"
        id="name"
        type="text"
        label="Name"
      />
      <FormInput
        placeholder="Your surname"
        name="surname"
        id="surname"
        type="text"
        label="Surname"
      />
      <FormInput
        placeholder="example@gmail.com"
        name="email"
        id="email"
        type="email"
        label="Email"
      />
      <FormInput
        placeholder="+00123456789"
        name="phone"
        id="phone"
        type="tel"
        label="Phone"
      />
    </section>
  );
}
