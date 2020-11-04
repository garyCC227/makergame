from PIL import Image
import pandas as pd
import requests
import json
import io
import os


# 1. to label and push more images. (50/50 ratio for positive/negatives)
# 2. to download images from mapbox using center point of each of the image.
# 3. Naming convention to cross reference.


if not os.path.exists('RawAndMasks'):
    os.makedirs('RawAndMasks')

with open('LabelExport.json') as f:
  data = json.load(f)


def save_image(ID, res):
    img = res.content
    in_memory_file = io.BytesIO(img)
    img = Image.open(in_memory_file)
    rgb_img = img.convert('RGB')
    rgb_img.save(f'./RawAndMasks/{ID}.jpg')


# add the negative samples here.. Check what ratio is needed.
for i in range(len(data)):

	if 'objects' in data[i]['Label']:
		id1 = data[i]['ID'];
		id2 = data[i]['ID']+"_mask";
		Raw = data[i]['Labeled Data'];
		Mask = data[i]['Label']['objects'][0]['instanceURI'];
		res1 = requests.get(Raw);
		save_image(id1, res1);
		res2 = requests.get(Mask);
		save_image(id2, res2);
	print(str(i)+" out of "+str(len(data))+" complete.");	