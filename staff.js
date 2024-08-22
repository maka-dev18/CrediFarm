document.addEventListener('DOMContentLoaded', () => {
  const activeUsersTab = document.getElementById('activeUsersTab');
  const invitedUsersTab = document.getElementById('invitedUsersTab');
  const inviteStaffButton = document.getElementById('inviteStaffButton');
  const searchInput = document.getElementById('searchInput');
  const filterButton = document.getElementById('filterButton');
  const rowsPerPageSelect = document.getElementById('rowsPerPage');
  const firstPageButton = document.getElementById('firstPage');
  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');
  const lastPageButton = document.getElementById('lastPage');
  const rowsSelected = document.getElementById('rowsSelected');

  activeUsersTab.addEventListener('click', () => {
    activeUsersTab.classList.add('active');
    invitedUsersTab.classList.remove('active');
  });

  invitedUsersTab.addEventListener('click', () => {
    activeUsersTab.classList.remove('active');
    invitedUsersTab.classList.add('active');
  });

  inviteStaffButton.addEventListener('click', () => {
    alert('Invite Staff button clicked');
  });

  searchInput.addEventListener('input', (event) => {
    console.log('Search input:', event.target.value);
  });

  filterButton.addEventListener('click', () => {
    console.log('Filter button clicked');
  });

  rowsPerPageSelect.addEventListener('change', (event) => {
    console.log('Rows per page:', event.target.value);
  });

  firstPageButton.addEventListener('click', () => {
    console.log('First page');
  });

  prevPageButton.addEventListener('click', () => {
    console.log('Previous page');
  });

  nextPageButton.addEventListener('click', () => {
    console.log('Next page');
  });

  lastPageButton.addEventListener('click', () => {
    console.log('Last page');
  });


  rowsSelected.textContent = '0 of 1 row(s) selected.';
});
