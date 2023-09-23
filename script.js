const main = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");
    console.log(response);

    const rawData = await response.json();

    if (!response.ok) {
      throw new Error(`code - ${response.status} - ${rawData.message}`);
    }

    console.log(rawData);
  } catch (err) {
    console.log(err);
  }

  //   const frontendInput = document.getElementById("frontend");
  //   const frontendButton = document.getElementById("add-front");
  //   const frontendMilestorneList = document.getElementById("frontend-milestone");

  //   frontendButton.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     newListFront = document.createElement("li");
  //     newListFront.textContent = frontendInput.value;
  //     frontendMilestorneList.appendChild(newListFront);
  //   });

  //   const backendInput = document.getElementById("backend");
  //   const backendButton = document.getElementById("add-back");
  //   const backendMilestorneList = document.getElementById("backend-milestone");

  //   backendButton.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     newListBack = document.createElement("li");
  //     newListBack.textContent = backendInput.value;
  //     backendMilestorneList.appendChild(newListBack);
  //   });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
