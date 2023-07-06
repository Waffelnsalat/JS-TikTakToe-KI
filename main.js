let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  let container = document.getElementById("array-container");
  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    for (let j = 0; j < arr[i].length; j++) {
      let cell = document.createElement("span");
      cell.className = "cell";
      cell.textContent = arr[i][j];
      row.appendChild(cell);
    }
  }