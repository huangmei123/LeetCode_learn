/**
 * 	使用贪心思想，以递归的方式解决。
	1.将最高的按k值升序排列，然后把他们放到输出队列中与k值相等的索引位置上。
	2.按降序（就是第二高的人），同样按k值对其进行升序排列，再逐个插入到输出队列中与k值相等的索引位置上。
    3.直到完成即可。
 */

const reconstructQueue = (people)=>{
    people.sort((a,b)=>{
        // 首先按照身高h降序排列，同时如果身高相同那么按照k增序
        return a[0]===b[0]?a[1]-b[1]:b[0]-a[0];
    });
    // console.info(people);
    let res=[];
    for(let i=0;i<people.length;i++){
        res.splice(people[i][1],0,people[i]);
    }
    // console.info(res);
    return res;
};
