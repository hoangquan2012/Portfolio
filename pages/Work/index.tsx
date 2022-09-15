import React, { useState } from "react";
import { Button, Input, Space, Switch } from 'antd';
import {
    PlusOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import styles from './work.module.css'
import Container from "../../src/components/Container";
import { Item } from "../../src/components/SortableItem";
import { useRouter } from "next/router";

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

export default function Work() {

    function findContainer(id: any) {
        if (id in items) {
            return id;
        }

        return Object.keys(items).find((key) => items[key].includes(id));
    }

    function handleDragStart(event: any) {
        const { active } = event;
        const { id } = active;

        setActiveId(id);
    }

    function handleDragOver(event: any) {
        const { active, over, draggingRect } = event;
        const { id } = active;
        const { id: overId } = over;

        // Find the containers
        const activeContainer = findContainer(id);
        const overContainer = findContainer(overId);

        if (
            !activeContainer ||
            !overContainer ||
            activeContainer === overContainer
        ) {
            return;
        }

        setItems((prev) => {
            const activeItems = prev[activeContainer];
            const overItems = prev[overContainer];

            // Find the indexes for the items
            const activeIndex = activeItems.indexOf(id);
            const overIndex = overItems.indexOf(overId);

            let newIndex;
            if (overId in prev) {
                // We're at the root droppable of a container
                newIndex = overItems.length + 1;
            } else {
                const isBelowLastItem =
                    over &&
                    overIndex === overItems.length - 1 &&
                    draggingRect?.offsetTop > over.rect.offsetTop + over.rect.height;

                const modifier = isBelowLastItem ? 1 : 0;

                newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
            }

            return {
                ...prev,
                [activeContainer]: [
                    ...prev[activeContainer].filter((item: any) => item !== active.id)
                ],
                [overContainer]: [
                    ...prev[overContainer].slice(0, newIndex),
                    items[activeContainer][activeIndex],
                    ...prev[overContainer].slice(newIndex, prev[overContainer].length)
                ]
            };
        });
    }

    function handleDragEnd(event: any) {
        const { active, over } = event;
        const { id } = active;
        const { id: overId } = over;

        const activeContainer = findContainer(id);
        const overContainer = findContainer(overId);

        if (
            !activeContainer ||
            !overContainer ||
            activeContainer !== overContainer
        ) {
            return;
        }

        const activeIndex = items[activeContainer].indexOf(active.id);
        const overIndex = items[overContainer].indexOf(overId);

        if (activeIndex !== overIndex) {
            setItems((items) => ({
                ...items,
                [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
            }));
        }

        setActiveId(null);
    }
    const [items, setItems]: any[] = useState({
        root: ["Eat", "Game", "Sleep"],
        container1: ["Learn", "ABC", "DEF"],
        container2: ["FDS", "VCB8"],
    });
    const [activeId, setActiveId] = useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const route = useRouter()

    return (
        <div>
            <div style={{ margin: '10px' }}>
                <h1 className={styles.h1}>Project Board</h1>
                <div>
                    <Search placeholder="Search Project" onSearch={onSearch} style={{ width: 200, marginRight: '10px' }} />
                    <Button onClick={(() => { route.push("/Work/create") })} style={{ marginRight: '10px' }}><span><PlusOutlined /> Add project</span></Button>
                    <Button style={{ marginRight: '10px' }}><span><DeleteOutlined /> Delete Project</span></Button>
                    <Switch defaultChecked style={{ float: 'right' }} />
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCorners}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDragEnd={handleDragEnd}
                >
                    <Container id="root" text='my plan 3' items={items.root} />
                    <Container id="container1" text='in progress 3' items={items.container1} />
                    <Container id="container2" text='done 2' items={items.container2} />
                    <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
                </DndContext>
            </div>
        </div>
    );


}
