import { useState } from "react";
import axios from "axios";
import _ from "lodash";

export const useApi = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiCall = async (url) => {
        setIsLoading(true)
        axios.get(url)
            .then(({ data }) => {
                setData(data);
                setIsLoading(false);
            })
            .catch(() => {
                setError("Something went wrong");
            });
    }
    return [isLoading, data, error,apiCall];
};