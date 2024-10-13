// displayUserName.js
export const displayUserName = () => {
  const path = window.location.pathname;
  const name = path.split("/").pop();
  const nameDisplay = document.getElementById("nameDisplay");

  if (nameDisplay) {
    nameDisplay.textContent = name 
      ? `${decodeURIComponent(name)}` 
      : "No name provided.";
  } else {
    console.warn("Element with ID 'nameDisplay' not found.");
  }
};
