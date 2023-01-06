var twoSum = function (nums, target) {
  let x = nums.length;
  myObject = {};
  for (let i = 0; i < x; i++) {
    let complement = target - nums[i];
    if (myObject.hasOwnProperty(complement)) {
      console.log([myObject[complement], i]);
    }
    myObject[nums[i]] = i;
  }

  console.log(myObject);
};

twoSum([2, 3, 4], 6);
