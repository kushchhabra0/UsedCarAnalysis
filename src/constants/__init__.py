# Constants package for defining system-wide constants (paths, parameters, etc.)
import os
import json

# Base paths
ROOT_DIR = os.getcwd()
ARTIFACTS_DIR = os.path.join(ROOT_DIR, "artifacts")

# Dataset paths
RAW_DATASET_NAME = "cardekho_dataset.csv"
RAW_DATASET_PATH = os.path.join(ROOT_DIR, RAW_DATASET_NAME)

# Load schema configuration
SCHEMA_FILE_PATH = os.path.join(ROOT_DIR, "src", "constants", "schema.json")
with open(SCHEMA_FILE_PATH, "r") as f:
    schema = json.load(f)

TARGET_COLUMN = schema["target_column"]
COLUMNS_TO_DROP = schema["columns_to_drop"]
NUMERICAL_FEATURES = schema["numerical_features"]
CATEGORICAL_FEATURES = schema["categorical_features"]
SEATS_ANOMALY_THRESHOLD = schema["seats_anomaly_threshold"]
SEATS_FALLBACK_VALUE = schema["seats_fallback_value"]
