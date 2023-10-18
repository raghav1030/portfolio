'use client'
import { Octokit } from "octokit";
import { createContext, useContext, useEffect, useState } from "react";



interface apiDataProviderProps {
    children: React.ReactNode;
}

interface apiDataContext {
    contributions: string[] | null,
    userIpAddress: string
}

const ApiDataContext = createContext<apiDataContext | null>(null);

export const useApiData = () => useContext(ApiDataContext);

export const ApiDataProvider = ({ children }: apiDataProviderProps) => {

    const [contributions, setContributions] = useState([] as string[])
    const [userIpAddress, setuserIpAddress] = useState('');


    const getIpAddress = async () => {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            setuserIpAddress(data.ip);
        } catch (error) {
            console.error('Error fetching IP address:', error);
        }
    };

    useEffect(() => {
        getIpAddress();
    }, [])



    useEffect(() => {

        const callApi = async () => {

            const octokit = new Octokit({
                auth: process.env.GITHUB_ACCESS_TOKEN,
            });

            try {
                const response = await octokit.request('GET /users/raghav1030/events', {
                    username: 'raghav1030',
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                })
                if (response.status === 200)
                    setContributions(response.data)

            } catch (error) {
                console.log(error)
            }


        }


        callApi();
    }, [])

    return (
        <ApiDataContext.Provider value={{ contributions, userIpAddress }}>
            {children}
        </ApiDataContext.Provider>
    )
}

export default ApiDataContext;