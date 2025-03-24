import { jsPDF } from "jspdf";

document
  .getElementById("coffeeForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "cm",
      format: [6, 9], // 6cm x 9cm
    });

    const source = document.getElementById("card");
    doc.html(source, {
      callback: function (doc) {
        doc.save("info-zrna.pdf");
      },
      x: 0,
      y: 0,
    });

    // let y = 1;
    // doc.setFontSize(10);
    // for (const [key, value] of Object.entries(data)) {
    //   doc.text(
    //     `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`,
    //     0.5,
    //     y
    //   );
    //   y += 0.8;
    // }

    // doc.save(`${data.name || "info-zrna"}.pdf`);
  });
