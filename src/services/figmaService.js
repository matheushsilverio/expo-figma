import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://api.figma.com/v1/",
  headers: {
    "X-FIGMA-TOKEN": process.env.VUE_APP_FIGMA_TOKEN
  }
});

class FigmaService {
  getImage(fileKey, queryParams) {
    return httpClient.get(`/images/${fileKey}?${queryParams}`);
  }
}

export default new FigmaService();
