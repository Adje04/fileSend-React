import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Messages from './Messages'; 
import Button from '../Button/Button';
import Groupbar from '../Navbar/Groupbar';
import { toast } from 'react-toastify';

export default function Chat({ group }) {
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState(null);
    const baseURL = `http://127.0.0.1:8000/api/v1.0.0/`


    const groupId = localStorage.getItem('selectedGroupId');
    if (!groupId) {
        toast.error('Aucun groupe sélectionné.');
        return;

    }

  
    const fetchFiles = async () => {
        try {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            const response = await axios.get(`${baseURL}groupfiles/${groupId}`);
            console.log(response.data);  
    
            if (response.data.success) {
                setFiles(response.data.data);  
            } else {
                toast.error('Erreur lors de la récupération des fichiers');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des fichiers :', error);
        }
    };
    

    useEffect(() => {
        fetchFiles();
    }, [groupId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            toast.error('Veuillez sélectionner un fichier');
            return;
        }

        const formData = new FormData();
        formData.set('file', file);

        try {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            const response = await axios.post(`${baseURL}uploadfile/${groupId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.success) {
                setFiles((prevMessages) => [
                    ...prevMessages,
                    { id: response.data.data.id, user: 'me', content: response.data.data.path, type: 'file' },
                ]);
                toast.success('Fichier téléchargé avec succès');
                setFile(null);
                fetchFiles();
            } else {
                console.log(response);
                toast.error(response.data.message);
            }


        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div className="h-screen flex flex-col bg-gray-900 text-white">

            <Groupbar group={group} />

            <div className="flex-grow overflow-y-auto px-4 py-6">
                {files.map((file) => (
                    <Messages key={file.id} user={'me'} content={file.path} type="file" />
                ))}
                {/* user={file.user_id === Your logged-in user ID  ? 'me' : file.user_id} */}
            </div>


            <form
                onSubmit={handleSubmit}
                className="flex w-full items-center justify-between bg-gray-800 px-4 border-gray-700">
                <label className="cursor-pointer">
                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files[0])} />
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3333 2.66669H17.6973C22.044 2.66669 24.22 2.66669 25.7293 3.73069C26.1613 4.03469 26.5453 4.39735 26.8693 4.80402C28 6.22535 28 8.27069 28 12.364V15.7574C28 19.708 28 21.684 27.3747 23.2614C26.3693 25.7987 24.244 27.7987 21.548 28.7454C19.872 29.3334 17.7747 29.3334 13.5747 29.3334C11.1773 29.3334 9.97734 29.3334 9.02001 28.9974C7.48001 28.456 6.26534 27.3134 5.69068 25.864C5.33334 24.9627 5.33334 23.8334 5.33334 21.576V16" stroke="#D6E1FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 16C28 17.1786 27.5318 18.309 26.6984 19.1424C25.865 19.9758 24.7346 20.444 23.556 20.444C22.668 20.444 21.6213 20.2894 20.7587 20.52C20.3819 20.6213 20.0383 20.8199 19.7624 21.0958C19.4866 21.3717 19.288 21.7152 19.1867 22.092C18.956 22.9547 19.1107 24.0014 19.1107 24.8894C19.1107 25.4729 18.9957 26.0508 18.7724 26.59C18.5491 27.1292 18.2217 27.6191 17.809 28.0317C17.3964 28.4444 16.9065 28.7717 16.3673 28.9951C15.8281 29.2184 15.2503 29.3334 14.6667 29.3334M14.6667 8.00002H4M9.33333 2.66669V13.3334" stroke="#D6E1FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </label>

                <Button
                    type="submit"
                    className="px-4 py-2 bg-transparent rounded-r-lg text-white hover:bg-blue-100"
                    icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>}
                />
            </form>
        </div>
    );
}


