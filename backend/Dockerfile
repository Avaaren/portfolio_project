# Dockerfile
FROM python:3

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# Copy 
WORKDIR /app/backend
COPY requirements.txt /app/backend
RUN pip install -r requirements.txt

COPY . /app/backend

WORKDIR /app/backend/portfolio

