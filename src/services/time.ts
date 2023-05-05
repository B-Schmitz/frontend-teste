import dayjs from "dayjs";

class Time {
   
    tms2data(tms: number): string {
        return dayjs.unix(tms).format();
    }
}

export let time = new Time();
