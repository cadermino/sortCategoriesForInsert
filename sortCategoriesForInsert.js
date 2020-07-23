module.exports = function sortCategoriesForInsert (inputJson) {
  const arr = JSON.parse(inputJson);
  let result = [];
  let parents = arr.filter(category => !category.parent_id);
  arr.forEach(parent => {
    if (!parent.parent_id) {
      result.push(parent);
    }
    const children = arr.filter(child => child.parent_id == parent.id);
    result.push.apply(result, children);
  });

  return JSON.stringify(result);
}