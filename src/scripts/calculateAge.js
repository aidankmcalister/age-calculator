function calculateAge() {
  const day = parseInt(document.getElementById("dayInput").value);
  const month = parseInt(document.getElementById("monthInput").value);
  const year = parseInt(document.getElementById("yearInput").value);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    console.log("Please enter a valid date...");
    return { days: "- -", months: "- -", years: "- -" }; // Return an empty age object as a default.
  }

  const birthDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  const timeDifference = currentDate - birthDate;

  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let months = Math.floor(days / 30.44); // average days in a month
  const years = Math.floor(months / 12);

  months -= years * 12;
  days -= years * 365;
  days -= Math.floor(months * 30.44);

  return { days, months, years };
}

export default calculateAge;
