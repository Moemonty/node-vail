"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getWeatherData = () => Promise.resolve([
    {
        location: {
            name: 'Portland',
            coordinates: { lat: 45.5154586, lng: -122.6793461 },
        },
        forecastUrl: 'https://api.weather.gov/gridpoints/PQR/112,103/forecast',
        iconUrl: 'https://api.weather.gov/icons/land/day/tsra,40?size=medium',
        weather: 'Chance Showers And Thunderstorms',
        temp: '59 F',
    },
    {
        location: {
            name: 'Bend',
            coordinates: { lat: 44.0581728, lng: -121.3153096 },
        },
        forecastUrl: 'https://api.weather.gov/gridpoints/PDT/34,40/forecast',
        iconUrl: 'https://api.weather.gov/icons/land/day/tsra_sct,50?size=medium',
        weather: 'Scattered Showers And Thunderstorms',
        temp: '51 F',
    },
    {
        location: {
            name: 'Manzanita',
            coordinates: { lat: 45.7184398, lng: -123.9351354 },
        },
        forecastUrl: 'https://api.weather.gov/gridpoints/PQR/73,120/forecast',
        iconUrl: 'https://api.weather.gov/icons/land/day/tsra,90?size=medium',
        weather: 'Showers And Thunderstorms',
        temp: '55 F',
    },
]);
const weatherMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.partials)
        res.locals.partials = {};
    res.locals.partials.weatherContext = yield getWeatherData();
    next();
});
module.exports = weatherMiddleware;
