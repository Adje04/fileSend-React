import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Button from '../../components/Button/Button';
import Sidebar from '../../components/Sidebar/Sidebar';
import Groupbar from '../../components/Navbar/Groupbar';
import Chat from '../../components/Chat/Chat';
import Navbar from '../../components/Navbar/Navbar';
import CreateGroup from '../../components/Group/CreateGroup';
import Modal from '../../components/Modal/Modal';



export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);

    const handleGroupClick = (group) => {
        setSelectedGroup(group);
    };


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <ToastContainer stacked />

            <Navbar />

        </div >
    );
}

























