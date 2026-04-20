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

const PrivacyPolicy = () => {
    const intl = useIntl()

    return (
        <Box data-testid="privacy-policy-page" layerStyle="page" py={8} px={{base: 4, md: 8}}>
            <Seo
                title={intl.formatMessage({
                    id: 'legal_page.title.privacy',
                    defaultMessage: 'Privacy Policy'
                })}
                description={intl.formatMessage({
                    id: 'legal_page.description.privacy',
                    defaultMessage: 'How this demo storefront handles information.'
                })}
            />
            <Stack spacing={6} maxW="3xl" mx="auto">
                <Heading as="h1" size="xl">
                    <FormattedMessage id="legal_page.title.privacy" defaultMessage="Privacy Policy" />
                </Heading>
                <Text color="gray.700">
                    <FormattedMessage
                        id="legal_page.privacy.intro"
                        defaultMessage="This is a demonstration storefront. It is not a live commerce site, and orders are not processed. The text below is sample copy for development and UX review only and does not constitute a binding legal agreement."
                    />
                </Text>
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
                            defaultMessage="For questions about privacy in this demo, contact your Salesforce team or storefront owner. Do not submit sensitive personal data to demo environments."
                        />
                    </Text>
                </Stack>
            </Stack>
        </Box>
    )
}

PrivacyPolicy.getTemplateName = () => 'privacy-policy'

export default PrivacyPolicy
