"use client";
import React, { useState } from "react";
import { Tree } from "antd";

const x = 3;
const y = 2;
const z = 1;
const defaultData: any[] = [];

const myData = [
  {
    key: "Arrays",
    title: "Arrays",
    children: [
      {
        key: "Javascript",
        title: "Javascript",
        children: [{ title: "WAP for factorial", key: "shhhhhh" }],
      },
    ],
  },
  {
    key: "Recusion",
    title: "Recusion",
    children: [
      {
        key: "Javascript",
        title: "Javascript",
        children: [{ title: "WAP for factorial", key: "shhhhhh" }],
      },
    ],
  },
];

const generateData = (_level: number, _preKey?: string, _tns?: any[]) => {
  const preKey = _preKey || "0";
  const tns = _tns || defaultData;
  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({
      title: "JavaScript",
      key,
    });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

console.log("defaultData -->", defaultData);

const DSAComponent: React.FC = () => {
  const [gData, setGData] = useState(myData);
  const [expandedKeys] = useState(["Array", "Recursion", "Backtracking"]);

  //   const onDragEnter = (info: any) => {
  //     console.log(info);
  //     // expandedKeys, set it when controlled is needed
  //     // setExpandedKeys(info.expandedKeys)
  //   };

  //   const onDrop = (info: any) => {
  //     console.log(info);
  //     const dropKey = info.node.key;
  //     const dragKey = info.dragNode.key;
  //     const dropPos = info.node.pos.split("-");
  //     const dropPosition =
  //       info.dropPosition - Number(dropPos[dropPos.length - 1]);

  //     const loop = (data: any[], key: string, callback: any) => {
  //       for (let i = 0; i < data.length; i++) {
  //         if (data[i].key === key) {
  //           return callback(data[i], i, data);
  //         }
  //         if (data[i].children) {
  //           loop(data[i].children, key, callback);
  //         }
  //       }
  //     };

  //     const data = [...gData];

  //     // Find dragObject
  //     let dragObj;
  //     loop(data, dragKey, (item, index, arr) => {
  //       arr.splice(index, 1);
  //       dragObj = item;
  //     });

  //     if (!info.dropToGap) {
  //       // Drop on the content
  //       loop(data, dropKey, (item) => {
  //         item.children = item.children || [];
  //         // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
  //         item.children.unshift(dragObj);
  //       });
  //     } else if (
  //       (info.node.props.children || []).length > 0 &&
  //       // Has children
  //       info.node.props.expanded &&
  //       // Is expanded
  //       dropPosition === 1 // On the bottom gap
  //     ) {
  //       loop(data, dropKey, (item) => {
  //         item.children = item.children || [];
  //         // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
  //         item.children.unshift(dragObj);
  //         // in previous version, we use item.children.push(dragObj) to insert the
  //         // item to the tail of the children
  //       });
  //     } else {
  //       let ar = [];
  //       let i;
  //       loop(data, dropKey, (_item, index, arr) => {
  //         ar = arr;
  //         i = index;
  //       });

  //       if (dropPosition === -1) {
  //         ar.splice(i, 0, dragObj);
  //       } else {
  //         ar.splice(i + 1, 0, dragObj);
  //       }
  //     }
  //     setGData(data);
  //   };

  return (
    <Tree
      className="draggable-tree"
      defaultExpandedKeys={expandedKeys}
      draggable={false}
      blockNode
      onClick={(val1, val2) => console.log(val1, val2)}
      //   onDragEnter={onDragEnter}
      //   onDrop={onDrop}
      treeData={gData}
    />
  );
};

export default DSAComponent;
