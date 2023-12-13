import { useState } from 'react';
import './App.css'
import Header from './components/Header';

function App() {

  const [ubicacionPrincipal, setUbicacionPrincipal] = useState(0);
  setUbicacionPrincipal(window.pageYOffset);
  AOS.init();

  window.addEventListener("scroll", function () {
    const desplazamientoActual = window.pageYOffset; //180
    if (ubicacionPrincipal >= desplazamientoActual) { // 200 > 180
      document.getElementsByTagName("nav")[0].style.top = "0px"
    } else {
      document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    setUbicacionPrincipal(desplazamientoActual); //200
  })

  // Menu

  const enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
  const [semaforo, setSemaforo] = useState(true);

  document.querySelectorAll(".hamburguer")[0].addEventListener("click", function () {
    if (semaforo) {
      document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
      setSemaforo(false);
    } else {
      document.querySelectorAll(".hamburguer")[0].style.color = "#000";
      setSemaforo(true);
    }
    enlacesHeader.classList.toggle("menudos")
  })

  return (
    <>
      <section>
        <Header/>
      </section>
    </>
  )
}

export default App
