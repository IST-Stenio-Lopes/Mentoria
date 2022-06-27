class Exemplos01 {
  // Exemplo de como alterar uma variável utilizando uma função
  MudarGravidade(nova_gravidade: number): string {
    let gravidade_terra: number = -9.807

    // Alterar valor da gravidade da terra para o que mandamos
    gravidade_terra = nova_gravidade

    // Vamos retornar a gravidade da terra
    return `Nova gravidade da terra: ${gravidade_terra}`
  }
}

export { Exemplos01 }
