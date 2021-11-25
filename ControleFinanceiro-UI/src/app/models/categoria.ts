import { Tipo } from "./tipo";

export class Categoria{
  categoriaId!: number;
  Nome!: string;
  icone!: string;
  tipoId!: number;
  tipo!: Tipo;
}
