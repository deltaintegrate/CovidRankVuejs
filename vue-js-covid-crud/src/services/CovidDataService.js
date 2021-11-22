import http from "../http-common";

class CovidDataService {
  getAge(data) {
    return http.post("/covid/age",data);
  }

  getAge(data) {
    return http.post("/covid/gender",data);
  }

  getAge(data) {
    return http.post("/covid/state",data);
  }

  getAge(data) {
    return http.post("/covid/city",data);
  }

  create(data) {
    return http.post("/covid/", data);
  }

  update(id, data) {
    return http.put(`/covid/${id}`, data);
  }

  delete(id) {
    return http.delete(`/covid/${id}`);
  }

}

export default new CovidDataService();