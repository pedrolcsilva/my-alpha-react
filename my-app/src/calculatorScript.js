class Calculator {
    constructor(){
        this.operand1 = "";
        this.operand2 = "";
        this.operation = "";
    };

    setOperand1(_operand1){
        this.operand1 += _operand1;
    };
    getOperand1(){
        return this.operand1;
    };

    setOperand2(_operand2){
        this.operand2 += _operand2;
    }

    getOperand2(){
        return this.operand2;
    }

    setOperation(_operation){
        this.operation = _operation;
    };
    getOperation(){
        return this.operation;
    };

    getResult() {
        if(this.operand1 === ""){
            alert("Operador 1 não definido")
        }
        else if(this.operation === ""){
            alert("Tipo de operação não definida")
        }
        else if(this.operand2 === ""){
            alert("Operador 2 não definido")
        }
        else if(this.operation === '+'){
            return parseFloat(this.operand1) + parseFloat(this.operand2);
        }
        else if(this.operation === '-'){
            return parseFloat(this.operand1) - parseFloat(this.operand2);
        }
        else if(this.operation === '*'){
            return parseFloat(this.operand1) * parseFloat(this.operand2);
        }
        else if(this.operation === '/'){
            return parseFloat(this.operand1) / parseFloat(this.operand2);
        }
    }

    clearCalculator() {
        this.operand1 = "";
        this.operand2 = "";
        this.operation = "";
    }
}

export default Calculator;