import { useState } from 'react';
import './App.css';

function App() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState("c");
  const[erro, setErro] = useState(false);

  function calculaC() {
   if(a & b){
    setC(Math.round(Math.sqrt((a * a) +( b * b)))); 
    setErro(false)
   }else{
      setErro(true)
   }
  }
  return (
    <>
    <main>
        <div className="furoDaFolha"></div>
        <h1>Teorema de Pitágoras</h1>
        <section className="formula-container">
            <div className='wrapper-formula'>
                <div id="c">{c}</div>² =
                <input placeholder="a" type="number" onChange={e => setA(e.target.value)} ></input>² +
                <input placeholder="b" type="number" onChange={e => setB(e.target.value)}></input>²
                <button onClick={calculaC}>Calcular</button>
            </div>
            <span className="info">{erro ? 'clique nas variáveis "a" e "b" e preencha os campos para calcular!' : ""}</span>
        </section>
        <section>
            <ul>
                <li>
                    Pitágoras observou que ao desenhar um quadrado em cada lado do
                    triangulo retângulo, a área dos menores somadas é igual a área do
                    quadrado maior.
                </li>
                <li>
                    Vale apenas para <strong>triângulos retângulos!</strong>
                </li>
                <li>
                    Hipotenusa sempre o <strong>maior lado!</strong>
                </li>
            </ul>
        </section>
        <figure>
            <img src="teorema.svg" alt="Triangulo retângulo com anotação sobre hipotenusa e catetos" />
        </figure>
    </main>
    <footer>Desenvolvido por <a href="https://giovanaraphaelli.vercel.app/" target="_blank" rel="noopener noreferrer">@girapha</a></footer>
    </>
  );
}

export default App;
