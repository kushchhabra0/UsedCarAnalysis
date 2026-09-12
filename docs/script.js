document.addEventListener('DOMContentLoaded', () => {
    // Chart Color Palette
    const colors = {
        cyan: '#38bdf8',
        purple: '#c084fc',
        green: '#34d399',
        orange: '#fb923c',
        red: '#f87171',
        blue: '#60a5fa',
        glassBorder: 'rgba(255, 255, 255, 0.1)'
    };

    // Common Chart Options
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = 'Outfit, sans-serif';

    // 1. Persona Median Price Bar Chart
    const priceCtx = document.getElementById('personaPriceChart').getContext('2d');
    new Chart(priceCtx, {
        type: 'bar',
        data: {
            labels: [
                'Bargain Spec',
                'Executive Fleet',
                'Rebuilt & Value',
                'Economy Commuter',
                'Utility Workhorse'
            ],
            datasets: [{
                label: 'Median Price ($)',
                data: [17500, 8900, 28590, 5500, 43900],
                backgroundColor: [
                    colors.orange,
                    colors.blue,
                    colors.red,
                    colors.green,
                    colors.purple
                ],
                borderRadius: 8,
                borderWidth: 1,
                borderColor: colors.glassBorder
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => ` Median Price: $${ctx.raw.toLocaleString()}`
                    }
                }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: {
                        callback: (value) => `$${value / 1000}k`
                    }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });

    // 2. Persona Odometer Bar Chart
    const odoCtx = document.getElementById('personaOdometerChart').getContext('2d');
    new Chart(odoCtx, {
        type: 'bar',
        data: {
            labels: [
                'Bargain Spec',
                'Executive Fleet',
                'Rebuilt & Value',
                'Economy Commuter',
                'Utility Workhorse'
            ],
            datasets: [{
                label: 'Median Odometer (Miles)',
                data: [80500, 119690, 24828, 174977, 40848],
                backgroundColor: colors.cyan,
                borderRadius: 8,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => ` Median Mileage: ${ctx.raw.toLocaleString()} mi`
                    }
                }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: {
                        callback: (value) => `${value / 1000}k mi`
                    }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });

    // 3. Persona Market Share Donut Chart
    const donutCtx = document.getElementById('personaShareDonut').getContext('2d');
    new Chart(donutCtx, {
        type: 'doughnut',
        data: {
            labels: [
                'Bargain Spec (26.17%)',
                'Executive Fleet (23.32%)',
                'Rebuilt & Value (20.70%)',
                'Economy Commuter (18.97%)',
                'Utility Workhorse (10.84%)'
            ],
            datasets: [{
                data: [26.17, 23.32, 20.70, 18.97, 10.84],
                backgroundColor: [
                    colors.orange,
                    colors.blue,
                    colors.red,
                    colors.green,
                    colors.purple
                ],
                borderWidth: 2,
                borderColor: '#090d16'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 14,
                        padding: 15,
                        font: { size: 12 }
                    }
                }
            },
            cutout: '65%'
        }
    });

    // 4. Missing Data Audit Horizontal Bar Chart
    const missingCtx = document.getElementById('missingDataChart').getContext('2d');
    new Chart(missingCtx, {
        type: 'bar',
        indexAxis: 'y',
        data: {
            labels: ['Size', 'Cylinders', 'Condition', 'Paint Color', 'Drive', 'Type', 'Manufacturer'],
            datasets: [{
                label: 'Missing % (MNAR)',
                data: [71.7, 41.6, 41.2, 30.5, 30.5, 21.8, 4.1],
                backgroundColor: colors.purple,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => ` Missing: ${ctx.raw}% (Tagged as 'NP')`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: {
                        callback: (val) => `${val}%`
                    },
                    max: 100
                },
                y: {
                    grid: { display: false }
                }
            }
        }
    });
});
