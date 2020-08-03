/**
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2,
o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$".
O valor deverá ser apresentado com 2 casas após o ponto.

Adaptado por Neilor Tonin
**/


object Main {
    def main(args: Array[String]) {
        var a:Int = 0
        var aux:Double = 0.0
        var soma:Double = 0.0
        var peca:Int = 0
        var quantidadeDePeca:Int = 0
        var valorUnitarioPeca:Double = 0.0
        for(a <- 1 to 2){
                  peca = scala.io.StdIn.readInt()
                  quantidadeDePeca = scala.io.StdIn.readInt()
                  valorUnitarioPeca = scala.io.StdIn.readDouble() 
                  aux = quantidadeDePeca * valorUnitarioPeca
                  soma = soma + aux
        }         
         println("VALOR A PAGAR: R$ %.2f".format(soma))
    }  
}