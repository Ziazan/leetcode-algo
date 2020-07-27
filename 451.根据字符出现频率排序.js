/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
class Heap {
    constructor(str) {
        let map = new Map();
        str.split('').forEach(item => {
            if (map.has(item)) {
                map.set(item, map.get(item) + 1)
            } else {
                map.set(item, 1)
            }
        });
        this.map = map;
        this.data = Array.from(map.values());//频率数组
        console.log(this.data)
    }

    //输出
    toString() {
        let str = [];
        let arr = this.sort();
        console.log(this.data)
        while (arr.length) {
            let val = arr.pop()
            for (let [k, v] of this.map) {
                if (v === val) {
                    str.push(k.repeat(val))
                    this.map.delete(k)
                    break
                }
            }
        }
        console.log(str.join(''))
        return str.join('');
    }

    //排序
    sort() {
        let iArr = this.data;
        let len = iArr.length;

        if (len <= 1) {
            return iArr;
        }
        //最后一个父节点的坐标
        let p = Math.floor(len / 2);
        //找到第一个最大值，在数组的最后
        for (let i = p; i >= 0; i--) {
            Heap.maxHeapify(iArr, i, len)
        }

        for (let j = 0; j < len; j++) {
            Heap.swap(iArr, 0, len - 1 - j);//每次得到的最大值往后放
            Heap.maxHeapify(iArr, 0, len - 1 - j - 1);//把未排序的继续放入排序。
        }
        return iArr
    }

    //交换两个元素
    static swap(arr, a, b) {
        if (a === b) return
        let c = arr[a];
        arr[a] = arr[b]
        arr[b] = c;
    }

    //找到最大值
    static maxHeapify(arr, i, size) {
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        let largest = i;
        //左节点最大
        if (l <= size && arr[l] > arr[largest]) {
            largest = l;
        }
        //右节点最大
        if (r <= size && arr[r] > arr[largest]) {
            largest = r;
        }
        //说明树变化了，在largest节点递归
        if (largest !== i) {
            //和父节点交换位置
            Heap.swap(arr, largest, i)
            Heap.maxHeapify(arr, largest, size)
        }

    }
}
var frequencySort = function (s) {
    if (!s || s.length == 1) return s;
    let heap = new Heap(s);
    return heap.toString()
};

frequencySort('cccaaa')
frequencySort('Aabb')
frequencySort("aBaatree")
frequencySort("abaccadeeefaafcc")
// @lc code=end

