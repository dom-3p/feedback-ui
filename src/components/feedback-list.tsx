import React, { useEffect, useState } from 'react';
import { IFeedbackListProps } from '../interfaces/feedback-list-props';

const FeedbackList = (props: IFeedbackListProps) => {
    const [title, setTitle] = useState<string>(props.title);

    const generateList = () => {
        const maxItems = 5;
        let items = [];
        for (let i = 0; i < maxItems; i++) {
            items.push(<li key={i}>Item {i + 1}</li>);
        }
        return <ul>{items}</ul>;
    };

    return (
        <>
            <div>{title}</div>
            {generateList()}
        </>
    );
};

export default FeedbackList;
