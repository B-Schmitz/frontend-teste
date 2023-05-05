import dayjs from "dayjs";

export enum FMT {
    FULL_TIMEDATE = "HH:mm:ss DD/MM/YYYY",
}

class Format {

    private formatData(v: string, formato: FMT): string {
        if (!v)
            return "n/d";
        return dayjs(v).format(formato);
    }

    dataHora(v: string) {
        return this.formatData(v, FMT.FULL_TIMEDATE);
    }

    from(data: string): string {
        return dayjs(data).fromNow();
    }
}

export const fmt = new Format();
