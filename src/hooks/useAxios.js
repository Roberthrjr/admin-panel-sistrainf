import { useState, useEffect } from "react";
import axios from "axios";

const useData = (url, options = {method: 'get', data: null}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios(url, options);
            setData(response.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }

    useEffect(() => {
        const getData = async () => {
            await fetchData();
        }
        getData();
    }, [url, options.method, options.data]);

    const refetch = async () => {
        await fetchData();
    }

    return {data, loading, error, refetch};
}

export default useData;