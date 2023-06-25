export const DRONES = 'DRONES';
export const VIDEOS = 'VIDEOS';
export const ENTREGAS = 'ENTREGAS';

export const requiredDrones = (payload) => ({ type: DRONES, payload });
export const requiredVideos = (payload) => ({ type: VIDEOS, payload });
export const requiredEntregas = (payload) => ({ type:ENTREGAS, payload });
