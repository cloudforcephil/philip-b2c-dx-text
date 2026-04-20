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

const TermsConditions = () => {
    const intl = useIntl()

    return (
        <Box data-testid="terms-conditions-page" layerStyle="page" py={8} px={{base: 4, md: 8}}>
            <Seo
                title={intl.formatMessage(
                    {
                        id: 'legal_page.seo.title.terms',
                        defaultMessage: 'Terms & Conditions — {storeName}'
                    },
                    {storeName: STORE_DISPLAY_NAME}
                )}
                description={intl.formatMessage(
                    {
                        id: 'legal_page.seo.description.terms',
                        defaultMessage: 'Terms & Conditions for the {storeName} online store.'
                    },
                    {storeName: STORE_DISPLAY_NAME}
                )}
            />
            <Stack spacing={8} maxW="3xl" mx="auto">
                <LegalPageStoreBrand />
                <Box>
                    <Heading as="h1" size="xl" mb={4}>
                        <FormattedMessage
                            id="legal_page.title.terms"
                            defaultMessage="Terms & Conditions"
                        />
                    </Heading>
                    <Text color="gray.700" fontSize="lg" fontWeight="medium">
                        <FormattedMessage
                            id="legal_page.terms.intro"
                            defaultMessage="These terms apply to your use of {storeName}. This is a demonstration storefront only: purchases are not fulfilled, payments are not processed, and nothing on this page is legal advice. Replace this content with terms drafted or reviewed by qualified counsel before production use."
                            values={{storeName: <strong>{STORE_DISPLAY_NAME}</strong>}}
                        />
                    </Text>
                </Box>
                <Stack spacing={3}>
                    <Heading as="h2" size="md">
                        <FormattedMessage
                            id="legal_page.terms.use.heading"
                            defaultMessage="Use of the site"
                        />
                    </Heading>
                    <Text color="gray.700">
                        <FormattedMessage
                            id="legal_page.terms.use.body"
                            defaultMessage="You would normally set expectations for acceptable use, account security, prohibited activities, and availability of the service. Align this language with your company policies and regional regulations."
                        />
                    </Text>
                </Stack>
                <Stack spacing={3}>
                    <Heading as="h2" size="md">
                        <FormattedMessage
                            id="legal_page.terms.products.heading"
                            defaultMessage="Products, pricing, and orders"
                        />
                    </Heading>
                    <Text color="gray.700">
                        <FormattedMessage
                            id="legal_page.terms.products.body"
                            defaultMessage="Production terms typically address product descriptions, inventory, pricing errors, taxes, shipping, returns, and limitation of liability. This demo catalog is illustrative only."
                        />
                    </Text>
                </Stack>
                <Stack spacing={3}>
                    <Heading as="h2" size="md">
                        <FormattedMessage
                            id="legal_page.terms.changes.heading"
                            defaultMessage="Changes"
                        />
                    </Heading>
                    <Text color="gray.700">
                        <FormattedMessage
                            id="legal_page.terms.changes.body"
                            defaultMessage="Merchants usually reserve the right to update terms and to indicate how and when notice is given. Implement versioning and publication dates as your legal team requires."
                        />
                    </Text>
                </Stack>
            </Stack>
        </Box>
    )
}

TermsConditions.getTemplateName = () => 'terms-conditions'

export default TermsConditions
