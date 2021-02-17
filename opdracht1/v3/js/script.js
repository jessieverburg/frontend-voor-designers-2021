function changeText(btn) {
  if (btn.value === 'Add to list') {
   btn.value = 'Added to list!';
   btn.innerHTML = '<i class="fas fa-heart"></i>Added to list!';
  } else {
   btn.value = 'Add to list';
   btn.innerHTML = '<i class="far fa-heart"></i>Add to list';
  }
}

document.querySelectorAll('button').forEach((btn) => btn.addEventListener('click', function () {
    changeText(btn);
}));
