# -*- coding: utf-8 -*-
from flask_restful import Resource, Api, reqparse
from flask import request
import boto3
import os

class Buckets(Resource):
    def get(self):
        s3 = boto3.client('s3', aws_access_key_id = os.environ.get('AWS_ACCESS_KEY_ID'), aws_secret_access_key = os.environ.get('AWS_SECRET_ACCESS_KEY'))
        response = s3.list_objects(Bucket=request.args.get('bucketname'))
        keys = []
        for key in response.get('Contents', []):
            key.update({'LastModified': ''})
            keys.append(key)
        print(keys)    
        return {'data': keys}
class CloudformationStacks(Resource):
    def get(self):
        statuses = ['ROLLBACK_COMPLETE', 'CREATE_COMPLETE', 'UPDATE_COMPLETE', 'DELETE_COMPLETE']
        cf = boto3.resource('cloudformation')
        stacks = [stack for stack in cf.stacks.all()]
        return {'data': stacks}