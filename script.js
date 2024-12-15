function updateLengths() {
    const menInput = document.getElementById("nameMen").value.trim();
    const girlInput = document.getElementById("nameGirl").value.trim();

    // Calculate lengths
    const menLength = menInput.length;
    const girlLength = girlInput.length;

    // Total length
    const totalLength = menLength + girlLength;

    // Update lengths and total
    document.getElementById(
      "menLength"
    ).textContent = `Length: ${menLength}`;
    document.getElementById(
      "girlLength"
    ).textContent = `Length: ${girlLength}`;
    document.getElementById(
      "totalLength"
    ).textContent = `Total Length: ${totalLength}`;

    const resultImage = document.getElementById("resultImage");

    if (totalLength > 0) {
      const isEven = totalLength % 2 === 0;
      const resultText = isEven ? "Female" : "Male";
      document.getElementById("result").textContent = resultText;

      resultImage.src = isEven ? "/image/female.jpg" : "/image/male.jpg";
      resultImage.alt = resultText;
      resultImage.classList.add("show");
    } else {
      document.getElementById("result").textContent = " ";
      resultImage.classList.remove("show");
    }
  }

  function clearInputs() {
    document.getElementById("nameMen").value = "";
    document.getElementById("nameGirl").value = "";
    document.getElementById("menLength").textContent = "Length: 0";
    document.getElementById("girlLength").textContent = "Length: 0";
    document.getElementById("totalLength").textContent = "Total Length: 0";
    document.getElementById("result").textContent = "";
    document.getElementById("resultImage").classList.remove("show");
  }

  function updateDateTime() {
    const dateTimeContainer = document.querySelector(".date-time");
    const now = new Date();

    // Day of the week
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[now.getDay()];

    // Day of the month with suffix
    const day = now.getDate();
    const suffix = (day === 1 || day === 21 || day === 31) ? "st" :
                  (day === 2 || day === 22) ? "nd" :
                  (day === 3 || day === 23) ? "rd" : "th";
    const formattedDay = `${day}${suffix}`;

    // Month
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[now.getMonth()];

    // Time in 12-hour format with AM/PM
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const period = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 12 AM/PM instead of 0
    const formattedTime = `${hours}:${minutes}:${seconds} ${period}`;

    // Combine all elements into one string
    dateTimeContainer.textContent = `${dayOfWeek}, ${formattedDay} ${month} ${formattedTime}`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
  });