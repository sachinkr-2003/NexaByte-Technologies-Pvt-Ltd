export const isDevelopment = import.meta.env.MODE === 'development';
export const isProduction = import.meta.env.MODE === 'production';
export const showDevFeatures = import.meta.env.VITE_SHOW_DEV_FEATURES === 'true';
export const apiUrl = import.meta.env.VITE_API_URL;
