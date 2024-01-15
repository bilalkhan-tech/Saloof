import ImagePicker from 'react-native-image-crop-picker'

const ImageSelectFromGallery = async (w = 400, h = 400) => {
  try {
    const response = await ImagePicker.openPicker({
      width: w,
      height: h,
      cropping: true,
    })

    return response
  } catch (error) {
    if (error.code === 'E_PICKER_CANCELLED') {
      return false
    }
  }
}

const ImageSelectFromCamera = async (w = 400, h = 400) => {
  try {
    const response = await ImagePicker.openCamera({
      width: w,
      height: h,
      cropping: true,
    })

    return response
  } catch (error) {
    if (error.code === 'E_PICKER_CANCELLED') {
      return false
    }
  }
}

export { ImageSelectFromGallery, ImageSelectFromCamera }