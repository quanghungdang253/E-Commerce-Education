import { useEffect,useState } from "react";

import axiosClient from "../api/axios-client";


const useFetchCourses = (url = "/data/products.json") => {
     const [courses, setCourses] = useState([]);
     const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
            let cancel = false;
            const handleFetchData = async () => {
                    setLoading(true);
                    setError(null);
                    try {
                        const getData = await axiosClient.get(url);
                        if(!cancel){
                            setCourses(getData);
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

    return {courses,loading, error};
}

export default useFetchCourses;