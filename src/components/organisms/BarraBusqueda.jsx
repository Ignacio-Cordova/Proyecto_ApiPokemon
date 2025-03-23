import Select from "../atoms/Select";
import Input from "../atoms/Input";
import { useState } from "react";

const tipos = [
  { value: "todos", label: "Todos" },
  { value: "normal", label: "Normal" },
  { value: "fire", label: "Fuego" },
  { value: "water", label: "Agua" },
  { value: "rock", label: "Roca" },
  { value: "poison", label: "Veneno" },
  { value: "fairy", label: "Hada" },
  { value: "bug", label: "Bicho"},
  { value: "psychic", label: "Psiquico" },
  { value: "dragon", label: "Dragon" },
  { value: "fighting", label: "Lucha" },
  { value: "ghost", label: "Fantasma" },
  { value: "electric", label: "Electrico" },
  { value: "grass", label: "Planta" },
  { value: "ice", label: "Hielo" },
  { value: "Steel", label: "Acero" },
  { value: "flying", label: "Volador" },
  { value: "dark", label: "Oscuridad" },
  { value: "ground", label: "Tierra" }
]

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
          setSearch(e.target.value)
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