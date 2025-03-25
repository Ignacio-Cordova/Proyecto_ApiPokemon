import Select from "../atoms/Select";
import Input from "../atoms/Input";
import { useState } from "react";

const tipos = [
  { value: "todos", label: "Todos los tipos" },
  { value: "acero", label: "Acero" },
  { value: "agua", label: "Agua" },
  { value: "bicho", label: "Bicho" },
  { value: "dragon", label: "Dragon" },
  { value: "electrico", label: "Electrico" },
  { value: "fuego", label: "Fuego" },
  { value: "fantasma", label: "Fantasma" },
  { value: "hada", label: "Hada" },
  { value: "hielo", label: "Hielo" },
  { value: "lucha", label: "Lucha" },
  { value: "normal", label: "Normal" },
  { value: "oscuridad", label: "Oscuridad" },
  { value: "planta", label: "Planta" },
  { value: "psiquico", label: "Psiquico" },
  { value: "roca", label: "Roca" },
  { value: "tierra", label: "Tierra" },
  { value: "veneno", label: "Veneno" },
  { value: "volador", label: "Volador" }
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