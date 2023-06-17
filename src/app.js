function linearSearch(list, target) {
    let idx = list.length - 1;
    const getIndex = (rec_list, target) => {
        if (rec_list.length <= 0)
            return false;
        if (rec_list[rec_list.length - 1] === target) {
            return true;
        }
        rec_list.pop();
        idx -= 1;
        return getIndex(rec_list, target);
    };
    const bool = getIndex(list, target);
    const result = bool === true ? idx : -1;
    return result;
}
linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
linearSearch([100], 100); // 0
linearSearch([1, 2, 3, 4, 5], 6); // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
linearSearch([100], 200); // -1
