import apiService from "./apiService/apiService";

const baseUrl = '/quotations';

export const createQuotation = async (quotationData, token) => {
    return apiService.create(baseUrl, quotationData, token);
};

export const getQuotations = async (token) => {
    return apiService.read(baseUrl, token);
};

export const updateQuotation = async (id, quotationData, token) => {
    return apiService.update(`${baseUrl}/${id}`, quotationData, token);
};

export const deleteQuotation = async (id, token) => {
    return apiService.delete(`${baseUrl}/${id}`, token);
};