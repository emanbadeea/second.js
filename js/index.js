
var form = document.getElementById('bookmarkForm');
var bookmarkList = document.getElementById('bookmarkList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  var siteName = document.getElementById('siteName').value;
  var siteURL = document.getElementById('siteURL').value;


  if (!isValidURL(siteURL)) {
    alert('Please enter a valid URL.');
    return;
  }

  
  addBookmark(siteName, siteURL);

  form.reset();
});


function isValidURL(url) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' +  '([\\da-z.-]+)\\.([a-z.]{2,6})' + '([\\/\\w .-])\\/?$');
  return pattern.test(url);
}


function addBookmark(name, url) {
  var rowCount = bookmarkList.rows.length + 1;
  var row = bookmarkList.insertRow();

  row.innerHTML = `
    <td>${rowCount}</td>
    <td>${name}</td>
    <td><a href="${url}" target="_blank" class="btn btn-success btn-sm">Visit</a></td>
    <td><button class="btn btn-danger btn-sm delete">Delete</button></td>
  `;


  row.querySelector('.delete').addEventListener('click', function () {
    row.remove();
    updateIndexes();
  });
}

function updateIndexes() {
  var rows = bookmarkList.rows;
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[0].textContent = i + 1;
  }
}