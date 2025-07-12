import { useEffect,useState } from "react";

import axiosClient from "../api/axios-client";


const useFetchCourses = (url = "/data/products.json") => {
     const [value, setValue] = useState([]);
     const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    console.log(value);
    useEffect(() => {
            let cancel = false;
            const handleFetchData = async () => {
                    setLoading(true);
                    setError(null);
                    try {
                        const getData = await axiosClient.get(url);
                        console.log("dữ liệu nhận được " + getData)
                        if(!cancel){
                            setValue(getData);
                        }
                    }catch (error) {
                    if (!cancel) {

                            setError(error);
                    }
                } finally {
                     if (!cancel) {
                             setLoading(false);
                    }
                }
            }
                handleFetchData();
            return () => {
                cancel = true;
            }

    },[url])

    return {value,loading, error};
}

export default useFetchCourses;