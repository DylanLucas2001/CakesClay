interface IProductData {
    "id": number,
    "attributes": {
        "name": string,
        "body": string,
        "productImage": {
            "data": [
                {
                    "id": number,
                    "attributes": {
                        "name": string,
                        "url": string,
                        },
                    }
                ]
            }
    },
    
    }
export default IProductData;