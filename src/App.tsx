import GeneralInfoForm from './components/GeneralInfoForm';
import EducationForm from './components/EducationForm';

export default function App() {
  return (
    <>
      <h1>CV Generator</h1>
      <main className="app">
        <section className="forms">
          {/* TO-DO: Desplegalbe forms */}
          <GeneralInfoForm title="General information" />
          <EducationForm title="Education" />
        </section>

        <aside className="cv-container">
          {/* TO-DO: Create hard coded basic CV structure */}
        </aside>
      </main>
    </>
  );
}
