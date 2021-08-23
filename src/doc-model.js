class TreeNode {
    constructor() {
        this.value = '';
        this.cons = {};
    }

    addCon(key, tNode) {
        this.cons[key] = tNode;
    }

    getNodeAt(key) {
        return this.con[key];
    }
}

class Tree {
    root = new TreeNode();

    constructor() {
    }
}

class Doc {
    constructor() {
        this.doc = new Tree();
    }

    get_lines(entity) {
        return entity.get_lines();
    }
}

class Let {
    constructor(name, value, prev = null, next = null, indent = null) {
        this.name = name;
        this.value = value;
        this.prev = prev;
        this.next = next;
        this.indent = 0 | indent;

        this.lines = [`let ${this.name} = ${this.value}`]
    }

    get_lines() {
        return this.lines;
    }
}

export {
    Let,
    Doc,
}