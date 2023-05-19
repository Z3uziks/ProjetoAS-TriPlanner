<script>
  function showSection(sectionId) {
                var sections = document.querySelectorAll('section');
  for (var i = 0; i < sections.length; i++) {
                  if (sections[i].id === sectionId) {
    sections[i].classList.remove('hidden');
                  } else {
    sections[i].classList.add('hidden');
                  }
                }
              }
</script>