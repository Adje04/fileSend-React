import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


export default function Login() {

const baseURL = `http://127.0.0.1:8000/api/v1.0.0/`
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };



    const handleSubmit = async (e) => {

        e.preventDefault()
        const formData = new FormData();
        formData.set('email', email)
        formData.set('password', password)
        setIsLoading(true)



        try {

            const response = await axios.post(`${baseURL}login`, formData)

            const token = response.data.data[0].token

            localStorage.setItem("token", token);

            if (response.data.success) {

                toast.success(response.data.message)
                setIsLoading(false)
                setTimeout(function () {
                    navigate('/dashboard')

                }, 3000)

            } else {
                toast.error("email ou mot de passe incorrect");
                console.log(response.data)
                setIsLoading(false)
            }

        } catch (e) {

            console.error(e); 
            toast.error("une erreur est survenue");
            setIsLoading(false);

        }
    }
    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <ToastContainer stacked />
            <div className="bg-white dark:bg-gray-800 p-7 rounded-lg shadow-md w-full max-w-md" >
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white" >Connexion</h1>
                <form onSubmit={handleSubmit} >
                    <p className="text-center mb-6 text-gray-700 dark:text-gray-300" >Renseigner vos informations de connexion pour vous connecter</p>

                    <Input
                        label={'Email'}
                        type={'email'}
                        reference={'email'}
                        placeholder={'Saisir l\'adresse e-mail ici...'}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className="mb-3 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />

                    <Input
                        label={'Mot de passe'}
                        type={'password'}
                        reference={'password'}
                        placeholder={'Saisir l\'adresse e-mail ici...'}
                        value={password}
                        onChange={onPasswordChange}
                        className="mb-3 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
                    <br />

                    <div>
                        <Button
                            disabled={isLoading}
                            type="submit"
                            text={isLoading ? 'Chargement ...' : 'Se connecter'}
                            className="w-full py-2  text-white rounded-lg hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 font-bold"
                        />

                    </div>
                    <p className="mt-4 flex justify-between text-gray-700 dark:text-gray-300">
                        Déjà un compte?{' '}
                        <Link to={'/'} className="text-blue-500 dark:text-blue-400 font-semibold">
                            s'inscrire
                        </Link>
                    </p>
                </form>
            </div>
        </div>

    )
}









