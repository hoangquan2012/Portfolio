import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  EyeOutlined,
  EditOutlined
} from '@ant-design/icons';
import styles from './sortableitem.module.css'
import { Button } from "antd";
import { Router, useRouter } from "next/router";
export function Item(props: any) {
  const { id } = props;

  const style = {
    width: "100%",
    height: 100,
    cursor: 'pointer',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
    background: "white",
    borderRadius: "0.125rem",
    boxShadow: "#091e4240 0 1px 2px",
    padding: "10px"
  };

  const route = useRouter();

  return (
    <div style={style}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {id}
        <div style={{ color: '#ddd', textTransform: 'uppercase', fontSize: 10, paddingTop: 40 }}>
          date created : 20/12/1999
        </div>
        <div style={{ display: 'flex', position: 'absolute', bottom: 0, right: 10 }}>
          <div onClick={(() => { route.push("/Work/edit") })}>
            <EditOutlined style={{ marginRight: '10px' }} className={styles.edit} />
          </div>
          <div>
            <EyeOutlined className={styles.edit} />
          </div>

        </div>
      </div>
    </div>
  )

}

export default function SortableItem(props: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={props.id} />
    </div>
  );
}
