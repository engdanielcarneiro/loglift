import axios from "axios";
import { Exercise } from "../interfaces/exercise";

const BACKENDURL = "https://localhost:7087/api";

const headers = {
  accept: "*/*",
};

export const exerciseService = {
  async getExercises(): Promise<any> {
    return await axios
      .get(`${BACKENDURL}/exercises`, { headers })
      .then((response) => response);
  },
  async postAddExercise(newExercise: Exercise) {
    return await axios
      .post(`${BACKENDURL}/exercises`, newExercise, { headers })
      .then((response) => response);
  },
  async deleteExercise(exerciseId: number) {
    return await axios
      .delete(`${BACKENDURL}/exercises/${exerciseId}`)
      .then((response) => response);
  },
};
