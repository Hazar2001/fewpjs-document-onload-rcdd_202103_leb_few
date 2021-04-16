document.addEventListener("DOMContentLoaded",  DomLoading() {
  console.log("The DOM has loaded");
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
function DomLoading{
  let text=getElementById("text").textContent="This is really cool!";
}
