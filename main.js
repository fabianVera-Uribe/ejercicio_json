let traerDatos = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "main.json", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      const titulo = document.querySelector(".contenedor__titulo");
      titulo.style.textAlign = "center";

      let card = document.querySelector("#contenedor__cards");
      card.innerHTML = "";
      // card.style.backgroundColor = "orange";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.width = "min(600px, 90%)";
      card.style.margin = "0 auto";
      card.style.gap = "2vh";

      datos.forEach((item) => {
        // console.log(item.name);
        card.innerHTML += `
        <div>
          <p>${item.name}</p>
          <p>${item.email}</p>
          <p>${item.address.city}</p>
          <p>${item.phone}</p>
        </div>
        `;
      });
      for (let i = 0; i < card.children.length; i++) {
        card.children[i].style.backgroundColor = "green";
        card.children[i].style.fontFamily = "sans-serif";
        card.children[i].style.textAlign = "center";
        card.children[i].style.color = "white";
      }

      // const contenedor = document.querySelector(".contenedor");
      // contenedor.style.margin = "0 auto";
    }
  };
};

traerDatos();
