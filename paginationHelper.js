// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page

// this is the function constructor
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return (this.collection).length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    let result = 0;
    let x = this.collection;
    let recurse = (array) => {
        if (array.length < 1) {
            return result;
        } else {
            result += 1;
            let sliced = array.slice(this.itemsPerPage + 1)
            return recurse(sliced)
        }
    }
    recurse(x);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    p

}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {

}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageCount());
