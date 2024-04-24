import GeneralInfoForm from './components/GeneralInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import './App.css';

export default function App() {
  return (
    <>
      <h1>CV Generator</h1>
      <main className="app">
        <section className="forms">
          {/* TO-DO: Desplegalbe forms */}
          <GeneralInfoForm title="General information" />
          <EducationForm title="Education" />
          <ExperienceForm title="Experience" />
        </section>

        <aside className="cv-container">
          {/* TO-DO: Create hard coded basic CV structure */}
          <section className="cv-container__section general-info">
            <h2 className="genaral-info__name">Álvaro Hernández</h2>
            <div className="general-info__contact">
              <p className="genaral-info__contact--email">
                <span>Email:</span> alvarohcolino@gmail.com
              </p>
              <p className="genaral-info__contact--phone">
                <span>Phone:</span> +34 608178843
              </p>
            </div>
          </section>

          <section className="cv-container__section education-info">
            <h2 className="education-info__title">Education</h2>
            <div className="cv-container__entries ">
              <div className="education-info__container">
                {/* This container will be dynamic */}
                <h3 className="education-info__course">Course</h3>
                <h3 className="education-info__school">School</h3>
                <p className="education-info__start">
                  <span>From:</span> 20-01-2000
                </p>
                <p className="education-info__end">
                  <span>To:</span> 12-10-2004
                </p>
              </div>

              <div className="education-info__container">
                {/* This container will be dynamic */}
                <h3 className="education-info__course">Course</h3>
                <h3 className="education-info__school">School</h3>
                <p className="education-info__start">
                  <span>From:</span> 20-01-2000
                </p>
                <p className="education-info__end">
                  <span>To:</span> 12-10-2004
                </p>
              </div>
            </div>
          </section>

          <section className="cv-container__section experience">
            <h2 className="experience__title">Experience</h2>
            <div className="cv-container__entries">
              <div className="experience__container">
                {/* This container will be dynamic */}
                <h3 className="experience__company">A company</h3>
                <div className="experience__data">
                  <p className="experience__job">
                    <span>Posotion:</span> Job example
                  </p>
                  <p className="experience__description">
                    <span>Description:</span> A really long description about my
                    responsabilities in the company.
                  </p>
                  <p className="experience__start">
                    <span>From:</span> 20-01-2000
                  </p>
                  <p className="experience__end">
                    <span>To:</span> 12-10-2004
                  </p>
                </div>
              </div>

              <div className="experience__container">
                {/* This container will be dynamic */}
                <h3 className="experience__company">A company</h3>
                <div className="experience__data">
                  <p className="experience__job">
                    <span>Posotion:</span> Job example
                  </p>
                  <p className="experience__description">
                    <span>Description:</span> A really long description about my
                    responsabilities in the company.
                  </p>
                  <p className="experience__start">
                    <span>From:</span> 20-01-2000
                  </p>
                  <p className="experience__end">
                    <span>To:</span> 12-10-2004
                  </p>
                </div>
              </div>
            </div>
          </section>
          <input className='submit-cv' type="button" value="Submit" />
        </aside>
      </main>
    </>
  );
}
