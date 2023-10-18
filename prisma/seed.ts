import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const categoriaOrganicos = await prisma.categoria.upsert({
        where: {
            id: '1',
            nome: 'Orgânicos',
        },
        update: {},
        create: {
            id: uuidv4(),
            nome: 'Orgânicos',
            descricao: 'Produtos orgânicos',
        },
    });

    const categoriaIndustrializados = await prisma.categoria.upsert({
        where: {
            id: '2',
            nome: 'Industrializados',
        },
        update: {},
        create: {
            id: uuidv4(),
            nome: 'Industrializados',
            descricao: 'Produtos industrializados',
        },
    });

    const produtoBanana = await prisma.produto.upsert({
        where: {
            id: '1',
            nome: 'Banana',
        },
        update: {},
        create: {
            id: uuidv4(),
            nome: 'Banana',
            preco: 2.5,
            quantidade: 10,
            descricao: 'Banana orgânica',
            categoria: {
                connect: {
                    id: categoriaOrganicos.id,
                }
            }
        },
    });

    const produtoBiscoito = await prisma.produto.upsert({
        where: {
            id: '2',
            nome: 'Biscoito',
        },
        update: {},
        create: {
            id: uuidv4(),
            nome: 'Biscoito',
            preco: 3.5,
            quantidade: 20,
            descricao: 'Biscoito industrializado',
            categoria: {
                connect: {
                    id: categoriaIndustrializados.id,
                }
            }
        }
    });git req
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });