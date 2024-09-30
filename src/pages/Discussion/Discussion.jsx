import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Button from '../../components/Button/Button';
import CreateGroup from '../../components/Group/CreateGroup';
import Sidebar from '../../components/Sidebar/Sidebar';
import Groupbar from '../../components/Navbar/Groupbar';
import Chat from '../../components/Chat/Chat';
import Navbar from '../../components/Navbar/Navbar';

export default function Discussion() {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);

    const handleGroupClick = (group) => {
        setSelectedGroup(group);
    };

    return (
        <div>
            <ToastContainer stacked />

         
            <div className="flex h-screen bg-gray-50 dark:bg-gray-800 text-white">
             
                <div className="w-1/4">
                    <Sidebar onGroupClick={handleGroupClick} />
                </div>

              
                <div className="w-3/4">
                    {selectedGroup ? (
                        
                        !isLoading && (
                            <>
                                <Chat group={selectedGroup}/>
                            </>
                        )
                    ) : (
                        <div className="flex justify-center items-center h-full">
                            <p className="text-gray-500 text-xl">Selectionner un groupe pour voir  les details</p>
                        </div>
                    )}
                </div>
            </div>


        </div >
    );
}























