export const getBaseUrl = () => {
    return process.env.NODE_ENV === 'production'
        ? process.env.NEXT_APP_BASE_PATH
        : '';
};

export default getBaseUrl;
