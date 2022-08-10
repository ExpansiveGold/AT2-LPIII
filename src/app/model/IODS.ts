export interface IODS{
    nome: string;
    numero: number;
    foto: string;
    pagina?: string; //** ou ? indica que o campo não é obrigatório
    descricao: string;
    favorito: boolean;
}
