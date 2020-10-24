import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export const usePostApi = (url, options = {}) => {
  const { getAccessTokenSilently } = useAuth0();
  const [posts, setPosts] = useState([]);

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
        setPosts(await res.json())
      } catch (error) {
        throw error
      }
    })();
  }, []);

  return posts;
};