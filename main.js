const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const lista = document.querySelector(".lista");

let produtos = [];

window.onload = function () {
  viewProdutos();
};

function addProduto() {
  produtos.push({
    produto: input.value,
    status: false,
  });

  localStorage.setItem("@itens", JSON.stringify(produtos));

  viewProdutos();

  input.value = "";
}

function viewProdutos() {
  let listaLocalStorage = localStorage.getItem("@itens");
  let listaConvertida = JSON.parse(listaLocalStorage);

  let novoProduto = "";

  if (listaLocalStorage) {
    listaConvertida.map((item, index) => {
      novoProduto =
        novoProduto +
        `
    <li class="list-style ${item.status ? "check" : "list-style"}">
        <p>${item.produto}</p>
        <div class="container-item">
            <img src="img/check.png" alt="icon check" class="img" onclick="complet(${index})"  />
            <img src="img/delet.png" alt="icon delete" class="img" onclick="deleteItem(${index})" />
        </div>
    </li>
    `;
    });

    lista.innerHTML = novoProduto;
  }
}

function deleteItem(index, item) {
  let listaLocalStorage = localStorage.getItem("@itens");
  let listaConvertida = JSON.parse(listaLocalStorage);

  listaConvertida.splice(index, 1);
  localStorage.setItem("@itens", JSON.stringify(listaConvertida));
  console.log(listaConvertida);

  viewProdutos();
}

function complet(index) {
  let listaLocalStorage = localStorage.getItem("@itens");
  let listaConvertida = JSON.parse(listaLocalStorage);

  listaConvertida[index].status = !listaConvertida[index].status;

  localStorage.setItem("@itens", JSON.stringify(listaConvertida));
  viewProdutos();
}

btn.addEventListener("click", addProduto);
