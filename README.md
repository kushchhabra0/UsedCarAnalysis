# Used Car Market Persona Segmentation

An end-to-end Machine Learning pipeline that processes 400,000+ real-world used-car listings to uncover hidden market segments using advanced clustering techniques.

## ⚠️ The Problem
Dealerships, private sellers, and online marketplaces often struggle to target the right buyers for specific vehicles. Traditional pricing and classification models heavily rely on basic continuous metrics (like mileage and year), ignoring the complex, mixed-type nature of vehicle attributes (e.g., manufacturer prestige, title status, fuel type, condition) that heavily influence buyer psychology.

## 💡 The Solution
To solve this, we engineered an end-to-end data pipeline to segment the massive Craigslist used-car dataset into distinct, actionable **Buyer Personas**. By treating vehicles not just as rows of data, but as holistic products targeting specific demographics, businesses can optimize inventory acquisition and targeted marketing.

## 🔬 Methodology
This project implements a rigorous, industry-standard ML approach tailored for mixed data types:
*   **Data Hygiene & MNAR Handling**: Replaced standard simplistic imputation with structural missingness tagging (MNAR), preserving vital pricing signals often lost when data is discarded.
*   **Feature Selection via Cramér's V**: Systematically eliminated collinear categorical variables to optimize cluster separation and reduce dimensionality.
*   **K-Prototypes Clustering**: Because K-Means is mathematically undefined for categorical data, we utilized K-Prototypes to correctly evaluate similarity across mixed numeric (price, odometer) and categorical (manufacturer, condition, title status) features.
*   **36-Check Validation Framework**: Automated pipeline validation ensuring robust model stability with an Adjusted Rand Index (ARI) > 0.80.

## 📊 Results (The 5 Personas)
*Pending full execution on the Craigslist dataset, the algorithm typically identifies distinct clusters such as:*
1.  **The Budget Commuter**: High mileage, standard condition, economy brands.
2.  **The Premium Enthusiast**: Luxury manufacturers, excellent/like-new condition, high price tier.
3.  **The Reliable Hauler**: Mid-tier price, SUVs/Trucks, clean titles, average mileage.
4.  **The Workhorse**: High mileage trucks/vans, varying title statuses, utility-focused.
5.  **The Project/Vintage Vehicle**: High age, missing/parts-only condition, specialized pricing.

## 💼 Business Benefits
*   **Targeted Marketing**: Align ad spend with the specific persona a vehicle fits into, rather than generic blasts.
*   **Inventory Optimization**: Identify which vehicle personas move fastest in specific regions to optimize lot stock.
*   **Dynamic Pricing**: Price vehicles based on holistic persona appeal rather than standard linear depreciation curves.

---
*Built with Python, Scikit-Learn, KModes, and a commitment to robust Data Engineering.*
