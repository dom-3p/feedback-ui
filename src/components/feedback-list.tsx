import { Badge, Button, HStack, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IFeedbackListProps } from '../interfaces/feedback-list-props';
import { IFeedbackListState } from '../interfaces/feedback-list-state';

const FeedbackList: React.FC<IFeedbackListProps> = (props) => {
    const [feedbackListState, setFeedbackListState] = useState<IFeedbackListState>({ title: props.theTitle, showTitle: props.showTitle, titleColour: '#000000' });
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
        const url = 'http://localhost:3001/';
        axios.get(url).then((res) => {
            console.log(res.data);
            setFeedbackListState({ ...feedbackListState, title: `${props.theTitle} (${counter})` });
        });
    }, [counter]);

    const generateList = () => {
        const maxItems = 5;
        let items = [];
        for (let i = 0; i < maxItems; i++) {
            items.push(<li>Item {i + 1}</li>);
        }
        return <ul>{items}</ul>;
    };

    const applyFilter = () => {
        setFeedbackListState({ ...feedbackListState, title: `${props.theTitle} (Filtered)` });
    };

    const clearFilter = () => {
        setFeedbackListState({ ...feedbackListState, title: props.theTitle });
    };

    const incrementNum = () => {
        setCounter(counter + 1);
    };

    const decrementNum = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <div>{feedbackListState.title}</div>
            {generateList()}
            <Badge>Counter: {counter}</Badge>
            <HStack>
                <Button colorScheme="blue" onClick={applyFilter}>
                    Filter
                </Button>
                <Button colorScheme="teal" onClick={clearFilter}>
                    Clear
                </Button>
            </HStack>
            <HStack>
                <Button colorScheme="blue" onClick={incrementNum}>
                    Increment
                </Button>
                <Button colorScheme="teal" onClick={decrementNum}>
                    Decrement
                </Button>
            </HStack>
        </>
    );
};

export default FeedbackList;
