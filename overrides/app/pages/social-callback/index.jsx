/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useEffect, useState} from 'react'
import {FormattedMessage, useIntl} from 'react-intl'
import {
    Alert,
    Box,
    Container,
    Stack,
    Text,
    Spinner
} from '@salesforce/retail-react-app/app/components/shared/ui'
import {AlertIcon} from '@salesforce/retail-react-app/app/components/icons'
import useNavigation from '@salesforce/retail-react-app/app/hooks/use-navigation'
import {
    useAuthHelper,
    AuthHelpers,
    useShopperBasketsV2Mutation as useShopperBasketsMutation
} from '@salesforce/commerce-sdk-react'
import {useLocation} from 'react-router-dom'
import {useCurrentCustomer} from '@salesforce/retail-react-app/app/hooks/use-current-customer'
import {getConfig} from '@salesforce/pwa-kit-runtime/utils/ssr-config'
import {useAppOrigin} from '@salesforce/retail-react-app/app/hooks/use-app-origin'
import {
    getSessionJSONItem,
    clearSessionJSONItem,
    buildRedirectURI
} from '@salesforce/retail-react-app/app/utils/utils'
import {API_ERROR_MESSAGE} from '@salesforce/retail-react-app/app/constants'

/**
 * OAuth redirect target after SLAS / IdP login. Exchanges `code` (+ optional `usid`) for tokens via commerce-sdk-react.
 * Config: app.login.social.redirectURI must match this path (default `/social-callback`).
 */
const SocialCallback = () => {
    const {formatMessage} = useIntl()
    const navigate = useNavigation()
    const {search} = useLocation()
    const loginIDPUser = useAuthHelper(AuthHelpers.LoginIDPUser)
    const {data: customer} = useCurrentCustomer()
    const appOrigin = useAppOrigin()
    const redirectPath = getConfig().app.login?.social?.redirectURI || ''
    const redirectURI = buildRedirectURI(appOrigin, redirectPath)

    const locatedFrom = getSessionJSONItem('returnToPage')
    const mergeBasket = useShopperBasketsMutation('mergeBasket')
    const [error, setError] = useState('')

    // Exchange authorization code for SLAS tokens (runs once when `code` is present).
    useEffect(() => {
        const params = new URLSearchParams(search)
        const code = params.get('code')
        if (!code) {
            return
        }
        const usid = params.get('usid')

        const exchange = async () => {
            try {
                await loginIDPUser.mutateAsync({
                    code,
                    redirectURI,
                    ...(usid ? {usid} : {})
                })
            } catch {
                setError(formatMessage(API_ERROR_MESSAGE))
            }
        }
        exchange()
        // eslint-disable-next-line react-hooks/exhaustive-deps -- single exchange on callback load
    }, [])

    useEffect(() => {
        if (!customer?.isRegistered) {
            return
        }
        clearSessionJSONItem('returnToPage')
        mergeBasket.mutate({
            headers: {
                'Content-Type': 'application/json'
            },
            parameters: {
                createDestinationBasket: true
            }
        })
        if (locatedFrom) {
            navigate(locatedFrom)
        } else {
            navigate('/account')
        }
    }, [customer?.isRegistered])

    return (
        <Box data-testid="social-callback-page" bg="gray.50" py={[8, 16]}>
            <Container
                paddingTop={16}
                width={['100%', '407px']}
                bg="white"
                paddingBottom={14}
                marginTop={8}
                marginBottom={8}
                borderRadius="base"
            >
                {error && (
                    <Alert status="error" marginBottom={8}>
                        <AlertIcon color="red.500" boxSize={4} />
                        <Text fontSize="sm" ml={3}>
                            {error}
                        </Text>
                    </Alert>
                )}
                <Stack justify="center" align="center" spacing={8} marginBottom={8}>
                    <Spinner opacity={0.85} color="blue.600" animationDuration="0.8s" size="lg" />
                    <Text align="center" fontSize="xl" fontWeight="semibold">
                        <FormattedMessage
                            id="social_callback.message.signing_in"
                            defaultMessage="Signing you in..."
                        />
                    </Text>
                    <Text align="center" fontSize="m">
                        <FormattedMessage
                            id="social_login_redirect.message.redirect_link"
                            defaultMessage="If you are not automatically redirected, click <link>this link</link> to proceed."
                            values={{
                                link: (chunks) => (
                                    <a
                                        href="/account"
                                        style={{color: '#0176D3', textDecoration: 'underline'}}
                                    >
                                        {chunks}
                                    </a>
                                )
                            }}
                        />
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

SocialCallback.getTemplateName = () => 'social-callback'

export default SocialCallback
