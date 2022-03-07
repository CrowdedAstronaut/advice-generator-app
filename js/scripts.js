const getAdvice = async () => {
  const result = await fetch(
    "https://api.adviceslip.com/advice"
  );
  const data = await result.json();

  console.log(data);

  document.getElementById(
    "title"
  ).innerHTML = `Advice #${data.slip.id}`;
  document.getElementById(
    "text"
  ).innerHTML = `"${data.slip.advice}"`;
};

window.addEventListener("load", () => {
  getAdvice();
});
