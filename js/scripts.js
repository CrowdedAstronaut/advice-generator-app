const title = document.getElementById("title");
const text = document.getElementById("text");

const getAdvice = async () => {
  let result = await fetch(
    "https://api.adviceslip.com/advice"
  );
  let data = await result.json();
  console.log(data);

  title.innerHTML = `Advice #${data.slip.id}`;
  text.innerHTML = `"${data.slip.advice}"`;
};

// window.addEventListener("DOMContentLoaded", () => {
//   getAdvice();
// });
