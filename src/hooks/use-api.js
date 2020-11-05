import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const cache = {};

export const useApi = (url, options = {}) => {
  const { getAccessTokenSilently } = useAuth0();
  const [state, setState] = useState({
    error: null,
    loading: true,
    data: null,
  });
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    if (!url) return;

    (async () => {
      if (cache[url]) {
        const data = cache[url];
        setState({
          ...state,
          data: data,
          error: null,
          loading: false
        })
      } else {
        try {
          const { audience, scope, ...fetchOptions } = options;
          const accessToken = await getAccessTokenSilently({ audience, scope });
          const res = await fetch(url, {
            ...fetchOptions,
            headers: {
              ...fetchOptions.headers,
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (res.ok) {
            const data = await res.json();
            cache[url] = data;
            setState({
              ...state,
              data: data,
              error: null,
              loading: false
            });
          } else if (res.status === 404) {
            throw new Error("404 Not Found!");
          }
        } catch (error) {
          setState({
            ...state,
            error,
            loading: false
          });
        }
      }

    })();
  }, [refreshIndex])

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1)
  };
};