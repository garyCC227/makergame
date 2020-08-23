### Install package
pip install -r requirements.txt

or since this requirements.txt have some unused packages,

so if you don't want to install them all,
you can run the script to see any missed package, then install them one by one


### How to collect a dataset
 - I use the coordinates from report.xlsx
 
 cd data_collection
 
 python collect_images.py
 
 
 
 ### Download dataset
 https://drive.google.com/file/d/1z8hylVmqbloiyQd18DG3NKOrvZNimALY/view?usp=sharing
 
 
 
 ## TODO -> Discussion: check this label example(labelling style: semantic segmentaiton)
 [labelled imagge sample:](https://drive.google.com/file/d/1w5PtDGtcO6_nv_kktU0U69VBNWUaHSeX/view?usp=sharing) 
 
 label json that labelbox return:
 ```json
 [
    {
        "ID": "cke6dtfgo00003b5s1tanhqk8",
        "DataRow ID": "cke6dd2co8ohh0bnuhq589dnu",
        "Labeled Data": "https://storage.labelbox.com/cke6cyenbteev0729vtdmi866%2Fa00bc95c-f852-6380-35ad-41690fe99291-0.jpg?Expires=1599353886728&KeyName=labelbox-assets-key-1&Signature=kD0JFlmegn8k4NmopDD7tzYgvqQ",
        "Label": {
            "objects": [
                {
                    "featureId": "cke6drppl0por0y95hqzn40ni",
                    "schemaId": "cke6ddwt70p2c0y95hit3ecub",
                    "title": "slum",
                    "value": "slum",
                    "color": "#FFFF00",
                    "instanceURI": "https://api.labelbox.com/masks/feature/cke6drppl0por0y95hqzn40ni?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJja2U2Y3llbnV0YTRpMDc1NmVvbDhmZHVsIiwib3JnYW5pemF0aW9uSWQiOiJja2U2Y3llbmJ0ZWV2MDcyOXZ0ZG1pODY2IiwiaWF0IjoxNTk4MTQ0Mjg2LCJleHAiOjE2MDA3MzYyODZ9.xI1tOc--DUw6GHCsPiFP21LAa6Ea88crSm4zB4tdwFQ"
                },
                {
                    "featureId": "cke6dsu7n0et20y9f36l1cewz",
                    "schemaId": "cke6ddwt70p2e0y95goc38lb1",
                    "title": "other",
                    "value": "other",
                    "color": "#1CE6FF",
                    "instanceURI": "https://api.labelbox.com/masks/feature/cke6dsu7n0et20y9f36l1cewz?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJja2U2Y3llbnV0YTRpMDc1NmVvbDhmZHVsIiwib3JnYW5pemF0aW9uSWQiOiJja2U2Y3llbmJ0ZWV2MDcyOXZ0ZG1pODY2IiwiaWF0IjoxNTk4MTQ0Mjg2LCJleHAiOjE2MDA3MzYyODZ9.xI1tOc--DUw6GHCsPiFP21LAa6Ea88crSm4zB4tdwFQ"
                }
            ],
            "classifications": []
        },
        "Created By": "z5163479@ad.unsw.edu.au",
        "Project Name": "makergame",
        "Created At": "2020-08-23T00:57:19.000Z",
        "Updated At": "2020-08-23T00:57:59.000Z",
        "Seconds to Label": 186.632,
        "External ID": "0.jpg",
        "Agreement": -1,
        "Benchmark Agreement": -1,
        "Benchmark ID": null,
        "Dataset Name": "temp",
        "Reviews": [],
        "View Label": "https://editor.labelbox.com?project=cke6dcg3wteme0777hbzs8mr9&label=cke6dtfgo00003b5s1tanhqk8"
    }
]

 ```
 
 #### Quesiton: anyone know how to use this label in training? I am not familiar with segmentaion 
 

 




