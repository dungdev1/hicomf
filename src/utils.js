export const convertNum = (num) => {
  if (num > 1000000) {
    return num / 100000 + "M";
  }
  else if (num > 1000) {
    return num / 1000 + "k";
  }
  else {
    return num;
  }
};

export async function callApi(url, options, getAccessTokenSilently) {
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
    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
}