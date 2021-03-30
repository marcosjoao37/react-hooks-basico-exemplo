import logo from "./logo.svg";
import "./App.css";
import MeuComp from "./components/MeuComp";
import { useState } from "react";

function App() {
  const [idade, setIdade] = useState(10);

  return (
    <div className="App">
      <button
        onClick={(event) => {
          setIdade(idade + 1);
        }}
      >
        Atualizar idade pai
      </button>

      <p style={{ color: "red" }}>Idade no component pai: {idade}</p>

      <MeuComp minhaIdadeProp={idade} />
    </div>
  );
}

export default App;
