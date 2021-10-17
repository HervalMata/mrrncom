interface IDateProvider {
    addDays(days: number, reference_date: Date): Date;
    addHours(hours: number, reference_date: Date): Date;
}

export { IDateProvider };