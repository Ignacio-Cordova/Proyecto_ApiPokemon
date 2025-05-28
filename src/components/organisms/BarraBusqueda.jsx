import Select from "../atoms/Select";
import Input from "../atoms/Input";
import { useState } from "react";

const tipos = [
  { value: "todos", label: "Todos los tipos" },
  { value: "steel", label: "Acero" },
  { value: "water", label: "Agua" },
  { value: "bug", label: "Bicho" },
  { value: "dragon", label: "Dragon" },
  { value: "electric", label: "Electrico" },
  { value: "fire", label: "Fuego" },
  { value: "ghost", label: "Fantasma" },
  { value: "fairy", label: "Hada" },
  { value: "ice", label: "Hielo" },
  { value: "fighting", label: "Lucha" },
  { value: "normal", label: "Normal" },
  { value: "dark", label: "Oscuridad" },
  { value: "grass", label: "Planta" },
  { value: "psychic", label: "Psiquico" },
  { value: "rock", label: "Roca" },
  { value: "ground", label: "Tierra" },
  { value: "poison", label: "Veneno" },
  { value: "flying", label: "Volador" }
];

const regiones = [
  { value: "todas", label: "Todas las regiones" },
  { value: "kanto", label: "Kanto" },
  { value: "johto", label: "Johto" },
  { value: "hoenn", label: "Hoenn" },
  { value: "sinnoh", label: "Sinnoh" },
  { value: "unova", label: "Unova" },
  { value: "kalos", label: "Kalos" },
  { value: "alola", label: "Alola" },
  { value: "galar", label: "Galar" }
]


const BarraBusqueda = ({ search, setSearch, 
                        filtroAnterior, setFiltroAnterior, 
                        setFiltroActual, filtroActual,
                        tipoSeleccionado, setTipoSeleccionado, 
                        regionSeleccionada, setRegionSeleccionada
                      }) => {

  return (
    <>
    <div className="barra-busqueda">
      <Input
        type="text"
        className="input-busqueda"
        placeholder="Buscar Pokemon"
        onChange={(e) => {
          setSearch((e.target.value).toLowerCase());
          } 
        }
      />
      <Select 
        onChange={async (e) => {
          setTipoSeleccionado(e.target.value);
        }} 
        options={[ ...tipos ]}
      />
      <Select
        onChange={(e) => {
          setRegionSeleccionada(e.target.value);
        }}
        options={[...regiones ]}
      />
    </div>
    </>
  );
};

export default BarraBusqueda;