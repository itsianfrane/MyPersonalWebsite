function showSection(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(sec => sec.style.display = 'none'); // hide all
  document.getElementById(sectionId).style.display = 'block'; // show selected
}