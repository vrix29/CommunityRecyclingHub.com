// Pie Chart — NSW Household Red Bin Composition (NSW EPA 2019 Kerbside Audit)
var pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Paper recycling', 'General waste', 'Total from house bins', 'Food waste', 'Soft plastics'],
        datasets: [{
            data: [49.7, 17.8, 13.1, 15.6, 3.9],
            backgroundColor: ['#5c8a4e', '#f0b75b', '#79a5b4', '#d74726', '#f8d451'],
            borderColor: '#fff',
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { padding: 16, font: { size: 13 } }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return ' ' + context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        }
    }
});

// Bar Chart — NSW Waste Diversion Rate by Year (NSW State of Environment 2024)
var barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['General Waste', 'Paper Recycling', 'Return and Earn'],
        datasets: [
            {
                label: '(Year) 2017',
                data: [66.2, 15.9, 15.8,],
                backgroundColor: '#588bd3',
                borderRadius: 2,
                barPercentage: 0.6
            },
            {
                label: '(Year) 2019',
                data: [15.9, 138.10, 15.0],
                backgroundColor: '#aa2c06',
                borderRadius: 2,
                barPercentage: 0.6
            },
            {
                label: '(Year) 2021',
                data: [40.0, 88.0, 2.5,],
                backgroundColor: '#d5d227',
                borderRadius: 2,
                barPercentage: 0.6

            },
            {
                label: '(Year) 2023',
                data: [38.1, 106.5, 28.2,],
                backgroundColor: '#5c8a4e',
                borderRadius: 2,
                barPercentage: 0.6
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 140,
                ticks: {
                    callback: function(value) { return value + '%'; },
                    font: { size: 12 }
                },
                grid: { color: '#e2e8d4' }
            },
            x: {
                grid: { display: false },
                ticks: { font: { size: 12 } }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: { padding: 16, font: { size: 13 } }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        if (context.parsed.y === null) return null;
                        return ' ' + context.dataset.label + ': ' + context.parsed.y + '%';
                    }
                }
            }
        }
    }
});

// Animate recovery bars on scroll
var bars = document.querySelectorAll('.recovery-bar-fill');

function animateBars() {
    bars.forEach(function(bar) {
        var rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60 && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            bar.style.width = bar.getAttribute('data-width') + '%';
        }
    });
}

window.addEventListener('scroll', animateBars);
animateBars();
