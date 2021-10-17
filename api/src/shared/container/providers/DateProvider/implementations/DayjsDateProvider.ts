import {IDateProvider} from "../IDateProvider";
import dayjs from "dayjs";

class DayjsDateProvider implements IDateProvider{

    addDays(days: number, reference_date: Date = null): Date {
        const date = reference_date ? dayjs(reference_date) : dayjs();
        return date.add(days, "day").toDate();
    }

}

export { DayjsDateProvider };