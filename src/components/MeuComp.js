import { useEffect, useState } from "react";

// Os props agora são passados como parâmetros da função
const MeuComp = ({ minhaIdadeProp }) => {
  // O useState agora serve para guardar os estados...
  // Ao invés de em todo canto tem q ficar fazendo setState, agora é só chamar a função
  // referente aquela estado que você quer.
  // Então, o que difere é que aqui você vai separar o estado por variável
  // O valor dentro do useState() seria o valor inicial
  // E não jogar tudo dentro de um state. Acredite, com o tempo isso é muito prático :)
  const [nome, setNome] = useState("João");
  const [minhaIdadeAlterada, setMinhaIdadeAlterada] = useState(null);

  // A função useEffect sem dependências (que é o array como 2º parâmetro do useEffect) tem a mesma
  // funcionalidade do componentDidMount e componentWillUnmount.
  // Pq? Pq esse array vazio significa as propriedades das quais o useEffect vai ficar "escutando"
  // pra poder rodar novamente. Como as dependências são um array vazio, então ele só roda no componentDidMount.
  // E você pode adicionar um retorno para que ele rode no componentWillUnmount.
  // Exemplo abaixo
  useEffect(() => {
    console.log("Eu só rodo quando o componente é montado.");
    console.log("Eu *não* rodo a cada renderização, só na primeira");

    return () => {
      console.log("E Eu só rodo quando o component é desmontado!!!");
    };
  }, []);

  // Mas, se você quiser fazer algo quando um props mudar, por exemplo, que seria seria o componentDidUpdate
  // nós podemos apenas adicionar as dependências no array de dependências;
  useEffect(() => {
    console.log("Eu rodo quando esse PROPS, que é minha dependência, quando ela inicia ou muda");
  }, [minhaIdadeProp]);

  // Nós podemos também ter dois useEffect escutando a mesma variável, e fazendo duas coisas diferentes
  // sem problema nenhum
  useEffect(() => {
    console.log(
      "Eu rodo quando esse PROPS, que é minha dependência, quando ela inicia ou muda E adiciono ela no meu estado minhaIdadeAlterada caso seja não nula"
    );

    if (minhaIdadeProp) {
      setMinhaIdadeAlterada(minhaIdadeProp + 5);
    }
  }, [minhaIdadeProp]);

  // Se você quiser usar dentro do useEffect alguma variável externa, você tem que adicionar ao array
  // de dependencias
  useEffect(() => {
    console.log("Quero ver meu nome no console.log", nome);
    console.log("Daí, sempre que mudar, apareço aqui novamente :)");
  }, [nome]);

  // Ao invés de rodar o render, agora só precisamos dar um return de um JSX :)
  return (
    <div style={{ margin: "30px" }}>
      <p>Meu nome é {nome}</p>
      <p>Minha idade é {minhaIdadeAlterada}</p>
      <hr></hr>
      <p>
        Minha idade no props é {minhaIdadeProp}.
      </p>
      <hr></hr>
      <input onChange={(event) => setNome(event.target.value)} value={nome} />
    </div>
  );
};

export default MeuComp;
