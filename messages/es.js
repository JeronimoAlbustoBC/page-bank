import home from "./pages/home.json";
import leasing from "./pages/leasing.json";
import franquicias from "./pages/franquicias.json";
import salud from "./pages/salud.json";
import financiamiento from "./pages/financiamiento.json";
import transporte from "./pages/transporte.json";
import solucionesParaEmpresas from "./pages/solucionesParaEmpresas.json";
import negociosYProfesionales from "./pages/negociosYProfesionales.json";
import individuos from "./pages/individuos.json";
import comex from "./pages/comex.json";
import BDCConecta from "./pages/BDCConecta.json";
import solicitudDeServicios from "./pages/solicitudDeServicios.json";
import faqs from "./pages/faqs.json";
import institucional from "./pages/institucional.json";
import Factoring from "./pages/Factoring.json";
import solucionesParaPymes from "./pages/solucionesParaPymes.json";
import inversiones from "./pages/inversiones.json";
import informacionAlUsuario from "./pages/informacionAlUsuario.json";
import botonDeArrepentimiento from "./pages/botonDeArrepentimiento.json";
import ContratoDeAdesion from "./pages/ContratoDeAdesion.json";
import NuevoHomeBanking from "./pages/NuevoHomeBanking.json";
import Sucursales from "./components/Sucursales.json";
import Navbar from "./components/Navbar.json";
import Footer from "./components/Footer.json";

const es = {
  Content: {
    home,
    leasing,
    franquicias,
    salud,
    financiamiento,
    transporte,
    solucionesParaEmpresas,
    negociosYProfesionales,
    individuos,
    comex,
    BDCConecta,
    solicitudDeServicios,
    faqs,
    institucional,
    Factoring,
    solucionesParaPymes,
    inversiones,
    informacionAlUsuario,
    botonDeArrepentimiento,
    ContratoDeAdesion,
    NuevoHomeBanking,
  },
  ErrorCard: {
    title: "Tu solicitud no pudo ser enviada",
    text: "Hubo un error en el proceso de envío.<br></br> Por favor, intentalo de nuevo.",
    button: {
      primary: "Reintentar",
      secondary: "Volver al Inicio",
    },
  },
  SuccessCard: {
    title: "¡Se envió tu solicitud con éxito!",
    text: "En instantes, un representante del banco se va a contactar con vos para otorgarte tu propia cuenta corriente.",
    button: "Volver al Inicio",
  },
  Shared: {
    Sucursales,
  },
  Navbar,
  Footer,
};
export default es;
