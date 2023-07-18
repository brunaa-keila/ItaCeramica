// Função para rolar para o topo da página
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Vincular o botão de rolagem ao evento de clique
  document.getElementById('btnScrollToTop').addEventListener('click', scrollToTop);
  
  // Exibir ou ocultar o botão de rolagem com base na posição da página
  window.addEventListener('scroll', function () {
    var btnScrollToTop = document.getElementById('btnScrollToTop');
    if (window.scrollY > 200) {
      btnScrollToTop.style.display = 'block';
    } else {
      btnScrollToTop.style.display = 'none';
    }
  });

  <script>
  // Selecionar o elemento do link "Ajuda" pelo ID
  const linkAjuda = document.getElementById('linkAjuda');

  // Adicionar um evento de clique ao link
  linkAjuda.addEventListener('click', function() {
    // Exibir um alerta quando o link for clicado
    alert('Clicou no link "Ajuda"!');
  });
</script>
  