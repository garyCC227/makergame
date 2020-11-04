import json
import requests
import math
# get coordinates from online source and save it in file (called test.json here....)
# process the thing to get min max
# get the center of each of the blocks of larger area.
# get the coordinates of the sides of each of the block.
# convert to geojson
# https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/utils/geocoder#place_id%3DChIJbU60yXAWrjsR4E9-UejD3_g
	



CITY = "bangalore"
##############################################################################
#	PART 1 - GET THE BOUNDS OF THE CITY

# 	get all four coordinate points of a city
#
#	"northeast" : {
#	  "lat" : 13.173706,
#	  "lng" : 77.8826809
#	},
#	"southwest" : {
#	  "lat" : 12.7342888,
#	  "lng" : 77.3791981
#
#	Uncomment area below (''')

'''

# CHANGE NAME OF THE CITY HERE!!! DEFAULT: BANGALORE
CITY = "bangalore"	
keyGoogleCloud = "AIzaSyACH0H6DHMWO_5lsV31CvQiKp1K1_Tt47M";
urlToGetCoordinates = "https://maps.googleapis.com/maps/api/geocode/json?&address="+str(CITY)+"&key="+str(keyGoogleCloud);

r = requests.get(urlToGetCoordinates)
data = r.json()
northeast = data['results'][0]['geometry']['bounds']['northeast']
southwest = data['results'][0]['geometry']['bounds']['southwest']


 
#	Bounds of a city. Get all the 4 corners/coordinates using the directions below. NE, NW, SE, SW
#
# 	NE ------- NW
#	|			|
#	|			|	
#	SE ------- SW


aNorth = northeast['lat'];
aEast = northeast['lng'];
aSouth = southwest['lat'];
aWest = southwest['lng'];

print("NE coordinates = Lat: " + aNorth + "  Long: " + aEast);
print("NW coordinates = Lat: " + aNorth + "  Long: " + aWest);
print("SE coordinates = Lat: " + aSouth + "  Long: " + aEast);
print("SW coordinates = Lat: " + aSouth + "  Long: " + aWest);


'''

aNorth = "13.173706"
aEast  = "77.8826809"
aSouth = "12.7342888"
aWest  = "77.3791981"

#	End Part 1

#################################################################################



##############################################################################
#	PART 2 - DISTANCE BETWEEN COORDINATES (LENGTH & WIDTH) OF THE CITY

#	gets distance between two coordinate points (using rapid api service, ApiOcean's api) 
#	NOTE: No more than 100 requests per month. (for free use)
#
#	for bangalore: 
#			Length : 54.51140696258868 KM
#			Width  : 48.86096332035733 KM
#
#	Uncomment area below (''')
#

'''


keyDistance = "869e09a057msh0324b856ca8ba95p17965ejsn87ab12c60bf1"
urlToGetDistance = "https://distance-calculator.p.rapidapi.com/distance/simple"
# To get the length of the city
querystring_Length = {"unit":"kilometers","lat_1": aNorth,"long_1": aEast,"lat_2": aNorth,"long_2": aWest}
# To get the width of the city
querystring_Width  = {"unit":"kilometers","lat_1": aNorth,"long_1": aEast,"lat_2": aSouth,"long_2": aEast}

headers = {
	'x-rapidapi-host': "distance-calculator.p.rapidapi.com",
	'x-rapidapi-key': keyDistance,
	'content-type': "application/json"
}



response_length = requests.request("GET", urlToGetDistance, headers=headers, params=querystring_Length)
response_length = response_length.json()
length_of_city = response_length['distance']	# in Kilometers

response_width = requests.request("GET", urlToGetDistance, headers=headers, params=querystring_Width)
response_width = response_width.json()
width_of_city = response_width['distance']		# in Kilometers


'''

length_of_city = 54.51140696258868;
width_of_city = 48.86096332035733;


# End Part 2
####################################################################



##############################################################################
#	PART 3 - GET COORDINATES FOR EACH IMAGE (ZOOM 17) OF ALL THE CITY



image_side_length = 0.597 * 512; # 305.644 meters; At zoom level 17, per pixel distance = 0.597 meters; 512 pixel image.

numImages_length = (float(length_of_city) * 1000) / image_side_length;
numImages_width = (float(width_of_city) * 1000) / image_side_length;
numImages_length = math.ceil(numImages_length);
numImages_width = math.ceil(numImages_width);


# Get number of images to be produced - Length wise
print(numImages_length);

# Get number of images to be produced - Width wise
print(numImages_width);

'''
	Number of Images for bangalore (ceiling):
	 	178.33767457923955 = 179
		159.8518743468558 = 160
'''


CenterOfSmallerImages = 0.597 * 256; 	# 152.832 meters

# 	https://stackoverflow.com/questions/7477003/calculating-new-longitude-latitude-from-old-n-meters
#	number of km per degree = ~111km (111.32 in google maps, but range varies
#	between 110.567km at the equator and 111.699km at the poles)
#	1km in degree = 1 / 111.32km = 0.0089
#	1m in degree = 0.0089 / 1000 = 0.0000089

coefCenter = CenterOfSmallerImages * 0.0000089;

# for center of the image
new_lat = float(aNorth) - coefCenter; 
new_long = float(aEast) + coefCenter / math.cos(float(aNorth) * 0.018); 	# pi / 180 = 0.018


# for next image along the length (change the longitude)

coefForImage = image_side_length * 0.0000089
# changeOfCoordinateAlongLength = float(aEast) + coefForImage / math.cos(float(aNorth) * 0.018);

# for next image along the width (change the lat)
# changeOfCoordinateAlongWidth = float(aNorth) - coefForImage; 


# print("for center of the first image");
# print("old lat: "+str(aNorth))
# print("new lat: "+str(new_lat))
# print("old long: "+str(aEast))
# print("new long: "+str(new_long))
# print(" ")


# initialise
curr_lat = aNorth;
curr_long = aEast;

# create a json with geo data

data = {}
data['city'] = CITY
data['grid_size'] = {
	'unit' : "Number of Images",
	'length' : str(numImages_length),
	'width' : str(numImages_width)
}
data['allCoordinates'] = []

for j in range(numImages_width):

	# First longitude
	curr_long = aEast;

	for i in range(numImages_length):
		# print(" At Coordinate: lat long: "+str(curr_lat)+" "+ str(curr_long))
		
		# caculating center for this image/coordinates
		center_lat = float(curr_lat) - coefCenter; 
		center_long = float(curr_long) + coefCenter / math.cos(float(curr_lat) * 0.018);


		#############################
		# Sides of the Images		#
		# NE = curr_lat, curr_long	#
		# NW = curr_lat, next		#
		# SE = next, curr_long		#
		# SW = next, next			#
		#############################

		data['allCoordinates'].append({
			'image_id': str(j)+","+str(i),
		    'NE': {'lat': str(curr_lat), 'long': str(curr_long)},
		    'NW': {'lat': str(curr_lat), 'long': str(float(curr_long) + coefForImage / math.cos(float(curr_lat) * 0.018))},
		    'SE': {'lat': str(float(curr_lat) - coefForImage), 'long': str(curr_long) },
		    'SW': {'lat': str(float(curr_lat) - coefForImage), 'long': str(float(curr_long) + coefForImage / math.cos(float(curr_lat) * 0.018))},
		    'center': {'lat': str(center_lat), 'long': str(center_long)}
		})

		# go right.
		curr_long = float(curr_long) + coefForImage / math.cos(float(curr_lat) * 0.018);
		
	# go down.
	curr_lat = float(curr_lat) - coefForImage;

		
with open('data.json', 'w') as outfile:
    json.dump(data, outfile, indent=4)




















'''

	The number of kilometers per degree of longitude is approximately

	(2*pi/360) * r_earth * cos(theta)
	where theta is the latitude in degrees and r_earth is approximately 6378 km.

	The number of kilometers per degree of latitude is approximately the same at all locations, approx

	(2*pi/360) * r_earth = 111 km / degree 
	So you can do:

	dy = old lat - 0.152 meter  check for sign
	dx = old lng - 0.152 meter
	new_latitude  = latitude  + (dy / r_earth) * (180 / pi);
	new_longitude = longitude + (dx / r_earth) * (180 / pi) / cos(latitude * pi/180);
	As long as dx and dy are small compared to the radius of the earth and you don't get too close to the poles.

	(2*pi/360) * r_earth * cos(theta)

'''


'''

	The accepted answer is perfectly right and works. I made some tweaks and turned into this:

	double meters = 50;

	// number of km per degree = ~111km (111.32 in google maps, but range varies
	//   between 110.567km at the equator and 111.699km at the poles)
	// 1km in degree = 1 / 111.32km = 0.0089
	// 1m in degree = 0.0089 / 1000 = 0.0000089
	double coef = meters * 0.0000089;

	double new_lat = my_lat + coef;

	// pi / 180 = 0.018
	double new_long = my_long + coef / Math.cos(my_lat * 0.018);

'''



