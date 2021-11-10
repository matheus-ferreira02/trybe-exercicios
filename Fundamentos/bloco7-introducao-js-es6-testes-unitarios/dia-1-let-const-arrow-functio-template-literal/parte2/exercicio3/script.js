window.onload = () => {
  const button = document.querySelector("button");
  let clickCount = 0;
  button.addEventListener("click", () => {
    clickCount += 1;
    p = document.querySelector("p");
    p.innerText = `Quantidade de cliques: ${clickCount}`;
  });
};
