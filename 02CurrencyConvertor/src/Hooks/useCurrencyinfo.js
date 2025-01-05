import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)
            .then((response) => response.json())
            .then((result) => setData(result.rates))
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [baseCurrency]);
    
    return data;
}

export default useCurrencyInfo;
