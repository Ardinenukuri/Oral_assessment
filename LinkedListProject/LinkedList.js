"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    LinkedList.prototype.remove = function (data) {
        if (!this.head)
            return false;
        if (this.head.data === data) {
            this.head = this.head.next;
            return true;
        }
        var current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            return true;
        }
        return false;
    };
    LinkedList.prototype.find = function (data) {
        var current = this.head;
        while (current && current.data !== data) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.print = function () {
        var current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    };
    return LinkedList;
}());
exports.default = LinkedList;
