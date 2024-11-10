from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import requests

app = Flask(__name__)
CORS(app)

# Function to calculate crime risk based on address
def calculate_crime_risk(address):
    crime_data = get_crime_data(address)
    return crime_data.get('crime_rate', random.randint(1, 100))

# Function to calculate environmental risk based on address
def calculate_environmental_risk(address):
    environmental_data = get_environmental_data(address)
    return environmental_data.get('pollution_index', random.randint(1, 100))

# Function to calculate flood risk based on address
def calculate_flood_risk(address):
    flood_risk = get_flood_risk(address)
    return flood_risk.get('flood_probability', random.randint(1, 100))

# Function to calculate cost of living risk based on address
def calculate_cost_of_living_risk(address):
    cost_of_living_data = get_cost_of_living_data(address)
    return cost_of_living_data.get('cost_index', random.randint(1, 100))

# Function to calculate sentiment risk based on address
def calculate_sentiment_risk(address):
    sentiment_data = get_sentiment_data(address)
    return sentiment_data.get('sentiment_index', random.randint(1, 100))

# Function to calculate overall risk based on individual risk factors
def calculate_risk_score(address):
    crime_risk = calculate_crime_risk(address)
    environmental_risk = calculate_environmental_risk(address)
    flood_risk = calculate_flood_risk(address)
    cost_of_living_risk = calculate_cost_of_living_risk(address)
    sentiment_risk = calculate_sentiment_risk(address)

    overall_risk = (crime_risk + environmental_risk + flood_risk + cost_of_living_risk + sentiment_risk) // 5

    return {
        "crime_risk": crime_risk,
        "environmental_risk": environmental_risk,
        "flood_risk": flood_risk,
        "cost_of_living_risk": cost_of_living_risk,
        "sentiment_risk": sentiment_risk,
        "overall_risk": overall_risk
    }

# Mock function to simulate fetching crime data
def get_crime_data(address):
    # Replace with actual API call to a crime data source
    return {"crime_rate": random.randint(1, 100)}

# Mock function to simulate fetching environmental data
def get_environmental_data(address):
    # Replace with actual API call to an environmental data source
    return {"pollution_index": random.randint(1, 100)}

# Mock function to simulate fetching flood risk data
def get_flood_risk(address):
    # Replace with actual API call to a flood risk data source
    return {"flood_probability": random.randint(1, 100)}

# Mock function to simulate fetching cost of living data
def get_cost_of_living_data(address):
    # Replace with actual API call to a cost of living data source
    return {"cost_index": random.randint(1, 100)}

# Mock function to simulate fetching sentiment data
def get_sentiment_data(address):
    # Replace with actual API call to a sentiment analysis data source
    return {"sentiment_index": random.randint(1, 100)}

@app.route('/calculate_crime_risk', methods=['POST'])
def calculate_crime():
    data = request.get_json()
    address = 'Los Angeles, CA'

    if not address:
        return jsonify({"error": "Address is required"}), 400

    crime_risk = calculate_crime_risk(address)
    return jsonify({
        "address": address,
        "crime_risk": crime_risk
    })

@app.route('/calculate_environmental_risk', methods=['POST'])
def calculate_environmental():
    data = request.get_json()
    address = 'Los Angeles, CA'

    if not address:
        return jsonify({"error": "Address is required"}), 400

    environmental_risk = calculate_environmental_risk(address)
    return jsonify({
        "address": address,
        "environmental_risk": environmental_risk
    })

@app.route('/calculate_flood_risk', methods=['POST'])
def calculate_flood():
    data = request.get_json()
    address = 'Los Angeles, CA'

    if not address:
        return jsonify({"error": "Address is required"}), 400

    flood_risk = calculate_flood_risk(address)
    return jsonify({
        "address": address,
        "flood_risk": flood_risk
    })

@app.route('/calculate_cost_of_living_risk', methods=['POST'])
def calculate_cost_of_living():
    data = request.get_json()
    address = 'Los Angeles, CA'

    if not address:
        return jsonify({"error": "Address is required"}), 400

    cost_of_living_risk = calculate_cost_of_living_risk(address)
    return jsonify({
        "address": address,
        "cost_of_living_risk": cost_of_living_risk
    })

@app.route('/calculate_sentiment_risk', methods=['POST'])
def calculate_sentiment():
    data = request.get_json()
    address = 'Los Angeles, CA'

    if not address:
        return jsonify({"error": "Address is required"}), 400

    sentiment_risk = calculate_sentiment_risk(address)
    return jsonify({
        "address": address,
        "sentiment_risk": sentiment_risk
    })

@app.route('/calculate_risk', methods=['POST'])
def calculate_risk():
    data = request.get_json()
    address = 'Los Angeles, CA'
    
    if not address:
        return jsonify({"error": "Address is required"}), 400

    risk_score = calculate_risk_score(address)
    return jsonify({
        "address": address,
        "risk_score": risk_score
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
