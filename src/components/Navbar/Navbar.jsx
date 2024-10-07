import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import CreateGroup from '../Group/CreateGroup';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Navbar() {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Récupérer le token du stockage local
            const token = localStorage.getItem('token'); 

            if (!token) {
                toast.error('Non autorisé. Vous devez vous connecter pour accéder à cette page.');
                setIsLoading(false);
                return;
            }
            const response = await axios.get('http://127.0.0.1:8000/api/v1.0.0/logout', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            localStorage.removeItem('token');

            if (response.data.success) {
                toast.success(response.data.message);
                setIsLoading(false);
                setTimeout(function () {
                    navigate('/login');
                }, 1000);
            }
        } catch (error) {
            setIsLoading(false);
            if (error.response && error.response.status === 401) {
                toast.error('Non autorisé. Le token est invalide ou expiré.');
            } else {
                console.log(error)
                toast.error('Erreur lors de la déconnexion.');
            }
        }
    };

    return (
     
        <nav className="flex items-center justify-between bg-[#0a1536] p-6 border-b-2 border-blue-500 relative">
        <div className="flex items-center space-x-4">
            {/* menu burger pour les petits ecrans */}
            <div className="lg:hidden text-white text-xl mr-4">
                <Button
                    text={<span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </span>}
                    className="bg-transparent text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </div>

            {/* Logo */}
            <div className="text-white text-2xl font-bold">
                FileSend
            </div>
        </div>

        {/* Buttons pour les ecrans larges */}
        <div className="hidden lg:flex items-center space-x-4">
            <Link to={"/discussion"}>
                <Button
                    text={'Vos groupes'}
                    className="text-left bg-transparent text-white hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                />
            </Link>
            <div>
                <Button
                    onClick={openModal}
                    text={'Créer un groupe'}
                    className="bg-transparent text-white hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                />
                <Modal isVisible={isModalOpen} onClose={closeModal}>
                    <CreateGroup />
                </Modal>
            </div>
            <Button
                onClick={handleLogout}
                disabled={isLoading}
                text={isLoading ? 'Chargement ...' : 'Se déconnecter'}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            />
        </div>

        {/* menu pour les ecrans mobiles */}
        <div
            className={`lg:hidden fixed top-0 left-0 h-full w-full bg-[#0a1536] p-6 transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
           
            <div className="flex justify-end">
                <Button
                    text={<span>&times;</span>}
                    className="text-white text-3xl bg-transparent"
                    onClick={() => setIsMenuOpen(false)}
                />
            </div>
            <Link to={"/discussion"}>
                <Button
                    text={'Vos groupes'}
                    className="bg-transparent text-white hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                />
            </Link>
            <div className="mt-8 space-y-4">
            <div>
                <Button
                    onClick={openModal}
                    text={'Créer un groupe'}
                    className="bg-transparent text-white hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                />
                <Modal isVisible={isModalOpen} onClose={closeModal}>
                    <CreateGroup />
                </Modal>
            </div>
                <Button
                    onClick={handleLogout}
                    disabled={isLoading}
                    text={isLoading ? 'Chargement ...' : 'Se déconnecter'}
                    className="block w-full bg-blue-500 text-white py-2 px-4 rounded"
                />
            </div>
        </div>
    </nav>
    );

    
}

















