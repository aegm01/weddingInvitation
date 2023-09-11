import "./App.css";
import HeroImg from "./components/HeroImg";
import Slide1 from "./components/Welcome";
import LocationSlide from "./components/LocationSlide";
import LetterSlide from "./components/LetterSlide";
import AssistanceConfirmation from "./components/AssistanceConfirmation";

function App() {
  return (
    <main className="slides" id="noneLandscape">
      <section className="slide">
        <HeroImg />
      </section>
      <section className="slide">
        <Slide1 />
      </section>
      <section className="slide">
        <LocationSlide
          title={"Civil"}
          p1={"Registro Civil Ingeniero White"}
          p2={["23", "de", "Marzo", "2023 |", "8:30hs"]}
          p3={"Av. Gral. San Martín 3466"}
          googlemaps={
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.230597969891!2d-62.2700568486867!3d-38.78134767948851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbd5405754c17%3A0xaf6622c578c73fa8!2sAv.%20Gral.%20San%20Mart%C3%ADn%203466%2C%20B8103%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1677380789758!5m2!1ses-419!2sar"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          }
          bg={"/bgfiesta.jpg"}
        />
      </section>
      <section className="slide">
        <LocationSlide
          title={"Ceremonia"}
          p1={"Iglesia Pueblo Nuevo"}
          p2={["24", "de", "Marzo", "2023 |", "20:30hs"]}
          p3={"Soler 444"}
          googlemaps={
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.9115884245025!2d-62.260893748688105!3d-38.71983877949833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda34c71e47cb7%3A0xffcfc6e76fcd265a!2sSoler%20444%2C%20B8000%20CHJ%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1677434099301!5m2!1ses-419!2sar"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          }
          bg={"/4.jpg"}
        />
      </section>
      <section className="slide">
        <LocationSlide
          title={"Fiesta"}
          p1={"Salón Empleados de Comercio"}
          p3={"Rodriguez 60"}
          p4={[true, "(Estacionamiento dentro del estableciemiento)"]}
          googlemaps={
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.0881294286332!2d-62.2698735486883!3d-38.71578557949886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcadce772629%3A0x6053b50f1ba7eb8!2sMartiniano%20Rodriguez%2060%2C%20B8000%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1677434293396!5m2!1ses-419!2sar"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          }
          bg={"/11.jpg"}
        />
      </section>
      <section className="slide">
        <AssistanceConfirmation />
      </section>
      <section className="slide">
        <LetterSlide />
      </section>
    </main>
  );
}

export default App;
