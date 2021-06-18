google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var data = google.visualization.arrayToDataTable([
    ["Answers", "(%)"],
    ["24 hour service", 64],
    ["Instant response", 55],
    ["Answers to simple questions", 55],
    ["Easy communication", 51],
    ["Complaints resolved quickly", 43],
    ["Good customer experience", 43],
    ["Detailed answers", 37],
    ["Answers to complex questions", 35],
    ["Friendliness", 32],
    ["None of these", 8],
  ]);

  var options = {
    title: "Potential Benefits of Chatbots",
    chartArea: { width: "50%", height: "80%" },
    hAxis: {
      title: "Based on most recent surveys",
      minValue: 0,
    },
    vAxis: {
      title: "Answers",
    },
  };

  var chart = new google.visualization.BarChart(
    document.getElementById("chart_div")
  );

  chart.draw(data, options);
}

function SubmitMessage() {
  var confirmed = document.getElementById("messageSent");
  confirmed.innerHTML = "*Please check if the fields are filled in correctly!";
}

function underConstruction() {
  alert(
    "The page you are trying to access is under construction, please comeback later!"
  );
}
