/**
 * An *incredibly* complex util function that returns the value of a random index (from a provided array).
 */
export function random(data: any[]) {
    const randomGen: number = Math.floor(Math.random() * data.length);
    const randomIndex: any = data[randomGen];

    return randomIndex;
}






































