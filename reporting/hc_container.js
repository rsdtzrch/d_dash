// Ensure initializeChart is globally available
window.initializeChart = function(containerId, jsonFile) {
    // Function to load chart from JSON
    function loadChart() {
        fetch(jsonFile)
        .then(response => response.json())
        .then(chartConfig => {
            Highcharts.chart(containerId, chartConfig);
        })
        .catch(error => console.error("Error loading chart config:", error));
    }

    // Load the chart
    loadChart();

    // Click-to-Enlarge Feature
    document.addEventListener("DOMContentLoaded", function() {
        var modal = document.getElementById("chartModal");
        var modalContent = document.getElementById("modal-chart-container");
        var closeBtn = document.querySelector(".close");

        function enlargeChart() {
            var chart = Highcharts.charts.find(c => c.renderTo.id === containerId);
            if (chart) {
                modal.style.display = "flex";
                modalContent.innerHTML = "";

                // Create a new chart inside the modal
                Highcharts.chart("modal-chart-container", {
                    ...chart.options,
                    chart: {
                        ...chart.options.chart,
                        renderTo: "modal-chart-container",
                        width: null,
                        height: null
                    }
                });
            }
        }

        document.getElementById(containerId).addEventListener("click", function() {
            enlargeChart();
        });

        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
};
