export const getDeadline = (deadline: string) => {
    const [day, month, year] = deadline.split('/')
    const deadlineDate = new Date(Number(year), Number(month) - 1, Number(day))

    const TimeDiff = deadlineDate.getTime() - Date.now()
    const Days = Math.floor(TimeDiff / (1000 * 60 * 60 * 24)) // Make sure to floor the days for full days
    const Hours = Math.floor(
      (TimeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )

    return { Days, Hours };
}