export function getDayOfYear(year: number, month: number, dayOfMonth: number){
    const seconds = (
        Date.UTC(year, month, dayOfMonth) - 
        Date.UTC(year, 0, 0)
    );
    return seconds / 24 / 60 / 60 / 1000;
}

export function format(year: number, day: number, hour: number, minute: number, second: number) {
    const year1 = ('000' + String(year)).substr(-4);
    const day1 = ('00' + String(day)).substr(-3);
    const hour1 = ('0' + String(hour)).substr(-2);
    const minute1 = ('0' + String(minute)).substr(-2);
    const second1 = ('0' + String(second)).substr(-2);
    return `${year1}-${day1}|${hour1}:${minute1}:${second1}`;
} 

export function toSeconds(text: string) {
    const match = /(\d{4})-(\d{3})\|(\d{2}):(\d{2}):(\d{2})/.exec(text);
    if (!match) {
        throw new Error;
    }
    const year = parseInt(match[1]);
    const day = parseInt(match[2]);
    const hour = parseInt(match[3]);
    const minute = parseInt(match[4]);
    const second = parseInt(match[5]);
    const date = new Date(Date.UTC(year, 0, 1)); 
    date.setUTCSeconds(
        second +
        minute * 60 +
        hour * 60 * 60 +
        (day - 1) * 24 * 60 * 60 
    );
    return date.getTime() / 1000;
}

export function fromSeconds(seconds: number) {
    const date = new Date(seconds * 1000);
    return format(
        date.getUTCFullYear(),
        getDayOfYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    );
}
