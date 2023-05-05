import dayjs from "dayjs";
import {FMT} from "@/services";

class Time {
    hoje(): string {
        return this.data(0);
    }

    agora(): dayjs.Dayjs {
        return dayjs();
    }

    data(delta = 0, uni: dayjs.ManipulateType = "day", data?: string): string {
        return dayjs(data).add(delta, uni).format(FMT.DATA_SERVER);
    }

    dataHora(deltaHoras = 0): string {
        return dayjs().add(deltaHoras, "hour").format(FMT.DATETIME);
    }

    data2obj(data: string): dayjs.Dayjs {
        return dayjs.utc(data, FMT.FULL_DATA_SERVER);
    }

    data2utc(tms: number | string): string {
        return dayjs.utc(tms).format(FMT.FULL_DATA_SERVER);
    }

    data2tms(data: string): number {
        return this.data2obj(data).unix();
    }

    tms2data(tms: number): string {
        return dayjs.unix(tms).format();
    }
    
    data2unix(data: string): number {
        return dayjs.utc(data).unix();
    }
}

export let time = new Time();
