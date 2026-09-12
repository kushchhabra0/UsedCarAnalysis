# PHASE 4: Feature Engineering
# --------------------------------------------------
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

def engineer_features(df_clean):
    df_featured = df_clean.copy()
    df_featured['price_per_km'] = df_featured['selling_price'] / (df_featured['km_driven'] + 1)
    df_featured['power_to_engine_ratio'] = df_featured['max_power'] / df_featured['engine']

    df_featured['age_category'] = pd.cut(df_featured['vehicle_age'], bins=[0, 3, 7, 12, float('inf')],
                                         labels=['New', 'Recent', 'Mature', 'Old'])
    df_featured['mileage_category'] = pd.cut(df_featured['mileage'], bins=[0, 15, 20, 25, float('inf')],
                                             labels=['Low', 'Average', 'Good', 'Excellent'])
    df_featured['engine_category'] = pd.cut(df_featured['engine'], bins=[0, 1200, 1600, 2000, float('inf')],
                                            labels=['Small', 'Medium', 'Large', 'Very_Large'])

    luxury_brands = ['BMW', 'Mercedes-Benz', 'Audi', 'Jaguar', 'Volvo', 'Lexus', 'Mini']
    df_featured['is_luxury'] = df_featured['brand'].isin(luxury_brands).astype(int)
    df_featured['is_high_performance'] = (df_featured['max_power'] > df_featured['max_power'].quantile(0.75)).astype(int)
    df_featured['is_fuel_efficient'] = (df_featured['mileage'] > df_featured['mileage'].quantile(0.75)).astype(int)

    categorical_features = ['brand', 'fuel_type', 'transmission_type', 'seller_type',
                            'age_category', 'mileage_category', 'engine_category']
    df_encoded = pd.get_dummies(df_featured, columns=categorical_features)
    scaler = StandardScaler()
    X = df_encoded.drop(columns=['selling_price'])
    y = df_encoded['selling_price']
    X_scaled = pd.DataFrame(scaler.fit_transform(X), columns=X.columns)

    return X_scaled, y
