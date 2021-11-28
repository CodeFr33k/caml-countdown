import {
    observable,
    computed,
} from 'mobx';
import * as DayYearFormat from '@/DayYearFormat';

export default class Store {
    @observable future = 0;
    @observable now  = 0;

    @computed get remaining(): string {
        return DayYearFormat.fromSeconds(this.future - this.now);
    }
    @computed get nowAsString(): string {
        return DayYearFormat.fromSeconds(this.now);
    }
    @computed get futureAsString(): string {
        return DayYearFormat.fromSeconds(this.future);
    }
}
