/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { BackTop, Layout, Button, Radio } from 'antd'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { BiUpArrowAlt } from 'react-icons/bi'

import DefaultNavbar from '../components/Navbar/DefaultNavbar'
import HeaderText from '../components/DisplayText/Header'
import StepTitle from '../components/Sections/StepTitle'
import ButtonSpin from '../components/Buttons/ButtonSpin'
import { AntInput, AntSelect } from '../components/CreateAntField'
import whiteListApi from '../hooks/whiteListApi'
import {
    DownArrowSVG,
    OctagonTwitterSVG,
    OctagonDiscordSVG,
} from '../assets/svg/icons'
import {
    FrameWhiteListTopSVG,
    FrameWhiteListBottomSVG,
} from '../assets/svg/frames'
import { Logo1SVG } from '../assets/svg/brand'
import utilitiesImages from '../assets/images/utilities'
import { returnValueByScreenWidth } from '../services/stylesServices'
import { validations } from '../services/yupValidations'
import useWindowSize from './../hooks/useWindowSize'

const { Content } = Layout

const initialValues = {
    sponsorId: '',
    wallet: '',
    network: '',
    referralId: '',
    walletById: '',
    discordId: '',
    email: '',
}

const referrerOptions = [
    { label: 'Verify by id', value: 'id' },
    { label: 'Verify by wallet', value: 'wallet' },
]

const Whitelist = () => {
    const { width } = useWindowSize()
    const { verifySponsorId, addUser, fetching, verified, setIdVerified } =
        whiteListApi()
    const [referralOpt, setReferralOpt] = useState('id')
    const [byId, setbyId] = useState(true)
    const [verifiedWallet, setVerifiedWallet] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [sended, sendEmail] = useState(false)
    const [createError, setCreateError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const schema = Yup.object({
        sponsorId: validations.refId,
        referralId: validations.refId,
        wallet: validations.wallet,
        walletById: validations.wallet,
        email: validations.mail,
    })

    const selectReferrerOpt = (e, resetForm) => {
        const option = e.target.value
        setReferralOpt(option)
        setbyId(!byId)
        setShowMessage(false)
        setIdVerified(false)
        resetForm()
    }

    const checkSponsor = async (sponsor) => {
        const verifySponsor = await verifySponsorId(sponsor)
        console.log(verifySponsor)
        setErrorMessage(verifySponsor.mensaje)
        setShowMessage(true)
        setTimeout(() => {
            setErrorMessage('')
            setShowMessage(false)
        }, 4000)
    }

    const handleWallet = (e) => {
        const count = e.target.value.length
        count >= 10 ? setVerifiedWallet(true) : setVerifiedWallet(false)
    }

    const nextStep = () => {
        const element = document.getElementById('step2')
        element.scrollIntoView({ behavior: 'smooth' })
    }

    const formSubmit = async (values, { resetForm }) => {
        console.log('click on submit')
        const created = await addUser(values, byId)
        if (created.error) {
            sendEmail(true)
            setCreateError(true)
            setErrorMessage(created.mensaje)
            setTimeout(() => {
                setCreateError(false)
                setErrorMessage('')
                sendEmail(false)
            }, 4000)
        } else {
            sendEmail(true)
            setbyId(true)
            setIdVerified(false)
            resetForm()
            setTimeout(() => {
                sendEmail(false)
            }, 4000)
        }
    }

    return (
        <Layout
            className="whitelist flex flex-col min-h-screen"
            style={{ minWidth: '425px' }}
        >
            <BackTop>
                <div className="h-12 w-12 lg:h-16 lg:w-16 rounded-full flex justify-center items-center bg-primary text-white">
                    <BiUpArrowAlt className="text-2xl" />
                </div>
            </BackTop>
            <DefaultNavbar />
            <Content className="bg-blue-5">
                <div className="bg-whitelistSlider bg-no-repeat bg-cover -mt-24 pb-1 xl:pb-32 lg:pb-40 relative">
                    <div className="max-w-1400px mx-auto pb-6 md:pb-10 lg:pb-14  h-screen">
                        <div className="css-generic h-full flex-col justify-center">
                            <div className="count-down bg-black-1 bg-opacity-50 py-8 relative">
                                <div className="text-white">
                                    <div>
                                        <HeaderText
                                            base="xl"
                                            md="3xl"
                                            lg="5xl"
                                            className="text-white lg:-mb-8"
                                        >
                                            THE WANDERERS
                                        </HeaderText>
                                        <HeaderText
                                            base="2xl"
                                            md="6xl"
                                            lg="8xl"
                                            className="text-white tracking-widest"
                                        >
                                            WHITELIST
                                        </HeaderText>
                                    </div>
                                    <div>
                                        <p className="font-saira-condensed text-7xl">
                                            <span className="font-russo-one text-9xl text-primary">
                                                250
                                            </span>{' '}
                                            PLACES
                                        </p>
                                    </div>
                                    <div className="text-center mb-5">
                                        <span className="text-2rem font-semibold">
                                            FOLLOW THE SIMPLE STEPS AND
                                            <br />
                                            BECOME PART TO THE EXCLUSIVE
                                            WHITELIST
                                        </span>
                                    </div>
                                    <DownArrowSVG
                                        width="60px"
                                        className="m-auto"
                                    />
                                    <div
                                        className="absolute right-0 left-0 -mx-3"
                                        style={{
                                            top: returnValueByScreenWidth(
                                                width,
                                                {
                                                    base: '-10px',
                                                    sm: '-16px',
                                                    md: '-18px',
                                                    xl: '-18px',
                                                }
                                            ),
                                        }}
                                    >
                                        <FrameWhiteListTopSVG width="100%" />
                                    </div>
                                    <div
                                        className="absolute right-0 left-0 -mx-3"
                                        style={{
                                            bottom: returnValueByScreenWidth(
                                                width,
                                                {
                                                    base: '-10px',
                                                    sm: '-16px',
                                                    md: '-18px',
                                                    xl: '-18px',
                                                }
                                            ),
                                        }}
                                    >
                                        <FrameWhiteListBottomSVG
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-whiteListBottom bg-bottom bg-no-repeat bg-contain bg-opacity-10">
                    <Formik
                        validationSchema={schema}
                        initialValues={initialValues}
                        onSubmit={formSubmit}
                    >
                        {({ isSubmitting, resetForm, values }) => (
                            <Form>
                                <div className="step-1 css-generic lg:flex-row py-20 pb-32 px-10px xl:px-0">
                                    <HeaderText
                                        base="4xl"
                                        className="block lg:hidden text-primary mb-5 md:mb-10 leading-tight tracking-widest mx-auto"
                                    >
                                        STEP 1
                                    </HeaderText>
                                    <StepTitle
                                        direction="right"
                                        className="hidden lg:flex w-1/5"
                                    >
                                        STEP 1
                                    </StepTitle>
                                    <div className="info text-center lg:text-left px-7 w-full lg:w-3/5">
                                        <div className="text-center mb-5">
                                            <Radio.Group
                                                options={referrerOptions}
                                                onChange={(e) => {
                                                    selectReferrerOpt(
                                                        e,
                                                        resetForm
                                                    )
                                                }}
                                                value={referralOpt}
                                                optionType="button"
                                                buttonStyle="solid"
                                            />
                                        </div>
                                        {byId ? (
                                            <>
                                                <p className="text-info text-5xl font-bold">
                                                    VERIFY YOUR REFERRER CALL
                                                    SIGN ID
                                                </p>
                                                <p className="text-blue-8 text-4xl">
                                                    Enter the Referral Call Sign
                                                    ID of the Wanderers that
                                                    referred you.
                                                </p>
                                                <div className="my-5">
                                                    <span className="text-primary text-4xl">
                                                        Enter The Referrer ID
                                                    </span>
                                                    <Field
                                                        component={AntInput}
                                                        name="sponsorId"
                                                        type="string"
                                                        placeholder="Enter The Referrer ID"
                                                        className="bg-blue-9 border-none text-3xl text-gray-300 placeholder-blue-10 py-3"
                                                    />
                                                </div>
                                                <p className="text-blue-8 text-3xl">
                                                    Their ID is needed for you
                                                    to access this exclusive
                                                    whitelist.
                                                </p>
                                                <div className="text-center lg:text-right mt-10">
                                                    <ButtonSpin
                                                        className="btn-whitelist bg-transparent h-full px-20 border-4	border-primary rounded-full hover:bg-transparent hover:border-primary focus:bg-transparent focus:border-primary"
                                                        disabled={
                                                            values.sponsorId
                                                                .length < 4
                                                        }
                                                        onClick={async () => {
                                                            if (verified) {
                                                                nextStep()
                                                            } else {
                                                                checkSponsor(
                                                                    values.sponsorId
                                                                )
                                                            }
                                                        }}
                                                        loading={fetching}
                                                    >
                                                        {verified ? (
                                                            <span className="text-3xl text-primary font-medium">
                                                                NEXT
                                                            </span>
                                                        ) : (
                                                            <span className="text-3xl text-primary font-medium">
                                                                VERIFY
                                                            </span>
                                                        )}
                                                    </ButtonSpin>
                                                    {showMessage && (
                                                        <div className="text-white text-2xl mt-4">
                                                            {verified ? (
                                                                <div>
                                                                    <span>
                                                                        Successfully
                                                                        verified
                                                                    </span>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <span>
                                                                        {
                                                                            errorMessage
                                                                        }
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        ) : (
                                            <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                                                <div className="info w-full px-10 lg:px-0 text-center lg:text-left mb-20 lg:mb-0">
                                                    <p className="text-info text-5xl font-bold">
                                                        CONNECT YOUR WALLET
                                                    </p>
                                                    <div className="my-5">
                                                        <span className="text-primary text-4xl">
                                                            Enter your wallet
                                                            address
                                                        </span>
                                                        <Field
                                                            component={AntInput}
                                                            name="wallet"
                                                            type="string"
                                                            placeholder="Wallet address"
                                                            className="bg-blue-9 border-none text-3xl text-gray-300 placeholder-blue-10 py-3"
                                                            onChange={
                                                                handleWallet
                                                            }
                                                        />
                                                    </div>
                                                    <div className="my-5">
                                                        <p className="text-primary text-4xl">
                                                            Select your network
                                                        </p>
                                                        <Field
                                                            component={
                                                                AntSelect
                                                            }
                                                            name="network"
                                                            className="bg-blue-9 border-none text-3xl text-gray-300 placeholder-blue-10"
                                                            selectOptions={[
                                                                'Ethereum',
                                                                'Solana',
                                                                'Polygon',
                                                            ]}
                                                        />
                                                    </div>
                                                    <div className="mt-10">
                                                        <Button
                                                            className="bg-transparent h-full px-20 border-4	border-primary rounded-full hover:bg-transparent hover:border-primary focus:bg-transparent focus:border-primary"
                                                            onClick={() =>
                                                                nextStep()
                                                            }
                                                            disabled={
                                                                !verifiedWallet ||
                                                                values.network
                                                                    .length <= 0
                                                            }
                                                        >
                                                            <span className="text-3xl text-primary font-medium">
                                                                NEXT
                                                            </span>
                                                        </Button>
                                                    </div>
                                                </div>
                                                <img
                                                    src={utilitiesImages.wallet}
                                                    width="50%"
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="hidden lg:block w-1/5"></div>
                                </div>
                                <div
                                    id="step2"
                                    className="step-2 css-generic lg:flex-row pb-32 px-10px xl:px-0"
                                >
                                    <HeaderText
                                        base="4xl"
                                        className="block lg:hidden text-primary mb-5 md:mb-10 leading-tight tracking-widest mx-auto"
                                    >
                                        STEP 2
                                    </HeaderText>
                                    <div className="hidden lg:block w-1/5"></div>
                                    <div className="info text-center lg:text-right px-7 w-full lg:w-3/5">
                                        <p className="text-info text-5xl font-bold">
                                            CREATE YOUR REFERRAL ID VERIFICATION
                                        </p>
                                        <p className="text-blue-8 text-4xl">
                                            Create your Referral ID
                                        </p>
                                        <div className="my-5">
                                            <span className="text-primary text-4xl">
                                                Create Your Referral ID
                                            </span>
                                            <Field
                                                component={AntInput}
                                                name="referralId"
                                                type="string"
                                                placeholder="Ex: tom123"
                                                className="bg-blue-9 border-none text-left lg:text-right text-3xl text-gray-300 placeholder-blue-10 py-3"
                                                disabled={
                                                    (byId && !verified) ||
                                                    (!byId && !verifiedWallet)
                                                }
                                            />
                                            <p className="text-blue-8 text-2xl">
                                                Minimum 4 Characters, Max 12
                                                Characters, only letters and
                                                numbers allowed for your ID.
                                            </p>
                                        </div>
                                        {byId && (
                                            <div className="my-5">
                                                <span className="text-primary text-4xl">
                                                    Enter your wallet address
                                                </span>
                                                <Field
                                                    component={AntInput}
                                                    name="walletById"
                                                    type="string"
                                                    placeholder="Wallet address"
                                                    className="bg-blue-9 border-none text-left lg:text-right text-3xl text-gray-300 placeholder-blue-10 py-3"
                                                    disabled={
                                                        (byId && !verified) ||
                                                        (!byId &&
                                                            !verifiedWallet)
                                                    }
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <StepTitle
                                        direction="left"
                                        className="hidden lg:flex w-1/5"
                                    >
                                        STEP 2
                                    </StepTitle>
                                </div>
                                <div className="step-3 css-generic lg:flex-row pb-32 px-10px xl:px-0">
                                    <HeaderText
                                        base="4xl"
                                        className="block lg:hidden text-primary mb-5 md:mb-10 leading-tight tracking-widest mx-auto"
                                    >
                                        STEP 3
                                    </HeaderText>
                                    <StepTitle
                                        direction="right"
                                        className="hidden lg:flex w-1/5"
                                    >
                                        STEP 3
                                    </StepTitle>
                                    <div className="info px-7 w-full lg:w-3/5 text-center lg:text-left">
                                        <p className="text-info text-5xl font-bold">
                                            TWITTER AND DISCORD VERIFICATION.
                                        </p>
                                        <div className="flex flex-row justify-around my-10">
                                            <div className="text-center">
                                                <OctagonTwitterSVG
                                                    className="mx-auto mb-5"
                                                    width="50%"
                                                />
                                                <span className="text-primary text-4xl">
                                                    Follow our twitter
                                                </span>
                                            </div>
                                            <div className="text-center">
                                                <OctagonDiscordSVG
                                                    className="mx-auto mb-5"
                                                    width="50%"
                                                />
                                                <span className="text-primary text-4xl">
                                                    Join our discord
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-center lg:text-justify">
                                            <p className="text-blue-8 text-4xl">
                                                Find your Discord ID through
                                                account options (on PC) or use
                                                the profile button (on mobile).
                                                Your ID must include the # and
                                                numbers included.
                                            </p>
                                        </div>
                                        <div className="my-5">
                                            <span className="text-primary text-4xl">
                                                Your Discord ID
                                            </span>
                                            <Field
                                                component={AntInput}
                                                name="discordId"
                                                type="string"
                                                placeholder="Ex: Tom#5019"
                                                className="bg-blue-9 border-none text-3xl text-gray-300 placeholder-blue-10 py-3"
                                                disabled={
                                                    (byId && !verified) ||
                                                    (!byId && !verifiedWallet)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden lg:block w-1/5"></div>
                                </div>
                                <div className="step-4 css-generic lg:flex-row pb-32 px-10px xl:px-0">
                                    <HeaderText
                                        base="4xl"
                                        className="block lg:hidden text-primary mb-5 md:mb-10 leading-tight tracking-widest mx-auto"
                                    >
                                        STEP 4
                                    </HeaderText>
                                    <div className="hidden lg:block w-1/5"></div>
                                    <div className="info text-center lg:text-right px-7 w-full lg:w-3/5">
                                        <p className="text-info text-5xl font-bold">
                                            EMAIL ADDRESS
                                        </p>
                                        {/* <p className="text-blue-8 text-4xl">
                                            *optional: for notifications or
                                            newsletters, etc.
                                        </p> */}
                                        <div className="my-5">
                                            <span className="text-primary text-4xl">
                                                Your email
                                            </span>
                                            <Field
                                                component={AntInput}
                                                name="email"
                                                type="string"
                                                placeholder="Ex: tom@example.com"
                                                className="bg-blue-9 border-none text-left lg:text-right text-3xl text-gray-300 placeholder-blue-10 py-3"
                                                disabled={
                                                    (byId && !verified) ||
                                                    (!byId && !verifiedWallet)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <StepTitle className="hidden lg:flex w-1/5">
                                        STEP 4
                                    </StepTitle>
                                </div>
                                <div className="step-5 css-generic lg:flex-row pb-32 px-10px xl:px-0">
                                    <HeaderText
                                        base="4xl"
                                        className="block lg:hidden text-primary mb-5 md:mb-10 leading-tight tracking-widest mx-auto"
                                    >
                                        STEP 5
                                    </HeaderText>
                                    <StepTitle
                                        direction="right"
                                        className="hidden lg:flex w-1/5"
                                    >
                                        STEP 5
                                    </StepTitle>
                                    <div className="info text-center lg:px-7 w-full lg:w-3/5">
                                        <p className="text-info text-5xl font-bold">
                                            GOOGLE RECAPTCHA VERIFICATION
                                        </p>
                                        <div className="mt-20">
                                            {byId ? (
                                                <ButtonSpin
                                                    type="submit"
                                                    className="btn-whitelist bg-transparent h-full w-4/5 lg:w-2/5 border-4 border-primary rounded-full hover:bg-transparent hover:border-primary focus:bg-transparent focus:border-primary"
                                                    disabled={
                                                        values.sponsorId
                                                            .length < 4 ||
                                                        values.referralId
                                                            .length < 4 ||
                                                        values.walletById
                                                            .length < 10 ||
                                                        values.discordId
                                                            .length === 0 ||
                                                        values.email.length ===
                                                            0
                                                    }
                                                    loading={fetching}
                                                >
                                                    <span className="text-4xl text-primary font-medium">
                                                        SIGN UP
                                                    </span>
                                                </ButtonSpin>
                                            ) : (
                                                <ButtonSpin
                                                    type="submit"
                                                    className="btn-whitelist bg-transparent h-full w-4/5 lg:w-2/5 border-4 border-primary rounded-full hover:bg-transparent hover:border-primary focus:bg-transparent focus:border-primary"
                                                    disabled={
                                                        values.wallet.length <
                                                            10 ||
                                                        values.network
                                                            .length === 0 ||
                                                        values.referralId
                                                            .length < 4 ||
                                                        values.discordId
                                                            .length === 0 ||
                                                        values.email.length ===
                                                            0
                                                    }
                                                    loading={fetching}
                                                >
                                                    <span className="text-4xl text-primary font-medium">
                                                        SIGN UP
                                                    </span>
                                                </ButtonSpin>
                                            )}
                                        </div>
                                        {sended && (
                                            <>
                                                {createError ? (
                                                    <div className="mt-10 text-white">
                                                        <h4 className="text-3xl text-white">
                                                            WARNING:
                                                        </h4>
                                                        <span className="text-3xl">
                                                            {errorMessage}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="mt-10 text-white">
                                                        <span className="text-3xl">
                                                            Thank you! we will
                                                            review it and send
                                                            you an email
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                    <div className="hidden lg:block w-1/5"></div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <footer className="bg-blue-5 py-12 hidden lg:block">
                    <div className="max-w-1400px mx-auto pb-6 md:pb-10 lg:pb-14">
                        <div className="css-generic flex-row justify-between">
                            <div className="css-generic flex-grow max-h-full w-6/12 ">
                                <div className="css-generic items-center w-64">
                                    <div className="css-generic w-full mb-3 px-8">
                                        <Logo1SVG width="100%" />
                                    </div>
                                    <HeaderText
                                        base="2xl"
                                        className="text-blue-4 font-semibold font-saira-condensed"
                                    >
                                        9,000 unique Wanderers
                                    </HeaderText>
                                </div>
                            </div>
                            <div className="css-generic flex-grow max-h-full w-6/12 items-center">
                                <div className="css-generic">
                                    <h5 className="text-capitalize text-xl text-blue-4 tracking-wide font-bold mb-2">
                                        Home
                                    </h5>
                                    <ul className="list-none font-saira-condensed font-semibold">
                                        <li className="mb-2">
                                            <a
                                                className="text-blue-4 hover:text-gray-400"
                                                href="#"
                                            >
                                                Terms of service
                                            </a>
                                        </li>
                                        <li className=" mb-2">
                                            <a
                                                className="text-blue-4 hover:text-gray-400"
                                                href="#"
                                            >
                                                Smart Contract
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Content>
        </Layout>
    )
}

export default Whitelist
