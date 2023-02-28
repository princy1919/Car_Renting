import axios from "axios"
import appConfig from "../config";

export const Register= async (data) => {
  let result = {};
  try {
    const res = await axios.post(`${appConfig.appUrl}/auth/signup`,data);
    result = res.data || {};
    return { success: true, data: result }
  } catch (err) {
    console.log("error in getting time info : ", err);
    return {success: false, message: err || "Something went wrong"}
  }
};

export const RegisterCarOnRent = async (data) => {
  try {
    const res = await axios.post(`${appConfig.appUrl}/api/vehicle/registercar`,data,
        { headers: {"authorization" : appConfig.token}});
    return res && res.data;
  } catch (err) {
    console.log("error in getting time info : ", err);
    return { success: false, message: (err && err.response.data) || "something went wrong" }
  }
};


export const profileImage = async (imageUrl) => {
  try {
    if(imageUrl && imageUrl.isImageUpload){
      const image = new FormData();
      image.append("image", imageUrl.image);
      delete imageUrl.image
      delete imageUrl.imagePreview
      delete imageUrl.isImageUpload
      delete imageUrl.icon

      const res = await axios.post(
          "https://api.imgbb.com/1/upload?key=8cf1720dec383d205601b5a1e3a99d7d",
          image,
          { headers: { "Content-Type": "multipart/form-data" } }
      )
      if(res && res.data &&res.data.data.delete_url && res.data.data.display_url ){
        const photo = {}
        photo.deleteImageUrl = res.data.data.delete_url
        photo.photo = res.data.data.display_url
        return { success: true, data: photo };
      }else{
        return { done: false, message: "something went wrong"}
      }
    }


  } catch (err) {
    console.log("error in getting time info : ", err);
    return {
      success: false,
      message: (err && err.data && err.data.error) || "something went wrong"
    };
  }
};

export const UploadCarImages = async (payload) => {
  try {
    let url = {}
    let photos = []
    if (payload && payload.length ) {
      await Promise.all(payload.map(async (i) => {
        const images = new FormData();
        images.append("image", i.image);
        delete i.image
        delete i.imagePreview
        delete i.isImageUpload
        delete i.icon
        const res = await axios.post(
            "https://api.imgbb.com/1/upload?key=8cf1720dec383d205601b5a1e3a99d7d",
            images,
            {headers: {"Content-Type": "multipart/form-data"}}
        );
        if(res && res.data &&res.data.data.delete_url && res.data.data.display_url ){
          url = res.data.data.display_url
        }else{
          return { done: false, message: "something went wrong"}
        }
        photos.push(url)
      }))
    }
    return { success: true, data: photos };
  } catch (err) {
    console.log("error in getting time info : ", err);
    return {
      success: false,
      message: (err && err.data && err.data.error) || "something went wrong"
    };
  }
};