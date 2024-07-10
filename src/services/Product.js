import apiService from "./apiService/apiService";

const baseUrl = '/products';

export const createProducts = async (ProductsData, token) => {
    return apiService.create(baseUrl, ProductsData, token);
};

export const getProductss = async (token) => {
    return apiService.read(baseUrl, token);
};

export const updateProducts = async (id, ProductsData, token) => {
    return apiService.update(`${baseUrl}/${id}`, ProductsData, token);
};

export const deleteProducts = async (id, token) => {
    return apiService.delete(`${baseUrl}/${id}`, token);
};

