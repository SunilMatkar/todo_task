// TaskDetailScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const TaskDetailScreen = ({ route }) => {
  // Assuming you pass the task object as a route parameter
  const { task } = route.params;
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    // Implement your logic to save the edited task, e.g., update it in the database
    // After saving, you can navigate back to the task list or another screen
  };

  return (
    <View>
      <Text>Task Details</Text>
      <TextInput
        placeholder="Title"
        value={editedTask.title}
        onChangeText={(text) => setEditedTask({ ...editedTask, title: text })}
      />
      <TextInput
        placeholder="Description"
        value={editedTask.description}
        onChangeText={(text) =>
          setEditedTask({ ...editedTask, description: text })
        }
      />
      {/* Add more input fields for other task details like due date or category */}
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default TaskDetailScreen;
