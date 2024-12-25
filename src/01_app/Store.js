class Store {
    static _instance
    subject
    semester
    teacher
    category
    search

    constructor() {
        if (Store._instance) {
            return Store._instance;
        }
        this.subject = new Set()
        this.semester = new Set()
        this.teacher = new Set()
        this.category = new Set()
        this.search = ''
        Store._instance = this;
    }

    getFilterArrByKey(filterKey) {
        if (!this[filterKey]) return []

        const subjectsArr = []
        for (let value of this[filterKey]) {
            subjectsArr.push(value)
        }
        return subjectsArr
    }

    toggleFilterValue(filterKey, value) {
        if (!this[filterKey]) return

        if (this[filterKey].has(value)) {
            this[filterKey].delete(value)
        } else {
            this[filterKey].add(value)
        }
    }

    setSearchValue(value) {
        this.search = value
    }

}

const store = new Store();

export default store