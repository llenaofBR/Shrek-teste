function Pesquisar() {
  let section = document.getElementById("resultados-pesquisa") 
  let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)

//se campoPesquisa for uma string sem nada
  if(!campoPesquisa) {
       section.innerHTML = "<p>Nada foi encontrado</p>"
       return
     }

  campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = "";// inicia uma string vazia para armazenar resultados
  let titulo = "";
  let descricao = ""; 

for (let dado of dados) { // Itera sobre cada dado da lista de dados
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
  //Se titulo includes campoPesquisa
  if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || 
        tags.includes(campoPesquisa))  {
    // cria um novo elemento
    resultados += `

    <div class="item-resultado">
        <h2>
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
    </div>
   
   `; // cria um novo elemento HTML para cada resultado
       } 

   }
  
   if (!resultados) {
        resultados = "<p>Nada foi encontrado, tente pesquisar um personagem.</p>"  
   }
section.innerHTML = resultados

}

function simularClique(elemento) {
  const evento = new MouseEvent('click');
  elemento.dispatchEvent(evento);
}

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    simularClique(botao);
  }
});
//console.log(dados);

