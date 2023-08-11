const color = document.getElementById("color");
const btn = document.querySelector("button");

const title = document.getElementById("select__title")
const select = document.getElementById("changeColor");

function generarColor(){
  let digitos = "0123456789abcdef";
  let colorHex = "#";

  for (let i = 0; i<6; i++){
    let colorAleatorio= Math.floor(Math.random()*16);
    colorHex += digitos[colorAleatorio];
  }

  return colorHex;
}

btn.addEventListener("click", function(){
  let colorAleatorio = generarColor();
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
  //document.body.firstElementChild.style.color = colorAleatorio;
  color.style.color = colorAleatorio;
  btn.style.backgroundColor = colorAleatorio;
  title.style.color = colorAleatorio;
  select.value = colorAleatorio;
})

// Sección escoger color

select.addEventListener("change", ()=>{
  const colorSelect = select.value;
  color.textContent= colorSelect;
  document.body.style.backgroundColor = colorSelect;
  color.style.color = colorSelect;
  btn.style.backgroundColor = colorSelect;
  title.style.color = colorSelect;
  select.value = colorSelect;
})




