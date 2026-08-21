import logging
import os
import sys
from datetime import datetime

# Log file name format
LOG_FILE = f"{datetime.now().strftime('%m_%d_%Y_%H_%M_%S')}.log"

# Define logs directory path
LOGS_DIR = os.path.join(os.getcwd(), "logs")
os.makedirs(LOGS_DIR, exist_ok=True)

# Full path to log file
LOG_FILE_PATH = os.path.join(LOGS_DIR, LOG_FILE)

# Logging configuration format
logging.basicConfig(
    format="[ %(asctime)s ] %(lineno)d %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
    handlers=[
        logging.FileHandler(LOG_FILE_PATH),
        logging.StreamHandler(sys.stdout)
    ]
)

# Root logger instance
logger = logging.getLogger("UsedCarAnalysis")
