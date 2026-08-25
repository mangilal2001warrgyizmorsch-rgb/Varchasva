import os
import glob
from PIL import Image

def convert_to_webp(directory):
    for ext in ('*.jpg', '*.jpeg', '*.png'):
        for file in glob.glob(os.path.join(directory, ext)):
            base = os.path.splitext(file)[0]
            webp_path = base + ".webp"
            try:
                with Image.open(file) as im:
                    # Convert RGBA to RGB for webp if necessary
                    if im.mode in ('RGBA', 'LA'):
                        background = Image.new(im.mode[:-1], im.size, (255, 255, 255))
                        background.paste(im, im.split()[-1])
                        im = background
                    im.save(webp_path, 'WEBP', quality=80)
                print(f"Converted {file} to {webp_path}")
                os.remove(file)
            except Exception as e:
                print(f"Failed to convert {file}: {e}")

convert_to_webp('public/products')
