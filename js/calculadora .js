
document.getElementById("matrizDet").addEventListener("submit",function(event){   
        event.preventDefault();

        let result = document.getElementById("result");
        let paso1 = document.getElementById("paso1");
        let paso2 = document.getElementById("paso2");
        let paso3 = document.getElementById("paso3");

        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let c = document.getElementById("c").value;
        let d = document.getElementById("d").value;
        let e = document.getElementById("e").value;
        let f = document.getElementById("f").value;
        let g = document.getElementById("g").value;
        let h = document.getElementById("h").value;
        let i = document.getElementById("i").value;

        paso1.innerHTML = `${a}*(${e}*${i} - (${f})*${h})`;
        paso2.innerHTML = `-${b}*(${d}*${i}-(${f})*${g})`;
        paso3.innerHTML = `+${c}*(${d}*${h}-(${e})*${g})`;

        let resultFinal = a*(e*i - f*h)-b*(d*i-f*g)+c*(d*h-e*g);
        result.innerHTML = parseInt(resultFinal);
})

