
const bgColorChanger = document.querySelector("#btn");
const projectBody = document.querySelector("#container");

bgColorChanger.addEventListener("click", () => {
  const colorIndexOne = Math.round(Math.random() * 9);
  const colorIndexTwo = Math.round(Math.random() * 9);
  const colorIndexThree = Math.round(Math.random() * 9);
  const newBgColor = `#${colorIndexOne}${colorIndexTwo}${colorIndexThree}`;
  projectBody.style.backgroundColor = newBgColor;
});
