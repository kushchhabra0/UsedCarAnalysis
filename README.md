# Used Car Market Persona Segmentation

An end-to-end Machine Learning pipeline that processes **426,880 real-world used-car listings** from Craigslist to uncover hidden market segments using advanced **K-Prototypes clustering** ($K=5$) and density-based centroid seeding.

---

## ⚠️ The Problem
Dealerships, private sellers, and online marketplaces often struggle to target the right buyers for specific vehicles. Traditional pricing and classification models heavily rely on basic continuous metrics (like mileage and year), ignoring the complex, mixed-type nature of vehicle attributes (e.g., manufacturer prestige, title status, fuel type, condition) that heavily influence buyer psychology.

Furthermore, standard **K-Means clustering** is mathematically undefined for nominal categorical attributes, while naive stochastic initialization (e.g. Huang initialization) leads to severe local-minima instability across high-cardinality features.

---

## 💡 The Solution
To solve this, we engineered an end-to-end data pipeline to segment the dataset into 5 distinct, actionable **Buyer Personas**. By treating vehicles as holistic products targeting specific demographics, businesses can optimize inventory acquisition, automated listing arbitrage, and dynamic marketing.

---

## 🔬 Methodology & Empirical Findings

*   **Data Hygiene & Informative Missingness (MNAR)**: Rather than discarding listings missing key attributes (e.g. 71.7% missing vehicle size, 41.6% cylinders), missing values were tagged with structural `'NP'` (*Not Provided*) tokens. This preserves non-profiling behavior as a predictive market signal.
*   **Feature Selection via Cramér's V**: Systematically screened nominal feature associations to eliminate collinearity (e.g. `type` vs `drive` $V=0.48$).
*   **K-Prototypes Clustering ($K=5$)**: Combined continuous metrics (`price`, `year`, `odometer`) with nominal categorical attributes (`manufacturer`, `condition`, `fuel`, `title_status`, `transmission`, `drive`, `type`).
*   **Cao Density Seeding for Stability**: Replaced stochastic Huang initialization with **Cao density-based centroid seeding**, boosting random seed stability from ARI **0.3842** to a near-perfect **0.9997 ARI** across 5 random initialization states.

---

## 📊 Empirical Discovered Personas ($K=5$)

| Persona Name | Market Share | Median Price | Median Year | Median Mileage | Top Features / Body Type | Strategic Commercial Value |
| :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| **🔍 Under-Profiled Bargain Specs** | **26.17%** | **$17,500** | 2015 | 80,500 mi | Ford (NP Spec, Clean Title) | **Arbitrage Target**: Buy under-listed cars & complete profile specs for 15-20% margin. |
| **💼 High-Value Executive Fleet** | **23.32%** | **$8,900** | 2011 | 119,690 mi | Chevrolet Sedan (FWD, Excellent) | High loan approval rate & predictable steady turnover. |
| **🔧 Rebuilt & Value Inventory** | **20.70%** | **$28,590** | 2018 | 24,828 mi | Ford Sedan (Good Condition, Clean) | High reconditioning ROI & modern vehicle demand. |
| **🚗 Economy Daily Commuters** | **18.97%** | **$5,500** | 2005 | 174,977 mi | Ford Entry Level (Clean Title) | Highest sales velocity & minimal holding costs. |
| **🛻 Heavy-Duty Utility Workhorses** | **10.84%** | **$43,900** | 2017 | 40,848 mi | Ford Truck (4WD, Clean Title) | Premium price retention & lowest depreciation rate. |

---

## 💼 Strategic Business Impact
*   **Algorithmic Listing Arbitrage**: Capitalize on the 26.17% *Under-Profiled Bargain Spec* segment by acquiring poorly described listings at a discount, filling in missing specifications, and re-listing at full market value.
*   **Inventory Optimization**: Focus lot procurement on high-margin *Heavy-Duty Utility Workhorses* ($43,900 median valuation) which retain value best over time.
*   **Persona-Based Dynamic Marketing**: Deploy targeted low-monthly-payment ads for *Economy Commuters* ($5,500) vs financing & warranty offers for *Executive Fleets*.

---

## 🌐 Live Interactive Web Dashboard
Explore the full visual analytics dashboard, interactive Chart.js visualizations, and business pipeline in action:
👉 **[View Live Dashboard](https://kushchhabra0.github.io/UsedCarAnalysis/)** *(Hosted via GitHub Pages)*

---
*Built with Python, Scikit-Learn, KModes, Chart.js, and a commitment to robust MLOps Data Engineering.*
