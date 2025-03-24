document.getElementById("coffeeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));

  const printArea = document.getElementById("printArea") || createPrintArea();
  printArea.innerHTML = "";

  for (const [key, value] of Object.entries(data)) {
    const line = document.createElement("div");
    line.className = "info-line";
    line.textContent = `${
      key.charAt(0).toUpperCase() + key.slice(1)
    }: ${value}`;
    printArea.appendChild(line);
  }

  window.print();
});

function createPrintArea() {
  const div = document.createElement("div");
  div.id = "printArea";
  div.style.padding = "1rem";
  div.style.backgroundColor = "#f9f9f9";
  document.body.appendChild(div);
  return div;
}
