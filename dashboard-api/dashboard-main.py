# -*- coding: utf-8 -*-

from flask import Flask
from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast
import boto3
import os


app = Flask(__name__)
api = Api(app)


class Buckets(Resource):
    def get(self):
        s3 = boto3.client('s3', aws_access_key_id = os.environ.get('AWS_ACCESS_KEY_ID'), aws_secret_access_key = os.environ.get('AWS_SECRET_ACCESS_KEY'))
        response = s3.list_objects(Bucket="swastik-personal-bucket")
        keys = []
        for key in response.get('Contents', []):
            key.update({'LastModified': ''})
            keys.append(key)
        print(keys)    
        return {'data': keys}
    
api.add_resource(Buckets, '/allbuckets')  # and '/locations' is our entry point for Locations


if __name__ == '__main__':
    app.run()  # run our Flask app