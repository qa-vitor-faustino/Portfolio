// Lista de IDs das seções no documento HTML
const sectionIds = ["home", "sobre", "projetos", "contato"];
let currentSectionIndex = 0;

// Função para atualizar a direção da seta com base no índice da seção atual
function updateArrowDirection() {
  const arrow = document.querySelector(".arrow");
  
  // Define a direção da seta com base no índice da seção atual
  arrow.innerHTML = currentSectionIndex === sectionIds.length - 1 ? "&#8593;" : "&#8595;";
}

// Função para realizar um deslocamento suave até uma seção específica
function scrollToSection(sectionIndex) {
  const targetElement = document.getElementById(sectionIds[sectionIndex]);
  const targetOffset = targetElement.offsetTop;
  
  // Desloca a janela até o início da seção alvo com suavização
  window.scrollTo({
    top: targetOffset,
    behavior: "smooth"
  });
}

// Função para encontrar o índice da seção atual com base na posição de rolagem
function findCurrentSectionIndex() {
  const currentScroll = window.scrollY + window.innerHeight / 2;

  for (let i = 0; i < sectionIds.length - 1; i++) {
    const section = document.getElementById(sectionIds[i]);
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    // Verifica se a posição de rolagem está dentro dos limites da seção
    if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
      return i;
    }
  }

  return 0; // Retorna 0 se nenhuma seção for encontrada (seção inicial)
}

// Adiciona um ouvinte de evento para o clique na seta
document.querySelector(".arrow").addEventListener("click", function(event) {
  event.preventDefault();

  // Calcula o próximo índice de seção circularmente e desloca até lá
  currentSectionIndex = (currentSectionIndex + 1) % sectionIds.length;

  // Verifica se o próximo índice é igual ao último (após a última seção)
  // Se for igual, definimos o índice como 0 (seção inicial)
  if (currentSectionIndex === sectionIds.length - 0) {
    currentSectionIndex = 0;
  }

  scrollToSection(currentSectionIndex);
  updateArrowDirection();
});



document.getElementById("whatsappButton").addEventListener("click", function() {
  var phoneNumber = "+5511981464993";
 

  var whatsappURL = `https://wa.me/${phoneNumber}`;
  window.location.href = whatsappURL;
});