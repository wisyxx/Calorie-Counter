import '../styles/FormInput.css'

interface FormInputProps {
  placeholder?: string;
  name: string;
  id: string;
  type: string;
  label?: string;
}

export default function FormInput({
  placeholder = '',
  name,
  id,
  type,
  label,
}: FormInputProps) {
  return (
    <div className="input-container">
      <label className="input-container__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input-container__input"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
