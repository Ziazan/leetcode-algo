/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */

// union-find 算法
//https://leetcode-cn.com/problems/friend-circles/solution/union-find-suan-fa-xiang-jie-by-labuladong/
class UF {
    constructor(n) {
        this.count = n
        this.parent = new Array(n);
        this.size = new Array(n).fill(1)
        for (let i = 0; i < n; i++) {
            this.parent[i] = i ///初始阶段 parent是自己
        }
        console.log(this.parent)
    }
    /**
     * 将p 和 q 链接
     * @param {*} p 
     * @param {*} q 
     */
    union(p, q) {
        let rootP = this.findRoot(p);
        let rootQ = this.findRoot(q);
        if (rootP === rootQ) return

        if (this.size[rootP] > this.size[rootQ]) {
            this.parent[rootQ] = rootP
            this.size[rootP] += this.size[rootQ];
        } else {
            this.parent[rootP] = rootQ
            this.size[rootQ] += this.size[rootP];
        }
        this.count = this.count - 1;

    }
    /**
     * 查找节点的根节点
     * @param {*} x 
     */
    findRoot(x) {
        while (this.parent[x] !== x) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x]
        }
        return x
    }
    /**
     * 判断p 和 q 是否链接 
     * @param {*} p 
     * @param {*} q 
     */
    connected(p, q) {
        let rootP = this.findRoot(p);
        let rootQ = this.findRoot(q);
        return rootP === rootQ
    }

    /**
     * 计算联通数
     */
    countRoot() {
        return this.count
    }

}
var findCircleNum = function (M) {
    if (!M || M.length === 0) return 0
    let len = M.length
    let uf = new UF(len);

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < M[0].length; j++) {
            if (M[i][j] == 1) {
                uf.union(i, j)
            }
        }
    }
    return uf.countRoot()
};
// @lc code=end

