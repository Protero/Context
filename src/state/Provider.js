import context from "./context";
import usePokemons from "../hooks/usePokemons";
import useSchool from "../hooks/useSchool";

const Provider = (props) => {
  const [school, dispatch] = useSchool();
  const pokemons = usePokemons();

  return (
    <context.Provider value={{ school, dispatch, pokemons }}>
      {props.children}
    </context.Provider>
  );
};

export default Provider;
