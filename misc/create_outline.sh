#!/bin/bash

# To use it, run the command:
#    bash  create_outline.sh  input_img.png  output_img.png

WIDTH=`identify -format "%[fx:w]" "$1"`
HEIGHT=`identify -format "%[fx:h]" "$1"`
convert $1 -crop $((WIDTH-4))x$((HEIGHT-4))+2+2 $2
convert $2 -bordercolor \#00000000 -border 2  -alpha on  $2
convert $2 \( +clone -channel A -morphology EdgeOut Diamond:2 +channel +level-colors black \) -compose DstOver -composite $2
