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
    });

    const clienteJoao = await prisma.cliente.upsert({
        where: {
            id: '1',
            nome: 'João',
        },
        update: {},
        create: {
            id: uuidv4(),
            nome: 'João da Silva',
            cpf: '12345678900',
            senha: '123456',
            compras: {
                create: {
                    id: uuidv4(),
                    produtos: {
                        connect: {
                            id: produtoBanana.id,
                        }
                    }
                }
            }
        },
    });

    const clienteMaria = await prisma.cliente.upsert({
        where: {
            id: '2',
            nome: 'Maria',
        },
        update: {},
        create: {
            id: uuidv4(),
            nome: 'Maria da Silva',
            cpf: '12345678901',
            senha: '123456',
            compras: {
                create: {
                    id: uuidv4(),
                    produtos: {
                        connect: {
                            id: produtoBiscoito.id,
                        }
                    }
                }
            }
        }
    });

    const vendedorJose = await prisma.vendedor.upsert({
        where: {
            id: '1',
            nome: 'José',
        },
        update: {},
        create: {
            id: uuidv4(),
            nome: 'José da Silva',
            cpf: '12345678902',
            senha: '123456',
            vendas: {
                create: {
                    id: uuidv4(),
                    produtos: {
                        connect: {
                            id: produtoBanana.id,
                        }
                    }
                }
            }
        }
    });

    const vendedorAna = await prisma.vendedor.upsert({
        where: {
            id: '2',
            nome: 'Ana',
        },
        update: {},
        create: {
            id: uuidv4(),
            nome: 'Ana da Silva',
            cpf: '12345678903',
            senha: '123456',
            vendas: {
                create: {
                    id: uuidv4(),
                    produtos: {
                        connect: {
                            id: produtoBiscoito.id,
                        }
                    }
                }
            }
        }
    });
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
