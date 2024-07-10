import apiService from "./apiService/apiService";

const authBaseUrl = '/admin';

export const registerAdmin = async (adminData) => {
    return apiService.create(`${authBaseUrl}/register`, adminData);
};

export const loginAdmin = async (loginData) => {
    return apiService.create(`${authBaseUrl}/login`, loginData);
};