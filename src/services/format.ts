import dayjs from "dayjs";

export enum FMT {
    FULL_TIMEDATE = "HH:mm:ss DD/MM/YYYY",
    FULL_DATA_SERVER = "YYYY-MM-DD HH:mm:ss",
    DATA_SERVER = "YYYY-MM-DD",
    DATETIME = "DD/MM/YYYY HH:mm",
    FULL_DATE = "DD/MM/YYYY",
    FILE_DATE = "YYYYMMDD-HHmmss",
    CHART_TOOLTIP = "HH[h]mm DD/MM/YYYY",
    CHART_LABEL = "HH:mm",
    CHART_TICK = "HH[h]mm,DD/MM",
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

    data(v: string) {
        return this.formatData(v, FMT.FULL_DATE);
    }

    dataArquivo(v: string): string {
        return this.formatData(v, FMT.FILE_DATE);
    }

    dataTooltip(v: string): string {
        return this.formatData(v, FMT.CHART_TOOLTIP);
    }

    dataLabel(v: string): string {
        return this.formatData(v, FMT.CHART_LABEL);
    }

    dataTick(v: string): string {
        return this.formatData(v, FMT.CHART_TICK);
    }

    num(valor: number, prec: number = 0) {
        if (!valor)
            return "0";
        return valor.toLocaleString("pt-BR", {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec,
        });
    }

    removerAcentos(valor: string) {
        return valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    from(data: string): string {
        return dayjs(data).fromNow();
    }

    kwh(valor: number): string {
        if (valor === null)
            return "n/d";
        return this.num(valor, 1) + " kWh";
    }

    ns(serial: number): string {
        if (serial === 0)
            return "-";
        return serial.toString().padStart(10, "0");
    }
}

export const fmt = new Format();
