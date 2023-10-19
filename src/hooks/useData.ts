import { useEffect, useState } from "react";
import type { Error } from "../utils/interfaces";

export const useData = <DataType>(url: string): { data: DataType | null, isLoading: boolean, error: Error | null } => {
    const [data, setData] = useState<DataType | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState<Error | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            url
          );
            const responseData = await response.json();
            console.log(responseData);
          setData(responseData);
        } catch (error) {
          setHttpError({ message: "Unable to get data" });
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, [url]);

  return {
    data, isLoading, error: httpError
  }
}