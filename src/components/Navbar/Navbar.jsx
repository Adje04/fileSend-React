import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import CreateGroup from '../Group/CreateGroup';

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
            const token = localStorage.getItem('token'); // Récupérer le token du stockage local

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
                toast.error('Erreur lors de la déconnexion.');
            }
        }
    };

    return (
        <nav className="flex items-center justify-between bg-[#0a1536] p-6 border-b-2 border-blue-500">
            {/* Logo and Menu Button */}
            <div className="flex items-center space-x-4">
                {/* Hamburger Menu for small screens */}
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
                <div className="text-white text-xl">
                    FileSend
                </div>
            </div>

            {/* Buttons for large screens */}
            <div className="hidden lg:flex items-center space-x-4">
                <Link to={"/discussion"}>
                    <Button
                        text={'vos groues'}
                        className="block w-full text-left bg-transparent text-white hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-2"
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

            {/* Dropdown menu for small screens */}
            <div
                className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-6 bg-[#0a1536] w-48 p-4 rounded shadow-lg`}
            >
                <Button
                    onClick={openModal}
                    text={'Créer un groupe'}
                    className="block w-full text-left bg-transparent text-white hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-2"
                />
                <Button
                    onClick={handleLogout}
                    disabled={isLoading}
                    text={isLoading ? 'Chargement ...' : 'Se déconnecter'}
                    className="block w-full text-left bg-blue-500 text-white px-4 py-2 rounded"
                />


            </div>
        </nav>
    )
}




// import React, { useState } from 'react';
// import CreateGroup from './CreateGroup';
// import Modal from './Modal';
// import Button from '../Button/Button';

// export default function Dashboard() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="dashboard">
//       <Button
//         onClick={openModal}
//         text="Créer Groupe"
//         className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//       />

//       {/* Modal pour la création du groupe */}
//       <Modal isVisible={isModalOpen} onClose={closeModal}>
//         <CreateGroup />
//       </Modal>
//     </div>
//   );
// }
