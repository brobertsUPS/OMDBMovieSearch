export const formatQueryParams = (queryObj) => {
    let queryParams = '';
    for (let k in queryObj)
      if (queryObj.hasOwnProperty(k)) queryParams += `${k}=${queryObj[k]}&`;
    return queryParams;
};
