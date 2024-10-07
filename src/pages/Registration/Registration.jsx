// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios'
// import Input from '../../components/Input/Input';
// import Button from '../../components/Button/Button';


// export default function Registration() {

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [passwordConfirm, setpasswordConfirm] = useState('')
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false)

//   const navigate = useNavigate()


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(false);


//     localStorage.setItem("email", email);

//     setIsLoading(true);
//     const formData = new FormData();

//     formData.set("name", name);
//     formData.set("email", email);
//     formData.set("password", password);
//     formData.set("passwordConfirm", passwordConfirm);

//     const response = await axios.post(
//       "http://127.0.0.1:8000/api/v1.0.0/register",
//       formData
//     );

//     if (response.data.success) {
//       toast.success(response.data.message);
//       setIsLoading(false);
//       setTimeout(function () {
//         navigate("/login");
//       }, 3000);
//     } else {
//       console.log(response.data);

//       if (response.data.data.name !== undefined) {
//         toast.error(response.data.data.name[0]);
//       } else if (response.data.data.email !== undefined) {
//         toast.error(response.data.data.email[0]);
//       } else if (response.data.data.password !== undefined) {
//         toast.error(response.data.data.password[0]);
//       } else if (response.data.data.passwordConfirm !== undefined) {
//         toast.error(response.data.data.passwordConfirm[0]);
//       }

//       setIsLoading(false);
//     }
//   }


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black-100">
//       <ToastContainer />
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-4 text-center">Inscription</h1>
//         <form onSubmit={handleSubmit}>
//           <p className="text-center mb-6">Renseigner vos informations pour vous inscrire</p>

//           <Input
//             label={'Name'}
//             type={'text'}
//             reference={'name'}
//            placeholder={'Saisir le nom ici...'}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mb-4"
//           />
//           <Input
//             label={'Email'}
//             type={'email'}
//             reference={'email'}
//            placeholder={'Saisir l\'adresse e-mail ici...'}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mb-4"
//           />
//           <Input
//             label={'Mot de passe'}
//             type={'password'}
//             reference={'password'}
//            placeholder={'Saisir le mot de passe ici...'}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mb-4"
//           />
//           <Input
//             label={'Confirmer le mot de passe'}
//             type={'password'}
//             reference={'passwordConfirm'}
//            placeholder={'Confirmer le mot de passe ici...'}
//             value={passwordConfirm}
//             onChange={(e) => setpasswordConfirm(e.target.value)}
//             className="mb-6"
//           />

//           <div>
//             <Button
//               disabled={isLoading}
//               type="submit"
//               text={isLoading ? 'Chargement ...' : 'S’inscrire'}
//               className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//             />
//           </div>

//           <p className="mt-4 text-center">
//             Déjà un compte? <Link to={'/login'} className="text-blue-500 font-semibold">Connectez-vous</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );




// //   return (
// //     <div>
// //       <ToastContainer />
// //       <h1>Inscription</h1>
// //       <form onSubmit={handleSubmit}>
// //         <p>Renseigner vos informations  pour vous inscrire</p>
// //         {/* {error && <Alert text={errorText} /> } */}

// //         <Input
// //           label={'Name'}
// //           type={'text'}
// //           reference={'name'}
// //          placeholder={'Saisir le nom ici...'}
// //           value={name}
// //           onChange={(e) => {
// //             setName(e.target.value)
// //           }} />
// //         <Input
// //           label={'Email'}
// //           type={'email'}
// //           reference={'email'}
// //          placeholder={'Saisir l\'adresse e-mail ici...'}
// //           value={email}
// //           onChange={(e) => {
// //             setEmail(e.target.value)
// //           }} />

// //         <Input
// //           label={'Mot de passe'}
// //           type={'password'}
// //           reference={'password'}
// //          placeholder={'Saisir le mot de passe  ici...'}
// //           value={password}
// //           onChange={(e) => {
// //             setPassword(e.target.value)
// //           }} />

// //         <Input
// //           label={'Confirmer le mot de passe'}
// //           type={'password'}
// //           reference={'passwordConfirm'}
// //          placeholder={'Confirmer le mot de passe  ici...'}
// //           value={passwordConfirm}
// //           onChange={(e) => {
// //             setpasswordConfirm(e.target.value)
// //           }} />
// //         <br />

// //         <div>
// //           <Button
// //             disabled={isLoading}
// //             type={"submit"}
// //             text={isLoading ? "Chargement ..." : "Soumettre"}
// //           /><br />

// //         </div>
// //         Déjà un compte? <Link to={'/login'}>Se connectez</Link>
// //       </form>
// //     </div>
// //   )
// }


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

export default function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setpasswordConfirm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);

        localStorage.setItem('email', email);

        setIsLoading(true);
        const formData = new FormData();

        formData.set('name', name);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('passwordConfirm', passwordConfirm);
        // 'http://127.0.0.1:8000/api/v1.0.0/register',
        const response = await axios.post(

            'http://127.0.0.1:8000/api/v1.0.0/register',
            formData
        );

        if (response.data.success) {
            toast.success(response.data.message);
            setIsLoading(false);
            setTimeout(function () {
                navigate('/login');
            }, 3000);
        } else {
            console.log(response.data);

            if (response.data.data.name !== undefined) {
                toast.error(response.data.data.name[0]);
            } else if (response.data.data.email !== undefined) {
                toast.error(response.data.data.email[0]);
            } else if (response.data.data.password !== undefined) {
                toast.error(response.data.data.password[0]);
            } else if (response.data.data.passwordConfirm !== undefined) {
                toast.error(response.data.data.passwordConfirm[0]);
            }

            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <ToastContainer />
            <div className="bg-white dark:bg-gray-800 p-7 rounded-lg shadow-md w-full max-w-md h-[600px] ">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Inscription</h1>
                <form onSubmit={handleSubmit}>
                    <p className="text-center mb-6 text-gray-700 dark:text-gray-300">
                        Renseigner vos informations pour vous inscrire
                    </p>

                    <Input
                        label={'Name'}
                        type={'text'}
                        reference={'name'}
                       placeholder={'Saisir le nom ici...'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-2 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-whiteplaceholder-gray-500 dark:placeholder-gray-400"
                    />
                    <Input
                        label={'Email'}
                        type={'email'}
                        reference={'email'}
                       placeholder={'Saisir l\'adresse e-mail ici...'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-2 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-whiteplaceholder-gray-500 dark:placeholder-gray-400"
                    />
                    <Input
                        label={'Mot de passe'}
                        type={'password'}
                        reference={'password'}
                       placeholder={'Saisir le mot de passe ici...'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-3 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-whiteplaceholder-gray-500 dark:placeholder-gray-400"
                    />
                    <Input
                        label={'Confirmer le mot de passe'}
                        type={'password'}
                        reference={'passwordConfirm'}
                       placeholder={'Confirmer le mot de passe ici...'}
                        value={passwordConfirm}
                        onChange={(e) => setpasswordConfirm(e.target.value)}
                        className="mb-6 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-whiteplaceholder-gray-500 dark:placeholder-gray-400"
                    />

                    <div>
                        <Button
                            disabled={isLoading}
                            type="submit"
                            text={isLoading ? 'Chargement ...' : 'S’inscrire'}
                            className="w-full py-2  text-white rounded-lg hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 font-bold"
                        />
                    </div>

                    <p className="mt-4 flex justify-between text-gray-700 dark:text-gray-300">
                        Déjà un compte?{' '}
                        <Link to={'/login'} className="text-blue-500 dark:text-blue-400 font-semibold">
                            Connectez-vous
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

