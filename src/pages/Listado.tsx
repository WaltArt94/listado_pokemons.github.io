import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";
import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";
import { match } from "assert";

const Listado = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [query,setQuery] = useState("");

  useEffect(() => {
    const ObtenerTodos = async () => {
      const allPokemons = await getPokemons();
      setPokemons(allPokemons);
    };
    ObtenerTodos();
  });

const filtrarPokemon = pokemons?.slice(0.100).filter((pokemon)=>{
  return pokemon.name.toLowerCase().match(query.toLowerCase());
});


  return (
    <>
      <h1>Lista de Pokemons - WaltArt -</h1>
      <header >
        <br />
        <h4>Buscar Pokemon</h4>
        <input className="buscar"
            value={query}
            placeholder="Buscar pokemon"
            onChange={(event)=> setQuery(event.target.value.trim())}
            type="text"
            
        />
      </header>
      <br/>

      <div className="content-wraper">
        <div className="content">
          <div className="row gap-3">
              
            {filtrarPokemon?.slice(0, 100).map((pokemon) => (
              <Card className="mx-auto" style={{ width: "18rem" }}>
                <Card.Header><b>Tipo</b> {pokemon.type}</Card.Header>
                <Card.Img
                  className="d-block mx-auto w-25"
                  variant="top"
                  src={pokemon.imggif}
                />
                <Card.Body>
                  <Card.Title className="text-center">{pokemon.name}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/833/833472.png"                         
                    /><b> HP: </b>  {pokemon.hp}   
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/297/297837.png"                         
                    /><b> Ataque: </b> {pokemon.attack}</ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/1866/1866922.png"                         
                    /><b> Defensa: </b> {pokemon.defense}</ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/1477/1477171.png"                         
                    /><b> E.Ataque: </b> {pokemon.sp_atk}</ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/1477/1477171.png"                         
                    /><b> E.Defensa:</b> {pokemon.sp_def}</ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                    width={16}
                    height={16}
                    src="https://cdn-icons-png.flaticon.com/128/5604/5604743.png"                         
                    /><b> Velocidad:</b> {pokemon.speed}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listado;
