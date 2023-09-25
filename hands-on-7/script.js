const login = async (username, password) => {
  // * fill here...
  //* const loginBody = { username, password }
  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/login", {
      // * fill here...
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //* body: JSON.stringify(loginBody),
        username: username,
        password: password,
      }),
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

const getMyinformation = async () => {
  const token = localStorage.getItem("token");

  try {
    //* fill here
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res);

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const main = () => {
  const usernameInput = document.getElementById("username");

  const passwordInput = document.getElementById("password");

  const submitButton = document.getElementById("submit");

  const getMyInfoButton = document.getElementById("get-info");

  getMyInfoButton.addEventListener("click", getMyinformation);

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!passwordInput.value || !usernameInput.value) {
      alert("Please input something");
      return;
    }

    // * fill here...?
    const accessToken = await login(usernameInput.value, passwordInput.value);

    localStorage.setItem("token", accessToken);
    localStorage.getItem(accessToken);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
