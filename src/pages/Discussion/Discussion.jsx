import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {ToastContainer } from 'react-toastify';
import Sidebar from '../../components/Sidebar/Sidebar';
import Chat from '../../components/Chat/Chat';


export default function Discussion() {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);

    const handleGroupClick = (group) => {
        setSelectedGroup(group);
    };

    const goBackClick = () => {
        setSelectedGroup(null); 
    }
    return (
        <div>
            <ToastContainer stacked />
            <div className="h-screen bg-gray-50 dark:bg-gray-800 text-white">
                
               
                <div className="flex h-full">
                    
                    
                    <div className={`sm:w-1/4 w-full sm:block ${selectedGroup ? 'hidden sm:block' : 'block'}`}>
                        <Sidebar onGroupClick={handleGroupClick} />
                    </div>

                   
                    <div className={`sm:w-3/4 w-full ${selectedGroup ? 'block' : 'hidden sm:block'}`}>
                        {selectedGroup ? (
                            !isLoading && <Chat group={selectedGroup} goBackClick={goBackClick} />
                        ) : (
                            <div className="flex justify-center items-center h-full">
                                <p className="text-gray-500 text-xl">Sélectionner un groupe pour voir les détails</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );

}

