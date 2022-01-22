import aspida from "@aspida/axios"
import axios from "axios"
import api from "../types/api/$api"

export const apiClient = api(aspida(axios))