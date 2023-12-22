interface IProductData {
        "id": number,
        "attributes": {
            "Name": string,
            "body": any,
            "createdAt": string,
            "updatedAt": string,
            "publishedAt": string
        },
        "ProductImage":{
            "data":any
        }
    }
export default IProductData;