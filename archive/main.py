# Main pipeline runner
# --------------------------------------------------
import pandas as pd
from phase2_data_cleaning import clean_data
from phase3_exploratory_analysis import perform_eda
from phase4_feature_engineering import engineer_features
from phase5_modeling import model_and_evaluate

if __name__ == "__main__":
    print("🚗 Used Car Price Prediction - Pipeline Start")
    df = pd.read_csv('cardekho_dataset.csv')  # Replace with your dataset path
    df_clean = clean_data(df)
    perform_eda(df_clean)
    X_scaled, y = engineer_features(df_clean)
    model_and_evaluate(X_scaled, y)
