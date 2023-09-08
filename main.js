const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const lista = document.querySelector(".lista");

const produtos = [];

function addProduto() {
  produtos.push({
    produto: input.value,
    status: false,
  });
  viewProdutos();

  input.value = "";
}

function viewProdutos() {
  let novoProduto = "";

  produtos.map((item, index) => {
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

function deleteItem(index) {
  produtos.splice(index, 1);
  viewProdutos();
}

function complet(index) {
  produtos[index].status = !produtos[index].status;
  viewProdutos();
}

btn.addEventListener("click", addProduto);
