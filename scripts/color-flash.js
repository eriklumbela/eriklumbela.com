// function to colorBanner the complete viewport with a color

function getPercentage(base = 0) {
  return Math.floor(Math.random() * (100 - base)) + base;
}

export function flashColor(color, color2, timeOut) {
  const percentage = getPercentage(20);

  // container
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.backgroundColor = color2;
  container.style.zIndex = "999999";


  // top
  const colorBanner = document.createElement("div");
  colorBanner.style.position = "fixed";
  colorBanner.style.top = `${(100 - percentage)/2}%`; // center
  colorBanner.style.left = `${(100 - percentage)/2}%`; // center
  colorBanner.style.width = `${percentage}%`;
  colorBanner.style.height = `${percentage}%`;
  colorBanner.style.backgroundColor = color;
  colorBanner.style.zIndex = "999999";
  container.appendChild(colorBanner);

  document.body.appendChild(container);

  setTimeout(() => {
    container.remove();
  }, timeOut);
}