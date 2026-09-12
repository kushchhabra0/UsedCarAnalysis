# PHASE 3: Exploratory Data Analysis
# --------------------------------------------------
import matplotlib.pyplot as plt
import seaborn as sns

def perform_eda(df_clean):
    print("\n📊 Starting EDA...")

    numeric_features = ['selling_price', 'vehicle_age', 'km_driven', 'mileage', 'engine', 'max_power', 'seats']
    corr_matrix = df_clean[numeric_features].corr()

    plt.figure(figsize=(10, 8))
    sns.heatmap(corr_matrix, annot=True, cmap='coolwarm')
    plt.title('Correlation Matrix')
    plt.tight_layout()
    plt.show()
