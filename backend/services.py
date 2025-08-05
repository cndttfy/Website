from flask import Blueprint, jsonify
from connect_db import get_db_connection 
services_bp = Blueprint("services", __name__)

@services_bp.route("/services", methods=["GET"])
def get_services():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, name, icon FROM services ORDER BY id;")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    services = [
        {"id": row[0], "name": row[1], "icon": row[2]}
        for row in rows
    ]
    return jsonify(services)
