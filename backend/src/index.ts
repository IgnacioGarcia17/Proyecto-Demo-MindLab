import express, { Request, Response } from "express";                 // Importamos Express y los tipos Request y Response
import cors from "cors";                                             // Middleware para permitir solicitudes desde otros dominios
import { PrismaClient } from "@prisma/client";                      // Prisma ORM para interactuar con la base de datos

const app = express();
const prisma = new PrismaClient();

app.use(cors());                                                 // Habilita CORS para permitir peticiones desde el frontend
app.use(express.json());                                        // Permite recibir datos en formato JSON en las solicitudes



// Guardar un ítem
app.post("/items", async (req: Request, res: Response) => {
    const { name }: { name: string } = req.body;                         // Se extrae el nombre del body y se tipa como string
    const newItem = await prisma.item.create({ data: { name } });       // Se guarda el ítem en la base de datos
    res.json(newItem);                                                 // Se devuelve el nuevo ítem guardado
});


// Obtener todos los ítems
app.get("/items", async (_: Request, res: Response) => {
    const items = await prisma.item.findMany();                     // Obtiene todos los ítems de la base de datos
    res.json(items);                                               // Devuelve la lista de ítems en formato JSON
});


app.listen(3001, () => console.log("Servidor corriendo en http://localhost:3001"));

