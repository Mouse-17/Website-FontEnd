import apiService from "./apiService/apiService";

const baseUrl = '/influencers';

export const createInfluencers = async (InfluencersData, token) => {
    return apiService.create(baseUrl, InfluencersData, token);
};

export const getInfluencerss = async (token) => {
    return apiService.read(baseUrl, token);
};

export const updateInfluencers = async (id, InfluencersData, token) => {
    return apiService.update(`${baseUrl}/${id}`, InfluencersData, token);
};

export const deleteInfluencers = async (id, token) => {
    return apiService.delete(`${baseUrl}/${id}`, token);
};
