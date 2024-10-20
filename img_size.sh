#!/bin/sh
 


#magick $1.jpg  -resize 1500x500\> $1.jpg


for filename in ./*.jpg; do
	magick $filename  -resize 1500x500\> $filename
	#echo $filename
done

for filename in ./*.jpeg; do
	magick $filename  -resize 1500x500\> $filename
	#echo $filename
done