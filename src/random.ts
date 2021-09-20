export function getRandomValue<T>(data: T[]): T {
    const randomGen = Math.floor(Math.random() * data.length);
    const randomIndex = data[randomGen];

    return randomIndex;
}
