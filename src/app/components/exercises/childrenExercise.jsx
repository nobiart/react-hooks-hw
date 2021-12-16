import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";

const ListOfElements = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        const config = {
            ...child.props,
            id: i + 1
        };
        return React.cloneElement(child, config);
    });
};

ListOfElements.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListOfElements>
                <Component />
                <Component />
                <Component />
            </ListOfElements>
        </CollapseWrapper>
    );
};

const Component = ({ id }) => {
    return <div>{id}. Компонент списка</div>;
};

Component.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
