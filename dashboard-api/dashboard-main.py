# -*- coding: utf-8 -*-

from flask import Flask
from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast
import boto3
import os


app = Flask(__name__)
api = Api(app)


class Locations(Resource):
    def get(self):
        s3 = boto3.client('s3', aws_access_key_id = os.environ.get('AWS_ACCESS_KEY_ID'), aws_secret_access_key = os.environ.get('AWS_SECRET_ACCESS_KEY'))
        response = s3.list_objects(Bucket="swastik-personal-bucket")
        return {'data': response.get('Contents', [])[0].get('Key')}
    
api.add_resource(Locations, '/locations')  # and '/locations' is our entry point for Locations


if __name__ == '__main__':
    app.run()  # run our Flask app