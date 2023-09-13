// utils/stats.ts
export type WineData = {
    Alcohol: number;
    Flavanoids: number | string;
    Ash: number | string;
    Hue: number;
    Magnesium: number;
    [key: string]: number | string;
};

function mean(data: number[]): number {
    return parseFloat((data.reduce((acc, val) => acc + val, 0) / data.length).toFixed(3));
}

function median(data: number[]): number {
    data.sort((a, b) => a - b);
    const mid = Math.floor(data.length / 2);
    return data.length % 2 !== 0
        ? parseFloat(data[mid].toFixed(3))
        : parseFloat(((data[mid - 1] + data[mid]) / 2).toFixed(3));
}

function mode(data: number[]): number {
    const freq: { [key: number]: number } = {};
    let maxFreq = 0;
    let modeVal = 0;

    data.forEach((num) => {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxFreq) {
            maxFreq = freq[num];
            modeVal = num;
        }
    });

    return parseFloat(modeVal.toFixed(3));
}

export function calculateGamma(data: WineData[]): WineData[] {
    return data.map((item) => ({
        ...item,
        Gamma: parseFloat(((Number(item.Ash) * item.Hue) / item.Magnesium).toFixed(3)),
    }));
}

export { mean, median, mode };
