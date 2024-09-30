import apiClient from "../axios/axios";


export const uploadFile = async (file, groupId) => {
  const formData = new FormData();
  formData.set('file', file);

  try {
    const response = await apiClient.post(`groups/${groupId}/files/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
