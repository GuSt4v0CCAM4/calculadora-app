export default {
  data (){
    return {
      valorActual: 0,
      numeroAnterior: null,
      operador: null,
      operadorPulsado: false
    }
  },
  methods: {
    limpiar (){
      this.valorActual = 0
    },
    signo(){
      this.valorActual = this.valorActual.charAt(0) === '-' ? this.valorActual.slice(1) : `-${this.valorActual}`
    },
    porcentaje(){
      this.valorActual = `${parseFloat(this.valorActual) / 100}`
    },
    juntarNumeros(numero){
      this.operadorPulsado = true;
      if (this.operadorPulsado){
        this.operadorPulsado = false;
      }
      if (this.valorActual === 0){
        this.valorActual = `${numero}`;
      } else {
        this.valorActual = `${this.valorActual}${numero}`;
      }

    },
    punto(){
      if (this.valorActual.indexOf('.') === -1){
        this.juntarNumeros('.');
      }
    },
    establecerValor(){
      this.numeroAnterior = this.valorActual;
      this.operadorPulsado = true;
      this.valorActual = 0;
    },
    resultado(){
      this.valorActual = `${this.operador(
        parseFloat(this.numeroAnterior),
        parseFloat(this.valorActual)
      )}`
      this.numeroAnterior = null;
    },
    dividir(){
      this.establecerValor()
      this.operador = (num1, num2) => num1 / num2
    },
    multiplicar(){
      this.establecerValor()
      this.operador = (num1 , num2) => num1 * num2
    },
    resta(){
      this.operador = (num1, num2) => num1 - num2
      this.establecerValor()
    },
    sumar(){
      this.establecerValor()
      this.operador = (num1, num2) => num1 + num2
    }
  }

}
