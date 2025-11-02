# Start from a slim official Python image
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# 1. Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 2. Copy the application code and the model file
COPY main1.py .
COPY plant_disease_prediction_model.h5 .

# 3. Expose the port FastAPI runs on
EXPOSE 8000

# 4. Define the command to run the application
CMD ["uvicorn", "main1:app", "--host", "0.0.0.0", "--port", "8000"]