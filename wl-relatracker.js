  let currentFlipped = null;

    function showSection(sectionId) {
      document.querySelectorAll('.rt-section').forEach(sec => sec.classList.remove('active'));
      document.getElementById(sectionId).classList.add('active');
      if (currentFlipped) {
        currentFlipped.classList.remove('flipped');
        currentFlipped = null;
      }
    }

    function flipCard(card) {
      if (currentFlipped && currentFlipped !== card) {
        currentFlipped.classList.remove('flipped');
      }
      if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        currentFlipped = null;
      } else {
        card.classList.add('flipped');
        currentFlipped = card;
      }
    }
