function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;

  if (validateForm(name, email, age)) {
    var table = document
      .getElementById("userInfoTable")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = age;
    cell4.innerHTML = address;
    cell5.innerHTML = '<button onclick="editRow(this)">Edit</button>';

    document.getElementById("userForm").reset();
  }
}

function validateForm(name, email, age) {
  if (name === "" || email === "" || age === "" || isNaN(age) || age < 18) {
    alert("Please enter valid information.");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

function editRow(button) {
  var row = button.parentNode.parentNode;
  document.getElementById("name").value = row.cells[0].innerHTML;
  document.getElementById("email").value = row.cells[1].innerHTML;
  document.getElementById("age").value = row.cells[2].innerHTML;
  document.getElementById("address").value = row.cells[3].innerHTML;

  row.parentNode.removeChild(row);
}
