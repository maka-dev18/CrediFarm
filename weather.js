document.addEventListener('DOMContentLoaded', () => {
  const createButton = document.getElementById('createButton');
  const searchInput = document.getElementById('searchInput');
  const rowsPerPageSelect = document.getElementById('rowsPerPage');
  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');
  const rowsSelected = document.getElementById('rowsSelected');

  createButton.addEventListener('click', () => {
    alert('Create Farm Boundary button clicked');
  });

  searchInput.addEventListener('input', (event) => {
    console.log('Search input:', event.target.value);
  });

  rowsPerPageSelect.addEventListener('change', (event) => {
    console.log('Rows per page:', event.target.value);
  });

  prevPageButton.addEventListener('click', () => {
    console.log('Previous page');
  });

  nextPageButton.addEventListener('click', () => {
    console.log('Next page');
  });


  rowsSelected.textContent = '0 row(s) selected';
});
