/**
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.

Adaptado por Neilor Tonin
**/

object Main {

    def main(args: Array[String]) {

      var A:Int = scala.io.StdIn.readInt()
      var B:Int = scala.io.StdIn.readInt()
      var C:Int = scala.io.StdIn.readInt()
      var D:Int = scala.io.StdIn.readInt()
      var Diferenca:Int = ((A * B)-(C * D))
      println("DIFERENCA = " + (Diferenca))

    }

}