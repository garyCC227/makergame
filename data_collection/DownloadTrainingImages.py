from PIL import Image
import io
import json
import os
import requests
import re




if not os.path.exists('TrainingData'):
    os.makedirs('TrainingData')


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
    img.save(f'./TrainingData/{ID}.jpg') #NOTE:   Naming convention - the image ID, you can check it for more detail in repot.xlsx

def download_img(ID, coord):
    coord = re.sub("\s+", "", coord) #remove whitespace
    URL = f"https://api.mapbox.com/styles/v1/{username}/{style_id}/static/{coord},{zoom},{bearing}/{pixel}?access_token={access_token}"
    res = requests.get(URL)
    save_image(ID, res)

'''
run this script to use api to download images with the coordiantes in report.xlsx
to download satellite images
'''

def main():
    with open('data.json') as f:
        data = json.load(f)

    for row in data['allCoordinates']:
        print(row['image_id'])
        ID = row['image_id']
        lat = row['center']['lat']
        longi = row['center']['long']
        coord = f"{longi},{lat}"
        download_img(ID, coord)
       
if __name__ == "__main__":
    main()


