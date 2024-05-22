export enum ProductType {
  Simples = 'Simples',
  QuantidadeTipo = 'QuantidadeTipo',
  ProdutoVariavel = 'ProdutoVariavel',
}

const ProductTypeDescriptions: { [key in ProductType]: string } = {
  [ProductType.Simples]: 'Produto que muda só a quantidade',
  [ProductType.QuantidadeTipo]: 'Altera quantidade e unidade',
  [ProductType.ProdutoVariavel]: 'Produto variável',
};

export function getProductDescription(type: ProductType): string {
  return ProductTypeDescriptions[type];
}
