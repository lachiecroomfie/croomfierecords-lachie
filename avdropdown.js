window.onload = function() {
    const dropdown = document.getElementById("album-variant");
    
    dropdown.value = "1-info"; 
  
    updateContent(dropdown.value);
  
    dropdown.addEventListener("change", () => {
      const selectedValue = dropdown.value;
      updateContent(selectedValue);
    });
  };
  
  function updateContent(selectedValue) {
    const buttons = document.querySelectorAll(".dl-button");
    buttons.forEach(button => {
      button.style.display = "none";
    });
  
    const descriptions = document.querySelectorAll("p[id^='1-description'], p[id^='2-description'], p[id^='3-description'], p[id^='4-description']");
    descriptions.forEach(description => {
      description.style.display = "none";
    });
  
    const selectedButton = document.getElementById(selectedValue);
    const selectedDescription = document.getElementById(selectedValue.replace('info', 'description')); 
  
    if (selectedButton) {
      selectedButton.style.display = "inline-block"; 
    }
  
    if (selectedDescription) {
      selectedDescription.style.display = "block";
    }
  }
  
