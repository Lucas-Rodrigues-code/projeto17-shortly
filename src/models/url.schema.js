import joi from "joi";

 const postShortenUrl = joi.object({
    url: joi.string().required()
}); 

  
export default postShortenUrl;