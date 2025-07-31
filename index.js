document.addEventListener("DOMContentLoaded", () => {
  const datePicker = document.getElementById("datePicker");
  const sections = document.querySelectorAll(".section");

  const defaultDate = "2025-06-23";
  const minDate = "2025-06-23";
  const maxDate = "2025-07-21";

  // Set default date
  datePicker.value = defaultDate;
  datePicker.min = minDate;
  datePicker.max = maxDate;

  // Show section by date
  function showSectionByDate(date) {
    sections.forEach(section => {
      section.classList.toggle("active", section.dataset.date === date);
    });
  }

  showSectionByDate(defaultDate);

  // Date change event
  datePicker.addEventListener("change", () => {
    const selectedDate = datePicker.value;
    const date = new Date(selectedDate);
    const min = new Date(minDate);
    const max = new Date(maxDate);

    if (date < min || date > max) {
      alert("Please select a date between June 23 and July 21, 2025.");
      datePicker.value = defaultDate;
      showSectionByDate(defaultDate);
    } else {
      showSectionByDate(selectedDate);
    }
  });
});
