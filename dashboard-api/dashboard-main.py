# -*- coding: utf-8 -*-

from flask import Flask
from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast
from resources.resources import Buckets, CloudformationStacks, DeleteAllCfts, CreateCfts


app = Flask(__name__)
api = Api(app)

    
api.add_resource(Buckets, '/allbuckets')  # and '/locations' is our entry point for Locations
api.add_resource(CloudformationStacks, '/allcfts')
api.add_resource(DeleteAllCfts, '/deletecfts')
api.add_resource(CreateCfts, '/createcfts')

if __name__ == '__main__':
    app.run()  # run our Flask app