class Node{
    constructor(value = null){
        this.value = value;
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie{
    constructor() {
        this.root = new Node()        
    }

    insert(word){
        let currentNode = this.root;
        for(let ch of word){
            const node = currentNode.children.get(ch) || new Node(ch);
            currentNode.children.set(ch, node);
            currentNode = node;
            // console.log(node)
        }
        currentNode.isEnd = true;
        // console.log(currentNode)
    }
    
    search(word, isPrefix = false){
        let currentNode = this.root;
        for(let ch of word){
            currentNode = currentNode.children.get(ch);
            if(!currentNode) return false;
        }

        return isPrefix ? true : currentNode.isEnd === true;
    }

    startsWith(prefix){
        return this.search(prefix, true);
    }

    // TODO: implementation of delete a trie node.
}

let trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");    