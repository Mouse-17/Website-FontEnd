import axiosInstance from "../axiosInstance/axiosInstance";

const apiService = {
    request: async (method, url, data = null, token = null) => {
        try {
            const headers = token ? { Authorization: `Bearer ${token}` } : {};
            const response = await axiosInstance({
                method,
                url,
                data,
                headers,
            });
            return response.data;
        } catch (error) {
            console.error(`Error during ${method.toUpperCase()} request to ${url}`, error);
            throw error;
        }
    },

    create: async (url, data, token) => apiService.request('post', url, data, token),
    read: async (url, token) => apiService.request('get', url, null, token),
    update: async (url, data, token) => apiService.request('put', url, data, token),
    delete: async (url, token) => apiService.request('delete', url, null, token),
};

export default apiService;
