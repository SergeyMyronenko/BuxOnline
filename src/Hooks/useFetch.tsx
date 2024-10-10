import { useState, useEffect } from 'react';

interface FetchParams {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
}

const useFetch = (url: string, params?: FetchParams) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: params?.method || 'GET',
                    headers: params?.headers,
                    body: params?.body || null,
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, params]);

    return { data, loading, error };
};

export default useFetch;