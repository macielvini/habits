import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

export function getSummary() {
  return api.get("/summary");
}

interface HabitBody {
  title: string;
  weekDays: number[];
}

export function postHabit(body: HabitBody) {
  return api.post("/habits", body);
}
