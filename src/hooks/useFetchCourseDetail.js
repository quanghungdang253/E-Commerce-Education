
import axiosClient from "../api/axios-client";

import { useEffect, useState } from "react";

const useFetchCourseDetail = (id) => {
    const[course,setCourse] = useState(null);
     const [loading, setLoading] = useState(true);
       const [error, setError] = useState(null);
       useEffect(() => {
        if(id === null || id === undefined){
            return;
        }
        let cancel = false;

        const handleFetchData = async () => {
                setLoading(true);
                setError(null);

                try {
                    const response = await axiosClient.get("/data/detail.json");
                    console.log("Dữ liệu nhận được " + response);
                    if(!cancel){
                        const findItem = response.find((item) => item.id === id);
                        if(findItem){
                            setCourse(findItem);
                        }

                    }
                }catch (error) {
                        if(!cancel){
                            setError(error);
                        }

                }finally {
                    if(!cancel){
                        setLoading(false);

                    }

                }
        }
        handleFetchData();
        return () => {
            cancel = true;
        }
       },[id])

       return {course,loading,error};
}

export default useFetchCourseDetail;