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
                'Executive Fleet',
                'Utility Workhorse',
                'Economy Commuter',
                'Bargain Spec',
                'Rebuilt & Value'
            ],
            datasets: [{
                label: 'Median Price ($)',
                data: [18995, 38990, 7995, 14995, 25990],
                backgroundColor: [
                    colors.blue,
                    colors.purple,
                    colors.green,
                    colors.orange,
                    colors.red
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
                'Executive Fleet',
                'Utility Workhorse',
                'Economy Commuter',
                'Bargain Spec',
                'Rebuilt & Value'
            ],
            datasets: [{
                label: 'Median Odometer (Miles)',
                data: [114000, 47441, 141000, 120000, 83783],
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
                'Executive Fleet (18.67%)',
                'Utility Workhorse (16.15%)',
                'Economy Commuter (22.54%)',
                'Bargain Spec (18.84%)',
                'Rebuilt & Value (23.80%)'
            ],
            datasets: [{
                data: [18.67, 16.15, 22.54, 18.84, 23.80],
                backgroundColor: [
                    colors.blue,
                    colors.purple,
                    colors.green,
                    colors.orange,
                    colors.red
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
