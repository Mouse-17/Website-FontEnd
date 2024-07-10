import apiService from "./apiService/apiService";

const baseUrl = '/experience-groups';

export const createExperienceGroups = async (ExperienceGroupsData, token) => {
    return apiService.create(baseUrl, ExperienceGroupsData, token);
};

export const getExperienceGroupss = async (token) => {
    return apiService.read(baseUrl, token);
};

export const updateExperienceGroups = async (id, ExperienceGroupsData, token) => {
    return apiService.update(`${baseUrl}/${id}`, ExperienceGroupsData, token);
};

export const deleteExperienceGroups = async (id, token) => {
    return apiService.delete(`${baseUrl}/${id}`, token);
};