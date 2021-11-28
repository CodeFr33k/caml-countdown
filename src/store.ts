import Store from './_Store';
import * as DayYearFormat from '@/DayYearFormat';
const store = new Store();
store.future = DayYearFormat.toSeconds('2020-140|06:00:00');
setInterval(() => {
    const now = new Date();
    store.now = now.getTime() / 1000;
}, 500);
export default store;

