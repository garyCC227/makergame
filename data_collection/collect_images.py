import pandas as pd
from download_image import download_img

'''
run this script to use api to download images with the coordiantes in report.xlsx
to download satellite images
'''

def main():
    df = pd.read_excel('report.xlsx')
    new_df = df.dropna(subset=['GPS Coordinates (Latitude)','GPS Coordinates (Longitude)' ])
    new_df.reset_index(drop=True)

    for _, row in new_df.iterrows():
        ID = row['ID']
        lat = row['GPS Coordinates (Latitude)']
        long = row['GPS Coordinates (Longitude)']
        coord = f"{long},{lat}"
        download_img(ID, coord)

if __name__ == "__main__":
    main()