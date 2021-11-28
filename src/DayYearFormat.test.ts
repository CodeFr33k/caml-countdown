import * as DayYearFormat from './DayYearFormat';

test('parse day year format', () => {
    const seconds = DayYearFormat.toSeconds('1970-001|00:00:00');
    expect(seconds).toBe(0);
});

test('derive seconds from day year format', () => {
    const text = DayYearFormat.fromSeconds(0);
    expect(text).toBe('1970-001|00:00:00');
});


