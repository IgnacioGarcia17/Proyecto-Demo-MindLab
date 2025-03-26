# Mi Proyecto Full-Stack

Este proyecto es una aplicación web full-stack que utiliza las siguientes tecnologías:

- **Frontend**: React con TypeScript
- **Backend**: Node.js con TypeScript, Express
- **Base de Datos**: MySQL con Prisma ORM

## Instrucciones

### Para correr el backend:
1. Navega a la carpeta `backend`.
2. Instala las dependencias:
npm install
3. Ejecuta el servidor:
npx ts-node src/index.ts

### Para correr el frontend:
1. Navega a la carpeta `frontend`.
2. Instala las dependencias:
npm install
3. Ejecuta el servidor:
npm start

### Estructura del Proyecto:
- **backend/src/index.ts**: Configuración del servidor Express y las rutas para interactuar con la base de datos.
- **frontend/src/App.tsx**: El componente principal de React que se conecta al backend para mostrar los items y agregar nuevos.

### Notas:
- El backend corre en `http://localhost:3001`.
- El frontend corre en `http://localhost:3000`.