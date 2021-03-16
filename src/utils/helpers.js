export const randomKeyPadNumber = () => (Math.floor(Math.random() * 9) + 1);

export const timer = ms => new Promise(res => setTimeout(res, ms));