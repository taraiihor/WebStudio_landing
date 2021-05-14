document.querySelectorAll('[data-control]').forEach(item => {
  item.addEventListener('click', e => {
    filterElement(e.target.dataset.control);
  });
});

function filterElement(datasetValue) {
  const allElement = document.querySelectorAll('.element');
  allElement.forEach(item => {
    if (datasetValue === 'all') {
      item.classList.remove('visually-hidden');
      return;
    }

    if (datasetValue !== item.dataset.type) {
      item.classList.add('visually-hidden');
    } else {
      item.classList.remove('visually-hidden');
    }
  });
}
