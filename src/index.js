window.onload = function () {
  console.log("Hello Rolling Scopes!");

  // Tags
  addTagsClickHandler();
};

const addTagsClickHandler = () => {
  document.querySelector(".strategies__tags").addEventListener("click", (e) => {
    console.log(e);
  });
};
