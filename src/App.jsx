import { useState } from 'react';
import './App.css';

function App() {
  const [a, setA] = useState("a");
  const [b, setB] = useState("b");
  const [c, setC] = useState("c");

  function calculaC() {
    setC(Math.round(Math.sqrt((a * a) +( b * b)))); 
  }
  return (
    <>
    <main>
        <div className="furoDaFolha"></div>
        <h1>Teorema de Pitágoras</h1>
        <section className="formula-container">
            <label>
                <div id="c">{c}</div>² =
                <input placeholder="a" type="number" onChange={e => setA(e.target.value)} ></input>² +
                <input placeholder="b" type="number" onChange={e => setB(e.target.value)}></input>²
                <button onClick={calculaC}>Calcular</button>
            </label>
            <span className="info">clique em "a" e "b" e digite os números para calcular!</span>
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
        <section>
            <img src="assets/teorema.svg" alt="" />
        </section>
    </main>
    <footer>Desenvolvido por @girapha</footer>
    </>
  );
}

export default App;
