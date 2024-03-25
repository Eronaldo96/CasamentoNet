const baseURL = process.env.NODE_ENV === 'production' 
    ? process.env.REACT_APP_API_BASEURL_PROD 
    : process.env.REACT_APP_API_BASEURL_LOCAL;

export { baseURL };