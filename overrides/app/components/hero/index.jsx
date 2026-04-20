/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Flex,
    Heading,
    Image as Img,
    Stack,
    Text
} from '@salesforce/retail-react-app/app/components/shared/ui'
import Image from '@salesforce/retail-react-app/app/components/image'

const Hero = ({title, eyebrow, img, actions, ...props}) => {
    const imageProps = {
        fit: 'cover', // The Chakra `Image`'s non-standard replacement for `objectFit`
        align: 'center', // The Chakra `Image`'s non-standard replacement for `objectPosition`
        width: '100%',
        height: '100%',
        ...img
    }

    return (
        <Box
            marginBottom={{base: 0, md: 10}}
            height={{lg: 'xl'}}
            position={{lg: 'relative'}}
            {...props}
        >
            <Stack
                align={'center'}
                spacing={{base: 8, md: 10}}
                paddingTop={{base: 12, md: 10}}
                paddingBottom={{base: 6, md: 10}}
                direction={{base: 'column', lg: 'row'}}
            >
                <Stack flex={1} spacing={{base: 5, md: 8}}>
                    <Stack spacing={3}>
                        {eyebrow ? (
                            <Text
                                as="p"
                                fontSize="sm"
                                fontWeight="bold"
                                letterSpacing="0.25em"
                                textTransform="uppercase"
                                color="gray.600"
                                maxWidth={{base: '75%', md: '50%', lg: 'md'}}
                            >
                                {eyebrow}
                            </Text>
                        ) : null}
                        <Heading
                            as="h1"
                            fontSize={{base: '4xl', md: '5xl', lg: '6xl'}}
                            maxWidth={{base: '75%', md: '50%', lg: 'md'}}
                        >
                            {title}
                        </Heading>
                    </Stack>

                    {actions && <Box width={{base: 'full', lg: 'inherit'}}>{actions}</Box>}
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    width={'full'}
                    paddingTop={{base: 4, lg: 0}}
                >
                    <Box position={'relative'} width={{base: 'full', md: '80%', lg: 'full'}}>
                        <Image as={Img} {...imageProps} />
                    </Box>
                </Flex>
            </Stack>
        </Box>
    )
}

Hero.displayName = 'Hero'

Hero.propTypes = {
    img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    eyebrow: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    actions: PropTypes.element
}

export default Hero
