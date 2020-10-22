import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export const useApi = (url, options = {}) => {
  const { getAccessTokenSilently } = useAuth0();
  const [state, setState] = useState({
    error: null,
    loading: true,
    data: null,
  });
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const { audience, scope, ...fetchOptions } = options;
        const accessToken = getAccessTokenSilently({ audience, scope });
        const res = await fetch(url, {
          ...fetchOptions,
          headers: {
            ...fetchOptions.headers,
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setState({
          ...state,
          data: await res.json(),
          error: null,
          loading: false
        })
      } catch (error) {
        setState({
          ...state,
          error,
          loading: false
        });
      }
    })();
  }, [refreshIndex])

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1)
  };
};