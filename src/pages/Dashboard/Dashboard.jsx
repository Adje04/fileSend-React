import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

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
        <div className="h-screen w-screen flex flex-col">
            
            <Navbar />
            <div className="flex-grow flex items-center justify-center bg-[#0a1536] p-6">
                <div className="flex items-center justify-center">
                    <img
                        className="w-96 h-96 max-w-full rounded-full"
                        src="../../../public/Files sent-rafiki.svg"
                        alt="fileLogo"
                    />
                </div>
            </div>
        </div>
    );
}
























