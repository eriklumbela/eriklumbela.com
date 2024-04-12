function externalLinks() {
  for(let c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    let b = c[a]
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
}

externalLinks()

function generateFavicon(color) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 16;
  const context = canvas.getContext("2d");
  context.fillStyle = color;

  context.beginPath();
  context.arc(8, 8, 8, 0, 2 * Math.PI);
  context.fill();

  const imageUrl = canvas.toDataURL();
  
  const link = document.createElement("link");
  link.setAttribute("rel", "icon");
  document.querySelector("head").appendChild(link);

  link.type = "image/x-icon";
  link.href=imageUrl;
};

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}


generateFavicon(getRandomColor())