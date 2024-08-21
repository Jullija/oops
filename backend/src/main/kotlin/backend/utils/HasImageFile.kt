package backend.utils

import backend.files.FileEntity

interface HasImageFile {
    var imageFile: FileEntity?
}