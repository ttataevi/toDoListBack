import json
from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://tatia:tatia@cluster0.fw1ro.mongodb.net/TODOLIST?retryWrites=true&w=majority")
db = cluster["test"]
collection = db["test"]
collection.delete_many({})
toDo1 = {"name": "check", "done": False}
collection.insert_one(toDo1)

toDo2 = {"name": "test", "done": True}
collection.insert_one(toDo2)

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})


@app.route('/')
def index():
    list = []
    for x in collection.find():
        jsonObj = {
            "id": str(x["_id"]),
            "name": x["name"],
            "done": x["done"]}
        list.append(jsonObj)
    return json.dumps(list)


@app.route('/delete', methods=["POST"])
def post():
    id = request.json['id']
    for x in collection.find({}):
        if str(x["_id"]) == id:
            collection.delete_one(x)
    return {"answer": "success"}


@app.route('/add', methods=["POST"])
def addElem():
    name = request.json['name']
    temp = {"name": name, "done": False}
    x = collection.insert_one(temp)
    currId = x.inserted_id
    return {"answer": str(currId)}


@app.route('/change', methods=["POST"])
def change():
    id = request.json['id']

    newName = request.json['edit']
    checked = request.json['check']
    for x in collection.find({}):
        if str(x['_id']) == id:
            collection.replace_one(
                x,
                {
                    "name": newName,
                    "done": checked
                }
            )
    return {"answer": True}


@app.route('/check', methods=["POST"])
def checking():
    currId = request.json['id']
    checked = request.json['check']
    for x in collection.find({}):
        if str(x["_id"]) == currId:
            collection.replace_one(
                x,
                {
                    "name": x["name"],
                    "done": checked
                }
            )
    return {"answer": True}


@app.route('/space', methods=["POST"])
def space():
    currStr = request.json['currStr']
    isSpace = currStr.isspace() or len(currStr) == 0
    return {"answer": isSpace}


@app.route('/pagination', methods=["POST"])
def pagination():
    currButton = request.json['index']
    currButton = (currButton - 1) * 5
    list = []
    showNext = 5 if collection.count_documents({}) - currButton >= 5 else collection.count_documents({}) - currButton

    for x in collection.find({}).skip(currButton).limit(showNext):
        jsonObj = {
            "id": str(x["_id"]),
            "name": x["name"],
            "done": x["done"]}
        list.append(jsonObj)

    return json.dumps(list)


app.run(debug=True, port=5000)
