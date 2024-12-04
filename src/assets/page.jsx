import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page = () => {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [taskName, setTaskName] = useState(''); 
    const [priority, setPriority] = useState('low'); 

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addTask = () => {
        if (taskName) { // Only add if task name is not empty
            const newTask = {
                name: taskName,
                date: new Date().toDateString(),
                priority: priority,
            };
            setTasks([...tasks, newTask]);
            setTaskName(''); 
            setPriority('low');
            closeModal();
        }
    };

    return (
        <>
            <button className="btn btn-primary" onClick={openModal}>Add Task</button>

            {isModalOpen && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={closeModal}>
                    <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Task</h5>
                                <button type="button" className="close" onClick={closeModal} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label>Task Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                    placeholder="Enter Task Name"
                                />
                                <label className="mt-3">Priority:</label>
                                <select className="form-control" value={priority} onChange={(e) => setPriority(e.target.value)}>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" onClick={addTask}>Add Task</button>
                                <button className="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Task List */}
            <div className="mt-4 col-5">
                <h3 className='text-white'>Task List :</h3>
                <ul className="list-group">
                    {tasks.map((task, index) => (
                        <li key={index} className="list-group-item">
                            Task : {task.name} - Date : {task.date} - Priority : {task.priority} - 
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Page;
