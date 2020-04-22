/*用最少的点去包含区间
[10,16] [2,8] [4,6] [7,12]
比如用11 它就在[10,16][7,12]两个区间内，
用5 它在[2,8] [4,6]
所以输出2
*/
//投飞镖刺破气球
/*
1.排序 以区间尾节点进行排序
2.Merge 如果当前cur.start< right 就可以说是一类区间，
否则的话，就用一个新的箭去覆盖（条件为 right= cur.end
3.空间复杂度 O(n) 时间复杂度 O(nlogn)
*/
var findMinArrowShots = function(points) {
    if (points.length == 0) {
        return 0;
    }
    const sort_points = points.sort((p1,p2)=>p1[1] -p2[1]); //用点的终点作为排序依据
    let cnt = 1, end = points[0][1];
    for (let i = 1; i < sort_points.length; i++) {
        if (sort_points[i][0] <= end) {//若当前点的起点小于end，则代表当前一定包含end，可一箭射穿。
            continue;
        }
        cnt++;   
        end = points[i][1];
    }
    return cnt;
};

var findMinArrowShots = function(points) {
    if(points.length===0) return 0;
    const sort_points = points.sort((p1,p2)=>p1[1]-p2[1]);   //用点的终点作为排序依据
    let arrows = 1;
    let shoot_endX = sort_points[0][1];
    for(let i = 0;i<sort_points.length;i++){
       if(sort_points[i][0]>shoot_endX){                    //若当前点的起点小于shoot_endX，则代表当前一定包含shoot_endX，可一箭射穿。
           arrows++                                         //若大于，则必须要重新射一直箭，并且把该点的终点作为区间判断依据
           shoot_endX = sort_points[i][1]
       }
    }
    return arrows;
};
