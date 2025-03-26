import React, { useState, useEffect } from "react";        // Importa useState y useEffect desde React
import axios from "axios";                                // Importa axios para realizar las peticiones HTTP


// Definimos la interfaz "Item" que describe la estructura de un ítem
interface Item {
  id: number;                   // Id del ítem
  name: string;                // Nombre del ítem
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);            
  const [name, setName] = useState("");                      

  // Función para obtener los ítems de la base de datos
  const fetchItems = async () => {
    const res = await axios.get("http://localhost:3001/items");
    setItems(res.data);                                           // Actualizar los ítems con los datos de la base de datos
  };

  // Función para agregar un nuevo ítem
  const addItem = async () => {
    if (name.trim()) {                                                // Evita agregar ítems vacíos
      await axios.post("http://localhost:3001/items", { name });     // Agregar el ítem a la base de datos
      setName("");                                                  // Limpiar el campo de texto
      fetchItems();                                                // Recargar los ítems
    }
  };

  // Función para manejar el evento de presionar "Enter"
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  // UseEffect para obtener los ítems cuando la página carga
  useEffect(() => {
    fetchItems();
  }, []);                 // 1 sola vez

  return (
    <div>
      <h1>Lista de Ítems</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}      // Actualiza el estado con el valor del input
        onKeyDown={handleKeyDown}                     // Detecta la tecla presionada
        placeholder="Escribe un ítem"
      />
      <button onClick={addItem}>Agregar</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>         // Mostrar los ítems desde la base de datos
        ))}
      </ul>
    </div>
  );
};

export default App;
