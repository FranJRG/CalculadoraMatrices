const form = document.getElementById("problemaMatriz");
const buttonProblem = document.getElementById("problem");
let matricesAdj = [];

function matrizInv() {

  const resultInversa = document.getElementById("resultInv");
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  let d = parseFloat(document.getElementById("d").value);
  let e = parseFloat(document.getElementById("e").value);
  let f = parseFloat(document.getElementById("f").value);
  let g = parseFloat(document.getElementById("g").value);
  let h = parseFloat(document.getElementById("h").value);
  let i = parseFloat(document.getElementById("i").value);
  
  let result = document.getElementById("result");
  let paso1 = document.getElementById("paso1");
  let paso2 = document.getElementById("paso2");
  let paso3 = document.getElementById("paso3");

  paso1.innerHTML = `${a}*(${e}*${i} - (${f})*${h})`;
  paso2.innerHTML = `-${b}*(${d}*${i}-(${f})*${g})`;
  paso3.innerHTML = `+${c}*(${d}*${h}-(${e})*${g})`;

  let resultDet =
    a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
  result.innerHTML = resultDet;


  let a11 = e * i + -(f * h);
  let b12 = -(d * i + f * g);
  let c13 = d * h + -e * g;

  let d21 = -(b * i + -(c * h));
  let e22 = a * i + -(c * g);
  let f23 = -(a * h + -(b * g));

  let g31 = b * f + -(c * e);
  let h32 = -(a * f + -(c * d));
  let i33 = a * e + -(b * d);

  let br = document.createElement("br");

  let input11 = document.createElement("input");
  input11.value = a11;
  let input12 = document.createElement("input");
  input12.value = d21;
  let input13 = document.createElement("input");
  input13.value = g31;

  let input21 = document.createElement("input");
  input21.value = b12;
  let input22 = document.createElement("input");
  input22.value = e22;
  let input23 = document.createElement("input");
  input23.value = h32;

  let input31 = document.createElement("input");
  input31.value = c13;
  let input32 = document.createElement("input");
  input32.value = f23;
  let input33 = document.createElement("input");
  input33.value = i33;

  matricesAdj.push(
    input11,
    input12,
    input13,
    input21,
    input22,
    input23,
    input31,
    input32,
    input33
  );
  if (resultDet != 0) {
    let pasoDet = 1 / resultDet;

    let newInput11 = document.createElement("input");
    newInput11.value = pasoDet * input11.value;
    let newInput12 = document.createElement("input");
    newInput12.value = pasoDet * input12.value;
    let newInput13 = document.createElement("input");
    newInput13.value = pasoDet * input13.value;

    let newInput21 = document.createElement("input");
    newInput21.value = pasoDet * input21.value;
    let newInput22 = document.createElement("input");
    newInput22.value = pasoDet * input22.value;
    let newInput23 = document.createElement("input");
    newInput23.value = pasoDet * input23.value;

    let newInput31 = document.createElement("input");
    newInput31.value = pasoDet * input31.value;
    let newInput32 = document.createElement("input");
    newInput32.value = pasoDet * input32.value;
    let newInput33 = document.createElement("input");
    newInput33.value = pasoDet * input33.value;

    const b1 = document.getElementById("result1").value;
    const b2 = document.getElementById("result2").value;
    const b3 = document.getElementById("result3").value;
  
    let x1 = document.createElement("input");
    x1.value = (newInput11.value * b1) + (newInput12.value * b2) + (newInput13.value * b3);
    let x2 = document.createElement("input");
    x2.value = (newInput21.value * b1) + (newInput22.value * b2) + (newInput23.value * b3);
    let x3 = document.createElement("input");
    x3.value = (newInput31.value * b1) + (newInput32.value * b2) + (newInput33.value * b3);

    const resultSystem = document.getElementById("resultSystem");
    resultSystem.innerHTML = `La solucion x = ${x1.value}, y = ${x2.value} y z = ${x3.value}, solo te queda despejar en tu sistema de ecuaciones!`;

  } else {
    resultInversa.innerHTML = `La matrices iguales a 0 no tienen inversa`;
  }
    
}

buttonProblem.addEventListener("click", function (event) {
  event.preventDefault();
  matrizInv();
});



