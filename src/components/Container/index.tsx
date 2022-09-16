import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "../SortableItem";

const containerStyle = {
    background: "#F5F5F5",
    padding: 10,
    margin: 10,
    flex: 1,
    height: '100vh'
};



export default function Container(props: any) {
    const { id, items = [], text } = props;

    const { setNodeRef } = useDroppable({
        id
    });

    return (
        <SortableContext
            id={id}
            items={items}
            strategy={verticalListSortingStrategy}
        >
            <div ref={setNodeRef} style={containerStyle}>
                <div style={{textTransform : 'uppercase' , color : '#5E6C84'}}>
                    {text}
                </div>
                {items.map((id: any) => (
                    <SortableItem key={id} id={id} />
                ))}
            </div>
        </SortableContext>
    );
}
