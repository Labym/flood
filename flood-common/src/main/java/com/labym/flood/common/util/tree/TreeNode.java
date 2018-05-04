package com.labym.flood.common.util.tree;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
public class TreeNode<T extends Node<ID>,ID extends Serializable>  {
    private T value;
    private List<TreeNode<T,ID>> children;
    private T parent;

    public void  add(TreeNode<T,ID> child){
        if(null==children){
            children=new ArrayList<>();
        }
        children.add(child);
    }


    public ID id() {
        return this.value.id();
    }


    public ID parentId() {
        if(isRoot()){
            return null;
        }
        return this.parent.id();
    }


    public boolean isRoot() {
        return null==parent;
    }

    public TreeNode(T parent, T value){
        this.parent=parent;
        this.value=value;
    }


    public String prettyPrint() {
        return "TreeNode{" +
                "value=" + value +
                ", children=" + children +
                ", parent=" + parent +
                '}';
    }
}
