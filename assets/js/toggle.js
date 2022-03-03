const toggleButtons = document.querySelectorAll('.frontend-toggle')
toggleButtons.forEach((ele) => ele.addEventListener('click', (e) => {
  const evolutionChoices = document.querySelectorAll('.evolution-choice');
  evolutionChoices.forEach(ele => ele.classList.toggle('hidden'));
}))