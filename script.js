function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");
  const alt = document.querySelector("#profile img")
  html.classList.toggle("light");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "/src/avatar-light.png");
    alt.setAttribute("alt", "foto de Mayk Brito sorrindo, usando óculos escuros e jaqueta preta, barba e fundo azul com gradiente para rosa");
  } else {
    img.setAttribute("src", "/src/avatar.png");
    alt.setAttribute("alt", "foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo")
    
  }
}
