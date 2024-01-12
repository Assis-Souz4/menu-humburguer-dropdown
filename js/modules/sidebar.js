export default function initSidebar() {
  const showSidebar = document.querySelector(".show-sidebar");
  const containerSidebar = document.querySelector(".sidebar-container");
  const fecharSidebar = document.querySelector(".fechar-sidebar");

  if (showSidebar && containerSidebar && fecharSidebar) {
    function mostrarSidebar(e) {
      e.preventDefault();
      if (e.target == showSidebar) {
        containerSidebar.classList.add("ativo");
      }
    }

    function fechar(e) {
      e.preventDefault();
      containerSidebar.classList.remove("ativo");
    }

    function clicarFora(e) {
      e.preventDefault();
      if (e.target == containerSidebar) {
        containerSidebar.classList.remove("ativo");
      }
    }

    showSidebar.addEventListener("click", mostrarSidebar);
    fecharSidebar.addEventListener("click", fechar);
    containerSidebar.addEventListener("click", clicarFora);
  }
}
