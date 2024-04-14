<template>
  <div class="calculadora">
    <div class="display">{{valorActual || '0'}}</div>
    <div v-on:click="limpiar" class="button">C</div>
    <div v-on:click="signo" class="button">+/-</div>
    <div v-on:click="porcentaje" class="button">%</div>
    <div v-on:click="dividir" class="button operator">÷</div>
    <div v-on:click="juntarNumeros('7')" class="button">7</div>
    <div v-on:click="juntarNumeros('8')" class="button">8</div>
    <div v-on:click="juntarNumeros('9')" class="button">9</div>
    <div v-on:click="multiplicar" class="button operator">x</div>
    <div v-on:click="juntarNumeros('4')" class="button">4</div>
    <div v-on:click="juntarNumeros('5')" class="button">5</div>
    <div v-on:click="juntarNumeros('6')" class="button">6</div>
    <div v-on:click="resta" class="button operator">-</div>
    <div v-on:click="juntarNumeros('1')" class="button">1</div>
    <div v-on:click="juntarNumeros('2')" class="button">2</div>
    <div v-on:click="juntarNumeros('3')" class="button">3</div>
    <div v-on:click="sumar" class="button operator">+</div>
    <div v-on:click="juntarNumeros('0')" class="button zero">0</div>
    <div v-on:click="punto" class="button">.</div>
    <div v-on:click="resultado" class="button operator">=</div>
  </div>
</template>

<script src="./Calculadora.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./calculadora.css" scoped/>
