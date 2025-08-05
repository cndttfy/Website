import psycopg2

def get_db_connection():
    return psycopg2.connect(
        host="localhost",
        database="TFY_Website",
        user="postgres",
        password="fy2025@"
    )
