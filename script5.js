window.onload = function displayDateAndDay() {
    const dateObj = new Date();
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1; // Months are 0-indexed
    const year = dateObj.getFullYear();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[dateObj.getDay()];

    const calander = "Date: " + month + "/" + date + "/" + year + "  Day: " + today;
    document.getElementById("Mycalander").innerText = calander;
};
