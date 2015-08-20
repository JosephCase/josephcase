<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Image Resizer</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <h1>Image Resizer</h1>
        <?php 
            $files = glob('images/*_o.jpg');
            if (count($files) > 0) {

                foreach($files as $file) {
                    echo "<img src='".$file."' />";
                    echo resizeImage($file, 800, "_l");
                    echo resizeImage($file, 500, "_m");
                    echo resizeImage($file, 300, "_s");
                }
            }
            function resizeImage($file, $newWidth, $extension) {
                $image = @imagecreatefromjpeg($file);
                if (imagesx($image) > $newWidth) {

                    // Get new dimensions
                    $ratio = imagesy($image) / imagesx($image);
                    $newHeight = $newWidth * $ratio;

                    //Resize image
                    $resizedImage = imagecreatetruecolor($newWidth, $newHeight);
                    imagecopyresampled($resizedImage, $image, 0, 0, 0, 0, $newWidth, $newHeight, imagesx($image), imagesy($image));

                    $new_file = str_replace("_o", $extension, $file);
                    if (imagetypes() & IMG_JPG) {
                        imagejpeg($resizedImage, $new_file, 100);
                    }

                    return "<img src='".$new_file."' />";
                }
                
            }
        ?>
    </body>
</html>

