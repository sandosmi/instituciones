
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
export default function App() {
  return (
    <div className="container"> 
    {/* a continuación se utiliza componente banner */}
      <Banner></Banner>
      <Navbar></Navbar>
      <Text titulo="Front-End" subtitulo="ReactJS" mitexto="Aprendiendo ReactJS"></Text>
      <Text titulo="Angular" subtitulo="Lenguaje TypeScrips" mitexto="Este es el texto para este titulo" valor1="5" valor2="7"></Text>
      
    </div>
  );
}

//export default App;
