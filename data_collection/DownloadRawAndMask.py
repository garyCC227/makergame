from PIL import Image
import pandas as pd
import requests
import json
import io
import os


if not os.path.exists('RawAndMasks'):
    os.makedirs('RawAndMasks')

with open('LabelExport.json') as f:
  data = json.load(f)


print(len(data));



def save_image(ID, res):
    img = res.content
    in_memory_file = io.BytesIO(img)
    img = Image.open(in_memory_file)
    rgb_img = img.convert('RGB')
    rgb_img.save(f'./RawAndMasks/{ID}.jpg')


# add the negative samples here.. Check what ratio is needed.

count=0;

for i in range(len(data)):

	if (count == 306):
		break;

	if 'objects' in data[i]['Label']:
		continue;

	
	id2 = data[i]['ID']+"_negative";
	Raw = data[i]['Labeled Data'];
	res1 = requests.get(Raw);
	save_image(id2, res1);
	count = count + 1;
	print(str(i)+ " negative samples - complete.");



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