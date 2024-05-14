function showDescription(sport) {
    var descriptions = {
      "multi-sports": "Multi-sports involves participating in a variety of sports activities.",
      "basketball": "Basketball is a team sport where two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball through the defender's hoop.",
      "pickleball": "Pickleball is a paddleball sport that combines elements of badminton, table tennis, and tennis."
      // Add other sports descriptions here
    };
  
    document.getElementById('description').innerText = descriptions[sport] || "No description available.";
  }
  