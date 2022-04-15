import $ from 'jquery';
import './calculator.css';
import Calculator from './calculatorScript'
  
function calculator(){
    $(document).ready(function(){

        let operation = new Calculator();
    
        $(".item-num").on('click', function(){
            if(operation.getOperation() === ""){
                operation.setOperand1($(this).html());
                $("#screen1").html(operation.getOperand1());
            }else{
                operation.setOperand2($(this).html());
                $("#screen2").html(operation.getOperand2());
            }
        });
    
        $(".eraser").on('click', function(){
            operation.clearCalculator();
            $("#screen1").html(operation.getOperand1());
            $("#screen2").html(operation.getOperand2());
            $("#op").html(operation.getOperation());
            $("#resultado").html("");
        });
    
        $(".operator").on('click', function(){
            operation.setOperation($(this).html());
            $("#op").html(operation.getOperation());
            $("#screen1").html(operation.getOperand1());
        });
    
        $(".item-igual").on('click', function(){
            
            if(operation.getOperand1() !== undefined && operation.getOperand2() !== undefined){
                $("#resultado").html(operation.getResult());
                
                operation.clearCalculator();
    
                operation.setOperand1($("#resultado").html());
                operation.setOperand2("");
                operation.setOperation("");
                
                $("#screen1").html("");
                $("#screen2").html("");
            $("#op").html("");
            }else{
                alert("Valores não especificados")
            }
        });
    
        
    });
    
    function notWorking(){
        alert('Botão indisponível no momento')
    }
    
    return (
        <div id="calculadora">
            
            <h1>Calculadora Simples</h1>

            <form className="grid-container">

                <div id="Visor" className="grid-item Visor">
                <label id="screen1"></label>
                <label id="op"></label>
                <label id="screen2"></label>
                <label>=</label>
                <label id="resultado"></label>
                </div>

                
                <button type="button" className="grid-item item-M disable" onClick={notWorking}>MR</button>
                <button type="button" className="grid-item item-M disable" onClick={notWorking}>MS</button>
                <button type="button" className="grid-item item-M disable" onClick={notWorking}>MC</button>
                <button type="button" className="grid-item item-M disable" onClick={notWorking}>M+</button>
                <button type="button" className="grid-item item-M disable" onClick={notWorking}>M-</button>

                <button type="button" className="grid-item item-op disable" onClick={notWorking}>←</button>
                <button type="button" className="grid-item item-op disable" onClick={notWorking}>CE</button>
                <button type="button" className="grid-item item-op eraser enable">C</button>
                <button type="button" className="grid-item item-op2 disable" onClick={notWorking}>±</button>
                <button type="button" className="grid-item item-op2 disable" onClick={notWorking}>√</button>

                <button type="button" className="grid-item item-num enable">7</button>
                <button type="button" className="grid-item item-num enable">8</button>
                <button type="button" className="grid-item item-num enable">9</button>
                <button type="button" className="grid-item item-op2 enable operator">/</button>
                <button type="button" className="grid-item item-op2 disable" onClick={notWorking}>%</button>

                <button type="button" className="grid-item item-num enable">4</button>
                <button type="button" className="grid-item item-num enable">5</button>
                <button type="button" className="grid-item item-num enable">6</button>
                <button type="button" className="grid-item item-op2 enable operator">*</button>
                <button type="button" className="grid-item item-op2 disable" onClick={notWorking}>1/x</button>

                <button type="button" className="grid-item item-num enable">1</button>
                <button type="button" className="grid-item item-num enable">2</button>
                <button type="button" className="grid-item item-num enable">3</button>
                <button type="button" className="grid-item item-op2 enable operator">-</button>
                
                <button type="button" className="grid-item item-igual item-op2 enable">=</button>
                
                <button type="button" className="grid-item item-zero item-num enable">0</button>
                <button type="button" className="grid-item item-num enable">.</button>
                <button type="button" className="grid-item item-op2 enable operator">+</button>



            </form>
        </div>
    );


}


export default calculator;