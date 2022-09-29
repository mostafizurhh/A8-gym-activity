const addToDb = (id) => {
    let savedItem = {};
    const storedValue = localStorage.getItem('save-value')
    if (storedValue) {
        savedItem = JSON.parse(storedValue)
    }
    localStorage.setItem('save-value', JSON.stringify(savedItem));
}

const getStoredValue = () => {
    let savedItem = {};
    const storedValue = localStorage.getItem('save-value')
    if (storedValue) {
        savedItem = JSON.parse(storedValue)
    }
    return savedItem
}

export { addToDb, getStoredValue };