import React, { useState } from 'react'
import Input from '../Input/Input';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddMember() {

    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const baseURL = `http://127.0.0.1:8000/api/v1.0.0/`
   
    
    const addMember = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('email', email);
        setIsLoading(true);
       
        try {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
          const groupId = localStorage.getItem('selectedGroupId'); 
          console.log(groupId)
          if (!groupId) {
            console.error('Aucun groupe sélectionné.');
            return;
          }
          const response = await axios.post(`${baseURL}group/${groupId}/members`, formData);
          

          if (response.data.success) {

            toast.success(response.data.message)
            setIsLoading(false)
            setTimeout(function () {
                // navigate('/login');
            }, 3000);
            console.log(response.data.data);


        } else {
            toast.error(response.data.message);
            console.log(response.data)
            setIsLoading(false)
        }


        } catch (error) {
          console.error(error); 
            toast.error("une erreur est survenue");
            setIsLoading(false);
        }
    };


    return (
        <div className="">
            
            {/* <div className="bg-white dark:bg-gray-500 p-7 rounded-lg shadow-md w-full max-w-md" > */}
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white" >Ajouter un membre</h1>
                <form onSubmit={addMember}>

                    <Input
                        label={'email'}
                        type={'text'}
                        reference={'name'}
                        placeholder={'Email du membre à ajouter ici'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-2 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    <br />
                    <div>                        
                        <Button
                            disabled={isLoading}
                            type="submit"
                            text={isLoading ? 'Chargement ...' : 'Valider'}
                            className="w-full py-2  text-white rounded-lg hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 font-bold"
                        />
                    </div>
                </form>
            {/* </div> */}
        </div>
    )
}









// const [description, setDescription] = useState('');

// const handleCreateGroup = async (e) => {
//     e.preventDefault();
//     if (name.trim() === '' || description.trim() === '') {
//         toast.error('Veuillez renseigner tous les champs');
//         return;
//     }
//     const formData = new FormData();

//     formData.set('name', name);
//     formData.set('description', description);

//     setIsLoading(true);
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
//     const response = await axios.post(`${baseURL}group`, formData)

//     try {

//         if (response.data.success) {
//             setIsLoading(false);

//             toast.success(response.data.message || 'Le groupe a été créé avec succès');
//             setName('');
//             setDescription('');
//         } else {
//             console.log(response.data);
//             if (response.data.data.name !== undefined) {
//                 toast.error(response.data.data.name[0]);
//             } else if (response.data.data.description !== undefined) {
//                 toast.error(response.data.data.description[0]);
//             }

//             setIsLoading(false);
//         }
//     } catch (error) {
//         console.error(error);
//         toast.error('Une erreur est survenue lors de la création du groupe');
//         setIsLoading(false);
//     }

// }

// export default function CreateGroup() {
  
//         return (
//             <div className="">
//                 <ToastContainer stacked />
//                 {/* <div className="bg-white dark:bg-gray-500 p-7 rounded-lg shadow-md w-full max-w-md" > */}
//                     <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white" >Créer un groupe</h1>
//                     <form onSubmit={handleCreateGroup} >
    
//                         <Input
//                             label={'Name'}
//                             type={'text'}
//                             reference={'name'}
//                           placeholder={'Saisir le nom du groupe ici...'}
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="mb-2 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
//                         />
    
//                         <Textarea
//                             label={'description'}
//                             reference={"description"}
//                             rows={3}
//                           placeholder={'Saisir la bio du groupe...'}
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             className="mb-2 bg-transparent  dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
    
//                         />
                      
//                         <br />
//                         <div>
//                             <Button
//                                 disabled={isLoading}
//                                 type="submit"
//                                 text={isLoading ? 'Chargement ...' : 'Créer'}
//                                 className="w-full py-2  text-white rounded-lg hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 font-bold"
//                             />
//                         </div>
//                     </form>
//                 {/* </div> */}
//             </div>
//         )
//     }