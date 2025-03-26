import express, { Request, Response } from "express"; // Importamos los tipos Request y Response de Express
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Guardar un ítem
app.post("/items", async (req: Request, res: Response) => {  // Especificamos los tipos de req y res
    const { name }: { name: string } = req.body; // Especificamos que name es de tipo string
    const newItem = await prisma.item.create({ data: { name } });
    res.json(newItem);
});

// Obtener todos los ítems
app.get("/items", async (_: Request, res: Response) => { // Especificamos los tipos de req y res
    const items = await prisma.item.findMany();
    res.json(items);
});

app.listen(3001, () => console.log("Servidor corriendo en http://localhost:3001"));

