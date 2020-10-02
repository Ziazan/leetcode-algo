/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
function sortFn(a, b) {
    return a - b
}
var findRadius = function (houses, heaters) {
    let dist_max = 0;
    //排序 如果没有指明 compareFunction ，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序。
    houses.sort(sortFn);
    heaters.sort(sortFn);

    for (let index = 0; index < houses.length; index++) {
        //二分查找房屋左右两边的暖气
        let left = 0,
            right = heaters.length - 1;

        while ((right - left) > 1) {
            let mid = Math.floor((left + right) / 2)
            if (heaters[mid] === houses[index]) {
                right = mid;
                left = mid
            } else if (heaters[mid] > houses[index]) {
                right = mid
            } else if (heaters[mid] < houses[index]) {
                left = mid
            }
        }
        let dist = Math.min(Math.abs(heaters[left] - houses[index]), Math.abs(heaters[right] - houses[index]))
        dist_max = dist > dist_max ? dist : dist_max
    }
    return dist_max;
};