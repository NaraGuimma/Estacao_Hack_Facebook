let pessoa = document.querySelector(".dadosPessoais");
let screen = document.querySelector(".screen");


function capta() {
  let nome = prompt("Nome", "");
  let idade = prompt("Idade", "");
  let profissao = prompt("Profissao", "");

  console.log(`${nome}, ${idade}, ${profissao}`);
  if ((nome != "") && (idade != "") && (profissao != "")) {
    dados = [nome, idade, profissao]
    let confirma = confirm("os dados estao corretos?\n\n Nome:" + nome + "\n\n Idade:\n\n" + idade + "\n\nProfissão:\n\n" + profissao);
    if (confirma == true) {
      alert("Os dados não poderão ser alterados");
      pessoa.innerHTML = (`
      <h1> Nome: ${nome}</h1> <br>
      <h2>Idade: ${idade}</h2> <br>
      <h3>Profissao: ${profissao}</h3>`);
      console.log(dados);
      return pessoa.innerHTML;
    }
    else {
      capta();
    }


  }
  else {
    capta();
  }


}

function dimensions() {
  let h = window.outerHeight;
  let w = window.outerWidth;
  screen.innerText = (`Height: ${h}  AND  Width: ${w}`);
  return (screen.innerText);

}
function capture() {
  dataId = document.getElementById("myData");
  screenSize = document.getElementById("screenSize");
  dataId.style.marginTop = "20px";
  dataId.style.backgroundColor = "purple";
  screenSize.classList.add("h1", "text-center", "text-capitalize");
}


capta();
dimensions();
capture();
