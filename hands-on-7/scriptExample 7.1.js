const login = async (username, password) => {
  const loginBody = { username, password };

  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginBody),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${res.status} - ${data.message}`);
    }

    return data.accessToken;
  } catch (err) {
    alert(err);
  }
};

const main = () => {
  const usernameInput = document.getElementById("username");

  const passwordInput = document.getElementById("password");

  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!passwordInput.value || !usernameInput.value) {
      alert("Please input something");
      return;
    }

    const accessToken = await login(usernameInput.value, passwordInput.value);
    if (!accessToken) return;

    localStorage.setItem("token", accessToken);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
