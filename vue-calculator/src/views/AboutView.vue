<template>
  <div>
    <label>Input Number 1</label>
    <input type="number" placeholder="Enter num 1" v-model="num1" />
    <label>Select Operation</label>
    <select v-model="operator">
      <option value="+">Add (+)</option>
      <option value="-">Subtract (-)</option>
      <option value="*">Multiply (*)</option>
      <option value="/">Divide (/)</option>
    </select>
    <label>Input Number 2</label>
    <input type="number" placeholder="Enter num 2" v-model="num2" />
    <button @click="calculateResult">Result</button>
    <p v-if="result !== null">Result: {{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      operator: 'Select Operation',
      result: null,
    };
  },
  methods: {
    calculateResult() {
      if (this.operator === '+') {
        this.result = this.num1 + this.num2;
      } else if (this.operator === '-') {
        this.result = this.num1 - this.num2;
      } else if (this.operator === '*') {
        this.result = this.num1 * this.num2;
      } else if (this.operator === '/') {
        if (this.num2 !== 0) {
          this.result = this.num1 / this.num2;
        } else {
          this.result = 'Cannot divide by zero';
        }
      } else {
        this.result = null;
      }
    },
  },
};
</script>

<style>
.calculator {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  text-align: center;
}

input[type="number"],
select {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  font-weight: bold;
  margin-top: 10px;
}
</style>
