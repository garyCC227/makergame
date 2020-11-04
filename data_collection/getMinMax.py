import json
import requests
# get coordinates from online source and save it in file (called test.json here....)
# process the thing to get min max
# get the center of each of the blocks of larger area.
# get the coordinates of the sides of each of the block.
# convert to geojson
# 


# get all four coordinate points

# keyGoogleMaps = AIzaSyACH0H6DHMWO_5lsV31CvQiKp1K1_Tt47M;
# urlGoogle = "https://maps.googleapis.com/maps/api/geocode/json?&address=banglore&key="+str(key);
#aNorth  =   map.getBounds().getNorthEast().lat();   
#aEast   =   map.getBounds().getNorthEast().lng();
#aSouth  =   map.getBounds().getSouthWest().lat();   
#aWest   =   map.getBounds().getSouthWest().lng();


# gets distance between two coordinate points (using rapid api service, ApiOcean's api) 
# NOTE: No more than 100 requests per month. (for free use)
# keyDistance = "869e09a057msh0324b856ca8ba95p17965ejsn87ab12c60bf1"
# urlDistance = "https://distance-calculator.p.rapidapi.com/distance/simple"
# key
# querystring = {"unit":"kilometers","lat_1":"13.173706","long_1":"77.8826809","lat_2":"13.173706","long_2":"77.5945627"}

# headers = {
#     'x-rapidapi-host': "distance-calculator.p.rapidapi.com",
#     'x-rapidapi-key': keyDistance,
#     'content-type': "application/json"
#     }

# response = requests.request("GET", url, headers=headers, params=querystring)

# print(response.text)

# LENGTH, WIDTH = 0.597 * 512; # 306.644







longitude = []
latitude = []

def readjson(data):
	for i in data['coordinates'][0][0]:
		longitude.append(i[0]);
		latitude.append(i[1]);

	print(min(longitude), min(latitude));
	print(min(longitude), max(latitude));
	print(max(longitude), max(latitude));
	print(max(longitude), min(latitude));
	print(min(longitude), min(latitude));


if __name__ == "__main__":
	with open('test.json') as f:
	  data = json.load(f)

	readjson(data);