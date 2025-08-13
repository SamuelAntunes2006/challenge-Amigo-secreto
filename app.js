let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  if (amigos.includes(nome)) {
    alert('Esse nome já foi adicionado.');
    return;
  }

  amigos.push(nome);
  input.value = '';
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Nenhum amigo foi adicionado para o sorteio.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
}
