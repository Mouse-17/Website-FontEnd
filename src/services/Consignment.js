import apiService from "./apiService/apiService";

const baseUrl = '/consignments';

export const createConsignments = async (ConsignmentsData, token) => {
    return apiService.create(baseUrl, ConsignmentsData, token);
};

export const getConsignmentss = async (token) => {
    return apiService.read(baseUrl, token);
};

export const updateConsignments = async (id, ConsignmentsData, token) => {
    return apiService.update(`${baseUrl}/${id}`, ConsignmentsData, token);
};

export const deleteConsignments = async (id, token) => {
    return apiService.delete(`${baseUrl}/${id}`, token);
};
