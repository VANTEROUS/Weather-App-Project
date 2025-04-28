import '../scss/style.scss';
import './tempToggler'

import { getWeatherData } from "./api";
import { weatherSubmit } from "./submitButton";

getWeatherData();
weatherSubmit();