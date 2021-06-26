import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [
            ...courseGoals,
            { key: Math.random().toString(), value: goalTitle }]); //...courseGoals representa todo o array atual, adicionamos enteredGoal no fim dele
        setIsAddMode(false);
    };

    const removeGoalHandler = goalKey => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.key !== goalKey);
        });
    }

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            <GoalInput
                visible={isAddMode}
                onAddGoal={addGoalHandler}
                onCancel={cancelGoalAdditionHandler}
            />
            <FlatList
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem
                        id={itemData.item.key}
                        onDelete={removeGoalHandler}
                        title={itemData.item.value}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});
