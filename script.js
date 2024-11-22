let data = JSON.parse(localStorage.getItem("user")) || [];

const htmlData = document.querySelector(".data");

data.length
  ? data.map((a) => {
      return (htmlData.innerHTML += `<tr><td>${a.id}</td><td>${a.name}</td></tr>`);
    })
  : (htmlData.innerHTML = `<tr><td colspan="2">No data</td></tr>`);

// console.log(data);

const addData = () => {
  const name = prompt("Enter Name");
  const id = Number(prompt("Enter ID"));
  data.push({ name, id });
  data.sort((a, b) => a.id - b.id);
  if (name && id) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  location.reload();
};

const delData = () => {
  const id = Number(prompt("Enter ID"));
  const newData = data.filter((a) => a.id != id);
  localStorage.setItem("user", JSON.stringify(newData));
  location.reload();
};

const updateData = () => {
  const id = Number(prompt("Enter ID"));
  const name = prompt("Enter Name");
  const findTheData = data.filter((a) => a.id != id);
  if (name && id) {
    const newData = [...findTheData, { name, id }].sort((a, b) => a.id - b.id);
    localStorage.setItem("user", JSON.stringify(newData));
  }
  location.reload();
};
