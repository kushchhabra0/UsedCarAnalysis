document.addEventListener('DOMContentLoaded', () => {

    // Persona Segment Data Dictionary for Interactive Playbook
    const segmentData = {
        all: {
            badge: "SEGMENT OVERVIEW",
            title: "All 5 Discovered Persona Segments",
            share: "100.0%",
            price: "$17,500 (Avg)",
            mileage: "89,000 mi (Avg)",
            profile: [
                { label: "Segment Count:", val: "5 Distinct Clusters" },
                { label: "Total Audited Records:", val: "348,720 Clean Listings" },
                { label: "Model Architecture:", val: "K-Prototypes (K=5)" },
                { label: "Seed Stability:", val: "0.9997 ARI (Cao Density)" }
            ],
            opportunity: "Full spectrum analysis of used car listings, enabling automated inventory acquisition, risk mitigation, and listing arbitrage.",
            action: "Deploy segment-specific pricing rules, regional stocking preferences, and automated VIN spec enrichment."
        },
        bargain: {
            badge: "SEGMENT 01 (26.17%)",
            title: "Under-Profiled Bargain Specs",
            share: "26.17%",
            price: "$17,500",
            mileage: "80,500 mi",
            profile: [
                { label: "Median Year:", val: "2015" },
                { label: "Top Manufacturer:", val: "Ford" },
                { label: "Primary Type:", val: "Sedan (Unspecified specs)" },
                { label: "Title Status:", val: "Clean Title" }
            ],
            opportunity: "Sellers who omit detailed specifications suffer a 15–20% pricing discount due to buyer uncertainty. High-volume arbitrage target.",
            action: "Automated acquisition of under-listed cars, spec completion via VIN decoding, and re-listing at full market valuation."
        },
        executive: {
            badge: "SEGMENT 02 (23.32%)",
            title: "High-Value Executive Fleet",
            share: "23.32%",
            price: "$8,900",
            mileage: "119,690 mi",
            profile: [
                { label: "Median Year:", val: "2011" },
                { label: "Top Manufacturer:", val: "Chevrolet" },
                { label: "Primary Type:", val: "Sedan (FWD)" },
                { label: "Title Status:", val: "Clean Title" }
            ],
            opportunity: "High credit loan approval rates and steady predictable turnover for daily commuting buyers seeking reliable transport.",
            action: "Partner with regional auto lenders for instant financing approvals and bundled 12-month maintenance warranties."
        },
        rebuilt: {
            badge: "SEGMENT 03 (20.70%)",
            title: "Rebuilt & Value Inventory",
            share: "20.70%",
            price: "$28,590",
            mileage: "24,828 mi",
            profile: [
                { label: "Median Year:", val: "2018" },
                { label: "Top Manufacturer:", val: "Ford" },
                { label: "Primary Type:", val: "Sedan / SUV" },
                { label: "Title Status:", val: "Clean / Rebuilt" }
            ],
            opportunity: "High margin reconditioning ROI potential for late-model vehicles with minor structural or cosmetic imperfections.",
            action: "In-house reconditioning pipeline with certified inspection reports to unlock premium retail pricing."
        },
        economy: {
            badge: "SEGMENT 04 (18.97%)",
            title: "Economy Daily Commuters",
            share: "18.97%",
            price: "$5,500",
            mileage: "174,977 mi",
            profile: [
                { label: "Median Year:", val: "2005" },
                { label: "Top Manufacturer:", val: "Ford" },
                { label: "Primary Type:", val: "Entry Level Hatch/Sedan" },
                { label: "Title Status:", val: "Clean Title" }
            ],
            opportunity: "Fastest sales turnover and lowest inventory holding costs across all marketplace segments.",
            action: "Target low monthly payment advertising ($99/mo) and position as first-time driver / budget student transport."
        },
        workhorse: {
            badge: "SEGMENT 05 (10.84%)",
            title: "Heavy-Duty Utility Workhorses",
            share: "10.84%",
            price: "$43,900",
            mileage: "40,848 mi",
            profile: [
                { label: "Median Year:", val: "2017" },
                { label: "Top Manufacturer:", val: "Ford" },
                { label: "Primary Type:", val: "Truck / Pickup (4WD)" },
                { label: "Title Status:", val: "Clean Title" }
            ],
            opportunity: "Highest gross profit margin per unit and lowest annual depreciation rate due to commercial utility demand.",
            action: "B2B commercial fleet outreach, contractor trade-in incentives, and premium utility pricing."
        }
    };

    // Tab Switching Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const pbBadge = document.getElementById('pbBadge');
    const pbTitle = document.getElementById('pbTitle');
    const pbShare = document.getElementById('pbShare');
    const pbPrice = document.getElementById('pbPrice');
    const pbMileage = document.getElementById('pbMileage');
    const pbProfile = document.getElementById('pbProfile');
    const pbOpportunity = document.getElementById('pbOpportunity');
    const pbAction = document.getElementById('pbAction');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const segKey = btn.getAttribute('data-segment');
            const data = segmentData[segKey] || segmentData['all'];

            pbBadge.textContent = data.badge;
            pbTitle.textContent = data.title;
            pbShare.textContent = data.share;
            pbPrice.textContent = data.price;
            pbMileage.textContent = data.mileage;
            pbOpportunity.textContent = data.opportunity;
            pbAction.textContent = data.action;

            // Render profile list
            pbProfile.innerHTML = data.profile.map(p => `<li><span>${p.label}</span> <strong>${p.val}</strong></li>`).join('');
        });
    });

    // Table Search Filter
    const searchInput = document.getElementById('tableSearch');
    const tableRows = document.querySelectorAll('#personasTable tbody tr');

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(term) ? '' : 'none';
            });
        });
    }

    // Chart.js Professional Styling Setup
    Chart.defaults.color = '#6B7280';
    Chart.defaults.font.family = 'Inter, sans-serif';
    Chart.defaults.font.size = 12;

    const themeColors = {
        blue: '#2563EB',
        purple: '#7C3AED',
        orange: '#EA580C',
        green: '#059669',
        red: '#DC2626',
        gridLine: '#E5E7EB'
    };

    // 1. Median Price Chart
    const priceCtx = document.getElementById('personaPriceChart').getContext('2d');
    new Chart(priceCtx, {
        type: 'bar',
        data: {
            labels: ['Bargain Spec', 'Executive Fleet', 'Rebuilt & Value', 'Economy Commuter', 'Utility Workhorse'],
            datasets: [{
                label: 'Median Price ($)',
                data: [17500, 8900, 28590, 5500, 43900],
                backgroundColor: [
                    themeColors.orange,
                    themeColors.blue,
                    themeColors.red,
                    themeColors.green,
                    themeColors.purple
                ],
                borderRadius: 4,
                barThickness: 32
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: { label: (ctx) => ` Median Price: $${ctx.raw.toLocaleString()}` }
                }
            },
            scales: {
                y: {
                    grid: { color: themeColors.gridLine },
                    ticks: { callback: (val) => `$${val / 1000}k` }
                },
                x: { grid: { display: false } }
            }
        }
    });

    // 2. Median Odometer Chart
    const odoCtx = document.getElementById('personaOdometerChart').getContext('2d');
    new Chart(odoCtx, {
        type: 'bar',
        data: {
            labels: ['Bargain Spec', 'Executive Fleet', 'Rebuilt & Value', 'Economy Commuter', 'Utility Workhorse'],
            datasets: [{
                label: 'Median Odometer (Miles)',
                data: [80500, 119690, 24828, 174977, 40848],
                backgroundColor: themeColors.blue,
                borderRadius: 4,
                barThickness: 32
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: { label: (ctx) => ` Median Mileage: ${ctx.raw.toLocaleString()} mi` }
                }
            },
            scales: {
                y: {
                    grid: { color: themeColors.gridLine },
                    ticks: { callback: (val) => `${val / 1000}k mi` }
                },
                x: { grid: { display: false } }
            }
        }
    });

    // 3. Market Share Composition Donut Chart
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
                    themeColors.orange,
                    themeColors.blue,
                    themeColors.red,
                    themeColors.green,
                    themeColors.purple
                ],
                borderWidth: 2,
                borderColor: '#FFFFFF'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { boxWidth: 12, padding: 12, font: { size: 11 } }
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
                backgroundColor: themeColors.purple,
                borderRadius: 4,
                barThickness: 18
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: { label: (ctx) => ` Missing: ${ctx.raw}% (Tagged as 'NP')` }
                }
            },
            scales: {
                x: {
                    grid: { color: themeColors.gridLine },
                    ticks: { callback: (val) => `${val}%` },
                    max: 100
                },
                y: { grid: { display: false } }
            }
        }
    });
});
