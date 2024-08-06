export function CalculateSeasonDates(year) {
    const springStart = new Date(year, 2, 1);
    const springEnd = new Date(year, 4, 31);
    const summerStart = new Date(year, 5, 1);
    const summerEnd = new Date(year, 7, 31);
    const autumnStart = new Date(year, 8, 1);
    const autumnEnd = new Date(year, 10, 30);
    const winterStart = new Date(year, 11, 1);
    const winterEnd = new Date(year + 1, 1, 29);

    return {
        spring: { start: springStart, end: springEnd },
        summer: { start: summerStart, end: summerEnd },
        autumn: { start: autumnStart, end: autumnEnd },
        winter: { start: winterStart, end: winterEnd }
    }
}