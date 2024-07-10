import apiService from "./apiService/apiService";

const baseUrl = '/live-commerce';

export const createLiveCommerce = async (LiveCommerceData, token) => {
    return apiService.create(baseUrl, LiveCommerceData, token);
};

export const getLiveCommerces = async (token) => {
    return apiService.read(baseUrl, token);
};

export const updateLiveCommerce = async (id, LiveCommerceData, token) => {
    return apiService.update(`${baseUrl}/${id}`, LiveCommerceData, token);
};

export const deleteLiveCommerce = async (id, token) => {
    return apiService.delete(`${baseUrl}/${id}`, token);
};

