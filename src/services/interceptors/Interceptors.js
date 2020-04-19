let interceptors = [];
const Interceptors = {
    add: item => {
        interceptors.push(item)
    },
    get: key => interceptors.find(intercpt => intercpt, key == key),
    length: interceptors.length,
    forEach: fn => interceptors.forEach(fn)
};

Object.freeze(Interceptors);
// not using Class because the interceptor still available anyway, i wanted to avoid its exposure
export default Interceptors;