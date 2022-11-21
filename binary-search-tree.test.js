/* eslint-disable no-undef */
import { Tree } from "./binary-search-tree";

const newTree = new Tree([
  2, 5, 6, 235, 5, 236, 23, 62, 52, 345, 21, 35, 45, 346,
]);

describe("Check tree's validity", () => {
  it("The tree should be build", () => {
    expect(newTree.root).toMatchObject({
      data: 45,
      leftPart: {
        data: 6,
        leftPart: {
          data: 2,
          leftPart: null,
          rightPart: {
            data: 5,
            leftPart: null,
            rightPart: null,
          },
        },
        rightPart: {
          data: 23,
          leftPart: {
            data: 21,
            leftPart: null,
            rightPart: null,
          },
          rightPart: {
            data: 35,
            leftPart: null,
            rightPart: null,
          },
        },
      },
      rightPart: {
        data: 235,
        leftPart: {
          data: 52,
          leftPart: null,
          rightPart: {
            data: 62,
            leftPart: null,
            rightPart: null,
          },
        },
        rightPart: {
          data: 345,
          leftPart: {
            data: 236,
            leftPart: null,
            rightPart: null,
          },
          rightPart: {
            data: 346,
            leftPart: null,
            rightPart: null,
          },
        },
      },
    });
  });

  it("The root of the tree should be 45", () => {
    expect(newTree.root).toMatchObject({
      data: 45,
    });
  });
});

describe("Methods of the tree", () => {
  it("Check method should insert and find the node right after it", () => {
    newTree.insert(1);
    expect(newTree.find(1)).toMatchObject({
      data: 1,
      leftPart: null,
      rightPart: null,
    });
  });

  it("Delete method should delete nodes by its values", () => {
    expect(newTree.delete(1)).toMatchObject({
      data: 45,
      leftPart: {
        data: 6,
        leftPart: {
          data: 2,
          leftPart: null,
          rightPart: {
            data: 5,
            leftPart: null,
            rightPart: null,
          },
        },
        rightPart: {
          data: 23,
          leftPart: {
            data: 21,
            leftPart: null,
            rightPart: null,
          },
          rightPart: {
            data: 35,
            leftPart: null,
            rightPart: null,
          },
        },
      },
      rightPart: {
        data: 235,
        leftPart: {
          data: 52,
          leftPart: null,
          rightPart: {
            data: 62,
            leftPart: null,
            rightPart: null,
          },
        },
        rightPart: {
          data: 345,
          leftPart: {
            data: 236,
            leftPart: null,
            rightPart: null,
          },
          rightPart: {
            data: 346,
            leftPart: null,
            rightPart: null,
          },
        },
      },
    });
  });

  it("levelOrder function should return an array of BST values", () => {
    expect(newTree.levelOrder(newTree.root)).toEqual([
      45, 6, 235, 2, 23, 52, 345, 5, 21, 35, 62, 236, 346,
    ]);
  });

  describe("Height method", () => {
    it("this method should return the height of some node in the tree", () => {
      expect(newTree.height(newTree.root.leftPart.rightPart)).toBe(1);
    });

    it("height method should return how deep the given node is", () => {
      expect(newTree.height(newTree.root.rightPart.leftPart.rightPart)).toBe(0);
    });

    it("this method should return the height of the tree", () => {
      expect(newTree.height(newTree.root)).toBe(3);
    });
  });

  describe("Preorder, inorder, postorder traversal methods", () => {
    it("preorder - <root><left><right>", () => {
      newTree.preorder(newTree.root);
      expect(newTree.preorderData).toEqual([
        45, 6, 2, 5, 23, 21, 35, 235, 52, 62, 345, 236, 346,
      ]);
    });

    it("this method should traverse the tree like this <left><root><right>", () => {
      newTree.inorder(newTree.root);
      expect(newTree.inorderData).toEqual([
        2, 5, 6, 21, 23, 35, 45, 52, 62, 235, 236, 345, 346,
      ]);
    });

    it("this method should traverse the tree like this <left><right><root>", () => {
      newTree.postorder(newTree.root);
      expect(newTree.postorderData).toEqual([
        5, 2, 21, 35, 23, 6, 62, 52, 236, 346, 345, 235, 45,
      ]);
    });
  });

  describe("depth method", () => {
    it("depth of an empty tree should be equal to -1", () => {
      expect(newTree.depth(null)).toBe(-1);
    });

    it("depth of root's tree should be equal to 0", () => {
      expect(newTree.depth(newTree.root)).toBe(0);
    });

    it("depth of root's child should be equal to 1", () => {
      expect(newTree.depth(newTree.root.leftPart)).toBe(1);
    });

    it("depth of root's child child should be equal to 1", () => {
      expect(newTree.depth(newTree.root.leftPart.leftPart)).toBe(2);
    });
  });

  describe("isBalanced method", () => {
    it("newTree should be balanced", () => {
      expect(newTree.isBalanced(newTree.root)).toBeTruthy();
    });

    it("newTree should NOT be balanced", () => {
      newTree.insert(4242);
      newTree.insert(4243);
      newTree.insert(4244);
      expect(newTree.isBalanced(newTree.root)).toBeFalsy();
    });
  });

  describe("rebalance method", () => {
    it("newTree should be balanced", () => {
      expect(newTree.rebalance()).toMatchObject({
        data: 52,
        leftPart: {
          data: 21,
          leftPart: {
            data: 5,
            leftPart: {
              data: 2,
              leftPart: null,
              rightPart: null,
            },
            rightPart: {
              data: 6,
              leftPart: null,
              rightPart: null,
            },
          },
          rightPart: {
            data: 35,
            leftPart: {
              data: 23,
              leftPart: null,
              rightPart: null,
            },
            rightPart: {
              data: 45,
              leftPart: null,
              rightPart: null,
            },
          },
        },
        rightPart: {
          data: 345,
          leftPart: {
            data: 235,
            leftPart: {
              data: 62,
              leftPart: null,
              rightPart: null,
            },
            rightPart: {
              data: 236,
              leftPart: null,
              rightPart: null,
            },
          },
          rightPart: {
            data: 4242,
            leftPart: {
              data: 346,
              leftPart: null,
              rightPart: null,
            },
            rightPart: {
              data: 4243,
              leftPart: null,
              rightPart: {
                data: 4244,
                leftPart: null,
                rightPart: null,
              },
            },
          },
        },
      });
    });
  });
});
