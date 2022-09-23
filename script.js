let btn = document.getElementById('button');
console.log(btn)

function calculaC() {
  let a = document.getElementById('a').value;
  let b = document.getElementById('b').value;
  let c = document.getElementById('c');

  let hipotenusa = Math.round(Math.sqrt((a * a) +( b * b)));

  c.innerHTML=hipotenusa
}

btn.addEventListener("click", calculaC)