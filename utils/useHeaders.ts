interface HeaderItem {
  name: string;
  value: string;
}

/**
 * @name useHeaders
 * @description Generate request header object with authorization token
 *
 * @param newHeaders Custom headers
 * @returns Request headers
 */
export const useHeaders = async (
  newHeaders?: HeaderItem[]
): Promise<Object> => {
  const user = await getCurrentUser();
  let headers = new Object();

  if (user) {
    const token = user?.accessToken;
    // authorization header
    Object.assign(headers, { Authorization: `Bearer ${token}` });
  }

  // custom headers
  newHeaders?.forEach((item) =>
    Object.assign(headers, { [item.name]: item.value })
  );
  return headers;
};
