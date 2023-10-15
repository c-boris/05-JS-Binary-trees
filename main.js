// Classe Node pour représenter chaque nœud de l'arbre binaire
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Classe Tree pour représenter l'arbre binaire
class Tree {
  constructor(data) {
    this.root = new Node(data[0]);

    for (let i = 1; i < data.length; i++) {
      this.insert(data[i]);
    }
  }

  // Méthode pour insérer un nouvel élément dans l'arbre
  insert(data) {
    this.insertRec(this.root, data);
  }

  insertRec(node, data) {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new Node(data);
      } else {
        this.insertRec(node.left, data);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(data);
      } else {
        this.insertRec(node.right, data);
      }
    }
  }

  // Méthode pour afficher l'arbre (utilise une approche de parcours récursif)
  toString() {
    function printNode(node, level) {
      if (node === null) {
        return;
      }

      printNode(node.right, level + 1);
      console.log(' '.repeat(4 * level) + node.data);
      printNode(node.left, level + 1);
    }

    printNode(this.root, 0);
  }

  // Méthode pour trouver un nœud dans l'arbre binaire de recherche
  find(data) {
    return this.findRec(this.root, data);
  }

  findRec(node, data) {
    if (node === null) {
      return null; // L'élément n'est pas présent dans l'arbre
    }

    if (data === node.data) {
      return node; // Nœud trouvé
    } else if (data < node.data) {
      return this.findRec(node.left, data);
    } else {
      return this.findRec(node.right, data);
    }
  }
}

// Exemple d'utilisation
const data = [4, 2, 9, 5, 1, 8, 3];
const tree = new Tree(data);

tree.toString(); // Pour afficher l'arbre
console.log(tree.find(5)); // Pour trouver un élément dans l'arbre
