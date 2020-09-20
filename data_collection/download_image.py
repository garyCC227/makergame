from PIL import Image
import io
import matplotlib.pyplot as plt
import numpy as np
import requests
import re



'''
This script is used to download ONE image from Mapbox static API
By entering coordinates in this format - 'longtitude,latitude'
'''


# API parameters
access_token = 'pk.eyJ1IjoiZ2FyeWNjMjI3IiwiYSI6ImNrZDJyaWRxbDFnZGcycXF5dm8wcnptdjQifQ.Aw920Zjcv8rr6ewAj3oe1A'
pixel = '512x512'
zoom = '17'
username = 'mapbox'
style_id = 'satellite-v9'
bearing = '0'


def save_image(ID, res):
    img = res.content
    in_memory_file = io.BytesIO(img)
    img = Image.open(in_memory_file)
    img.save(f'../sample_data/{ID}.jpg') #NOTE:   Naming convention - the image ID, you can check it for more detail in repot.xlsx

def download_img(ID, coord):
    coord = re.sub("\s+", "", coord) #remove whitespace

    URL = f"https://api.mapbox.com/styles/v1/{username}/{style_id}/static/{coord},{zoom},{bearing}/{pixel}?access_token={access_token}"
    res = requests.get(URL)
    save_image(ID, res)

if __name__ == "__main__":
    #  '77.6887,13.0194'
    coord = input("Enter coordinates in this format - longitude,latitude \n:") #TODO: later change to argument with dynamic image name
    ID = '0'
    download_img( ID,coord)