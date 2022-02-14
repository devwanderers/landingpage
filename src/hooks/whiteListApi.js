/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react'
import axiosInstance from '../store/services/axiosConfig'

const whiteListApi = () => {
    const [fetching, setFetching] = useState(false)
    const [verified, setIdVerified] = useState(false)

    const verifySponsorId = async (id) => {
        console.log('verifyCode', id)
        setFetching(true)
        try {
            const verify = await axiosInstance
                .get(`http://localhost:9000/api/records/verify/${id}`)
                .then((res) => res.data)
            setFetching(false)
            setIdVerified(true)
            return verify
        } catch (error) {
            setFetching(false)
            setIdVerified(false)
            return error
        }
    }

    const addUser = async (data, byId) => {
        console.log(data)
        setFetching(true)
        const wallet = byId ? data.walletById : data.wallet
        const user = {
            byId: byId,
            sponsorId: data.sponsorId,
            wallet: wallet,
            network: data.network,
            referralId: data.referralId,
            discordId: data.discordId,
            email: data.email,
        }
        console.log(user)
        try {
            const created = await axiosInstance
                .post(`http://localhost:9000/api/records/add`, user)
                .then((res) => res.data)
            setFetching(false)
            setIdVerified(true)
            console.log({ created })
            return created
        } catch (error) {
            setFetching(false)
            setIdVerified(false)
            return error
        }
    }

    return {
        verifySponsorId,
        addUser,
        fetching,
        verified,
        setIdVerified,
    }
}

export default whiteListApi
