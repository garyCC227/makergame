from __future__ import print_function
import cv2 as cv
alpha = 0.5
# try:
#     raw_input          # Python 2
# except NameError:
#     raw_input = input  # Python 3
# print(''' Simple Linear Blender
# -----------------------
# * Enter alpha [0.0-1.0]: ''')
# input_alpha = float(raw_input().strip())
# if 0 <= alpha <= 1:
#     alpha = input_alpha
# if not os.path.exists('LabelledWithMask'):
#     os.makedirs('LabelledWithMask')

# [load]
src1 = cv.imread(cv.samples.findFile('./RawAndMasks/ckes92sav00003c5cfz551c6r.jpg'))
src2 = cv.imread(cv.samples.findFile('./RawAndMasks/ckes92sav00003c5cfz551c6r_mask.jpg'))
# [load]
if src1 is None:
    print("Error loading src1")
    exit(-1)
elif src2 is None:
    print("Error loading src2")
    exit(-1)
# [blend_images]
beta = (1.0 - alpha)
dst = cv.addWeighted(src1, alpha, src2, beta, 0.0)
# [blend_images]
# [display]
cv.imwrite('./RawAndMasks/ckes92sav00003c5cfz551c6r_labelled.jpg', dst) 
cv.imshow('dst', dst)
cv.waitKey(0)
# [display]
cv.destroyAllWindows()