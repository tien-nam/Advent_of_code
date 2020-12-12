function avoidObstacles(nums) {
  //  write code here.
  let min = 1;
  let a = nums.every(num => {
    while(num %  min === 0){
      min++;
    }
    return true;
  })

    console.log(min)
  //console.log({ans,min});
}


const nums = [4, 6, 8, 10, 12];

avoidObstacles(nums);

