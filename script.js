const srcImg = document.querySelector("img");

srcImg.onclick = () => {

  if (srcImg.getAttribute("src") === "imgs/Eu-casa.jpg")
    srcImg.setAttribute("src", "imgs/Neto-Eu.jpg");
  else if (srcImg.getAttribute("src") === "imgs/Neto-Eu.jpg")
    srcImg.setAttribute("src", "imgs/Eu-ifba.jpg");
  else
    srcImg.setAttribute("src", "imgs/Eu-casa.jpg");

}