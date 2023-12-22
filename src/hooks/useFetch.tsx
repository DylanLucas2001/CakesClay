import { useEffect,useState } from "react";
import IProductData from "../Interfaces/ProductInterface";

const useFetch = (url:string) => {
    const [data, setData] = useState(null as IProductData[] | null);
    const [error, setError] = useState(null as Error | null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json.data);
                setLoading(false);
            }catch(error) {
                setError(error instanceof Error ? error : new Error("An error occurred"));
                setLoading(false);
            }
        }
        fetchData()
    },[url])


    return {loading, error, data}
}

export default useFetch;