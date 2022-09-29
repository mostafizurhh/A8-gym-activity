const addToDb = (id) => {
    // let savedItem = {};
    // const storedValue = localStorage.getItem('save-value')
    // if (storedValue) {
    //     savedItem = JSON.parse(storedValue)
    // }

    localStorage.setItem('save-value', JSON.stringify(id));
}

const getStoredValue = () => {
    // let savedItem = {};
    // const storedValue = localStorage.getItem('save-value')
    // if (storedValue) {
    //     savedItem = JSON.parse(storedValue)
    // }
    // return savedItem
    JSON.parse(localStorage.getItem('save-item'))
}

export { addToDb, getStoredValue };