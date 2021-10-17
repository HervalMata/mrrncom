import {IDateProvider} from "../IDateProvider";
import dayjs from "dayjs";

class DayjsDateProvider implements IDateProvider{

    addDays(days: number, reference_date: Date = null): Date {
        const date = reference_date ? dayjs(reference_date) : dayjs();
        return date.add(days, "day").toDate();
    }

    addHours(hours: number, reference_date: Date): Date {
        const date = reference_date ? dayjs(reference_date) : dayjs();
        return date.add(hours, "hour").toDate();
    }

    checkIsBefore(start_date: Date, end_date: Date): boolean {
        return dayjs(start_date).isBefore(end_date);
    }

    dateNow(): Date {
        return dayjs().toDate();
    }

}

export { DayjsDateProvider };