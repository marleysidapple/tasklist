"use strict";
var Task = (function () {
    function Task(_id, isDone, title, created_at) {
        this._id = _id;
        this.isDone = isDone;
        this.title = title;
        this.created_at = created_at;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map