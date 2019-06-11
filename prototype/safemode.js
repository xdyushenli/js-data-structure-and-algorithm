// 安全模式：判断this是否指向当前函数，从而避免忘记添加new关键字时，添加全局变量的问题。
var Book = function(title, author) {
    // new调用时，this指向新创建的实例 this.__proto__ == Book.prototype
    if(this instanceof Book) {
        return Book(title, author)
    }
    return new Book(title, author)
}

// 错误示范：箭头函数不能作为构造函数，在new调用时会抛出一个错误
var Book = (title, author) => {
    // some code
}