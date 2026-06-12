FROM python:3.12-slim

WORKDIR /app

RUN python -m pip install --upgrade pip
RUN pip install fastapi uvicorn[standard]

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
