# PHASE 2: Data Cleaning & Assessment
# --------------------------------------------------
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

def clean_data(df):
    print("\n🧹 Starting data cleaning...")

    df_clean = df.copy()
    df_clean = df_clean.drop_duplicates()

    numeric_cols = ['mileage', 'engine', 'max_power', 'km_driven', 'selling_price']
    for col in numeric_cols:
        if col in df_clean.columns:
            df_clean[col].fillna(df_clean[col].median(), inplace=True)

    categorical_cols = ['fuel_type', 'transmission_type', 'seller_type']
    for col in categorical_cols:
        if col in df_clean.columns:
            df_clean[col].fillna(df_clean[col].mode()[0], inplace=True)

    for col in ['selling_price', 'km_driven']:
        if col in df_clean.columns:
            p99 = df_clean[col].quantile(0.99)
            p1 = df_clean[col].quantile(0.01)
            df_clean[col] = np.where(df_clean[col] > p99, p99, df_clean[col])
            df_clean[col] = np.where(df_clean[col] < p1, p1, df_clean[col])

    return df_clean
