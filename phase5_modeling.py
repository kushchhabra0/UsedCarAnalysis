# PHASE 5: Modeling & Evaluation
# --------------------------------------------------
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

def model_and_evaluate(X_scaled, y):
    X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

    lr = LinearRegression().fit(X_train, y_train)
    rf = RandomForestRegressor(n_estimators=100, random_state=42).fit(X_train, y_train)

    def evaluate(y_true, y_pred, name):
        mae = mean_absolute_error(y_true, y_pred)
        rmse = np.sqrt(mean_squared_error(y_true, y_pred))
        r2 = r2_score(y_true, y_pred)
        print(f"\n{name} Performance:\n  MAE: ₹{mae:.0f}\n  RMSE: ₹{rmse:.0f}\n  R²: {r2:.4f}")

    evaluate(y_test, lr.predict(X_test), "Linear Regression")
    evaluate(y_test, rf.predict(X_test), "Random Forest")
