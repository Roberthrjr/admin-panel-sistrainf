import { useState, useEffect } from "react";
import axios from "axios";

const useData = (url, options = { method: 'get', data: null }) => {
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
        fetchData();
    }, [url, options.method, options.data]);

    const refetch = async () => {
        await fetchData();
    }

    const addData = async (newData) => {
        setLoading(true);
        try {
            const response = await axios.post(url, newData);
            setData([...data, response.data]);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }

    const updateData = async (id, updatedData) => {
        setLoading(true);
        try {
            const response = await axios.put(`${url}/${id}`, updatedData);
            setData(data.map(item => item.id === id ? response.data : item));
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }

    const deleteData = async (id) => {
        setLoading(true);
        try {
            await axios.delete(`${url}/${id}`);
            setData(data.filter(item => item.id !== id));
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }

    return { data, loading, error, refetch, addData, updateData, deleteData };
}

export default useData;