export class CreateClienteDto {
    nome: string;
    cpf: string;
    senha: string;
    dataCriacao: Date;
    dataAtualizacao: Date;
    compras: string[];
}
