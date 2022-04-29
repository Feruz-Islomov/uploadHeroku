import axios from "axios";

const apiUrl = "http://localhost:8080/api/";

export const singleFileUpload = async (data, options) => {
  try {
    await axios.post(apiUrl + "singleFile", data, options);
  } catch (error) {
    throw error;
  }
};
export const getSingleFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "getSingleFiles");
    return data;
  } catch (error) {
    throw error;
  }
};

export const multipleFilesUpload = async (data, options) => {
  try {
    await axios.post(apiUrl + "multipleFiles", data, options);
  } catch (error) {
    throw error;
  }
};
export const getMultipleFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "getMultipleFiles");
    return data;
  } catch (error) {
    throw error;
  }
};

export const singleFileDelete = async (id, filePath, cb) => {
  try {
    await axios.delete(apiUrl + "singleFileDelete", { data: { id, filePath } });
    cb();
  } catch (error) {
    throw error;
  }
};
export const multipleFileDelete = async (element, cb) => {
  try {
    await axios.delete(apiUrl + "multipleFileDelete", {
      data: element,
    });
    cb();
  } catch (error) {
    throw error;
  }
};
