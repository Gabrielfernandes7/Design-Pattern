interface Produto {
  exibir(): void;
}

class ProdutoA implements Produto {
  exibir() {
    console.log("Produto A");
  }
}

class ProdutoB implements Produto {
  exibir() {
    console.log("Produto B");
  }
}

class Factory {
  static criarProduto(tipo: string): Produto {
    if (tipo === "A") {
      return new ProdutoA();
    } else if (tipo === "B") {
      return new ProdutoB();
    } else {
      throw new Error("Tipo de produto inválido");
    }
  }
}

const produtoA = Factory.criarProduto("A");
produtoA.exibir();
