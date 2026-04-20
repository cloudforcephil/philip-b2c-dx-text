/*
 * Copyright (c) 2026, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {FormattedMessage, useIntl} from 'react-intl'
import {Box, Heading, Stack, Text} from '@salesforce/retail-react-app/app/components/shared/ui'
import Seo from '@salesforce/retail-react-app/app/components/seo'
import LegalPageStoreBrand from '../../components/legal-page-store-brand'
import {STORE_DISPLAY_NAME} from '../../constants'

const PrivacyPolicy = () => {
    const intl = useIntl()

    return (
        <Box data-testid="privacy-policy-page" layerStyle="page" py={8} px={{base: 4, md: 8}}>
            <Seo
                title={intl.formatMessage(
                    {
                        id: 'legal_page.seo.title.privacy',
                        defaultMessage: 'Privacy Policy — {storeName}'
                    },
                    {storeName: STORE_DISPLAY_NAME}
                )}
                description={intl.formatMessage(
                    {
                        id: 'legal_page.seo.description.privacy',
                        defaultMessage: 'Privacy Policy for the {storeName} online store.'
                    },
                    {storeName: STORE_DISPLAY_NAME}
                )}
            />
            <Stack spacing={8} maxW="3xl" mx="auto">
                <LegalPageStoreBrand />
                <Box>
                    <Heading as="h1" size="xl" mb={4}>
                        <FormattedMessage id="legal_page.title.privacy" defaultMessage="Privacy Policy" />
                    </Heading>
                    <Text color="gray.700" fontSize="lg" fontWeight="medium">
                        <FormattedMessage
                            id="legal_page.privacy.intro"
                            defaultMessage="This page describes privacy practices for {storeName}. This is a demonstration storefront: it is not a live commerce site, orders are not processed, and the text below is sample copy for development and UX review only. It does not constitute a binding legal agreement."
                            values={{storeName: <strong>{STORE_DISPLAY_NAME}</strong>}}
                        />
                    </Text>
                </Box>
                <Stack spacing={3}>
                    <Heading as="h2" size="md">
                        <FormattedMessage
                            id="legal_page.privacy.collection.heading"
                            defaultMessage="Information we may collect"
                        />
                    </Heading>
                    <Text color="gray.700">
                        <FormattedMessage
                            id="legal_page.privacy.collection.body"
                            defaultMessage="In a production deployment, your organization would describe categories such as account details, order and payment data, device and usage data, and marketing preferences. Replace this page with counsel-approved content before launch."
                        />
                    </Text>
                </Stack>
                <Stack spacing={3}>
                    <Heading as="h2" size="md">
                        <FormattedMessage
                            id="legal_page.privacy.use.heading"
                            defaultMessage="How information is used"
                        />
                    </Heading>
                    <Text color="gray.700">
                        <FormattedMessage
                            id="legal_page.privacy.use.body"
                            defaultMessage="Typical uses include fulfilling orders, fraud prevention, customer support, personalization, and—where permitted—marketing. Configure consent, retention, and subprocessors to match your privacy program."
                        />
                    </Text>
                </Stack>
                <Stack spacing={3}>
                    <Heading as="h2" size="md">
                        <FormattedMessage
                            id="legal_page.privacy.contact.heading"
                            defaultMessage="Contact"
                        />
                    </Heading>
                    <Text color="gray.700">
                        <FormattedMessage
                            id="legal_page.privacy.contact.body"
                            defaultMessage="For questions about privacy for {storeName}, contact your Salesforce team or storefront owner. Do not submit sensitive personal data to demo environments."
                            values={{storeName: STORE_DISPLAY_NAME}}
                        />
                    </Text>
                </Stack>
            </Stack>
        </Box>
    )
}

PrivacyPolicy.getTemplateName = () => 'privacy-policy'

export default PrivacyPolicy
