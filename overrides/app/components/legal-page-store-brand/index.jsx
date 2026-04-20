/*
 * Copyright (c) 2026, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Box, Text} from '@salesforce/retail-react-app/app/components/shared/ui'
import {STORE_DISPLAY_NAME} from '../../constants'

/**
 * Prominent storefront identity for legal pages (OAuth / consent-screen branding checks).
 */
const LegalPageStoreBrand = () => {
    const regionLabel = `${STORE_DISPLAY_NAME} storefront`

    return (
        <Box
            role="region"
            aria-label={regionLabel}
            borderWidth="2px"
            borderColor="blue.400"
            bg="blue.50"
            py={{base: 6, md: 10}}
            px={{base: 4, md: 8}}
            borderRadius="lg"
            textAlign="center"
            boxShadow="md"
        >
            <Text
                fontSize="sm"
                fontWeight="bold"
                color="blue.800"
                textTransform="uppercase"
                letterSpacing="0.2em"
                mb={3}
            >
                <FormattedMessage
                    id="legal_page.brand.eyebrow"
                    defaultMessage="Online store"
                />
            </Text>
            <Text
                as="p"
                fontSize={{base: '2.5rem', md: '3.5rem'}}
                fontWeight="extrabold"
                color="blue.900"
                lineHeight="shorter"
                wordBreak="break-word"
            >
                {STORE_DISPLAY_NAME}
            </Text>
            <Text mt={4} fontSize={{base: 'md', md: 'lg'}} fontWeight="semibold" color="gray.700" maxW="2xl" mx="auto">
                <FormattedMessage
                    id="legal_page.brand.confirmation"
                    defaultMessage="You are reading a legal page for the online store named {storeName}."
                    values={{storeName: STORE_DISPLAY_NAME}}
                />
            </Text>
        </Box>
    )
}

export default LegalPageStoreBrand
